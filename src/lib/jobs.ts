/**
 * MongoDB-backed job queue for integration retries.
 *
 * Collection: `integration_jobs`
 *
 * Jobs are created when downstream integrations (Google Sheets, email)
 * fail during form submission. A cron endpoint processes the queue.
 *
 * Server-only module — do not import from client components.
 */

import { ObjectId, type WithId } from "mongodb";
import { getCollection } from "@/lib/mongodb";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type JobStatus =
  | "pending"
  | "processing"
  | "completed"
  | "failed"
  | "permanently_failed";

export type JobType = "google_sheets_sync" | "confirmation_email" | "admin_email";

export interface IntegrationJob {
  jobType: JobType;
  entityId: string;
  referenceNumber: string;
  status: JobStatus;
  attempts: number;
  maxAttempts: number;
  nextAttempt: Date;
  lockedAt: Date | null;
  lockExpiry: Date | null;
  completedAt: Date | null;
  lastErrorCategory: string | null;
  payload: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

export interface JobStats {
  pending: number;
  processing: number;
  completed: number;
  failed: number;
  permanently_failed: number;
  total: number;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const COLLECTION_NAME = "integration_jobs";
const DEFAULT_MAX_ATTEMPTS = 3;
/** Lock duration in ms — prevents duplicate processing. */
const LOCK_DURATION_MS = 5 * 60 * 1000; // 5 minutes

/** Exponential backoff base in ms. attempt=1 -> 60s, attempt=2 -> 240s, attempt=3 -> 540s */
function backoffMs(attempt: number): number {
  return attempt * attempt * 60_000;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function jobsCollection() {
  return getCollection<IntegrationJob>(COLLECTION_NAME);
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Create a new integration job.
 */
export async function createJob(data: {
  jobType: JobType;
  entityId: string;
  referenceNumber: string;
  payload?: Record<string, unknown>;
  maxAttempts?: number;
}): Promise<string> {
  const col = await jobsCollection();
  const now = new Date();

  const job: IntegrationJob = {
    jobType: data.jobType,
    entityId: data.entityId,
    referenceNumber: data.referenceNumber,
    status: "pending",
    attempts: 0,
    maxAttempts: data.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
    nextAttempt: now,
    lockedAt: null,
    lockExpiry: null,
    completedAt: null,
    lastErrorCategory: null,
    payload: data.payload ?? {},
    createdAt: now,
    updatedAt: now,
  };

  const result = await col.insertOne(job);
  return result.insertedId.toHexString();
}

/**
 * Find and atomically lock the next pending job.
 *
 * Also recovers stale locks (lock expired but status still "processing").
 */
export async function acquireJob(): Promise<WithId<IntegrationJob> | null> {
  const col = await jobsCollection();
  const now = new Date();

  const result = await col.findOneAndUpdate(
    {
      $or: [
        // Normal pending job whose next attempt time has arrived
        { status: "pending", nextAttempt: { $lte: now } },
        // Stale lock recovery: was processing but lock has expired
        { status: "processing", lockExpiry: { $lte: now } },
      ],
    },
    {
      $set: {
        status: "processing" as JobStatus,
        lockedAt: now,
        lockExpiry: new Date(now.getTime() + LOCK_DURATION_MS),
        updatedAt: now,
      },
      $inc: { attempts: 1 },
    },
    {
      sort: { nextAttempt: 1 },
      returnDocument: "after",
    },
  );

  return result ?? null;
}

/**
 * Mark a job as completed.
 */
export async function completeJob(jobId: string): Promise<void> {
  const col = await jobsCollection();
  const now = new Date();

  await col.updateOne(
    { _id: new ObjectId(jobId) },
    {
      $set: {
        status: "completed" as JobStatus,
        lockedAt: null,
        lockExpiry: null,
        completedAt: now,
        updatedAt: now,
      },
    },
  );
}

/**
 * Mark a job as failed.
 *
 * Increments the backoff timer. If max attempts reached, marks as
 * permanently_failed.
 */
export async function failJob(
  jobId: string,
  errorCategory: string,
): Promise<void> {
  const col = await jobsCollection();
  const now = new Date();

  // Read the current state to check attempts
  const job = await col.findOne({ _id: new ObjectId(jobId) });
  if (!job) return;

  const isPermanent = job.attempts >= job.maxAttempts;

  if (isPermanent) {
    await col.updateOne(
      { _id: new ObjectId(jobId) },
      {
        $set: {
          status: "permanently_failed" as JobStatus,
          lastErrorCategory: errorCategory,
          lockedAt: null,
          lockExpiry: null,
          updatedAt: now,
        },
      },
    );
  } else {
    await col.updateOne(
      { _id: new ObjectId(jobId) },
      {
        $set: {
          status: "pending" as JobStatus,
          lastErrorCategory: errorCategory,
          lockedAt: null,
          lockExpiry: null,
          nextAttempt: new Date(now.getTime() + backoffMs(job.attempts)),
          updatedAt: now,
        },
      },
    );
  }
}

/**
 * Get aggregate job counts by status.
 */
export async function getJobStats(): Promise<JobStats> {
  const col = await jobsCollection();

  const pipeline = [
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ];

  const results = await col.aggregate<{ _id: JobStatus; count: number }>(pipeline).toArray();

  const stats: JobStats = {
    pending: 0,
    processing: 0,
    completed: 0,
    failed: 0,
    permanently_failed: 0,
    total: 0,
  };

  for (const row of results) {
    if (row._id in stats) {
      stats[row._id] = row.count;
    }
    stats.total += row.count;
  }

  return stats;
}

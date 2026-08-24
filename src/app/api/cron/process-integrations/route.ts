import { NextResponse, type NextRequest } from "next/server";
import { getOptionalEnv, isProduction } from "@/lib/env";
import { checkRateLimit, CRON_RATE_LIMIT } from "@/lib/rate-limit";
import { acquireJob, completeJob, failJob, getJobStats, type IntegrationJob } from "@/lib/jobs";
import { appendToSheet } from "@/lib/google-sheets";
import { sendConfirmationEmail, sendAdminNotification } from "@/lib/email";
import { getCollection } from "@/lib/mongodb";

const MAX_JOBS_PER_RUN = 10;

async function processJob(job: IntegrationJob & { _id: { toHexString(): string } }): Promise<void> {
  const jobId = job._id.toHexString();
  const { jobType, payload, referenceNumber } = job;

  try {
    switch (jobType) {
      case "google_sheets_sync": {
        const { sheetName, formType } = payload as { sheetName: string; formType: string };
        const col = await getCollection(payload.collection as string || "submissions");
        const doc = await col.findOne({ referenceNumber });
        if (!doc) {
          await completeJob(jobId);
          return;
        }
        const result = await appendToSheet(sheetName, [referenceNumber, `Retry for ${formType}`]);
        if (result.status === "appended" || result.status === "duplicate") {
          await completeJob(jobId);
        } else {
          await failJob(jobId, result.message ?? "sheets_error");
        }
        break;
      }

      case "admin_email": {
        const { formType, adminData } = payload as {
          formType: string;
          adminData: Parameters<typeof sendAdminNotification>[1];
        };
        const result = await sendAdminNotification(
          formType as Parameters<typeof sendAdminNotification>[0],
          adminData,
        );
        if (result.status === "sent") {
          await completeJob(jobId);
        } else {
          await failJob(jobId, result.errorMessage ?? "email_error");
        }
        break;
      }

      case "confirmation_email": {
        const { to, confirmData } = payload as {
          to: string;
          confirmData: Parameters<typeof sendConfirmationEmail>[1];
        };
        const result = await sendConfirmationEmail(to, confirmData);
        if (result.status === "sent") {
          await completeJob(jobId);
        } else {
          await failJob(jobId, result.errorMessage ?? "email_error");
        }
        break;
      }

      default:
        await failJob(jobId, `unknown_job_type: ${jobType}`);
    }
  } catch (error) {
    const msg = error instanceof Error ? error.message : "unknown_error";
    console.error(`[cron] Job ${jobId} (${jobType}) failed:`, msg);
    await failJob(jobId, msg);
  }
}

export async function POST(request: NextRequest) {
  const cronSecret = getOptionalEnv("CRON_SECRET");
  if (isProduction() && cronSecret) {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const rl = checkRateLimit("cron:process-integrations", CRON_RATE_LIMIT.limit, CRON_RATE_LIMIT.windowMs);
  if (!rl.allowed) {
    return NextResponse.json({ error: "Rate limited" }, { status: 429 });
  }

  let processed = 0;
  let succeeded = 0;
  let failed = 0;

  for (let i = 0; i < MAX_JOBS_PER_RUN; i++) {
    const job = await acquireJob();
    if (!job) break;

    processed++;
    try {
      await processJob(job as unknown as IntegrationJob & { _id: { toHexString(): string } });
      succeeded++;
    } catch {
      failed++;
    }
  }

  const stats = await getJobStats();

  return NextResponse.json({
    processed,
    succeeded,
    failed,
    queue: stats,
  });
}

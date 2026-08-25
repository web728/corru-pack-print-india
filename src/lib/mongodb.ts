/**
 * MongoDB connection using the native driver.
 * Singleton pattern with global caching for Next.js Serverless & Dev environments.
 * Server-only module — do not import from client components.
 */

import { MongoClient, Db, Collection, Document } from "mongodb";
import { getConfig } from "@/lib/env";

// ---------------------------------------------------------------------------
// Global Connection Caching (Prevents connection leaks in Dev HMR & Serverless)
// ---------------------------------------------------------------------------

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
  // eslint-disable-next-line no-var
  var _mongoDbInstance: Db | undefined;
}

async function connect(): Promise<MongoClient> {
  if (global._mongoClientPromise) {
    return global._mongoClientPromise;
  }

  const config = getConfig();

  const client = new MongoClient(config.MONGODB_URI, {
    maxPoolSize: 10,
    minPoolSize: 1,
    maxIdleTimeMS: 30_000,
    connectTimeoutMS: 10_000,
    serverSelectionTimeoutMS: 10_000,
  });

  global._mongoClientPromise = client
    .connect()
    .then((c) => {
      global._mongoDbInstance = c.db(config.MONGODB_DATABASE);
      console.info("[mongodb] Connected to", config.MONGODB_DATABASE);
      return c;
    })
    .catch((error) => {
      global._mongoClientPromise = undefined;
      console.error("[mongodb] Connection failed:", error instanceof Error ? error.message : error);
      throw error;
    });

  return global._mongoClientPromise;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Get the database instance, connecting on first call. */
export async function getDb(): Promise<Db> {
  if (global._mongoDbInstance) {
    return global._mongoDbInstance;
  }
  await connect();
  if (!global._mongoDbInstance) {
    throw new Error("[mongodb] Database not initialised after connect");
  }
  return global._mongoDbInstance;
}

/** Shorthand: get a typed collection by name. */
export async function getCollection<T extends Document = Document>(
  name: string,
): Promise<Collection<T>> {
  const db = await getDb();
  return db.collection<T>(name);
}
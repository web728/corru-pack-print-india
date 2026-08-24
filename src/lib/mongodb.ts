/**
 * MongoDB connection using the native driver.
 * Singleton pattern with connection pooling.
 * Server-only module — do not import from client components.
 */

import { MongoClient, Db, Collection, Document } from "mongodb";
import { getConfig } from "@/lib/env";

// ---------------------------------------------------------------------------
// Singleton
// ---------------------------------------------------------------------------

let _client: MongoClient | null = null;
let _db: Db | null = null;
let _connectionPromise: Promise<MongoClient> | null = null;

async function connect(): Promise<MongoClient> {
  if (_client) return _client;

  // Reuse the in-flight connection promise to avoid multiple simultaneous connects
  if (_connectionPromise) return _connectionPromise;

  _connectionPromise = (async () => {
    const config = getConfig();

    const client = new MongoClient(config.MONGODB_URI, {
      // Connection pool defaults are sensible for a serverless-friendly setup
      maxPoolSize: 10,
      minPoolSize: 1,
      maxIdleTimeMS: 30_000,
      connectTimeoutMS: 10_000,
      serverSelectionTimeoutMS: 10_000,
    });

    try {
      await client.connect();
      _client = client;
      _db = client.db(config.MONGODB_DATABASE);
      console.info("[mongodb] Connected to", config.MONGODB_DATABASE);
      return client;
    } catch (error) {
      _connectionPromise = null;
      console.error("[mongodb] Connection failed:", error instanceof Error ? error.message : error);
      throw error;
    }
  })();

  return _connectionPromise;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Get the database instance, connecting on first call. */
export async function getDb(): Promise<Db> {
  if (_db) return _db;
  await connect();
  if (!_db) throw new Error("[mongodb] Database not initialised after connect");
  return _db;
}

/** Shorthand: get a typed collection by name. */
export async function getCollection<T extends Document = Document>(
  name: string,
): Promise<Collection<T>> {
  const db = await getDb();
  return db.collection<T>(name);
}

/**
 * Collision-resistant reference number generator.
 * Format: CPP28-{TYPE}-{XXXXXXXX} (8 random hex characters).
 * Server-only module — do not import from client components.
 */

import { randomBytes } from "crypto";
import { REFERENCE_PREFIX, type FormType } from "@/config/event";
import { getCollection } from "@/lib/mongodb";

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Generate a unique reference number with collision checking.
 *
 * @param type        Form type code (VIS, EXH, CON, SPO, etc.)
 * @param collection  MongoDB collection name to check for duplicates
 * @param maxRetries  Maximum collision-retry attempts (default 5)
 */
export async function generateReference(
  type: FormType,
  collection: string = "submissions",
  maxRetries: number = 5,
): Promise<string> {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    const hex = randomBytes(4).toString("hex").toUpperCase();
    const reference = `${REFERENCE_PREFIX}-${type}-${hex}`;

    // Collision check
    const col = await getCollection(collection);
    const existing = await col.findOne(
      { referenceNumber: reference },
      { projection: { _id: 1 } },
    );

    if (!existing) {
      return reference;
    }

    // Collision detected — retry with fresh random bytes
    console.warn(`[reference] Collision on ${reference}, retrying (${attempt + 1}/${maxRetries})`);
  }

  throw new Error(
    `[reference] Failed to generate unique reference after ${maxRetries} attempts for type ${type}`,
  );
}

"use client";

import { useState, useCallback } from "react";

export interface SubmitResult {
  success: boolean;
  referenceNumber?: string;
  error?: string;
  integrations?: {
    sheets: string;
    adminEmail: string;
    confirmationEmail: string;
  };
}

interface UseFormSubmitOptions {
  endpoint: string;
}

export function useFormSubmit({ endpoint }: UseFormSubmitOptions) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitResult | null>(null);

  const submit = useCallback(
    async (data: Record<string, unknown>): Promise<SubmitResult> => {
      setIsSubmitting(true);
      setResult(null);

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        // Safe JSON parsing for non-200 responses
        let json: SubmitResult;
        try {
          json = (await response.json()) as SubmitResult;
        } catch {
          json = {
            success: false,
            error: response.statusText || "Server responded with an unknown error.",
          };
        }

        // Handle case where HTTP status is 4xx/5xx but json didn't contain explicit error
        if (!response.ok && json.success) {
          json.success = false;
          json.error = json.error || `Request failed with status ${response.status}`;
        }

        setResult(json);
        return json;
      } catch {
        const errorResult: SubmitResult = {
          success: false,
          error: "Network error. Please check your connection and try again.",
        };
        setResult(errorResult);
        return errorResult;
      } finally {
        setIsSubmitting(false);
      }
    },
    [endpoint],
  );

  const reset = useCallback(() => {
    setResult(null);
  }, []);

  return { submit, isSubmitting, result, reset };
}
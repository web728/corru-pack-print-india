"use client";

import { useState, useCallback } from "react";

interface SubmitResult {
  success: boolean;
  referenceNumber?: string;
  error?: string;
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

        const json = (await response.json()) as SubmitResult;
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

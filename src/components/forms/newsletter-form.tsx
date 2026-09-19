"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterFormData } from "@/schemas";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { Button } from "@/components/ui/button";
import {
  Input,
  CheckboxField,
  FormStatus,
} from "@/components/ui/form-field";
import ReCaptcha, { type ReCaptchaRef } from "@/components/ReCaptcha"; // <-- naya import, apne actual path se adjust karo
import Link from "next/link";

export function NewsletterForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const { submit, isSubmitting, result } = useFormSubmit({
    endpoint: "/api/forms/newsletter",
  });

  // --- reCAPTCHA state ---
  const recaptchaRef = useRef<ReCaptchaRef>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);

  useEffect(() => {
    if (result) {
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    }
  }, [result]);

  const onSubmit = (data: NewsletterFormData) => {
    if (!recaptchaToken) {
      setRecaptchaError("Please verify you're not a robot.");
      return;
    }
    setRecaptchaError(null);
    submit({ ...data, recaptchaToken });
  };

  if (result?.success) {
    return (
      <FormStatus
        type="success"
        title="Subscribed"
        message="You have been subscribed to event updates."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {result?.error && (
        <FormStatus type="error" title="Failed" message={result.error} />
      )}

      <div className="flex gap-3">
        <Input
          id="email"
          type="email"
          {...register("email")}
          hasError={!!errors.email}
          placeholder="Your email address"
          autoComplete="email"
          className="flex-1"
        />
        <Button type="submit" variant="primary" size="md" loading={isSubmitting}>
          Subscribe
        </Button>
      </div>
      {errors.email && (
        <p className="text-xs text-error">{errors.email.message}</p>
      )}

      <Controller
        name="consent"
        control={control}
        render={({ field }) => (
          <CheckboxField
            label={
              <>
                I agree to receive email updates per the{" "}
                <Link href="/privacy-policy" className="text-accent underline" target="_blank">
                  Privacy Policy
                </Link>
              </>
            }
            name="consent"
            error={errors.consent}
            required
            checked={field.value === true}
            onChange={(e) => field.onChange(e.target.checked)}
            onBlur={field.onBlur}
          />
        )}
      />

      {/* reCAPTCHA v2 widget */}
      <div>
        <ReCaptcha
          ref={recaptchaRef}
          siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onVerify={setRecaptchaToken}
          onExpire={() => setRecaptchaToken(null)}
        />
        {recaptchaError && (
          <p className="text-xs text-error">{recaptchaError}</p>
        )}
      </div>
    </form>
  );
}
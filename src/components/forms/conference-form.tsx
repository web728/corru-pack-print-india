"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { conferenceSchema, type ConferenceFormData } from "@/schemas";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { Button } from "@/components/ui/button";
import {
  FormField,
  Input,
  Textarea,
  Select,
  CheckboxField,
  FormStatus,
  FormErrorSummary,
} from "@/components/ui/form-field";
import ReCaptcha, { type ReCaptchaRef } from "@/components/ReCaptcha"; // <-- naya import, apne actual path se adjust karo
import Link from "next/link";

const INTEREST_OPTIONS = [
  { value: "Attending Sessions", label: "Attending Sessions" },
  { value: "Speaking Opportunity", label: "Speaking Opportunity" },
  { value: "Sponsoring Sessions", label: "Sponsoring Sessions" },
  { value: "General Enquiry", label: "General Enquiry" },
];

export function ConferenceForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ConferenceFormData>({
    resolver: zodResolver(conferenceSchema),
  });

  const { submit, isSubmitting, result } = useFormSubmit({
    endpoint: "/api/forms/conference",
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

  const onSubmit = (data: ConferenceFormData) => {
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
        title="Enquiry Received"
        message="Thank you for your interest in the conference programme. Our team will get back to you."
        referenceNumber={result.referenceNumber}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <FormErrorSummary errors={errors} />

      {result?.error && (
        <FormStatus type="error" title="Submission Failed" message={result.error} />
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <FormField label="Full Name" name="fullName" error={errors.fullName} required>
          <Input
            id="fullName"
            {...register("fullName")}
            hasError={!!errors.fullName}
            placeholder="Your full name"
            autoComplete="name"
          />
        </FormField>

        <FormField label="Email Address" name="email" error={errors.email} required>
          <Input
            id="email"
            type="email"
            {...register("email")}
            hasError={!!errors.email}
            placeholder="you@company.com"
            autoComplete="email"
          />
        </FormField>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <FormField label="Phone Number" name="phone" error={errors.phone} hint="Optional">
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            hasError={!!errors.phone}
            placeholder="+919876543210"
            autoComplete="tel"
          />
        </FormField>

        <FormField label="Company" name="company" error={errors.company} hint="Optional">
          <Input
            id="company"
            {...register("company")}
            hasError={!!errors.company}
            placeholder="Company name"
            autoComplete="organization"
          />
        </FormField>
      </div>

      <FormField label="Area of Interest" name="interest" error={errors.interest} required>
        <Select
          id="interest"
          {...register("interest")}
          hasError={!!errors.interest}
          options={INTEREST_OPTIONS}
          placeholder="Select interest"
          defaultValue=""
        />
      </FormField>

      <FormField label="Message" name="message" error={errors.message} hint="Optional">
        <Textarea
          id="message"
          {...register("message")}
          hasError={!!errors.message}
          placeholder="Tell us more about your interest"
          rows={4}
        />
      </FormField>

      <Controller
        name="consent"
        control={control}
        render={({ field }) => (
          <CheckboxField
            label={
              <>
                I agree to the{" "}
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
          <p className="text-red-500 text-xs mt-2">{recaptchaError}</p>
        )}
      </div>

      <Button type="submit" variant="primary" size="lg" loading={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Submitting..." : "Submit Conference Enquiry"}
      </Button>
    </form>
  );
}
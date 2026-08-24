"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { mediaSchema, type MediaFormData } from "@/schemas";
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
import Link from "next/link";

const MEDIA_TYPE_OPTIONS = [
  { value: "Print", label: "Print" },
  { value: "Digital", label: "Digital" },
  { value: "Broadcast", label: "Broadcast" },
  { value: "Freelance", label: "Freelance" },
];

export function MediaForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<MediaFormData>({
    resolver: zodResolver(mediaSchema),
  });

  const { submit, isSubmitting, result } = useFormSubmit({
    endpoint: "/api/forms/media",
  });

  if (result?.success) {
    return (
      <FormStatus
        type="success"
        title="Accreditation Request Received"
        message="Your media accreditation request has been submitted. We will review and respond to your request."
        referenceNumber={result.referenceNumber}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit((data) => submit(data))}
      noValidate
      className="space-y-6"
    >
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
            placeholder="you@publication.com"
            autoComplete="email"
          />
        </FormField>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <FormField label="Phone Number" name="phone" error={errors.phone} required>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            hasError={!!errors.phone}
            placeholder="+919876543210"
            autoComplete="tel"
          />
        </FormField>

        <FormField label="Designation" name="designation" error={errors.designation} required>
          <Input
            id="designation"
            {...register("designation")}
            hasError={!!errors.designation}
            placeholder="e.g. Editor, Reporter"
            autoComplete="organization-title"
          />
        </FormField>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <FormField label="Publication / Outlet" name="organization" error={errors.organization} required>
          <Input
            id="organization"
            {...register("organization")}
            hasError={!!errors.organization}
            placeholder="Publication or outlet name"
          />
        </FormField>

        <FormField label="Media Type" name="mediaType" error={errors.mediaType} required>
          <Select
            id="mediaType"
            {...register("mediaType")}
            hasError={!!errors.mediaType}
            options={MEDIA_TYPE_OPTIONS}
            placeholder="Select type"
            defaultValue=""
          />
        </FormField>
      </div>

      <FormField label="Additional Message" name="message" error={errors.message} hint="Optional">
        <Textarea
          id="message"
          {...register("message")}
          hasError={!!errors.message}
          placeholder="Anything you'd like us to know"
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

      <Button type="submit" variant="primary" size="lg" loading={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Submitting..." : "Submit Media Accreditation"}
      </Button>
    </form>
  );
}

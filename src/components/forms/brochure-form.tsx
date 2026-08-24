"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { brochureSchema, type BrochureFormData } from "@/schemas";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { Button } from "@/components/ui/button";
import {
  FormField,
  Input,
  Select,
  CheckboxField,
  FormStatus,
  FormErrorSummary,
} from "@/components/ui/form-field";
import Link from "next/link";

const ROLE_OPTIONS = [
  { value: "Manufacturer", label: "Manufacturer" },
  { value: "Buyer", label: "Buyer" },
  { value: "Distributor", label: "Distributor" },
  { value: "Consultant", label: "Consultant" },
  { value: "Media", label: "Media" },
  { value: "Other", label: "Other" },
];

export function BrochureForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BrochureFormData>({
    resolver: zodResolver(brochureSchema),
  });

  const { submit, isSubmitting, result } = useFormSubmit({
    endpoint: "/api/forms/brochure",
  });

  if (result?.success) {
    return (
      <FormStatus
        type="success"
        title="Request Received"
        message="The brochure download link will be sent to your email address."
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

      <FormField label="Role" name="role" error={errors.role} hint="Optional">
        <Select
          id="role"
          {...register("role")}
          hasError={!!errors.role}
          options={ROLE_OPTIONS}
          placeholder="Select role"
          defaultValue=""
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
        {isSubmitting ? "Requesting..." : "Request Brochure"}
      </Button>
    </form>
  );
}

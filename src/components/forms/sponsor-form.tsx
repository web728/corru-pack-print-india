"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sponsorSchema, type SponsorFormData } from "@/schemas";
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

const INTEREST_OPTIONS = [
  { value: "Title Sponsor", label: "Title Sponsor" },
  { value: "Platinum Sponsor", label: "Platinum Sponsor" },
  { value: "Gold Sponsor", label: "Gold Sponsor" },
  { value: "Advertising", label: "Advertising" },
  { value: "Branding", label: "Branding" },
  { value: "Custom Package", label: "Custom Package" },
];

export function SponsorForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SponsorFormData>({
    resolver: zodResolver(sponsorSchema),
  });

  const { submit, isSubmitting, result } = useFormSubmit({
    endpoint: "/api/forms/sponsor",
  });

  if (result?.success) {
    return (
      <FormStatus
        type="success"
        title="Enquiry Received"
        message="Thank you for your interest in sponsorship. Our team will reach out with package details."
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

      <FormField label="Company Name" name="companyName" error={errors.companyName} required>
        <Input
          id="companyName"
          {...register("companyName")}
          hasError={!!errors.companyName}
          placeholder="Company name"
          autoComplete="organization"
        />
      </FormField>

      <div className="grid sm:grid-cols-2 gap-6">
        <FormField label="Contact Person" name="contactPerson" error={errors.contactPerson} required>
          <Input
            id="contactPerson"
            {...register("contactPerson")}
            hasError={!!errors.contactPerson}
            placeholder="Full name"
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

        <FormField label="Interest Area" name="interestArea" error={errors.interestArea} required>
          <Select
            id="interestArea"
            {...register("interestArea")}
            hasError={!!errors.interestArea}
            options={INTEREST_OPTIONS}
            placeholder="Select interest"
            defaultValue=""
          />
        </FormField>
      </div>

      <FormField label="Additional Message" name="message" error={errors.message} hint="Optional">
        <Textarea
          id="message"
          {...register("message")}
          hasError={!!errors.message}
          placeholder="Any specific requirements"
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
        {isSubmitting ? "Submitting..." : "Submit Sponsorship Enquiry"}
      </Button>
    </form>
  );
}

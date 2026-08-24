"use client";

import { useForm, Controller, type FieldError } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { visitorSchema, type VisitorFormData } from "@/schemas";
import { PRODUCT_CATEGORIES } from "@/config/event";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { Button } from "@/components/ui/button";
import {
  FormField,
  Input,
  Select,
  CheckboxField,
  MultiCheckbox,
  FormStatus,
  FormErrorSummary,
} from "@/components/ui/form-field";
import Link from "next/link";
import { User, Building2, MapPin, Compass } from "lucide-react";

const VISIT_PURPOSE_OPTIONS = [
  { value: "Sourcing Machinery", label: "Sourcing Machinery" },
  { value: "Market Research", label: "Market Research" },
  { value: "Networking", label: "Networking" },
  { value: "Technology Updates", label: "Technology Updates" },
  { value: "Other", label: "Other" },
];

const CATEGORY_OPTIONS = PRODUCT_CATEGORIES.map((c) => ({
  value: c.slug,
  label: c.name,
}));

export function VisitorForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<VisitorFormData>({
    resolver: zodResolver(visitorSchema),
    defaultValues: { productInterests: [] },
  });

  const { submit, isSubmitting, result } = useFormSubmit({
    endpoint: "/api/forms/visitor",
  });

  if (result?.success) {
    return (
      <FormStatus
        type="success"
        title="Registration Received"
        message="Thank you for registering. You will receive a confirmation email shortly."
        referenceNumber={result.referenceNumber}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit((data) => submit(data))}
      noValidate
      className="space-y-10"
    >
      <FormErrorSummary errors={errors} />

      {result?.error && (
        <FormStatus type="error" title="Submission Failed" message={result.error} />
      )}

      {/* 1. PERSONAL INFORMATION */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
          <User className="w-4 h-4 text-red-500" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Personal Details
          </h3>
        </div>

        {/* Name and Email side-by-side (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Full Name" name="fullName" error={errors.fullName} required>
            <Input
              id="fullName"
              {...register("fullName")}
              hasError={!!errors.fullName}
              placeholder="Enter your full name"
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

        {/* Mobile number with space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Phone Number" name="phone" error={errors.phone} required hint="Mobile: +91XXXXXXXXXX">
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              hasError={!!errors.phone}
              placeholder="+919876543210"
              autoComplete="tel"
            />
          </FormField>
        </div>
      </div>

      {/* 2. COMPANY DETAILS */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
          <Building2 className="w-4 h-4 text-blue-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Company & Designation
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Company Name" name="company" error={errors.company} required>
            <Input
              id="company"
              {...register("company")}
              hasError={!!errors.company}
              placeholder="Company / Organization name"
              autoComplete="organization"
            />
          </FormField>

          <FormField label="Designation" name="designation" error={errors.designation} required>
            <Input
              id="designation"
              {...register("designation")}
              hasError={!!errors.designation}
              placeholder="Your Job Title / Designation"
              autoComplete="organization-title"
            />
          </FormField>
        </div>
      </div>

      {/* 3. LOCATION */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
          <MapPin className="w-4 h-4 text-amber-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Location
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="City" name="city" error={errors.city} required>
            <Input
              id="city"
              {...register("city")}
              hasError={!!errors.city}
              placeholder="City"
              autoComplete="address-level2"
            />
          </FormField>

          <FormField label="State" name="state" error={errors.state} required>
            <Input
              id="state"
              {...register("state")}
              hasError={!!errors.state}
              placeholder="State"
              autoComplete="address-level1"
            />
          </FormField>
        </div>
      </div>

      {/* 4. EVENT INTERESTS */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
          <Compass className="w-4 h-4 text-emerald-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Visit Preferences
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Purpose of Visit" name="visitPurpose" error={errors.visitPurpose} required>
            <Select
              id="visitPurpose"
              {...register("visitPurpose")}
              hasError={!!errors.visitPurpose}
              options={VISIT_PURPOSE_OPTIONS}
              placeholder="Select main purpose"
              defaultValue=""
            />
          </FormField>
        </div>

        <div className="pt-2">
          <Controller
            name="productInterests"
            control={control}
            render={({ field }) => (
              <MultiCheckbox
                label="Product Categories of Interest"
                name="productInterests"
                error={errors.productInterests as FieldError | undefined}
                required
                options={CATEGORY_OPTIONS}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>
      </div>

      {/* 5. CONSENT & SUBMIT */}
      <div className="pt-6 border-t border-slate-800/80 space-y-6">
        <Controller
          name="consent"
          control={control}
          render={({ field }) => (
            <CheckboxField
              label={
                <span className="text-xs sm:text-sm text-slate-300">
                  I agree to the{" "}
                  <Link href="/privacy-policy" className="text-red-400 hover:text-red-300 underline" target="_blank">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms" className="text-red-400 hover:text-red-300 underline" target="_blank">
                    Terms of Service
                  </Link>
                </span>
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

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-base rounded-xl shadow-lg shadow-red-600/20 transition-all"
          >
            {isSubmitting ? "Submitting..." : "Register as Visitor"}
          </Button>
        </div>
      </div>
    </form>
  );
}
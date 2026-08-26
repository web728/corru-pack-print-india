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
      <div className="bg-[#111c38] border border-green-500/40 rounded-2xl p-8 backdrop-blur-md text-center shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        <FormStatus
          type="success"
          title="Registration Received"
          message="Thank you for registering. You will receive a confirmation email shortly."
          referenceNumber={result.referenceNumber}
        />
      </div>
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
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-700/80">
          <User className="w-5 h-5 text-red-500" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            1. Personal Details
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
              className="bg-[#111c38] border-slate-700 text-white placeholder:text-slate-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-3.5 px-4 text-sm font-medium transition-all"
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
              className="bg-[#111c38] border-slate-700 text-white placeholder:text-slate-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-3.5 px-4 text-sm font-medium transition-all"
            />
          </FormField>
        </div>

        {/* Mobile number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Phone Number" name="phone" error={errors.phone} required hint="Mobile: +91XXXXXXXXXX">
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              hasError={!!errors.phone}
              placeholder="+91 98765 43210"
              autoComplete="tel"
              className="bg-[#111c38] border-slate-700 text-white placeholder:text-slate-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-3.5 px-4 text-sm font-medium transition-all"
            />
          </FormField>
        </div>
      </div>

      {/* 2. COMPANY DETAILS */}
      <div className="space-y-6">
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-700/80">
          <Building2 className="w-5 h-5 text-blue-400" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            2. Company & Designation
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
              className="bg-[#111c38] border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 rounded-xl py-3.5 px-4 text-sm font-medium transition-all"
            />
          </FormField>

          <FormField label="Designation" name="designation" error={errors.designation} required>
            <Input
              id="designation"
              {...register("designation")}
              hasError={!!errors.designation}
              placeholder="Your Job Title / Designation"
              autoComplete="organization-title"
              className="bg-[#111c38] border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 rounded-xl py-3.5 px-4 text-sm font-medium transition-all"
            />
          </FormField>
        </div>
      </div>

      {/* 3. LOCATION */}
      <div className="space-y-6">
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-700/80">
          <MapPin className="w-5 h-5 text-amber-400" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            3. Location
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="City" name="city" error={errors.city} required>
            <Input
              id="city"
              {...register("city")}
              hasError={!!errors.city}
              placeholder="e.g. Mumbai"
              autoComplete="address-level2"
              className="bg-[#111c38] border-slate-700 text-white placeholder:text-slate-400 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl py-3.5 px-4 text-sm font-medium transition-all"
            />
          </FormField>

          <FormField label="State" name="state" error={errors.state} required>
            <Input
              id="state"
              {...register("state")}
              hasError={!!errors.state}
              placeholder="e.g. Maharashtra"
              autoComplete="address-level1"
              className="bg-[#111c38] border-slate-700 text-white placeholder:text-slate-400 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl py-3.5 px-4 text-sm font-medium transition-all"
            />
          </FormField>
        </div>
      </div>

      {/* 4. EVENT INTERESTS */}
      <div className="space-y-6">
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-700/80">
          <Compass className="w-5 h-5 text-emerald-400" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            4. Visit Preferences
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
              className="bg-[#111c38] border-slate-700 text-white rounded-xl py-3.5 px-4 text-sm font-medium focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
            />
          </FormField>
        </div>

        <div className="bg-[#111c38] border border-slate-700/80 rounded-2xl p-5 sm:p-6 backdrop-blur-sm shadow-md">
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
      <div className="pt-6 border-t border-slate-700/80 space-y-6">
        <div className="bg-[#111c38]/80 border border-slate-700/80 rounded-xl p-4">
          <Controller
            name="consent"
            control={control}
            render={({ field }) => (
              <CheckboxField
                label={
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    I agree to the{" "}
                    <Link href="/privacy-policy" className="text-red-400 font-semibold hover:text-red-300 underline" target="_blank">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms" className="text-red-400 font-semibold hover:text-red-300 underline" target="_blank">
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
        </div>

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
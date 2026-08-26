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
import { Download } from "lucide-react";

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
      <div className="bg-[#111c38] p-8 rounded-2xl border border-emerald-500/40 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        <FormStatus
          type="success"
          title="Request Received"
          message="The brochure download link will be sent to your email address."
          referenceNumber={result.referenceNumber}
        />
      </div>
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

      {/* Name & Email Fields */}
      <div className="grid sm:grid-cols-2 gap-6">
        <FormField label="Full Name" name="fullName" error={errors.fullName} required>
          <Input
            id="fullName"
            {...register("fullName")}
            hasError={!!errors.fullName}
            placeholder="Your full name"
            autoComplete="name"
            className="bg-[#111c38] border-slate-700 text-white placeholder:text-slate-400 py-3.5 px-4 font-medium rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
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
            className="bg-[#111c38] border-slate-700 text-white placeholder:text-slate-400 py-3.5 px-4 font-medium rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
          />
        </FormField>
      </div>

      {/* Phone & Company Fields */}
      <div className="grid sm:grid-cols-2 gap-6">
        <FormField label="Phone Number" name="phone" error={errors.phone} >
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            hasError={!!errors.phone}
            placeholder="+91 98765 43210"
            autoComplete="tel"
            className="bg-[#111c38] border-slate-700 text-white placeholder:text-slate-400 py-3.5 px-4 font-medium rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
          />
        </FormField>

        <FormField label="Company" name="company" error={errors.company} >
          <Input
            id="company"
            {...register("company")}
            hasError={!!errors.company}
            placeholder="Company name"
            autoComplete="organization"
            className="bg-[#111c38] border-slate-700 text-white placeholder:text-slate-400 py-3.5 px-4 font-medium rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
          />
        </FormField>
      </div>

      {/* Role Selection */}
      <FormField label="Role" name="role" error={errors.role} >
        <Select
          id="role"
          {...register("role")}
          hasError={!!errors.role}
          options={ROLE_OPTIONS}
          placeholder="Select role"
          defaultValue=""
          className="bg-[#111c38] border-slate-700 text-white py-3.5 px-4 font-medium rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
        />
      </FormField>

      {/* Consent Checkbox */}
      <div className="bg-[#111c38] p-4 rounded-xl border border-slate-700/80">
        <Controller
          name="consent"
          control={control}
          render={({ field }) => (
            <CheckboxField
              label={
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  I agree to the{" "}
                  <Link href="/privacy-policy" className="text-red-400 font-semibold underline hover:text-red-300" target="_blank">
                    Privacy Policy
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

      {/* Submit Button */}
      <Button 
        type="submit" 
        variant="primary" 
        size="lg" 
        loading={isSubmitting} 
        className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-red-600/20 border border-red-500/40 flex items-center justify-center gap-2 transition-all duration-300"
      >
        {isSubmitting ? (
          "Requesting..."
        ) : (
          <>
            <span>Request Brochure</span>
            <Download className="w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  );
}
"use client";

import { useForm, Controller, type FieldError } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { exhibitorSchema, type ExhibitorFormData } from "@/schemas";
import { PRODUCT_CATEGORIES } from "@/config/event";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { Button } from "@/components/ui/button";
import {
  FormField,
  Input,
  Textarea,
  Select,
  CheckboxField,
  MultiCheckbox,
  FormStatus,
  FormErrorSummary,
} from "@/components/ui/form-field";
import Link from "next/link";
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  LayoutGrid, 
  MessageSquare, 
  ArrowRight,
  Sparkles,
  ShieldCheck
} from "lucide-react";

const STALL_OPTIONS = [
  { value: "Standard", label: "Standard Shell Scheme Stall" },
  { value: "Premium", label: "Premium Corner / Island Space" },
  { value: "Custom", label: "Custom Bare Space (Raw Booth)" },
  { value: "Undecided", label: "Undecided / Need Consultation" },
];

const CATEGORY_OPTIONS = PRODUCT_CATEGORIES.map((c) => ({
  value: c.slug,
  label: c.name,
}));

export function ExhibitorForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ExhibitorFormData>({
    resolver: zodResolver(exhibitorSchema),
    defaultValues: { productCategories: [], country: "India" },
  });

  const { submit, isSubmitting, result } = useFormSubmit({
    endpoint: "/api/forms/exhibitor",
  });

  if (result?.success) {
    return (
      <div className="bg-[#0b1329]/90 border border-green-500/30 rounded-2xl p-8 backdrop-blur-md text-center shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        <FormStatus
          type="success"
          title="Enquiry Received Successfully!"
          message="Thank you for registering your interest. Our official sales secretariat will review your requirements and reach out with the floor plan & custom pricing options."
          referenceNumber={result.referenceNumber}
        />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit((data) => submit(data))}
      noValidate
      className="space-y-8"
    >
      <FormErrorSummary errors={errors} />

      {result?.error && (
        <FormStatus type="error" title="Submission Failed" message={result.error} />
      )}

      {/* Section 1: Company & Contact Details */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
          <Building2 className="w-5 h-5 text-red-500" />
          <h3 className="text-base font-bold text-white tracking-wide uppercase text-xs">
            1. Company & Contact Overview
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <FormField label="Company Name" name="companyName" error={errors.companyName} required>
            <div className="relative">
              <Input
                id="companyName"
                {...register("companyName")}
                hasError={!!errors.companyName}
                placeholder="e.g. Apex Corrugation Machinery Pvt Ltd"
                autoComplete="organization"
                className="bg-[#0b1329]/90 border-slate-700/80 text-white placeholder:text-slate-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-3 text-sm transition-all"
              />
            </div>
          </FormField>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField label="Contact Person" name="contactPerson" error={errors.contactPerson} required>
            <div className="relative">
              <Input
                id="contactPerson"
                {...register("contactPerson")}
                hasError={!!errors.contactPerson}
                placeholder="e.g. Rajesh Kumar"
                autoComplete="name"
                className="bg-[#0b1329]/90 border-slate-700/80 text-white placeholder:text-slate-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-3 text-sm transition-all"
              />
            </div>
          </FormField>

          <FormField label="Email Address" name="email" error={errors.email} required>
            <div className="relative">
              <Input
                id="email"
                type="email"
                {...register("email")}
                hasError={!!errors.email}
                placeholder="you@company.com"
                autoComplete="email"
                className="bg-[#0b1329]/90 border-slate-700/80 text-white placeholder:text-slate-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-3 text-sm transition-all"
              />
            </div>
          </FormField>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField 
            label="Phone Number" 
            name="phone" 
            error={errors.phone} 
            required 
            hint="Include country code (+91)"
          >
            <div className="relative">
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                hasError={!!errors.phone}
                placeholder="+91 98765 43210"
                autoComplete="tel"
                className="bg-[#0b1329]/90 border-slate-700/80 text-white placeholder:text-slate-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-3 text-sm transition-all"
              />
            </div>
          </FormField>

          <FormField label="Company Website" name="website" error={errors.website} hint="Optional">
            <div className="relative">
              <Input
                id="website"
                type="url"
                {...register("website")}
                hasError={!!errors.website}
                placeholder="https://www.yourcompany.com"
                autoComplete="url"
                className="bg-[#0b1329]/90 border-slate-700/80 text-white placeholder:text-slate-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-3 text-sm transition-all"
              />
            </div>
          </FormField>
        </div>
      </div>

      {/* Section 2: Location Information */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
          <MapPin className="w-5 h-5 text-blue-400" />
          <h3 className="text-base font-bold text-white tracking-wide uppercase text-xs">
            2. Business Location
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <FormField label="City" name="city" error={errors.city} required>
            <Input 
              id="city" 
              {...register("city")} 
              hasError={!!errors.city} 
              placeholder="e.g. Mumbai"
              className="bg-[#0b1329]/90 border-slate-700/80 text-white placeholder:text-slate-500 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 rounded-xl py-3 text-sm transition-all" 
            />
          </FormField>

          <FormField label="State" name="state" error={errors.state} required>
            <Input 
              id="state" 
              {...register("state")} 
              hasError={!!errors.state} 
              placeholder="e.g. Maharashtra" 
              className="bg-[#0b1329]/90 border-slate-700/80 text-white placeholder:text-slate-500 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 rounded-xl py-3 text-sm transition-all"
            />
          </FormField>

          <FormField label="Country" name="country" error={errors.country} required>
            <Input 
              id="country" 
              {...register("country")} 
              hasError={!!errors.country} 
              placeholder="e.g. India" 
              className="bg-[#0b1329]/90 border-slate-700/80 text-white placeholder:text-slate-500 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 rounded-xl py-3 text-sm transition-all"
            />
          </FormField>
        </div>
      </div>

      {/* Section 3: Product Interest & Stall Preference */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
          <LayoutGrid className="w-5 h-5 text-red-500" />
          <h3 className="text-base font-bold text-white tracking-wide uppercase text-xs">
            3. Exhibit & Product Profile
          </h3>
        </div>

        {/* Multi-Checkbox Container Card */}
        <div className="bg-[#0b1329]/60 border border-slate-800 rounded-2xl p-5 sm:p-6 backdrop-blur-sm hover:border-slate-700 transition-all">
          <Controller
            name="productCategories"
            control={control}
            render={({ field }) => (
              <MultiCheckbox
                label="Select Machinery & Product Categories You Offer"
                name="productCategories"
                error={errors.productCategories as FieldError | undefined}
                required
                options={CATEGORY_OPTIONS}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>

        <FormField label="Stall Type Preference" name="stallPreference" error={errors.stallPreference} required>
          <Select
            id="stallPreference"
            {...register("stallPreference")}
            hasError={!!errors.stallPreference}
            options={STALL_OPTIONS}
            placeholder="Select preferred booth scheme"
            defaultValue=""
            className="bg-[#0b1329]/90 border-slate-700/80 text-white rounded-xl py-3 text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
          />
        </FormField>

        <FormField label="Additional Requirements / Specific Requests" name="message" error={errors.message} hint="Optional">
          <Textarea
            id="message"
            {...register("message")}
            hasError={!!errors.message}
            placeholder="Mention power requirements, heavy machinery dimensions, live demonstration needs, or specific hall locations..."
            rows={4}
            className="bg-[#0b1329]/90 border-slate-700/80 text-white placeholder:text-slate-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl p-4 text-sm transition-all"
          />
        </FormField>
      </div>

      {/* Terms & Consent Checkbox */}
      <div className="bg-[#0b1329]/40 border border-slate-800/80 rounded-xl p-4">
        <Controller
          name="consent"
          control={control}
          render={({ field }) => (
            <CheckboxField
              label={
                <span className="text-xs text-slate-300">
                  I agree to the{" "}
                  <Link href="/privacy-policy" className="text-red-400 font-medium hover:underline" target="_blank">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms" className="text-red-400 font-medium hover:underline" target="_blank">
                    Terms of Service
                  </Link>
                  . I give consent to be contacted regarding stall allocation and event updates.
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

      {/* Action Button */}
      <div className="pt-2">
        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          loading={isSubmitting} 
          className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-600/25 transition-all flex items-center justify-center gap-2 group text-base"
        >
          <span>{isSubmitting ? "Submitting Enquiry..." : "Submit Exhibitor Enquiry"}</span>
          {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
        </Button>
      </div>

    </form>
  );
}
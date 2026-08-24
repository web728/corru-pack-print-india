"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/schemas";
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
import { Send, Sparkles, ShieldCheck } from "lucide-react";

const ENQUIRY_OPTIONS = [
  { value: "General", label: "General Inquiry" },
  { value: "Exhibitor", label: "Book a Stall (Exhibitor)" },
  { value: "Visitor", label: "Visitor Registration" },
  { value: "Sponsorship", label: "Sponsorship Opportunities" },
  { value: "Media", label: "Media & Press" },
  { value: "Other", label: "Other" },
];

export function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const { submit, isSubmitting, result } = useFormSubmit({
    endpoint: "/api/forms/contact",
  });

  if (result?.success) {
    return (
      <div className="bg-[#0b1329] p-8 rounded-2xl border border-emerald-500/30 shadow-2xl">
        <FormStatus
          type="success"
          title="Message Sent Successfully!"
          message="Thank you for reaching out. Our exhibition desk will contact you within 24 business hours."
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
            placeholder="e.g. Rahul Sharma"
            autoComplete="name"
            className="bg-[#0b1329]/90 border-slate-700/80 text-white placeholder:text-slate-500 rounded-xl focus:border-red-500 transition-all duration-200"
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
            className="bg-[#0b1329]/90 border-slate-700/80 text-white placeholder:text-slate-500 rounded-xl focus:border-red-500 transition-all duration-200"
          />
        </FormField>
      </div>

      {/* Phone & Enquiry Type Fields */}
      <div className="grid sm:grid-cols-2 gap-6">
        <FormField label="Phone Number" name="phone" error={errors.phone} hint="Optional">
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            hasError={!!errors.phone}
            placeholder="+91 98765 43210"
            autoComplete="tel"
            className="bg-[#0b1329]/90 border-slate-700/80 text-white placeholder:text-slate-500 rounded-xl focus:border-red-500 transition-all duration-200"
          />
        </FormField>

        <FormField label="Enquiry Type" name="enquiryType" error={errors.enquiryType} required>
          <Select
            id="enquiryType"
            {...register("enquiryType")}
            hasError={!!errors.enquiryType}
            options={ENQUIRY_OPTIONS}
            placeholder="Select topic..."
            defaultValue=""
            className="bg-[#0b1329]/90 border-slate-700/80 text-white rounded-xl focus:border-red-500 transition-all duration-200"
          />
        </FormField>
      </div>

      {/* Subject Field */}
      <FormField label="Subject" name="subject" error={errors.subject} required>
        <Input
          id="subject"
          {...register("subject")}
          hasError={!!errors.subject}
          placeholder="Brief topic summary (e.g. Stall Availability in Hall 2)"
          className="bg-[#0b1329]/90 border-slate-700/80 text-white placeholder:text-slate-500 rounded-xl focus:border-red-500 transition-all duration-200"
        />
      </FormField>

      {/* Message Textarea */}
      <FormField label="Message" name="message" error={errors.message} required>
        <Textarea
          id="message"
          {...register("message")}
          hasError={!!errors.message}
          placeholder="Please share your specific requirement or questions..."
          rows={5}
          className="bg-[#0b1329]/90 border-slate-700/80 text-white placeholder:text-slate-500 rounded-xl focus:border-red-500 transition-all duration-200"
        />
      </FormField>

      {/* Consent Checkbox */}
      <div className="bg-[#0b1329]/50 p-4 rounded-xl border border-slate-800/80">
        <Controller
          name="consent"
          control={control}
          render={({ field }) => (
            <CheckboxField
              label={
                <span className="text-xs text-slate-300">
                  I agree to the{" "}
                  <Link href="/privacy-policy" className="text-red-400 font-medium underline hover:text-red-300" target="_blank">
                    Privacy Policy
                  </Link>{" "}
                  and authorize the team to contact me via Email or WhatsApp.
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
        loading={isSubmitting}
        className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-xl shadow-red-600/20 border border-red-500/40 flex items-center justify-center gap-2 transition-all duration-300"
      >
        {isSubmitting ? (
          "Sending Inquiry..."
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  );
}
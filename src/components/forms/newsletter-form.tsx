"use client";

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
    <form
      onSubmit={handleSubmit((data) => submit(data))}
      noValidate
      className="space-y-4"
    >
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
    </form>
  );
}

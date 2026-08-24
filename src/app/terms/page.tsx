import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT } from "@/config/event";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${EVENT.fullName} ${EVENT.year} website and registration services.`,
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        breadcrumbs={[{ label: "Terms" }]}
      />

      <section className="bg-surface-primary py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* [LEGAL REVIEW REQUIRED] — Draft template; must be reviewed by legal counsel before production */}
          <div className="prose prose-sm max-w-none text-text-secondary [&_h2]:text-text-primary [&_h2]:text-lg [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-text-primary [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:mb-4 [&_li]:mb-1">
            <p className="text-text-muted text-xs">
              Last updated: August 2026
            </p>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
              {" "}{EVENT.fullName} website and related registration services operated
              by {EVENT.organizers.futurex.name} and {EVENT.organizers.icpma.name}.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using this website, you agree to be bound by these Terms.
              If you do not agree to these Terms, please do not use the website.
            </p>

            <h2>2. Registration Services</h2>
            <p>
              The website provides registration services for exhibitors and visitors
              of the {EVENT.name} exhibition. By submitting a registration form, you
              confirm that the information provided is accurate and complete.
            </p>
            <ul className="list-disc pl-6">
              <li>Exhibitor registrations are subject to stall availability and organizer approval</li>
              <li>Visitor registrations are subject to event capacity</li>
              <li>The organizers reserve the right to accept or decline any registration</li>
            </ul>

            <h2>3. Intellectual Property</h2>
            <p>
              All content on this website, including text, logos, images, and design
              elements, is the property of the event organizers unless otherwise stated.
              You may not reproduce, distribute, or modify any content without prior
              written permission.
            </p>

            <h2>4. User Responsibilities</h2>
            <p>When using this website, you agree to:</p>
            <ul className="list-disc pl-6">
              <li>Provide accurate and truthful information in all forms</li>
              <li>Not use the website for any unlawful purpose</li>
              <li>Not attempt to interfere with the website&apos;s operation</li>
              <li>Not submit false or misleading registration information</li>
            </ul>

            <h2>5. Limitation of Liability</h2>
            <p>
              The website is provided &ldquo;as is&rdquo; without warranties of any kind.
              The organizers shall not be liable for any indirect, incidental, or
              consequential damages arising from the use of this website or attendance
              at the event.
            </p>

            <h2>6. Event Changes</h2>
            <p>
              The organizers reserve the right to modify event dates, venue, programme,
              or other details. Registered participants will be notified of any
              significant changes via the contact information provided during registration.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the
              laws of India. Any disputes shall be subject to the exclusive jurisdiction
              of the courts in New Delhi.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Changes will be posted on
              this page with an updated effective date.
            </p>

            <h2>9. Contact</h2>
            <p>
              For queries regarding these Terms, contact:<br />
              {EVENT.contact.primary.name}<br />
              {EVENT.organizers.futurex.name}<br />
              Phone: {EVENT.contact.primary.phone}<br />
              Email: {EVENT.contact.primary.email}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

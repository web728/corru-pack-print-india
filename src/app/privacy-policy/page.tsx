import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT } from "@/config/event";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${EVENT.fullName} ${EVENT.year}. How we collect, use, and protect your data.`,
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="bg-surface-primary py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* [LEGAL REVIEW REQUIRED] — Draft template; must be reviewed by legal counsel before production */}
          <div className="prose prose-sm max-w-none text-text-secondary [&_h2]:text-text-primary [&_h2]:text-lg [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-text-primary [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:mb-4 [&_li]:mb-1">
            <p className="text-text-muted text-xs">
              Last updated: August 2026
            </p>
            <p>
              This Privacy Policy describes how {EVENT.organizers.futurex.name} and
              {" "}{EVENT.organizers.icpma.name} (collectively, &ldquo;we,&rdquo; &ldquo;us,&rdquo;
              or &ldquo;our&rdquo;) collect, use, and protect information in connection
              with the {EVENT.fullName} website and event registration services.
            </p>

            <h2>1. Information We Collect</h2>
            <h3>Information You Provide</h3>
            <p>
              When you register as an exhibitor, visitor, or subscriber, we may collect:
            </p>
            <ul className="list-disc pl-6">
              <li>Full name and contact details (email address, phone number)</li>
              <li>Company name, designation, and business type</li>
              <li>City, state, and country</li>
              <li>Product categories of interest</li>
              <li>Any additional information you choose to provide in enquiry forms</li>
            </ul>

            <h3>Information Collected Automatically</h3>
            <p>
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc pl-6">
              <li>IP address (hashed for analytics, not stored in raw form)</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on the website</li>
              <li>Referring website or source</li>
              <li>Device type and screen resolution</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information collected to:</p>
            <ul className="list-disc pl-6">
              <li>Process exhibitor and visitor registrations</li>
              <li>Send event-related communications and updates</li>
              <li>Respond to enquiries and support requests</li>
              <li>Improve our website and event experience</li>
              <li>Generate anonymized analytics about website usage</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Event organizers</strong> ({EVENT.organizers.icpma.shortName} and
                {" "}{EVENT.organizers.futurex.shortName}) for event management purposes
              </li>
              <li>
                <strong>Service providers</strong> who assist with email delivery,
                database hosting, and website operations (under data processing agreements)
              </li>
              <li>
                <strong>Legal authorities</strong> when required by law or to protect our rights
              </li>
            </ul>

            <h2>4. Data Storage and Security</h2>
            <p>
              Your data is stored securely using industry-standard measures including
              encryption in transit (TLS) and at rest. We use MongoDB Atlas for database
              storage with appropriate access controls.
            </p>
            <p>
              We retain your registration data for the duration of the event cycle and
              a reasonable period thereafter for record-keeping and communication about
              future editions. You may request deletion at any time.
            </p>

            <h2>5. Cookies</h2>
            <p>
              Our website uses essential cookies required for the website to function.
              We will ask for your consent before setting any analytics or non-essential
              cookies. You can manage your cookie preferences at any time.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for communications at any time</li>
              <li>Object to processing of your data</li>
            </ul>
            <p>
              To exercise any of these rights, contact us using the details below.
            </p>

            <h2>7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these external sites.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be
              posted on this page with an updated effective date.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              For privacy-related enquiries, contact:
            </p>
            <p>
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

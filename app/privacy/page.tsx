import type { Metadata } from 'next';
import PrelandingHeader from '@/app/components/prelanding/PrelandingHeader';
import BackButton from '@/app/components/BackButton';

export const metadata: Metadata = {
  title: 'Privacy Policy | Verified Buyers Guide',
  description:
    'Learn how Verified Buyers Guide collects, uses, and protects your information. Read our cookies, data sharing, and user rights policies.',
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="h-screen overflow-y-auto bg-white">
      {/* Header */}
      <PrelandingHeader />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3 sm:mt-4">
        <BackButton label="Back" />
      </div>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-3xl">
          {/* Intro */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-zinc-800 text-3xl sm:text-4xl font-bold">Privacy Policy for Verified Buyers Guide</h1>
            <p className="text-neutral-500 text-sm sm:text-base">Last Updated: August 8, 2025</p>
            <p className="text-zinc-800 text-base sm:text-lg leading-relaxed">
              At Verified Buyers Guide (“we,” “our,” “us”), your privacy is important to us. This
              Privacy Policy explains how we collect, use, and protect your personal information when
              you visit our website, interact with our content, or engage with our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mt-10 sm:mt-12 space-y-4">
            <h2 className="text-zinc-800 text-2xl font-bold">1. Information We Collect</h2>
            <p className="text-zinc-800 text-base sm:text-lg leading-relaxed">
              When you use Verified Buyers Guide, we may collect the following information:
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-zinc-800 text-base sm:text-lg font-semibold leading-relaxed">
                  Personal Information You Provide
                </p>
                <p className="text-zinc-800 text-base sm:text-lg leading-relaxed">
                  Name, email address, or other details if you sign up for our newsletter, submit a
                  contact form, or participate in promotions.
                </p>
              </div>
              <div>
                <p className="text-zinc-800 text-base sm:text-lg font-semibold leading-relaxed">
                  Automatically Collected Information
                </p>
                <p className="text-zinc-800 text-base sm:text-lg leading-relaxed">
                  IP address, browser type, operating system, pages visited, time spent on the site,
                  and referral links. This may be collected through cookies, analytics tools, or
                  similar technologies.
                </p>
              </div>
              <div>
                <p className="text-zinc-800 text-base sm:text-lg font-semibold leading-relaxed">
                  Transactional &amp; Affiliate Data
                </p>
                <p className="text-zinc-800 text-base sm:text-lg leading-relaxed">
                  If you click on affiliate links or purchase products through links on our site, we
                  may receive anonymized transaction information from our partners.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use */}
          <div className="mt-10 sm:mt-12 space-y-4">
            <h2 className="text-zinc-800 text-2xl font-bold">2. How We Use Your Information</h2>
            <p className="text-zinc-800 text-base sm:text-lg leading-relaxed">
              We use collected data to:
            </p>
            <br/> 
            <ul className="list-disc pl-5 space-y-2 text-zinc-800 text-base sm:text-lg leading-relaxed">
              <li>Provide, operate, and improve our website and services.</li>
              <li>Deliver newsletters, updates, or promotional content (if you’ve opted in).</li>
              <li>Analyze site usage to understand trends and improve user experience.</li>
              <li>Monitor and prevent fraudulent or unauthorized activity.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </div>

          {/* Cookies */}
          <div className="mt-10 sm:mt-12 space-y-4">
            <h2 className="text-zinc-800 text-2xl font-bold">3. Cookies &amp; Tracking Technologies</h2>
            <div className="space-y-4 text-zinc-800 text-base sm:text-lg leading-relaxed">
              <p>
                Verified Buyers Guide uses cookies and similar technologies to enhance your browsing
                experience. Cookies may help us:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Remember your preferences.</li>
                <li>Measure traffic and engagement through analytics tools (e.g., Google Analytics).</li>
                <li>Track affiliate clicks for commission purposes.</li>
              </ul>
              <p>
                You can manage or disable cookies through your browser settings, but some site
                features may not function properly without them.
              </p>
            </div>
          </div>

          {/* Sharing */}
          <div className="mt-10 sm:mt-12 space-y-4">
            <h2 className="text-zinc-800 text-2xl font-bold">4. Sharing of Information</h2>
            <div className="space-y-4 text-zinc-800 text-base sm:text-lg leading-relaxed">
              <p>We respect your privacy. We do not sell or rent your personal information.</p>
              <p>We may share data only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-4">
                <li className='text-zinc-800 text-sm sm:text-lg leading-relaxed'>
                  With trusted third-party service providers (e.g., email platforms, analytics,
                  hosting) who help us operate our site.
                </li>
                <li className='text-zinc-800 text-sm sm:text-lg leading-relaxed'>
                  With affiliate partners, but only to track purchases or commissions (your personal
                  details are not shared with them).
                </li>
              
              </ul>
                <p className='text-zinc-800 text-base sm:text-lg leading-relaxed'>To comply with legal requirements, regulations, or government requests.</p>
            </div>
          </div>

          {/* Third-party links */}
          <div className="mt-10 sm:mt-12 space-y-4">
            <h2 className="text-zinc-800 text-2xl font-bold">5. Third-Party Links</h2>
            <p className="text-zinc-800 text-base sm:text-lg leading-relaxed">
              Our site contains links to third-party websites and affiliate offers. We are not
              responsible for the privacy practices or content of these external sites. We encourage
              you to review their privacy policies before providing personal information.
            </p>
          </div>

          {/* Data Security */}
          <div className="mt-10 sm:mt-12 space-y-4">
            <h2 className="text-zinc-800 text-2xl font-bold">6. Data Security</h2>
            <p className="text-zinc-800 text-base sm:text-lg leading-relaxed">
              We use reasonable technical and organizational measures to protect your personal data
              from unauthorized access, alteration, or disclosure. However, no method of
              transmission over the internet is 100% secure.
            </p>
          </div>

          {/* Your Rights */}
          <div className="mt-10 sm:mt-12 space-y-4">
            <h2 className="text-zinc-800 text-2xl font-bold">7. Your Rights</h2>
            <div className="space-y-4 text-zinc-800 text-base sm:text-lg leading-relaxed">
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Request access to the personal data we hold about you.</li>
                <li>Request correction or deletion of your personal data.</li>
                <li>
                  Opt out of marketing emails at any time by clicking “unsubscribe” in our emails.
                </li>
                <li>Restrict or object to certain processing activities.</li>
              </ul>
              <p>
                To exercise these rights, please contact us at: info@verifiedbuyersguide.com
              </p>
            </div>
          </div>

          {/* Children */}
          <div className="mt-10 sm:mt-12 space-y-4">
            <h2 className="text-zinc-800 text-2xl font-bold">8. Children’s Privacy</h2>
            <p className="text-zinc-800 text-base sm:text-lg leading-relaxed">
              Verified Buyers Guide does not knowingly collect personal data from children under the
              age of 13. If you believe we may have inadvertently collected information from a child,
              please contact us so we can remove it.
            </p>
          </div>

          {/* International */}
          <div className="mt-10 sm:mt-12 space-y-4">
            <h2 className="text-zinc-800 text-2xl font-bold">9. International Visitors</h2>
            <p className="text-zinc-800 text-base sm:text-lg leading-relaxed">
              If you are accessing Verified Buyers Guide from outside your home country, please note
              that your information may be processed and stored in countries where data protection
              laws may differ from those in your home country.
            </p>
          </div>

          {/* Changes */}
          <div className="mt-10 sm:mt-12 space-y-4">
            <h2 className="text-zinc-800 text-2xl font-bold">10. Changes to This Policy</h2>
            <p className="text-zinc-800 text-base sm:text-lg leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this
              page with a revised “Last Updated” date. Continued use of our website means you accept
              those changes.
            </p>
          </div>

          {/* Contact */}
          <div className="mt-10 sm:mt-12 space-y-4">
            <h2 className="text-zinc-800 text-2xl font-bold">11. Contact Us</h2>
            <div className="text-zinc-800 text-base sm:text-lg leading-relaxed">
              <p>If you have questions about this Privacy Policy or how we handle your data, please contact us at:</p>
              <p className="font-semibold mt-2">Verified Buyers Guide</p>
              <p>Email: info@verifiedbuyersguide.com</p>
              <p>
                Website: <a href="https://www.verifiedbuyersguide.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.verifiedbuyersguide.com</a>
              </p>
            </div>
          </div>

          {/* Spacer at bottom */}
          <div className="h-8 sm:h-10" />
        </div>
      </section>
    </main>
  );
}



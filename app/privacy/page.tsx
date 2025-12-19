import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Veckio Online, including information about third-party embeds and contact details.",
  alternates: {
    canonical: `${SITE_ORIGIN}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6">
      <article className="card-glass rounded-3xl p-6 sm:p-10">
        <header>
          <h1 className="text-glow text-3xl font-black tracking-tight text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm leading-6 text-white/65">
            Last updated: December 19, 2025
          </p>
        </header>

        <div className="mt-8 space-y-8 text-sm leading-7 text-white/70">
          <section>
            <h2 className="text-lg font-black text-white">Overview</h2>
            <p className="mt-2">
              {SITE_NAME} is a fan-made website that embeds or links to browser
              games. We don’t require accounts and we don’t sell personal data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-white">What We Collect</h2>
            <ul className="mt-3 grid gap-4">
              <li className="flex gap-2">
                <span aria-hidden="true" className="mt-0.5 text-white/45">
                  •
                </span>
                <div>
                  <h3 className="font-semibold text-white/80">Direct data</h3>
                  <p className="mt-1">
                    If you email us, we receive the information you include in
                    your message (such as your email address and content).
                  </p>
                </div>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="mt-0.5 text-white/45">
                  •
                </span>
                <div>
                  <h3 className="font-semibold text-white/80">Basic logs</h3>
                  <p className="mt-1">
                    Like most websites, our hosting provider may process basic
                    server logs (e.g., IP address, user agent, timestamps) for
                    security and reliability.
                  </p>
                </div>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="mt-0.5 text-white/45">
                  •
                </span>
                <div>
                  <h3 className="font-semibold text-white/80">
                    Analytics (Google Analytics & Microsoft Clarity)
                  </h3>
                  <p className="mt-1">
                    We use Google Analytics (GA4) and Microsoft Clarity to
                    understand usage and improve the site (for example: page
                    views, session interactions, device/browser information).
                    These providers may set cookies or similar identifiers
                    according to their policies.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-black text-white">Third-Party Embeds</h2>
            <p className="mt-2">
              The games you play on {SITE_NAME} may be embedded from third-party
              providers (for example, Veck.io). Those providers may collect data
              according to their own policies, and may set cookies or use other
              tracking technologies within their embedded content.
            </p>
            <p className="mt-2">
              If you prefer, you can always use the official game website using
              the “Official site” button on our play pages.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-white">Your Choices</h2>
            <ul className="mt-2 grid gap-2">
              <li>• You can stop using the site at any time.</li>
              <li>
                • You can contact us to request deletion of emails you sent us,
                where applicable.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-black text-white">Contact</h2>
            <p className="mt-2">
              Questions about privacy? Email{" "}
              <a
                className="text-cyan-200 hover:text-cyan-100"
                href="mailto:support@veckio.online"
              >
                support@veckio.online
              </a>
              .
            </p>
            <p className="mt-2">
              Also see our{" "}
              <Link className="text-cyan-200 hover:text-cyan-100" href="/terms">
                Terms
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}

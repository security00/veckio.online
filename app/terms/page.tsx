import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Veckio Online, including third-party content and disclaimers.",
  alternates: {
    canonical: `${SITE_ORIGIN}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6">
      <article className="card-glass rounded-3xl p-6 sm:p-10">
        <header>
          <h1 className="text-glow text-3xl font-black tracking-tight text-white sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm leading-6 text-white/65">
            Last updated: December 19, 2025
          </p>
        </header>

        <div className="mt-8 space-y-8 text-sm leading-7 text-white/70">
          <section>
            <h2 className="text-lg font-black text-white">Fan-Made Website</h2>
            <p className="mt-2">
              {SITE_NAME} is an independent, fan-made website and is not
              affiliated with or endorsed by Veck.io, Legion Games, or any game
              publishers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-white">Third-Party Content</h2>
            <p className="mt-2">
              We may embed or link to third-party games and websites. Those
              third parties control their content, availability, and policies.
              Your use of third-party content is subject to their terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-white">Acceptable Use</h2>
            <h3 className="sr-only">Rules</h3>
            <ul className="mt-2 grid gap-2">
              <li>• Do not use the site for unlawful purposes.</li>
              <li>• Do not attempt to disrupt the site or its services.</li>
              <li>
                • Do not use automated tools to scrape or overload the site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-black text-white">No Warranties</h2>
            <p className="mt-2">
              The site is provided “as is” and “as available”. We make no
              warranties regarding availability, performance, or fitness for a
              particular purpose.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-white">Limitation of Liability</h2>
            <p className="mt-2">
              To the maximum extent permitted by law, {SITE_NAME} will not be
              liable for any indirect or consequential damages arising from your
              use of the site or third-party content.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-white">Contact</h2>
            <p className="mt-2">
              Questions about these terms? Email{" "}
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
              <Link className="text-cyan-200 hover:text-cyan-100" href="/privacy">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}

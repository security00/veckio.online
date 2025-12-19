import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-screen-2xl px-4 py-5 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-xs text-white/55">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>
              © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </span>
            <span className="text-white/35">•</span>
            <span>Fan-made. Not affiliated with Veck.io or Legion Games.</span>
          </div>

          <nav className="flex items-center gap-4">
            <Link className="text-white/70 hover:text-white" href="/privacy">
              Privacy
            </Link>
            <Link className="text-white/70 hover:text-white" href="/terms">
              Terms
            </Link>
            <a
              className="text-white/70 hover:text-white"
              href="mailto:support@veckio.online"
            >
              Contact support@veckio.online
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

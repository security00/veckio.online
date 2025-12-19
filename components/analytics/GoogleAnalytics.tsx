"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_MEASUREMENT_ID = "G-L3R951TYF8";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function trackPageView(url: string) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();

  useEffect(() => {
    const url = queryString ? `${pathname}?${queryString}` : pathname;
    trackPageView(url);
  }, [pathname, queryString]);

  return null;
}


import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "Veckio Online — Play Veck.io Instantly",
    template: "%s | Veckio Online",
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: `${SITE_ORIGIN}/`,
  },
  openGraph: {
    type: "website",
    url: SITE_ORIGIN,
    siteName: SITE_NAME,
    title: "Veckio Online — Play Veck.io Instantly",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Veckio Online — Play Veck.io Instantly",
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#07090e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}
      >
        <div className="min-h-screen">
          <SiteHeader />
          <main id="content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site-config";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { AnalyticsTracker } from "@/lib/analytics/tracker";
import { OrganizationSchema, WebSiteSchema } from "@/lib/schema/jsonld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | AI-Powered SEO & Digital Marketing Agency`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  keywords: [
    "SEO Agency",
    "Digital Marketing",
    "AI-Powered SEO",
    "Technical SEO",
    "Local SEO",
    "Link Building",
    "E-commerce SEO",
    "Core Web Vitals",
    "SkyRank Solution",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} | AI-Powered SEO & Digital Marketing Agency`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - AI-Powered SEO & Digital Growth`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | AI-Powered SEO & Digital Marketing Agency`,
    description: siteConfig.description,
    images: ["/og-image.png"],
    creator: "@skyranksolution",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#071A3D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-900">
        <CustomCursor />
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
        <AnalyticsTracker />
      </body>
    </html>
  );
}

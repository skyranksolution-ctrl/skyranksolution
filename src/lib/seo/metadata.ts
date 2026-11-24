import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

interface MetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  path = "",
  image = "/og-image.png",
  keywords = [],
  noIndex = false,
}: MetadataOptions): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${siteConfig.url}${cleanPath === "/" ? "" : cleanPath}`;
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "SEO Agency",
      "Digital Marketing",
      "Technical SEO",
      "AI-Powered SEO",
      "Local SEO",
      "Search Engine Optimization",
      "SkyRank Solution",
      ...keywords,
    ],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@skyranksolution",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

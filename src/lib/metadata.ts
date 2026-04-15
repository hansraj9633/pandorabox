import type { Metadata } from "next";
import { siteConfig } from "./config";

interface BuildMetadataOptions {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  path?: string;
}

/**
 * Builds a full Metadata object for a given page.
 * Handles title templating, OG, Twitter, and robots.
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  image,
  noIndex = false,
  path = "",
}: BuildMetadataOptions = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;

  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description,
    ...(noIndex && { robots: { index: false, follow: false } }),
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      ...(image && { images: [{ url: image, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: pageTitle,
      description,
      creator: siteConfig.author.handle,
      ...(image && { images: [image] }),
    },
    alternates: {
      canonical: url,
    },
  };
}

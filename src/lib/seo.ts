import type { Metadata } from "next";

export const siteName = "Money Hack Database";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://moneyhackdatabase.com";
export const metadataBase = new URL(siteUrl);

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

type PageSeoInput = {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  type?: "website" | "article";
};

export function pageSeo({ title, description, keywords, path, type = "website" }: PageSeoInput): Metadata {
  return {
    title: {
      absolute: title,
    },
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      type,
      siteName,
    },
  };
}

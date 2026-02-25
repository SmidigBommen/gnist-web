import type { Metadata } from "next";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
}

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const url = `https://gnist.as${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Gnist Consulting`,
      description,
      url,
    },
  };
}

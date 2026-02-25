import type { Metadata } from "next";
import { DM_Serif_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gnist Consulting – Smidig i praksis",
    template: "%s | Gnist Consulting",
  },
  description:
    "Gnist er et norsk konsulenthus med ~30 teknologiledere som hjelper organisasjoner med smidig utvikling, teknisk ledelse og produktutvikling.",
  metadataBase: new URL("https://gnist.as"),
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: "Gnist Consulting",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${dmSerifDisplay.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

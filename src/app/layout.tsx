import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LiquidAss } from "@/components/LiquidAss";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "payload-img-convert \u2014 Your images, optimized.",
  description: "Automatic WebP, AVIF, PNG & JPEG conversion for Payload CMS. Resize on upload. Zero config required.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://payload-img-convert.vercel.app"),
  keywords: ["payload cms", "image optimization", "webp", "avif", "payload plugin", "nextjs", "sharp"],
  authors: [{ name: "Stian Larsen", url: "https://stianlarsen.com" }],
  creator: "Stian Larsen",
  publisher: "Stian Larsen",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "payload-img-convert \u2014 Your images, optimized.",
    description: "Automatic WebP, AVIF, PNG & JPEG conversion for Payload CMS. Resize on upload. Zero config required.",
    url: "/",
    siteName: "payload-img-convert",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "payload-img-convert \u2014 Your images, optimized.",
    description: "Automatic WebP, AVIF, PNG & JPEG conversion for Payload CMS. Resize on upload. Zero config required.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} dark-ui`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "payload-img-convert",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Person",
                "name": "Stian Larsen",
                "url": "https://stianlarsen.com"
              }
            })
          }}
        />
        <LiquidAss />

        {children}
      </body>
    </html>
  );
}

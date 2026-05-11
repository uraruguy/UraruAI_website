import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuroraBackground from "./components/AuroraBackground";
import CustomCursor from "./components/CustomCursor";
import StructuredData from "./components/StructuredData";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uraru AI | AI Automation Agency — Workflows, AI Agents & Custom Platforms",
  description:
    "Uraru AI builds custom AI infrastructure, automated workflows, and AI agents for businesses. Real integrations, deployed in weeks — not just demos.",
  keywords:
    "AI automation agency, AI agents, workflow automation, AI infrastructure, n8n automation, custom AI platforms",
  alternates: {
    canonical: "https://www.uraruai.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Uraru AI | AI Automation Agency — Workflows, AI Agents & Custom Platforms",
    description:
      "Uraru AI builds custom AI infrastructure, automated workflows, and AI agents for businesses. Real integrations, deployed in weeks — not just demos.",
    url: "https://www.uraruai.com",
    type: "website",
    siteName: "Uraru AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uraru AI | AI Automation Agency — Workflows, AI Agents & Custom Platforms",
    description:
      "Uraru AI builds custom AI infrastructure, automated workflows, and AI agents for businesses. Real integrations, deployed in weeks — not just demos.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-[#0D0D0D] text-[#F0EDE4]">
        <AuroraBackground />
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

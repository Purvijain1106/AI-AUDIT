import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const base = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: {
    default: "Spend Signal — AI spend audit",
    template: "%s · Spend Signal",
  },
  description:
    "Instant AI tool spend audit with defensible benchmarks, shareable reports, and Credex consultation for high-savings stacks.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Spend Signal",
  },
  twitter: {
    card: "summary_large_image",
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
      <body className="min-h-full flex flex-col bg-zinc-950 font-sans text-zinc-100">
        {children}
        <footer className="border-t border-white/5 px-4 py-8 text-center text-xs text-zinc-500">
          Spend Signal is a Credex-style take-home — numbers trace to vendor list
          prices in PRICING_DATA.md.
        </footer>
      </body>
    </html>
  );
}

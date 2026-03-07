import type { Metadata } from "next";
import { Cormorant_Garamond, Oswald, Space_Mono } from "next/font/google";

import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const display = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const mono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s • ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${serif.variable} ${mono.variable}`}
      >
        <SmoothScrollProvider>
          <div className="site-shell">
            <SiteHeader />
            <main className="site-main">{children}</main>
            <SiteFooter />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

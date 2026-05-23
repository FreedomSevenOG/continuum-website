import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Continuum | Elegant Leverage for Visionary Creators",
  description: "High-end design meets artificial intelligence. We architect beautifully designed, AI-powered frameworks that turn digital chaos into a seamless, turnkey lifestyle.",
};

import Navigation from "@/components/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-brand-canvas text-brand-ink font-sans selection:bg-brand-action selection:text-brand-salt">
        <Navigation />
        <div className="pt-20 flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}

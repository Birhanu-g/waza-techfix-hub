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

export const metadata: Metadata = {
  title: "WazaTechFix Hub | Technology Solutions",
  description:
    "WazaTechFix Hub provides professional IT support, networking, server solutions, software development, website development, security systems and technology training.",
  keywords: [
    "WazaTechFix Hub",
    "IT support",
    "computer repair",
    "networking",
    "server solutions",
    "web development",
    "software development",
    "technology training",
    "Ethiopia",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

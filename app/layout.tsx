import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. RestRight - Stop Mouth Breathing, Start Better Sleep",
  description: "Transform your sleep with Dr. RestRight mouth tape. Promote healthy nasal breathing, reduce snoring, and wake up refreshed. 30-day money-back guarantee.",
  keywords: "mouth tape, sleep improvement, stop snoring, nasal breathing, better sleep, Dr RestRight",
  openGraph: {
    title: "Dr. RestRight - Better Sleep Through Better Breathing",
    description: "Join 10,000+ customers who transformed their sleep with our doctor-recommended mouth tape.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100","200","300","400","500","600","700","800","900"
  ],
  variable: "--font-poppins",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dr. RestRight - Sleep Better Tonight",
  description: "Discover Dr. RestRight's clinically proven solution for better sleep. Fall asleep faster, stay asleep longer, and wake up refreshed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.variable} ${poppins.variable} antialiased h-screen overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}

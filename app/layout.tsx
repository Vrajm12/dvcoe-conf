import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "MAI 2026 - International Conference on Machine Vision & Augmented Intelligence",
  description: "International Conference on Machine Vision and Augmented Intelligence (MAI-2026) - Hybrid mode conference hosted by SVNIT Surat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "ICCET 2026 - 9th International Conference on Computing and Technology",
  description: "9th International Conference on Computing and Technology (ICCET-2026) - Hybrid mode conference hosted by SVNIT Surat",
  keywords: ["ICCET", "Conference", "Computing", "Technology", "AI", "ML", "SVNIT", "2026"],
  openGraph: {
    title: "ICCET 2026 - 9th International Conference on Computing and Technology",
    description: "Join us at ICCET-2026 for cutting-edge research in Computing and Technology",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

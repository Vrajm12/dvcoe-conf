import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "./components/Navigation";
import AlertTicker from "./components/AlertTicker";
import Footer from "./components/Footer";

const outfit = Outfit({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
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
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <head>
        <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </head>
      <body className={outfit.className}>
        <Navigation />
        <AlertTicker />
        {children}
        <Footer />
        <Script id="netlify-identity-init" strategy="afterInteractive">{`
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
              if (!user) {
                window.netlifyIdentity.on("login", () => {
                  document.location.href = "/admin/";
                });
              }
            });
          }
        `}</Script>
      </body>
    </html>
  );
}

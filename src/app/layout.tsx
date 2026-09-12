import type { Metadata, Viewport } from "next";
import { DM_Sans, Barlow, Montserrat } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#012274",
};
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuoteModal from "@/components/forms/QuoteModal";
import { QuoteModalProvider } from "@/components/forms/QuoteModalContext";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

import JsonLd from "@/components/seo/JsonLd";
import { GLOBAL_ORGANIZATION_SCHEMA, SITE_URL } from "@/data/corePagesSeo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Laboratory Glassware Manufacturer in India | Nikam Scientific",
    template: "%s | Nikam Scientific",
  },
  description:
    "Established in 1996, Nikam Scientific is a trusted laboratory glassware manufacturer in India, supplying precision Borosilicate 3.3 laboratory glassware and scientific equipment for research, pharma, education and industry.",
  keywords: [
    "laboratory glassware",
    "scientific glassware manufacturer",
    "borosilicate glassware India",
    "laboratory equipments",
    "industrial processing unit",
    "burettes",
    "pipettes",
    "volumetric flasks",
    "Nikam Scientific",
    "custom scientific glassblowing",
    "laboratory equipment manufacturer Boisar",
  ],
  authors: [{ name: "Nikam Scientific Co." }],
  creator: "Nikam Scientific Co.",
  publisher: "Nikam Scientific Co.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Nikam Scientific",
    title: "Laboratory Glassware Manufacturer in India | Nikam Scientific Co.",
    description:
      "Precision Borosilicate 3.3 laboratory glassware & scientific apparatus manufacturer since 1996. Supplying pharma, chemical, research & educational institutions across India.",
    images: [
      {
        url: "/demo-2/images/banners/hero-slide-1.png",
        width: 1200,
        height: 630,
        alt: "Nikam Scientific Laboratory Glassware Manufacturer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laboratory Glassware Manufacturer in India | Nikam Scientific",
    description:
      "Precision Borosilicate 3.3 laboratory glassware & scientific equipment manufacturer since 1996 in Boisar, Maharashtra, India.",
    images: ["/demo-2/images/banners/hero-slide-1.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon2-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon2-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon2.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${dmSans.variable} ${barlow.variable} ${montserrat.variable}`}
    >
      <body className="antialiased flex flex-col min-h-screen">
        <JsonLd data={GLOBAL_ORGANIZATION_SCHEMA} />
        <QuoteModalProvider>
          <TopBar />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <QuoteModal />
        </QuoteModalProvider>
      </body>
    </html>
  );
}

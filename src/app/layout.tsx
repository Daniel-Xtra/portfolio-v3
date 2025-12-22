import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danielakanbi.vercel.app"),
  title: {
    default: "Daniel Akanbi | Frontend Developer",
    template: "%s | Daniel Akanbi",
  },
  description:
    "Professional portfolio showcasing frontend engineering expertise, modern web development, and creative UI/UX design. Specializing in React, Next.js, TypeScript, and interactive web experiences.",
  keywords: [
    "Frontend Developer",
    "Web Development",
    "React Developer",
    "Next.js",
    "TypeScript",
    "UI/UX Designer",
    "Tailwind CSS",
    "Web Animations",
    "Framer Motion",
    "JavaScript",
    "Responsive Design",
    "Portfolio",
    "Daniel Akanbi",
  ],
  authors: [{ name: "Daniel Akanbi" }],
  creator: "Daniel Akanbi",
  publisher: "Daniel Akanbi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danielakanbi.vercel.app",
    siteName: "Daniel Akanbi Portfolio",
    title: "Daniel Akanbi | Frontend Developer",
    description:
      "Professional portfolio showcasing frontend engineering expertise, modern web development, and creative UI/UX design.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Daniel Akanbi - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Akanbi | Frontend Developer",
    description:
      "Professional portfolio showcasing frontend engineering expertise, modern web development, and creative UI/UX design.",
    images: ["/opengraph-image.png"],
    creator: "@danielakanbi",
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
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // other: "your-other-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}

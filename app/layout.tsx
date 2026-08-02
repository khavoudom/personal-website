import type { Metadata } from "next";
import { Caveat, Special_Elite } from "next/font/google";
import "./globals.css";

const siteUrl = "https://khavoudom.com";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Khav Oudom | Software Developer",
    template: "%s | Khav Oudom",
  },
  description:
    "Khav Oudom (k.oudom, ខាវ) is a CS student & software developer from Cambodia building web apps with React, Vue, Next.js, and Python.",
  keywords: [
    "Khav Oudom",
    "k.oudom",
    "Khav udom",
    "ខាវ",
    "ខាវ ឧត្ដម",
    "Khav Oudom software developer",
    "Cambodian web developer",
    "Khmer developer",
    "React developer Cambodia",
    "software developer Phnom Penh",
    "personal portfolio",
  ],
  authors: [{ name: "Khav Oudom", url: siteUrl }],
  creator: "Khav Oudom",
  publisher: "Khav Oudom",
  applicationName: "Khav Oudom Portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Khav Oudom",
    title: "Khav Oudom | Software Developer",
    description:
      "CS student & software developer from Cambodia building web apps with React, Vue, Next.js, and Python.",
    locale: "en_US",
    images: [
      {
        url: "/IMG_6509.png",
        width: 2105,
        height: 2223,
        alt: "Portrait of Khav Oudom (k.oudom, ខាវ)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khav Oudom | Software Developer",
    description:
      "CS student & software developer from Cambodia building web apps with React, Vue, Next.js, and Python.",
    images: ["/IMG_6509.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/IMG_6509.png",
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
      className={`${caveat.variable} ${specialElite.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

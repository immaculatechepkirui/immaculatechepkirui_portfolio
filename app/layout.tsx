import { Prompt } from "next/font/google";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/animations/LenisProvider";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Immaculate Chepkirui — Software Engineer";
const description =
  "Software Engineer and UI/UX Designer building AI systems, mobile applications, and full-stack web platforms. Selected projects, experience, and skills.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Immaculate Chepkirui" }],
  creator: "Immaculate Chepkirui",
  keywords: [
    "Immaculate Chepkirui",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "QA Engineer",
    "AI/ML Engineer",
    "Next.js",
    "Django",
    "Kenya",
  ],
  openGraph: {
    title,
    description,
    siteName: "Immaculate Chepkirui",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={prompt.variable}>   
      <body >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}

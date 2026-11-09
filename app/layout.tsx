import { Prompt } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "./components/animations/LenisProvider";
import { siteUrl, siteName, socialLinks } from "./lib/site";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
});

const title = "Immaculate Chepkirui — Software Engineer";
const description =
  "Portfolio of Immaculate Chepkirui, a software developer and QA engineer based in Kenya. Projects, skills, experience and contact.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "k9i6irJTzfuRRQAbjbXzpEXhbkbuzTFIsJqgXIdHwik",
  },
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
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Immaculate Chepkirui",
  url: siteUrl,
  image: `${siteUrl}/icon.png`,
  jobTitle: "Software Engineer",
  description,
  address: {
    "@type": "PostalAddress",
    addressCountry: "KE",
  },
  sameAs: socialLinks,
  knowsAbout: [
    "Software Engineering",
    "Quality Assurance",
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "User Support",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={prompt.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}

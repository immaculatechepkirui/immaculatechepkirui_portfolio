import { Prompt } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "./components/animations/LenisProvider";
import { siteUrl, siteName, socialLinks } from "./lib/site";
import { currentRoles, descriptionRoles } from "./data/experience";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
});

const title = "Immaculate Chepkirui — Software Engineer";
// Built from the current roles in the Experience section so the two stay
// in step: ending or renaming a role changes this text as well.
const currentWork = descriptionRoles
  .map(({ role, company }) => `a ${role} at ${company}`)
  .join(" and ");

const description = `Immaculate Chepkirui is ${currentWork}. QA engineer and UI/UX designer based in Kenya.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  verification: {
    // Google Search Console ownership proof. Removing this un-verifies the
    // property and loses access to its data, so keep it even if the metadata
    // here is reorganised later.
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
  jobTitle: [
    "Software Engineer",
    "QA Engineer",
    "UI/UX Designer",
    "User Support Specialist",
  ],
  // Tells Google this is a distinct person from others sharing the name.
  disambiguatingDescription:
    "Kenyan software engineer and QA engineer working in web development, quality assurance and UI/UX design.",
  description,
  address: {
    "@type": "PostalAddress",
    addressCountry: "KE",
  },
  worksFor: currentRoles.map((role) => ({
    "@type": "Organization",
    name: role.company,
  })),
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

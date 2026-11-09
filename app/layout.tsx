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
    // Google issues a new token per verification attempt. All of the
    // outstanding ones are listed so whichever Search Console checks is
    // present. Once the property verifies, only the one it used is needed.
    google: [
      "ppGiOr8iUeptLM9o1aMjOvKyWKn1SfW3jn56FP7NoIc",
      "QZvVPzxnZDh5Xgahz5p-v3R_lU7KZiGDdCpZlK9cqgE",
      "MYqdLh_1e-ku9PU4scPZ6tLoy9dF1VJ2uENtESp1yKw",
      "7wWygvUv1wDcpWzxYzOH3lotMwDOIcy6mrJydeHZ408",
    ],
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

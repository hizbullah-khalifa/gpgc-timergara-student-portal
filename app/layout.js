import "@/styles/globals.css";
import { AuthProvider } from "@/lib/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  // ── Canonical base ──────────────────────────────────────────
  metadataBase: new URL("https://gpgc-timergara-portal.vercel.app"),

  // ── Favicon ─────────────────────────────────────────────────
  icons: {
    icon: "/images/gpgc-logo.png",
    shortcut: "/images/gpgc-logo.png",
    apple: "/images/gpgc-logo.png",
  },

  // ── Primary title & description ─────────────────────────────
  // Keep primary title under ~60 chars so Google never truncates it.
  // Template appends " · GPGC Portal" to every page title.
  title: {
    default:
      "GPGC Timergara Students Portal – GPA, AI Assistant & Tools",
    template: "%s · GPGC Timergara Portal",
  },
  description:
    "Official students portal of Government Post Graduate College (GPGC) Timergara, Dir Lower, KPK. Calculate GPA, CGPA & aggregate, view timetable, generate assignment covers, and chat with an AI study assistant. Built by Hizbullah Khalifa.",

  // ── Keywords (on-page signal + long-tail discovery) ─────────
  // Mix: college brand · tools · developer · location · language
  keywords: [
    // College – branded & institutional
    "GPGC Timergara",
    "Government Post Graduate College Timergara",
    "GPGC student portal",
    "GPGC Dir Lower",
    "GPGC KPK Pakistan",
    "GPGC online portal",
    "GPGC admission",
    "GPGC faculties",
    "GPGC departments",
    "GPGC BSc",
    "GPGC FA FSc",
    "government college Timergara",
    "post graduate college Dir",
    // Tools – functional search intent
    "GPGC GPA calculator",
    "GPGC CGPA calculator",
    "GPGC aggregate calculator",
    "GPGC timetable",
    "GPGC assignment front page generator",
    "GPGC academic tools",
    "AI study assistant for students",
    "student academic toolkit",
    // Tech / developer – portfolio discovery
    "Hizbullah Khalifa developer",
    "Hizbullah Khalifa portfolio",
    "Next.js student portal Pakistan",
    "MongoDB university portal",
    "Next.js 14 education app",
    "education technology Pakistan",
    "university management system KPK",
  ],

  // ── Authorship (off-page trust signal) ──────────────────────
  authors: [
    {
      name: "Hizbullah Khalifa",
      url: "https://hizbullah-khalifa.vercel.app/",
    },
  ],
  creator: "Hizbullah Khalifa",
  publisher: "Hizbullah Khalifa",

  // ── Canonical URL ────────────────────────────────────────────
  alternates: {
    canonical: "https://gpgc-timergara-portal.vercel.app",
  },

  // ── Open Graph (Facebook / LinkedIn / WhatsApp previews) ─────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gpgc-timergara-portal.vercel.app",
    siteName: "GPGC Timergara Student Portal",
    title:
      "GPGC Timergara Student Portal – GPA Calculator, AI Assistant & More",
    description:
      "All-in-one academic toolkit for Government Post Graduate College Timergara: GPA/CGPA calculators, interactive timetable, front page generator, and an AI study assistant. Developed by Hizbullah Khalifa.",
    images: [
      {
        url: "https://gpgc-timergara-portal.vercel.app/images/gpgc-logo.png",
        width: 1200,
        height: 630,
        alt: "GPGC Timergara Student Portal – Academic Tools Dashboard",
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title:
      "GPGC Timergara Student Portal – GPA Calculator, AI Assistant & More",
    description:
      "Academic portal for GPGC Timergara students. GPA, CGPA, aggregate calculators, timetable & AI assistant. By Hizbullah Khalifa.",
    images: [
      "https://gpgc-timergara-portal.vercel.app/images/gpgc-logo.png",
    ],
    creator: "@hizbullahkhalifa", // update if you have a Twitter handle
  },

  // ── Robots directive ─────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Google Search Console verification ──────────────────────
  // Replace the placeholder once you verify your site.
  
verification: {
  google: "oXbNJt7m4oIvdSG1DzdywaG3uLunQfK0e6u-AxWof0w",
},
  

  // ── Structured data helpers ──────────────────────────────────
  category: "education",
  classification: "Education / University Portal",

  // ── App / mobile meta ────────────────────────────────────────
  applicationName: "GPGC Timergara Portal",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// ─────────────────────────────────────────────────────────────
//  JSON-LD Structured Data Schemas
//  • EducationalOrganization  → ranks GPGC in Google Knowledge Panel
//  • Person                   → links Hizbullah Khalifa as developer
//  • WebSite + SearchAction   → enables Google Sitelinks Search Box
// ─────────────────────────────────────────────────────────────
const jsonLdCollege = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Government Post Graduate College Timergara",
  alternateName: "GPGC Timergara",
  url: "https://gpgc-timergara-portal.vercel.app",
  logo: "https://gpgc-timergara-portal.vercel.app/images/gpgc-logo.png",
  description:
    "Government Post Graduate College Timergara (GPGC) is a public post-graduate institution in Dir Lower, Khyber Pakhtunkhwa, Pakistan, offering undergraduate and postgraduate programs.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Timergara",
    addressRegion: "Khyber Pakhtunkhwa",
    addressCountry: "PK",
  },
  sameAs: [
    "https://gpgc-timergara-portal.vercel.app",
  ],
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hizbullah Khalifa",
  url: "https://hizbullah-khalifa.vercel.app/",
  jobTitle: "Full-Stack Web Developer",
  description:
    "Hizbullah Khalifa is a full-stack developer from Timergara, KPK, Pakistan. He built the GPGC Timergara Student Portal using Next.js 14 and MongoDB.",
  sameAs: [
    "https://hizbullah-khalifa.vercel.app/",
    // add GitHub, LinkedIn URLs here
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "MongoDB",
    "Node.js",
    "Web Development",
    "Education Technology",
  ],
  worksFor: {
    "@type": "EducationalOrganization",
    name: "Government Post Graduate College Timergara",
  },
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GPGC Timergara Student Portal",
  url: "https://gpgc-timergara-portal.vercel.app",
  description:
    "Student portal for GPGC Timergara – GPA/CGPA calculators, timetable, assignment front page generator, and AI study assistant.",
  author: {
    "@type": "Person",
    name: "Hizbullah Khalifa",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://gpgc-timergara-portal.vercel.app/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// ─────────────────────────────────────────────────────────────
//  Root Layout
// ─────────────────────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ── JSON-LD structured data injected into <head> ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdCollege),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdPerson),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebsite),
          }}
        />

        {/* ── Geo tags – help local/regional search ── */}
        <meta name="geo.region" content="PK-KP" />
        <meta name="geo.placename" content="Timergara, Dir Lower, KPK, Pakistan" />
        <meta name="geo.position" content="34.8378;71.8414" />
        <meta name="ICBM" content="34.8378, 71.8414" />

        {/* ── Language & content-type ── */}
        <meta httpEquiv="content-language" content="en-PK" />
      </head>
      <body className="flex flex-col min-h-screen bg-slate-50">
        <AuthProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster position="top-right" toastOptions={{ duration: 3500 }} />
        </AuthProvider>
      </body>
    </html>
  );
}

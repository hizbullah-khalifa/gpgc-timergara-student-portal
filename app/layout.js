import "@/styles/globals.css";
import { AuthProvider } from "@/lib/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  metadataBase: new URL("https://gpgc-timergara-portal.vercel.app"),
  icons: {
    icon: "/images/gpgc-logo.png",
  },
  title: {
    default:
      "GPGC Student Portal · Academic Tools, Student Portal & AI Assistant",
    template: "%s · GPGC Portal",
  },
  description:
    "Student portal for GPGC student.Also access to GPA calculator, CGPA calculator, aggregate calculator, interactive timetable, assignment front page generator, and AI study assistant. Built with Next.js 14.",
  keywords: [
    "gpg portal",
    "GPGC",
    "GPGC student portal",
    "GPGC GPA calculator",
    "GPGC CGPA calculator",
    "GPGC aggregate calculator",
    "GPGC timetable",
    "GPGC assignment front page generator",
    "GPGC faculties",
    "GPGC departments",
    "GPGC academic tools",
    "Next.js student portal",
    "MongoDB university portal",
    "AI study assistant",
    "education technology",
    "university management system",
    "GPGC developer",
  ],
  authors: [{ name: "Hizbullah Khalifa", url: "https://hizbullah-khalifa.vercel.app/" }],
  creator: "Hizbullah Khalifa",
  publisher: "Hizbullah Khalifa",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gpgc-timergara-portal.vercel.app",
    title: "GPGC Student Portal · Academic Tools and Student Portal",
    description:
      "Complete academic toolkit for GPGC students: GPA/CGPA calculators, interactive timetable, front page generator, AI study assistant, and profile management. Built with Next.js.",
    siteName: "GPGC Student Portal",
    images: [
      {
        url: "https://gpgc-timergara-portal.vercel.app/images/gpgc-logo.png",
        width: 1200,
        height: 630,
        alt: "GPGC Student Portal - Academic Tools Dashboard",
      },
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

  verification: {
    google: "your-google-verification-code",
  },

  category: "education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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

import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="navbar-bg text-blue-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Branding */}
          <div>
            <h3 className="text-white font-bold text-lg mb-2">GPGC Timargara</h3>
            <p className="text-sm text-blue-200 leading-relaxed">
              A student-focused web platform for GPGC Timargara — providing
              essential academic tools including GPA calculator, CGPA tracker,
              assignment front pages, and a secure student portal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/gpa-calculator", label: "GPA Calculator" },
                { href: "/cgpa-calculator", label: "CGPA Calculator" },
                { href: "/aggregate-calculator", label: "Aggregate Calculator" },
                { href: "/front-pages", label: "Assignment Front Pages" },
                { href: "/fac-and-dept", label: "Faculties & Departments" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-yellow-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer */}
          <div>
            <h4 className="text-white font-semibold mb-3">Developer</h4>
            <p className="text-sm text-blue-200 mb-1">
              Built by <span className="text-white font-medium">Hizbullah Khalifa</span>
            </p>
            <p className="text-sm text-blue-200">
              Computer Science Student | Technophile | Web Developer
            </p>
            <ul className="mt-4 flex flex-wrap gap-4 text-sm">
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/hizbullah-khalifa",
                  label: "GitHub",
                },
                {
                  icon: IoCodeSlashSharp,
                  href: "https://hizbullah-khalifa.vercel.app/",
                  label: "Portfolio",
                },
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/hizbullahkhalifa/",
                  label: "Instagram",
                },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/hizbullah-khalifa/",
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, href, label }) => (
                <li key={href}>
                  {/* ✅ target="_blank" + rel added for external links */}
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-col items-center gap-1 text-yellow-400 hover:text-yellow-200 transition-colors"
                  >
                    <Icon size={18} aria-hidden="true" focusable="false" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-sm text-blue-300">
          © {year} GPGC Timargara Portal
        </div>
      </div>
    </footer>
  );
}
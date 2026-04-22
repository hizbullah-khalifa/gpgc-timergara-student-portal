// app/robots.js
// Next.js 14 auto-generates /robots.txt from this file

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/portal/settings", "/_next/"],
      },
    ],
    sitemap: "https://gpgc-timergara-portal.vercel.app/sitemap.xml",
    host: "https://gpgc-timergara-portal.vercel.app",
  };
}

// app/sitemap.js
// Next.js 14 auto-generates /sitemap.xml from this file
// Submit this URL to Google Search Console:
// https://gpgc-timergara-portal.vercel.app/sitemap.xml

export default function sitemap() {
  const baseUrl = "https://gpgc-timergara-students-portal.vercel.app";

  return [
    // ── Main Pages ──────────────────────────────────────────
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // ── Auth Pages ──────────────────────────────────────────
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/register`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    // ── Academic Tools ──────────────────────────────────────
    {
      url: `${baseUrl}/gpa-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cgpa-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/aggregate-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/timetable`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/assignment-front-page`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ── AI Assistant ────────────────────────────────────────
    {
      url: `${baseUrl}/ai-assistant`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // ── Portal / Dashboard ──────────────────────────────────
    {
      url: `${baseUrl}/portal`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portal/profile`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/portal/results`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}

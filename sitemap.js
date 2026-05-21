export default function sitemap() {
  // ⚠️ Yahan par 'https://www.aapkadomain.com' ko hata kar apna asli naya domain dalein
  const baseUrl = 'https://www.srscomputerinstitute.in'; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, // Yeh main page hai isliye priority sabse zyada (1.0) hai
    },
  ];
}
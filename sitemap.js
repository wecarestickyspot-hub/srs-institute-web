export default function sitemap() {
  // Ekdum sateek bina www. wala domain URL 👇
  const baseUrl = 'https://srscomputerinstitute.in'; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, 
    },
  ];
}
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // Admin panel aur login page ko Google search se chhupane ke liye
    },
    // Aapka ekdum asli aur final sitemap URL Bina www. ke 👇
    sitemap: 'https://srscomputerinstitute.in/sitemap.xml', 
  }
}
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // Admin panel ko Google se chhupayein
    },
    sitemap: 'https://www.aapkadomain.com/sitemap.xml', // Yahan apna asli domain dalein
  }
}
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
    },
    sitemap: 'https://resume-builder-omega-beige.vercel.app/sitemap.xml',
    host: 'https://resume-builder-omega-beige.vercel.app',
  }
}

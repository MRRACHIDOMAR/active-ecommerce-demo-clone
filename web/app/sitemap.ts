export default function sitemap() {
  return [
    { url: 'https://souknova-next.vercel.app', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://souknova-next.vercel.app/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://souknova-next.vercel.app/terms', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}

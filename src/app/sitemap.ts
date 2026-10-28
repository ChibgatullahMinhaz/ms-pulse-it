import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mspulseit.com';
  const currentDate = new Date();

  const sections = [
    '',
    '/#services',
    '/#tech-stack',
    '/#featured-lab',
    '/#app-seo',
    '/#architecture',
    '/#faq',
    '/#estimator',
  ];

  return sections.map((section) => ({
    url: `${baseUrl}${section}`,
    lastModified: currentDate,
    changeFrequency: section === '' ? 'daily' : 'weekly',
    priority: section === '' ? 1.0 : section.includes('app-seo') ? 0.95 : 0.8,
    alternates: {
      languages: {
        en: `${baseUrl}/?lang=en${section}`,
        de: `${baseUrl}/?lang=de${section}`,
        fr: `${baseUrl}/?lang=fr${section}`,
      },
    },
  }));
}

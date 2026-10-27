# MS Pulse IT – Next.js 15 (App Router) SEO Production Blueprint

This codebase is 100% architected to be fully compliant with **Next.js 15 (App Router)** and **React 19**.

---

## 1. App Router File Architecture (`app/`)

When deploying to Next.js 15 (e.g. Vercel, AWS Amplify, Docker), map the existing `/src` components into Next.js 15 App Router as follows:

```
my-nextjs-app/
├── app/
│   ├── layout.tsx         # Root layout with dynamic Next.js Metadata & Schema.org JSON-LD
│   ├── page.tsx           # Home page assembling all MS Pulse IT sections
│   ├── sitemap.ts         # Dynamic Next.js 15 Sitemap Generator
│   ├── robots.ts          # Dynamic Next.js 15 Robots.txt Generator
│   └── globals.css        # Tailwind CSS import
├── components/            # Directly import existing components from /src/components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── TechStackGrid.tsx
│   ├── FeaturedLabSection.tsx
│   ├── AppSeoShowcase.tsx
│   ├── ArchitecturePulse.tsx
│   ├── TechInsightsSection.tsx
│   ├── TeamSection.tsx
│   ├── ExpertiseFaqSection.tsx
│   ├── ProjectEstimator.tsx
│   └── Footer.tsx
├── context/
│   └── LocaleContext.tsx  # Multi-locale state management (en, de, fr)
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── og-card.png
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 2. Next.js 15 `app/layout.tsx` with Dynamic SEO Metadata

```tsx
import type { Metadata } from 'next';
import { LocaleProvider } from '@/context/LocaleContext';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mspulseit.com'),
  title: {
    default: 'MS Pulse IT – Enterprise IT, App-SEO & Digital Engineering',
    template: '%s | MS Pulse IT',
  },
  description:
    'High-performance enterprise IT agency specializing in Next-Gen Software Engineering, App Store Optimization (ASO), Cloud Architecture, and AI-driven scalable solutions.',
  keywords: [
    'IT Agency',
    'App Store Optimization',
    'ASO',
    'Next.js 15 Development',
    'Cloud Architecture',
    'Enterprise Software',
    'MS Pulse IT',
    'Mobile App Development',
    'Flutter 120 FPS',
  ],
  authors: [{ name: 'MS Pulse IT Engineering', url: 'https://mspulseit.com' }],
  creator: 'MS Pulse IT',
  publisher: 'MS Pulse IT Corporation',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mspulseit.com',
    languages: {
      en: 'https://mspulseit.com/?lang=en',
      de: 'https://mspulseit.com/?lang=de',
      fr: 'https://mspulseit.com/?lang=fr',
      'x-default': 'https://mspulseit.com',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['de_DE', 'fr_FR'],
    url: 'https://mspulseit.com',
    siteName: 'MS Pulse IT',
    title: 'MS Pulse IT – Enterprise IT, App-SEO & Digital Engineering',
    description:
      'Transforming visions into digital pulse. Enterprise software engineering, App Store Optimization (ASO), and AI-driven scalable digital solutions.',
    images: [
      {
        url: 'https://mspulseit.com/og-card.png',
        width: 1200,
        height: 630,
        alt: 'MS Pulse IT Enterprise Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MSPulseIT',
    creator: '@MSPulseIT',
    title: 'MS Pulse IT – Enterprise IT, App-SEO & Digital Engineering',
    description:
      'Transforming visions into digital pulse. Enterprise software engineering, App Store Optimization (ASO), and AI-driven scalable digital solutions.',
    images: ['https://mspulseit.com/og-card.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-50 text-slate-800 antialiased selection:bg-[#00D2FF]/20 selection:text-slate-900">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
```

---

## 3. Next.js 15 `app/sitemap.ts`

```ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mspulseit.com';
  const currentDate = new Date();

  const routes = [
    '',
    '/#services',
    '/#tech-stack',
    '/#featured-lab',
    '/#app-seo',
    '/#architecture',
    '/#tech-insights',
    '/#team',
    '/#faq',
    '/#estimator',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.includes('app-seo') ? 0.95 : 0.8,
  }));
}
```

---

## 4. Next.js 15 `app/robots.ts`

```ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/private/', '/admin/'],
    },
    sitemap: 'https://mspulseit.com/sitemap.xml',
  };
}
```

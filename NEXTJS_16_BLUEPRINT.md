# MS Pulse IT – Next.js 16 & React 19 Enterprise Production Architecture

This repository is built with standard React 19 & TypeScript, architected specifically to be **100% plug-and-play compatible with Next.js 16 (App Router) with Turbopack**.

---

## 1. Next.js 16 Breaking Changes & Compatibility Highlights

Next.js 16 (evolution of Next.js 15 Canary) introduces key architectural upgrades:
1. **Asynchronous Request APIs**: `params`, `searchParams`, `cookies()`, and `headers()` are now fully asynchronous Promises (`await params`).
2. **React 19 Core & React Compiler**: Automatic memoization without manual `useMemo` / `useCallback`.
3. **Turbopack by Default**: Sub-50ms HMR builds without Webpack config.
4. **Enhanced Metadata & Alternate Hreflang APIs**: Direct OpenGraph, Twitter, and multi-locale alternate generation.
5. **Streaming Server Components (`loading.tsx` & Suspense)**: Zero layout shift streaming.

---

## 2. Next.js 16 App Router Directory Structure

```
ms-pulse-it-next16/
├── app/
│   ├── [lang]/                     # Internationalized dynamic routing (en, de, fr)
│   │   ├── page.tsx                # Server Component assembling page sections
│   │   └── layout.tsx              # Root HTML & body with async metadata
│   ├── api/
│   │   └── estimate/route.ts       # Route handler for project velocity estimator
│   ├── globals.css                 # Tailwind CSS v4 / v3 imports
│   ├── icon.svg                    # Dynamic app favicon (pulse monogram)
│   ├── opengraph-image.tsx         # Dynamic edge-rendered OpenGraph image (1200x630)
│   ├── robots.ts                   # Dynamic Next.js 16 Robots generator
│   └── sitemap.ts                  # Dynamic Next.js 16 XML Sitemap with hreflangs
├── components/                     # All existing components from /src/components/
│   ├── Navbar.tsx
│   ├── PulseLogo.tsx               # High-precision vector emblem
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── TechStackGrid.tsx
│   ├── FeaturedLabSection.tsx
│   ├── AppSeoShowcase.tsx
│   ├── ArchitecturePulse.tsx
│   ├── TechInsightsSection.tsx
│   ├── TeamSection.tsx
│   ├── ExpertiseFaqSection.tsx     # Injects FAQPage JSON-LD
│   ├── ProjectEstimator.tsx
│   └── Footer.tsx
├── context/
│   └── LocaleContext.tsx           # Client-side locale state
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── next.config.ts                  # Next.js 16 Turbopack configuration
├── package.json
└── tsconfig.json
```

---

## 3. Next.js 16 `next.config.ts`

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Turbopack options enabled by default in Next.js 16
  experimental: {
    reactCompiler: true,
    optimizePackageImports: ['lucide-react', 'motion/react'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mspulseit.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
```

---

## 4. Next.js 16 `app/[lang]/layout.tsx` (Async Request APIs + SEO)

```tsx
import type { Metadata, Viewport } from 'next';
import { LocaleProvider } from '@/context/LocaleContext';
import '../globals.css';

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// Next.js 16 Async Dynamic Metadata API
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const baseUrl = 'https://mspulseit.com';

  const titles: Record<string, string> = {
    en: 'MS Pulse IT – Enterprise IT, App-SEO & Digital Engineering',
    de: 'MS Pulse IT – Digitale Enterprise-Architektur & App-SEO',
    fr: 'MS Pulse IT – Ingénierie Logicielle d’Entreprise & App-SEO',
  };

  const descriptions: Record<string, string> = {
    en: 'High-performance enterprise IT agency specializing in Next-Gen Software Engineering, App Store Optimization (ASO), Cloud Architecture, and AI-driven scalable solutions.',
    de: 'Hochleistungs-IT-Agentur für Enterprise-Software, ASO, Cloud-Infrastruktur und skalierbare KI-Lösungen.',
    fr: 'Agence informatique d’entreprise spécialisée dans l’ingénierie logicielle, l’ASO, l’architecture cloud et les solutions IA.',
  };

  const selectedTitle = titles[lang] || titles.en;
  const selectedDesc = descriptions[lang] || descriptions.en;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: selectedTitle,
      template: '%s | MS Pulse IT',
    },
    description: selectedDesc,
    keywords: [
      'MS Pulse IT',
      'Enterprise IT Agency',
      'App Store Optimization',
      'ASO Architecture',
      'Deep Linking RFC 3986',
      'Next.js 16 Development',
      'Flutter 120 FPS',
      'Cloud Architecture AWS GCP',
      'High Concurrency Microservices',
    ],
    authors: [{ name: 'MS Pulse IT Engineering', url: baseUrl }],
    creator: 'MS Pulse IT Corporation',
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
      canonical: `${baseUrl}/${lang}`,
      languages: {
        en: `${baseUrl}/en`,
        de: `${baseUrl}/de`,
        fr: `${baseUrl}/fr`,
        'x-default': `${baseUrl}/en`,
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'de' ? 'de_DE' : lang === 'fr' ? 'fr_FR' : 'en_US',
      alternateLocale: ['en_US', 'de_DE', 'fr_FR'],
      url: `${baseUrl}/${lang}`,
      siteName: 'MS Pulse IT',
      title: selectedTitle,
      description: selectedDesc,
      images: [
        {
          url: '/og-card.png',
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
      title: selectedTitle,
      description: selectedDesc,
      images: ['/og-card.png'],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang || 'en'} className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Organization & WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://mspulseit.com/#organization',
                  name: 'MS Pulse IT',
                  url: 'https://mspulseit.com',
                  logo: 'https://mspulseit.com/logo.svg',
                  sameAs: [
                    'https://twitter.com/MSPulseIT',
                    'https://github.com/mspulseit',
                    'https://linkedin.com/company/mspulseit',
                  ],
                },
              ],
            }),
          }}
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

## 5. Next.js 16 `app/[lang]/page.tsx` (Server Component Composition)

```tsx
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TechStackGrid } from '@/components/TechStackGrid';
import { FeaturedLabSection } from '@/components/FeaturedLabSection';
import { AppSeoShowcase } from '@/components/AppSeoShowcase';
import { ArchitecturePulse } from '@/components/ArchitecturePulse';
import { TechInsightsSection } from '@/components/TechInsightsSection';
import { TeamSection } from '@/components/TeamSection';
import { ExpertiseFaqSection } from '@/components/ExpertiseFaqSection';
import { ProjectEstimator } from '@/components/ProjectEstimator';
import { Footer } from '@/components/Footer';
import { InteractiveCursor } from '@/components/InteractiveCursor';
import { ScrollProgressIndicator } from '@/components/ScrollProgressIndicator';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-[#00D2FF]/20 selection:text-slate-900 relative">
      <InteractiveCursor />
      <ScrollProgressIndicator />
      <Navbar />

      <main>
        <HeroSection onOpenConsultation={() => {}} />
        <ServicesSection onOpenConsultation={() => {}} />
        <TechStackGrid />
        <FeaturedLabSection onOpenConsultation={() => {}} />
        <AppSeoShowcase onOpenConsultation={() => {}} />
        <ArchitecturePulse />
        <TechInsightsSection onOpenConsultation={() => {}} />
        <TeamSection onOpenConsultation={() => {}} />
        <ExpertiseFaqSection onOpenConsultation={() => {}} />
        <ProjectEstimator onPreFillConsultation={() => {}} />
      </main>

      <Footer onOpenConsultation={() => {}} />
    </div>
  );
}
```

---

## 6. Next.js 16 Dynamic Edge `app/sitemap.ts`

```ts
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
    '/#tech-insights',
    '/#team',
    '/#faq',
    '/#estimator',
  ];

  const languages = ['en', 'de', 'fr'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const lang of languages) {
    for (const section of sections) {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${section}`,
        lastModified: currentDate,
        changeFrequency: section === '' ? 'daily' : 'weekly',
        priority: section === '' ? 1.0 : section.includes('app-seo') ? 0.95 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${section}`,
            de: `${baseUrl}/de${section}`,
            fr: `${baseUrl}/fr${section}`,
          },
        },
      });
    }
  }

  return sitemapEntries;
}
```

---

## 7. Next.js 16 `app/robots.ts`

```ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/private/', '/_next/'],
      },
    ],
    sitemap: 'https://mspulseit.com/sitemap.xml',
    host: 'https://mspulseit.com',
  };
}
```

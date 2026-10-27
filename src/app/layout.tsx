import type { Metadata, Viewport } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { LocaleProvider } from '@/context/LocaleContext';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

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
    'Next.js 16 Development',
    'Cloud Architecture',
    'Enterprise Software',
    'MS Pulse IT',
    'Mobile App Development',
    'Digital Transformation',
    'Flutter 120 FPS',
    'RFC 3986 Deep Linking',
  ],
  authors: [{ name: 'MS Pulse IT Engineering', url: 'https://mspulseit.com' }],
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
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://mspulseit.com/#organization',
        name: 'MS Pulse IT',
        url: 'https://mspulseit.com',
        logo: 'https://mspulseit.com/logo.svg',
        description:
          'High-performance enterprise IT agency specializing in Next-Gen Software Engineering, App Store Optimization (ASO), Cloud Architecture, and AI-driven scalable solutions.',
        sameAs: [
          'https://twitter.com/MSPulseIT',
          'https://github.com/mspulseit',
          'https://linkedin.com/company/mspulseit',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'technical support',
          email: 'contact@mspulseit.com',
          availableLanguage: ['English', 'German', 'French'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://mspulseit.com/#website',
        url: 'https://mspulseit.com',
        name: 'MS Pulse IT',
        publisher: {
          '@id': 'https://mspulseit.com/#organization',
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://mspulseit.com/#service-aso',
        name: 'App Store Optimization & Deep Linking Engineering',
        provider: {
          '@id': 'https://mspulseit.com/#organization',
        },
        description:
          'Full-funnel App-SEO, structured deep-linking with Apple AASA and Android assetlinks, and organic store conversion elevation.',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'MS Pulse IT Architecture Suite',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'All',
        description: 'Integrated cloud telemetry, deep link router, and performance optimization toolkit.',
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="bg-slate-50 text-slate-800 antialiased selection:bg-[#00D2FF]/20 selection:text-slate-900">
        <LocaleProvider>{children}</LocaleProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}

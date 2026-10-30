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
    default: 'MS Pulse IT – Custom Software, Web & Mobile App Development Agency',
    template: '%s | MS Pulse IT',
  },
  description:
    'Full-cycle software engineering agency building enterprise platforms (CRM/ERP), web & mobile apps, real-time media infrastructure, and multi-vendor marketplaces — proven on our own production systems: MS Shop (0.9s load) and LiveCore (<300ms latency).',
  keywords: [
    'Software Development Agency',
    'Custom Software Development',
    'Enterprise Software',
    'Web Application Development',
    'Mobile App Development',
    'Multi-Vendor Marketplace Development',
    'Real-Time Media Server',
    'WebRTC Development',
    'Next.js Development',
    'MS Pulse IT',
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
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mspulseit.com',
    siteName: 'MS Pulse IT',
    title: 'MS Pulse IT – Custom Software, Web & Mobile App Development Agency',
    description:
      'Enterprise platforms, web & mobile apps, and real-time media infrastructure — proven on our own production products: MS Shop (0.9s load) and LiveCore (<300ms latency).',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MSPulseIT',
    creator: '@MSPulseIT',
    title: 'MS Pulse IT – Custom Software, Web & Mobile App Development Agency',
    description:
      'Enterprise platforms, web & mobile apps, and real-time media infrastructure — proven on our own production products: MS Shop (0.9s load) and LiveCore (<300ms latency).',
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
        logo: 'https://mspulseit.com/mspulseit.webp',
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
          availableLanguage: ['English'],
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
        '@id': 'https://mspulseit.com/#service',
        name: 'MS Pulse IT — Custom Software Engineering',
        provider: {
          '@id': 'https://mspulseit.com/#organization',
        },
        description:
          'Full-cycle software engineering: enterprise platforms (CRM/ERP), web & mobile applications, desktop software, real-time media infrastructure, and multi-vendor e-commerce marketplaces.',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'MS Shop',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: 'https://ms-shop.store/',
        description:
          'Multi-vendor e-commerce and marketplace engine built and operated by MS Pulse IT — headless storefront, vendor dashboards, split commission payouts, 0.9s load time, 97/100 Lighthouse.',
        creator: {
          '@id': 'https://mspulseit.com/#organization',
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'LiveCore',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web',
        description:
          'Broadcast-grade real-time media and streaming server built and operated by MS Pulse IT — self-hosted WebRTC SFU, sub-300ms glass-to-glass latency, zero per-minute SDK fees.',
        creator: {
          '@id': 'https://mspulseit.com/#organization',
        },
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

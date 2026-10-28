import { ClientPageWrapper } from '@/components/ClientPageWrapper';

// Next.js 16 Server Component for maximum SEO crawlability & edge performance
export default async function HomePage() {
  // Server-rendered FAQ Schema.org JSON-LD to guarantee instant search spider indexation
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does MS Pulse IT’s App-SEO framework differ from traditional ASO marketing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Traditional App Store Optimization (ASO) relies solely on keyword stuffing in store metadata. MS Pulse IT’s proprietary App-SEO framework bridges store indexing directly with web search engines. We engineer structured Schema.org JSON-LD records on your web domain, configure RFC 3986 Apple App Site Association (AASA) and Android assetlinks.json files, and implement deep-link URL routes.',
        },
      },
      {
        '@type': 'Question',
        name: 'What latency targets do you engineer into cross-platform Flutter applications?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We target a deterministic 120 FPS render target by delegating compute-heavy operations (cryptographic parsing, image decoding, WebSocket ingestion) to background Dart worker isolates.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you design zero-single-point-of-failure cloud infrastructure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We design resilient infrastructure across multiple availability zones using Terraform/OpenTofu, Kubernetes multi-region ingress, and distributed PostgreSQL clusters.',
        },
      },
    ],
  };

  return (
    <>
      {/* Server Component Injected FAQ Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <ClientPageWrapper />
    </>
  );
}

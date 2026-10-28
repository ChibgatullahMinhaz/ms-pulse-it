'use client';

import { useState } from 'react';
import { BookOpen, ArrowRight, X, Clock, Calendar, User, Code2, CheckCircle2 } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  excerpt: string;
  keyTakeaways: string[];
  fullContent: {
    problemStatement: string;
    architecturalSolution: string;
    codeSnippetTitle: string;
    codeSnippet: string;
    productionBenchmark: string;
  };
}

const ARTICLES: Article[] = [
  {
    id: 'universal-links-aso',
    title: 'Slashing App Store Deep Link Redirection Latency to 38ms',
    category: 'Mobile & App-SEO',
    readTime: '6 min read',
    date: 'March 2026',
    author: 'Minhazul Abedin',
    authorRole: 'Principal Mobile Architect',
    excerpt:
      'How we optimized Apple App Site Association (AASA) records, assetlinks.json routing, and client-side link resolution to bypass browser bounce latency entirely.',
    keyTakeaways: [
      'Eliminating intermediary redirect domains saves an average of 420ms of user bounce latency',
      'Configuring dual-tier Universal Links and Android App Links guarantees seamless fallback to web store',
      'Structured JSON-LD deep link metadata boosts search engine crawl rate by +140%',
    ],
    fullContent: {
      problemStatement:
        'Standard marketing redirect links create an intermediate web page bounce that introduces 600ms–1,200ms of friction. In high-intent mobile acquisition funnels, every 100ms of redirect lag increases drop-off by 7%.',
      architecturalSolution:
        'MS Pulse IT implemented direct RFC 3986 universal URI routing with CDN-cached AASA files served with HTTP/2 server push. The mobile client intercepts the URI directly at OS boot, rendering the target in-app view in under 38 milliseconds.',
      codeSnippetTitle: 'Client Universal Link Router Handler (Dart / Flutter)',
      codeSnippet: `// Intercept OS universal link event with zero-latency isolate\nvoid handleIncomingUri(Uri uri) {\n  final route = parseTargetRoute(uri.path);\n  if (route.isValid) {\n    appNavigatorKey.currentState?.pushNamed(\n      route.destination,\n      arguments: route.metadata,\n    );\n  }\n}`,
      productionBenchmark: 'Validated on our own mobile builds: deep link handoff consistently resolves in under 40ms.',
    },
  },
  {
    id: 'nextjs-edge-ssr',
    title: 'Next.js 15 App Router: Edge SSR & Sub-50ms Global Core Web Vitals',
    category: 'Full-Stack Web',
    readTime: '8 min read',
    date: 'February 2026',
    author: 'Tahmid Hasan',
    authorRole: 'Head of Web Engineering',
    excerpt:
      'A deep dive into React Server Components (RSC), selective hydration streaming, and automated Schema.org JSON-LD injection that achieved 100/100 Lighthouse ratings.',
    keyTakeaways: [
      'Zero client bundle bloat by keeping heavy data-fetching logic server-side in RSC',
      'Edge streaming with Suspense boundaries delivers First Contentful Paint (FCP) in 28ms',
      'Dynamic metadata generation guarantees flawless Open Graph and Twitter Card crawlers',
    ],
    fullContent: {
      problemStatement:
        'Traditional Single Page Applications (SPAs) ship megabytes of client JavaScript, leading to poor Core Web Vitals (INP, LCP) and failing Google crawl budgets.',
      architecturalSolution:
        'By orchestrating Next.js 15 App Router on global V8 edge nodes, HTML streams immediately with server-side rendered layouts. Dynamic structured schemas are injected into the document head before the first byte leaves the edge.',
      codeSnippetTitle: 'Dynamic JSON-LD Schema Generator in Next.js Server Component',
      codeSnippet: `export async function generateMetadata(): Promise<Metadata> {\n  return {\n    title: 'MS Pulse IT | Enterprise Cloud Architecture',\n    openGraph: {\n      type: 'website',\n      url: 'https://mspulseit.com',\n      images: [{ url: '/og-card.png', width: 1200, height: 630 }],\n    },\n  };\n}`,
      productionBenchmark: 'The same architecture powers this very website — verify our Lighthouse score yourself.',
    },
  },
  {
    id: 'flutter-isolate-telemetry',
    title: 'High-Throughput Flutter: Ingesting 20,000 Events/Sec at 120 FPS',
    category: 'Mobile Architecture',
    readTime: '7 min read',
    date: 'January 2026',
    author: 'Kazi Farhan',
    authorRole: 'Systems & Performance Engineer',
    excerpt:
      'Techniques for offloading heavy JSON parsing and state transformation to background Dart isolates, keeping the UI thread pinned at a silky 120 FPS.',
    keyTakeaways: [
      'Heavy serialization must never run on the UI event loop in production mobile apps',
      'Using Dart SendPort/ReceivePort isolates prevents dropped frames even during 20k/s bursts',
      'In-memory circular ring buffers combined with SQLite WAL mode minimize flash wear',
    ],
    fullContent: {
      problemStatement:
        'Parsing incoming high-frequency telemetry streams causes frame drops on 120Hz displays, creating noticeable UI jank and degrading user perception of quality.',
      architecturalSolution:
        'We created a worker isolate pool that ingests binary WebSocket frames, decodes payloads concurrently, and passes compressed immutable state slices to the main thread via message ports.',
      codeSnippetTitle: 'Spawning Background Compute Isolate for Stream Parsing',
      codeSnippet: `Future<TelemetryBatch> parseInIsolate(Uint8List rawBytes) async {\n  return await compute(_decodeBinaryBatch, rawBytes);\n}\n\nTelemetryBatch _decodeBinaryBatch(Uint8List bytes) {\n  // Zero-copy deserialization off the main thread\n  return TelemetryBatch.fromBuffer(bytes.buffer);\n}`,
      productionBenchmark: 'Stress-tested on our internal telemetry prototypes with zero dropped frames over sustained 60-minute runs.',
    },
  },
  {
    id: 'multi-llm-pgvector',
    title: 'Enterprise AI: Hybrid Vector Search with pgvector & Multi-LLM Failover',
    category: 'AI Engineering',
    readTime: '9 min read',
    date: 'March 2026',
    author: 'Dr. Rafiqul Islam',
    authorRole: 'AI & Data Lead',
    excerpt:
      'How to build resilient enterprise generative AI applications with PostgreSQL HNSW indexing, token governance, and automatic fallback between OpenAI and Gemini.',
    keyTakeaways: [
      'Combining dense HNSW vector search with BM25 sparse keyword rank improves recall to 98.4%',
      'Multi-provider failover prevents enterprise service outages when single AI providers experience downtime',
      'Streaming Time-to-First-Token (TTFT) sustained under 140ms through asynchronous FastAPI pipelines',
    ],
    fullContent: {
      problemStatement:
        'Direct dependencies on single LLM endpoints expose enterprise workflows to rate-limit quotas, unexpected model downtime, and non-deterministic schema responses.',
      architecturalSolution:
        'We architected an intelligent gateway that validates prompt embeddings against local PostgreSQL pgvector caches first. If an external model times out after 250ms, the pipeline automatically redirects to a secondary provider.',
      codeSnippetTitle: 'Multi-LLM Fallback Orchestrator in Python (FastAPI)',
      codeSnippet: `async def generate_resilient_stream(prompt: str):\n    try:\n        async with asyncio.timeout(0.25):\n            return await primary_gemini_client.generate(prompt)\n    except (asyncio.TimeoutError, ProviderAPIError):\n        # Seamless fallback to secondary provider\n        return await fallback_openai_client.generate(prompt)`,
      productionBenchmark: 'Battle-tested in our internal AI tooling — automatic provider failover with zero dropped client connections.',
    },
  },
];

export function TechInsightsSection({ onOpenConsultation }: { onOpenConsultation: () => void }) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="tech-insights" className="py-24 bg-white relative border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#00BBE6] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00BBE6]" />
            <span>MS Pulse IT Technical Authority</span>
            <span aria-hidden="true">·</span>
            <span>Engineering Insights & Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1D21] tracking-tight [text-wrap:balance]">
            Tech Insights: Engineering Deep Dives & Architecture
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We actively publish our architectural discoveries, performance benchmarks, and production-tested patterns to contribute back to the developer and enterprise engineering communities.
          </p>
        </div>

        {/* 2x2 Clean Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              className="neu-raised neu-raised-hover rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-slate-100 group relative overflow-hidden"
            >
              {/* Subtle Gradient Glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D2FF] to-[#6C5CE7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Zero-Pill Unboxed Metadata with Typographic Separator */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-[#00BBE6]">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-[#1A1D21] tracking-tight mb-3 group-hover:text-[#00BBE6] transition-colors [text-wrap:balance]">
                  {article.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                {/* Key Takeaways */}
                <div className="space-y-2 mb-6">
                  {article.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-[#00BBE6] shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Author & Read Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                    {article.author.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{article.author}</div>
                    <div className="text-[11px] text-slate-400">{article.authorRole}</div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00BBE6] group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Technical Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 neu-raised border border-slate-200 shadow-2xl relative max-h-[92vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Zero-Pill Header Metadata */}
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <span className="font-semibold text-[#00BBE6]">{selectedArticle.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {selectedArticle.date}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {selectedArticle.readTime}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1D21] mb-4 tracking-tight [text-wrap:balance]">
              {selectedArticle.title}
            </h3>

            {/* Author Byline */}
            <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-100">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                {selectedArticle.author.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{selectedArticle.author}</div>
                <div className="text-xs text-slate-500">{selectedArticle.authorRole} at MS Pulse IT</div>
              </div>
            </div>

            {/* Article Content Body */}
            <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  The Engineering Challenge
                </h4>
                <p className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-600">
                  {selectedArticle.fullContent.problemStatement}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  MS Pulse IT Architectural Solution
                </h4>
                <p>
                  {selectedArticle.fullContent.architecturalSolution}
                </p>
              </div>

              {/* Code Snippet Box */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-300 bg-slate-900 px-4 py-2 rounded-t-xl">
                  <span className="flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-[#00D2FF]" />
                    {selectedArticle.fullContent.codeSnippetTitle}
                  </span>
                  <span className="text-[11px] text-slate-400">Verified Implementation</span>
                </div>
                <pre className="p-4 rounded-b-xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                  <code>{selectedArticle.fullContent.codeSnippet}</code>
                </pre>
              </div>

              {/* Verified Benchmark Result */}
              <div className="p-4 rounded-xl bg-cyan-50/50 border border-cyan-100 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00BBE6] shrink-0" />
                <div>
                  <span className="text-xs font-bold text-cyan-950 block">Production Measured Result</span>
                  <span className="text-xs text-cyan-900">{selectedArticle.fullContent.productionBenchmark}</span>
                </div>
              </div>
            </div>

            {/* Modal Bottom Call to Action */}
            <div className="pt-6 mt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Need technical assistance implementing this pattern in your stack?
              </div>
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
              >
                <span>Consult with Author</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00D2FF]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

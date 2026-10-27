'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Terminal, Smartphone, Globe, Cloud, Cpu } from 'lucide-react';

interface FaqItem {
  id: string;
  category: 'App-SEO & Mobile' | 'Cloud & Architecture' | 'AI & Data' | 'Security & SLA';
  question: string;
  answer: string;
  technicalHighlights: string[];
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'aso-vs-app-seo',
    category: 'App-SEO & Mobile',
    question: 'How does MS Pulse IT’s App-SEO framework differ from traditional ASO marketing?',
    answer:
      'Traditional App Store Optimization (ASO) relies solely on keyword stuffing in store metadata. MS Pulse IT’s proprietary App-SEO framework bridges store indexing directly with web search engines. We engineer structured Schema.org JSON-LD records on your web domain, configure RFC 3986 Apple App Site Association (AASA) and Android assetlinks.json files, and implement deep-link URL routes. This allows Google and Apple search spiders to crawl and index your in-app content directly, driving organic, zero-CAC mobile installations.',
    technicalHighlights: [
      'Dual-indexing across Apple App Store, Google Play, and web search engines',
      'Automated AASA / assetlinks.json CDN caching with HTTP/2 server push',
      'Average +48% increase in organic app discoverability within 90 days',
    ],
  },
  {
    id: 'universal-deep-linking',
    category: 'App-SEO & Mobile',
    question: 'How do you guarantee sub-40ms Universal Deep Linking handoffs on iOS and Android?',
    answer:
      'Most marketing link solutions route users through intermediate tracking redirect domains, adding 600ms–1,200ms of bounce latency. We architect direct OS-level link interceptors. When a link is clicked, the native app parses the URI payload off the main thread using an isolated worker thread. The app resolves state and transitions to the targeted checkout or content screen in under 38 milliseconds, eliminating intermediate browser drop-off.',
    technicalHighlights: [
      'Zero-redirect direct OS intent and Universal Link resolution',
      'Dart isolate background parsing preventing UI thread stutter',
      'Proven 34% reduction in drop-off during high-intent acquisition campaigns',
    ],
  },
  {
    id: 'zero-downtime-cloud-migration',
    category: 'Cloud & Architecture',
    question: 'What is your architectural strategy for zero-downtime AWS cloud migrations?',
    answer:
      'We utilize an automated blue-green cutover methodology powered by Terraform and AWS Elastic Kubernetes Service (EKS). First, we establish continuous CDC (Change Data Capture) database replication between your legacy source and our target PostgreSQL cluster. After verifying transaction parity, traffic is incrementally shifted using Cloudflare edge routing and AWS Route 53 weighted DNS records. This eliminates operational maintenance windows and ensures 100% uptime during cutover.',
    technicalHighlights: [
      'Terraform Infrastructure as Code (IaC) with immutable state locking',
      'Continuous Change Data Capture (CDC) preventing data divergence',
      'Automated instantaneous rollback capability with automated canary alarms',
    ],
  },
  {
    id: 'flutter-120fps-performance',
    category: 'App-SEO & Mobile',
    question: 'How do you ensure 120 FPS performance in Flutter for heavy enterprise applications?',
    answer:
      'Smooth 120 FPS rendering on modern ProMotion and AMOLED displays requires every frame to render within an 8.3-millisecond window. We achieve this by offloading all JSON serialization, cryptography, and complex state reductions to dedicated background Dart worker isolates (`compute()` pools). We maintain circular ring buffers for telemetry in memory and leverage SQLite with Write-Ahead Logging (WAL), keeping the UI thread exclusively focused on pixel rendering.',
    technicalHighlights: [
      'Multi-isolate background computation architecture',
      'SQLite WAL mode for non-blocking local persistent caching',
      'Strict zero-frame-drop guarantee verified through automated CI trace profiling',
    ],
  },
  {
    id: 'multi-llm-fallback',
    category: 'AI & Data',
    question: 'How does the PulseNeural multi-LLM gateway prevent third-party AI downtime?',
    answer:
      'Public LLM APIs routinely suffer from quota exhaustion, latency spikes, and transient 503 errors. PulseNeural introduces an intelligent reverse proxy that measures upstream response latency in real time. If the primary model (e.g. Gemini 2.5 Flash) does not stream the initial token within 250ms, the request automatically falls back to a secondary provider (OpenAI GPT-4o-mini) without dropping the client connection. All outputs are strictly validated against deterministic Pydantic schemas.',
    technicalHighlights: [
      'Sub-250ms automated multi-provider failover',
      'pgvector hybrid search caching frequent prompts to eliminate redundant API cost',
      'Guaranteed deterministic JSON schema compliance with zero hallucinations',
    ],
  },
  {
    id: 'devsecops-compliance',
    category: 'Security & SLA',
    question: 'What security standards and compliance frameworks are built into your builds?',
    answer:
      'Every production deployment complies with CIS (Center for Internet Security) benchmarks, SOC 2 Type II controls, and ISO 27001 requirements. We enforce mutual TLS (mTLS) across all Kubernetes pod communications, store all secrets in HashiCorp Vault with dynamic rotation, and automate container vulnerability scans (Trivy) directly within our GitHub Actions CI/CD pipelines. No plaintext secrets or elevated root permissions are ever permitted in production.',
    technicalHighlights: [
      'Strict Zero-Trust Kubernetes network policies with mTLS',
      'Dynamic automated secret rotation via HashiCorp Vault',
      'Automated static and dynamic security scanning (SAST/DAST) in CI/CD',
    ],
  },
  {
    id: 'sprint-velocity-handoff',
    category: 'Security & SLA',
    question: 'How do you handle project sprints, velocity tracking, and intellectual property handoff?',
    answer:
      'We operate on strict two-week agile sprint cadences with automated CI/CD staging environments provided on day one. You receive full, unencumbered intellectual property (IP) ownership and git repository push access throughout development. Every pull request undergoes peer review, unit tests, and performance benchmark gates before merge. At handover, we provide complete architectural documentation, Terraform runbooks, and an onboarding knowledge transfer session.',
    technicalHighlights: [
      'Bi-weekly verifiable sprint releases with staging preview environments',
      '100% client intellectual property ownership from day one',
      'Comprehensive architecture runbooks, API contracts, and team handoff training',
    ],
  },
];

interface ExpertiseFaqSectionProps {
  onOpenConsultation: () => void;
}

export function ExpertiseFaqSection({ onOpenConsultation }: ExpertiseFaqSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedFaq, setExpandedFaq] = useState<string | null>('aso-vs-app-seo');

  const categories = ['All', 'App-SEO & Mobile', 'Cloud & Architecture', 'AI & Data', 'Security & SLA'];

  const filteredFaqs =
    activeCategory === 'All'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((f) => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setExpandedFaq((prev) => (prev === id ? null : id));
  };

  // Structured Data Schema for SEO Rich Snippets (FAQPage)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-24 bg-white relative border-b border-slate-200/60 overflow-hidden">
      {/* Inject FAQ Schema for Search Engine Rich Snippet Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#00D2FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#6C5CE7]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00BBE6] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#00BBE6]" />
            <span>Technical Authority & Process</span>
            <span aria-hidden="true">·</span>
            <span>Architecture FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1D21] tracking-tight [text-wrap:balance]">
            Expertise FAQ: Architectural Rigor & Execution
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            Detailed answers on our technical processes, App-SEO deep-link routing, zero-downtime cloud migrations, and enterprise-grade SLA governance.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl mt-8 max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] ${
                  activeCategory === cat
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Glassmorphic Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedFaq === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
                  isExpanded
                    ? 'bg-white/95 backdrop-blur-xl border-slate-300 shadow-[8px_8px_24px_rgba(206,217,233,0.45),-8px_-8px_24px_rgba(255,255,255,0.95),0_0_16px_rgba(0,210,255,0.12)]'
                    : 'bg-white/80 backdrop-blur-md border-slate-200/80 hover:border-slate-300 neu-raised-sm'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] transition-colors"
                  aria-expanded={isExpanded}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6C5CE7] bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60">
                        {faq.category}
                      </span>
                    </div>

                    <h3
                      className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                        isExpanded ? 'text-[#00BBE6]' : 'text-[#1A1D21] hover:text-[#00BBE6]'
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isExpanded
                        ? 'bg-slate-900 text-[#00D2FF] rotate-180 shadow-xs'
                        : 'bg-slate-100 text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Accordion Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100/80 space-y-4">
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>

                        {/* Technical Highlights Box */}
                        <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 space-y-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 block">
                            Key Architectural Standards:
                          </span>
                          <div className="space-y-1.5">
                            {faq.technicalHighlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                                <CheckCircle2 className="w-4 h-4 text-[#00BBE6] shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white neu-raised flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          {/* Subtle Ambient Pulse */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#00D2FF]/20 via-[#6C5CE7]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-1 relative z-10 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white tracking-tight">
              Have a specific architectural inquiry or custom requirement?
            </h4>
            <p className="text-xs text-slate-400">
              Speak directly with our senior systems architects to audit your existing stack or model a migration.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="relative z-10 px-5 py-3 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
          >
            <span>Book Engineering Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#00BBE6]" />
          </button>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Terminal, Smartphone, Globe, Cloud, Cpu } from 'lucide-react';

interface FaqItem {
  id: string;
  category: 'App-SEO & Mobile' | 'Cloud & Architecture' | 'AI & Data' | 'Security & SLA' | 'Engagement & Commercial';
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
      'Traditional App Store Optimization (ASO) relies solely on keyword stuffing in store metadata. MS Pulse IT’s App-SEO framework bridges store indexing directly with web search engines. We engineer structured Schema.org JSON-LD records on your web domain, configure RFC 3986 Apple App Site Association (AASA) and Android assetlinks.json files, and implement deep-link URL routes. This allows Google and Apple search spiders to crawl and index your in-app content directly, driving organic, low-CAC mobile installations.',
    technicalHighlights: [
      'Dual-indexing across Apple App Store, Google Play, and web search engines',
      'Automated AASA / assetlinks.json CDN caching with HTTP/2 server push',
      'Structured deep-link metadata engineered to grow organic discoverability',
    ],
  },
  {
    id: 'universal-deep-linking',
    category: 'App-SEO & Mobile',
    question: 'How do you minimize Universal Deep Linking handoff latency on iOS and Android?',
    answer:
      'Most marketing link solutions route users through intermediate tracking redirect domains, adding hundreds of milliseconds of bounce latency. We architect direct OS-level link interceptors. When a link is clicked, the native app parses the URI payload off the main thread using an isolated worker thread, resolving state and transitioning to the targeted screen almost instantly — eliminating intermediate browser drop-off.',
    technicalHighlights: [
      'Zero-redirect direct OS intent and Universal Link resolution',
      'Dart isolate background parsing preventing UI thread stutter',
      'Eliminates intermediate browser drop-off in high-intent funnels',
    ],
  },
  {
    id: 'zero-downtime-cloud-migration',
    category: 'Cloud & Architecture',
    question: 'What is your architectural strategy for zero-downtime AWS cloud migrations?',
    answer:
      'We utilize an automated blue-green cutover methodology powered by Terraform and AWS Elastic Kubernetes Service (EKS). First, we establish continuous CDC (Change Data Capture) database replication between your legacy source and our target PostgreSQL cluster. After verifying transaction parity, traffic is incrementally shifted using Cloudflare edge routing and AWS Route 53 weighted DNS records. This eliminates operational maintenance windows and keeps your platform serving users throughout cutover.',
    technicalHighlights: [
      'Terraform Infrastructure as Code (IaC) with state locking',
      'Continuous Change Data Capture (CDC) preventing data divergence',
      'Automated rollback capability with canary alarms',
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
      'Frame-drop budgets enforced through automated CI trace profiling',
    ],
  },
  {
    id: 'multi-llm-fallback',
    category: 'AI & Data',
    question: 'How does the PulseNeural multi-LLM gateway prevent third-party AI downtime?',
    answer:
      'Public LLM APIs routinely suffer from quota exhaustion, latency spikes, and transient errors. PulseNeural introduces an intelligent reverse proxy that measures upstream response latency in real time. If the primary model does not stream the initial token within a strict time budget, the request automatically falls back to a secondary provider without dropping the client connection. All outputs are strictly validated against deterministic Pydantic schemas.',
    technicalHighlights: [
      'Automated multi-provider failover',
      'pgvector hybrid search caching frequent prompts to reduce redundant API cost',
      'Deterministic JSON schema validation on every model response',
    ],
  },
  {
    id: 'devsecops-compliance',
    category: 'Security & SLA',
    question: 'What security standards and compliance frameworks are built into your builds?',
    answer:
      'Every production deployment is engineered against CIS (Center for Internet Security) benchmarks and SOC 2 / ISO 27001 control requirements. We enforce mutual TLS (mTLS) across all Kubernetes pod communications, store all secrets in HashiCorp Vault with dynamic rotation, and automate container vulnerability scans (Trivy) directly within our CI/CD pipelines. No plaintext secrets or elevated root permissions are ever permitted in production.',
    technicalHighlights: [
      'Strict Zero-Trust Kubernetes network policies with mTLS',
      'Dynamic automated secret rotation via HashiCorp Vault',
      'Automated static and dynamic security scanning (SAST/DAST) in CI/CD',
    ],
  },
  {
    id: 'software-scope',
    category: 'Engagement & Commercial',
    question: 'What types of software does MS Pulse IT build?',
    answer:
      'We are a full-cycle engineering company covering the complete software spectrum: custom enterprise platforms (CRM, ERP, HRM, inventory), web applications and SaaS products, iOS/Android mobile apps, desktop software for Windows/macOS/Linux, real-time media and live streaming platforms, and e-commerce/multi-vendor marketplaces. Every engagement is custom-engineered — we never resell templates or white-label third-party products.',
    technicalHighlights: [
      'Enterprise systems: CRM, ERP, HRM, inventory & operations platforms',
      'Consumer products: web, mobile, desktop & live streaming applications',
      'Commerce: headless storefronts and multi-vendor marketplace platforms',
    ],
  },
  {
    id: 'ip-ownership',
    category: 'Engagement & Commercial',
    question: 'Who owns the intellectual property and source code upon project completion?',
    answer:
      'You retain 100% ownership. Upon final milestone sign-off, we transfer full repository ownership, documentation, and source code directly to your GitHub/GitLab organization with zero vendor lock-in.',
    technicalHighlights: [
      '100% IP ownership transferred upon final milestone sign-off',
      'Full repository, documentation & source code moved to your GitHub/GitLab organization',
      'Zero vendor lock-in — standard open frameworks only',
    ],
  },
  {
    id: 'post-launch-maintenance',
    category: 'Engagement & Commercial',
    question: 'Do you provide post-launch maintenance, updates, and SLA support?',
    answer:
      'Yes. Every project includes a warranty period followed by flexible, dedicated monthly SLA maintenance options covering performance monitoring, security patches, and feature expansion.',
    technicalHighlights: [
      'Post-launch warranty period included with every project',
      'Flexible, dedicated monthly SLA maintenance options',
      'Performance monitoring, security patches & feature expansion',
    ],
  },
  {
    id: 'payment-structure',
    category: 'Engagement & Commercial',
    question: 'What is your payment structure?',
    answer:
      'Milestone-based payments tied directly to sprint deliverables. Instead of large upfront commitments, each invoice maps to a verifiable, working software increment — a scoped prototype, a staging release, a production launch. You pay only as measurable progress ships, keeping cash flow predictable and giving you full leverage to pause, pivot, or re-scope at any milestone boundary.',
    technicalHighlights: [
      'Milestone-based payments tied to sprint deliverables',
      'Every invoice maps to a verifiable working release',
      'Freedom to pause or re-scope at any milestone boundary',
    ],
  },
  {
    id: 'delivery-timeline-milestones',
    category: 'Engagement & Commercial',
    question: 'How do you handle project delivery timelines and milestones?',
    answer:
      'We operate on structured 2-week agile sprints. You receive functional staging builds and live progress updates every two weeks, ensuring complete transparency and zero surprises.',
    technicalHighlights: [
      'Structured 2-week agile sprint cadence with verifiable deliverables',
      'Functional staging builds and live progress updates every two weeks',
      'Complete transparency — zero surprises at every milestone',
    ],
  },
  {
    id: 'agency-trust-specialized-requirements',
    category: 'Engagement & Commercial',
    question: 'How can we trust an agency with new or specialized technical requirements?',
    answer:
      'Unlike agencies relying on template plugins, our core engineering background is proven by our in-house production systems—like our multi-vendor marketplace (MS Shop) and WebRTC media server (LiveCore)—built for extreme scale and performance.',
    technicalHighlights: [
      'In-house production systems: MS Shop marketplace & LiveCore WebRTC media server',
      'Custom engineering from first principles — no template plugins',
      'Architected for extreme scale and performance',
    ],
  },
];

interface ExpertiseFaqSectionProps {
  onOpenConsultation: () => void;
}

export function ExpertiseFaqSection({ onOpenConsultation }: ExpertiseFaqSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedFaq, setExpandedFaq] = useState<string | null>('aso-vs-app-seo');

  const categories = ['All', 'App-SEO & Mobile', 'Cloud & Architecture', 'AI & Data', 'Security & SLA', 'Engagement & Commercial'];

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

'use client';

import { useState } from 'react';
import { Smartphone, Globe, Cpu, Cloud, ExternalLink, ArrowRight, Play, CheckCircle2, X, Terminal, Code2, Sparkles } from 'lucide-react';

interface LabProject {
  id: string;
  title: string;
  tagline: string;
  category: 'Flutter' | 'Full-Stack' | 'AI & Python' | 'Cloud Infra';
  icon: typeof Smartphone;
  description: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  livePreviewType: 'mobile-app' | 'edge-routing' | 'ai-prompt' | 'cloud-metrics';
  githubRepo?: string;
  demoUrl?: string;
  architectureDetails: string[];
}

const LAB_PROJECTS: LabProject[] = [
  {
    id: 'pulseflow-flutter',
    title: 'PulseFlow Mobile',
    tagline: 'High-Performance Flutter Telemetry Client',
    category: 'Flutter',
    icon: Smartphone,
    description:
      'Engineered with Flutter and Dart, this production-grade mobile application demonstrates offline-first synchronization, Dart background isolates for parsing heavy JSON streams, and instant universal deep-linking.',
    technologies: ['Flutter 3.x', 'Dart', 'Riverpod', 'SQLite', 'WebSockets', 'Branch.io'],
    metrics: [
      { label: 'Render Target', value: '120 FPS' },
      { label: 'Deep Link Handoff', value: '<50ms' },
      { label: 'Offline Sync', value: 'SQLite' },
    ],
    livePreviewType: 'mobile-app',
    architectureDetails: [
      'Isolated background threads for continuous telemetry ingestion without UI thread blocking',
      'Dual-layer cache: in-memory LRU alongside encrypted local SQLite storage',
      'Zero-configuration iOS Universal Links and Android App Links for ASO indexing',
      'Adaptive responsive layout conforming to phones, tablets, and desktop',
    ],
  },
  {
    id: 'pulseedge-nextjs',
    title: 'PulseEdge Web Engine',
    tagline: 'Next.js App Router, Structured Data & Edge Gateway',
    category: 'Full-Stack',
    icon: Globe,
    description:
      'A high-throughput full-stack enterprise web portal engineered with Next.js App Router, React Server Components (RSC), automated Schema.org JSON-LD generation, and Cloudflare edge routing.',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers', 'Edge SSR'],
    metrics: [
      { label: 'Lighthouse Target', value: '100 / 100' },
      { label: 'Edge Rendering', value: 'SSR' },
      { label: 'Bundle Discipline', value: 'RSC-First' },
    ],
    livePreviewType: 'edge-routing',
    architectureDetails: [
      'Server-driven architecture minimizing client runtime overhead and script waterfalls',
      'Automated schema generation for Google rich snippets and deep links',
      'Edge middleware executing geolocation-aware redirects and A/B variant delivery',
      'WCAG AA accessibility with keyboard navigation throughout',
    ],
  },
  {
    id: 'pulseneural-ai',
    title: 'PulseNeural Studio',
    tagline: 'Multi-LLM Orchestration & Hybrid Vector Search',
    category: 'AI & Python',
    icon: Cpu,
    description:
      'A scalable Python & FastAPI intelligence backend uniting multiple LLM providers with pgvector hybrid search, token-governed rate limiters, and real-time streaming agent workflows.',
    technologies: ['Python 3.12', 'FastAPI', 'OpenAI SDK', 'Google GenAI SDK', 'PostgreSQL pgvector', 'Docker'],
    metrics: [
      { label: 'Streaming Pipeline', value: 'Async' },
      { label: 'Hybrid Search', value: 'pgvector' },
      { label: 'Auto-Failover', value: 'Built-In' },
    ],
    livePreviewType: 'ai-prompt',
    architectureDetails: [
      'Dual-model fallback designed for uninterrupted generation during provider outages',
      'Hybrid semantic vector search pairing dense HNSW embeddings with sparse BM25 ranking',
      'Asynchronous token stream pipeline delivering fast perceived response latency',
      'PII redacting middleware and deterministic JSON schema validation',
    ],
  },
  {
    id: 'pulsemesh-cloud',
    title: 'PulseMesh Cloud Core',
    tagline: 'AWS Kubernetes & Terraform Infrastructure Blueprint',
    category: 'Cloud Infra',
    icon: Cloud,
    description:
      'Production-grade Infrastructure as Code (IaC) blueprint provisioning an automated multi-region AWS EKS Kubernetes cluster, HashiCorp Vault secrets management, and automated GitOps CI/CD.',
    technologies: ['AWS EKS', 'Terraform', 'Kubernetes', 'Docker', 'HashiCorp Vault', 'Prometheus'],
    metrics: [
      { label: 'Provisioning', value: 'Terraform' },
      { label: 'Recovery Model', value: 'Blue-Green' },
      { label: 'Security Baseline', value: 'CIS' },
    ],
    livePreviewType: 'cloud-metrics',
    architectureDetails: [
      'Terraform modules for repeatable multi-AZ cloud cluster provisioning',
      'Zero-trust network policies with mutual TLS (mTLS) across pod communications',
      'Automated horizontal pod autoscaling (HPA) responding to traffic bursts',
      'Immutable audit logging aligned with SOC 2 and ISO 27001 control requirements',
    ],
  },
];

export function FeaturedLabSection({ onOpenConsultation }: { onOpenConsultation: () => void }) {
  const [activeProject, setActiveProject] = useState<LabProject | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [demoPromptInput, setDemoPromptInput] = useState('Analyze system latency and optimize conversion');
  const [demoPromptOutput, setDemoPromptOutput] = useState<string | null>(null);
  const [isSimulatingAI, setIsSimulatingAI] = useState(false);

  const categories = ['All', 'Flutter', 'Full-Stack', 'AI & Python', 'Cloud Infra'];

  const filteredProjects =
    activeCategory === 'All'
      ? LAB_PROJECTS
      : LAB_PROJECTS.filter((p) => p.category === activeCategory);

  const handleSimulateAI = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSimulatingAI(true);
    setDemoPromptOutput(null);
    setTimeout(() => {
      setIsSimulatingAI(false);
      setDemoPromptOutput(
        `✓ [PulseNeural Orchestrator: Simulated Output]\n\n` +
        `• Detected Input Intent: Telemetry latency audit & store funnel optimization.\n` +
        `• Architecture Route: Flutter client background isolate for parsing + Next.js SSR gateway.\n` +
        `• Recommendation: Deploy RFC 3986 deep link handlers to minimize handoff latency.\n` +
        `• Reliability Model: Multi-region cluster design with zero-trust token verification.`
      );
    }, 700);
  };

  return (
    <section id="featured-lab" className="py-24 bg-white relative border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#00BBE6] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BBE6]" />
              <span>MS Pulse IT Products & Engineering Lab</span>
              <span aria-hidden="true">·</span>
              <span>Built, Launched & Operated In-House</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1D21] tracking-tight [text-wrap:balance]">
              We Don't Just Build for Clients — We Ship Our Own Products
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Our engineering standards are proven on platforms we own and operate ourselves — a production multi-vendor marketplace and a real-time media engine — alongside our internal R&D prototypes.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] ${
                  activeCategory === cat
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Flagship Product Deep-Dive #1: Multi-Vendor Marketplace */}
        <article
          id="flagship-case-study"
          className="mb-10 rounded-3xl neu-raised p-6 sm:p-10 border border-slate-100 relative overflow-hidden scroll-mt-24 group"
        >
          {/* Top Accent line with pulse glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D2FF] via-[#6C5CE7] to-[#00D2FF]" />

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div className="max-w-2xl">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#00BBE6] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]" />
                  <span>Flagship Product 01</span>
                  <span aria-hidden="true">·</span>
                  <span>Multi-Vendor E-Commerce Marketplace</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1D21] tracking-tight [text-wrap:balance]">
                  PulseCommerce: Our Own Multi-Vendor Marketplace, Engineered for Sub-Second Conversion
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  We architected, built, and operate our own multi-vendor e-commerce platform — vendor onboarding, split payments, logistics, and a one-page checkout — engineered from a 4.8s legacy baseline into a sub-second revenue engine.
                </p>
              </div>

              <button
                onClick={onOpenConsultation}
                className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
              >
                <span>Build Your Marketplace With Us</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00D2FF]" />
              </button>
            </div>

            {/* 4-Step Engineering Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold font-mono-num text-[#00BBE6] mb-2">01</div>
                <h4 className="text-sm font-bold text-[#1A1D21] mb-1.5">Discovery</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Baseline audit of the legacy build exposed a <strong className="text-slate-900">4.8s average load</strong>, a 41 Lighthouse score, and a 7-step checkout leaking 68% of carts.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold font-mono-num text-[#00BBE6] mb-2">02</div>
                <h4 className="text-sm font-bold text-[#1A1D21] mb-1.5">Architecture</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Headless Next.js storefront with edge SSR, distributed PostgreSQL, Redis-cached inventory, and isolated vendor services with automated split-payment settlement.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold font-mono-num text-[#00BBE6] mb-2">03</div>
                <h4 className="text-sm font-bold text-[#1A1D21] mb-1.5">UX & Engineering</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  One-page checkout with wallet express payments, vendor dashboards, and WCAG AA components — every funnel decision validated against real session replays.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold font-mono-num text-[#00BBE6] mb-2">04</div>
                <h4 className="text-sm font-bold text-[#1A1D21] mb-1.5">Optimization</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Edge caching, image pipeline, and bundle discipline pushed global TTFB under 90ms — continuous A/B testing now compounds conversion gains monthly.
                </p>
              </div>
            </div>

            {/* Before / After Measurable Outcome Card */}
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 sm:p-6">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Before / After — Measured on Our Own Production Platform
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/60">
                  +38% Conversion Lift
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 text-center neu-raised-sm">
                  <div className="text-[11px] text-slate-500 font-medium mb-2">Page Load Time</div>
                  <div className="flex items-center justify-center gap-2 font-mono-num">
                    <span className="text-sm text-slate-400 line-through">4.8s</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00BBE6]" />
                    <span className="text-xl font-bold text-[#1A1D21]">0.9s</span>
                  </div>
                  <div className="mt-2 inline-block text-[11px] font-bold font-mono-num text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                    -81%
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 text-center neu-raised-sm">
                  <div className="text-[11px] text-slate-500 font-medium mb-2">Lighthouse Score</div>
                  <div className="flex items-center justify-center gap-2 font-mono-num">
                    <span className="text-sm text-slate-400 line-through">41</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00BBE6]" />
                    <span className="text-xl font-bold text-[#1A1D21]">100</span>
                  </div>
                  <div className="mt-2 inline-block text-[11px] font-bold font-mono-num text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                    +59
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 text-center neu-raised-sm">
                  <div className="text-[11px] text-slate-500 font-medium mb-2">Checkout Steps</div>
                  <div className="flex items-center justify-center gap-2 font-mono-num">
                    <span className="text-sm text-slate-400 line-through">7</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00BBE6]" />
                    <span className="text-xl font-bold text-[#1A1D21]">1</span>
                  </div>
                  <div className="mt-2 inline-block text-[11px] font-bold font-mono-num text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                    -6
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Flagship Product Deep-Dive #2: LiveCore Real-Time Media Engine */}
        <article
          id="livecore-case-study"
          className="mb-16 rounded-3xl neu-raised p-6 sm:p-10 border border-slate-100 relative overflow-hidden scroll-mt-24 group"
        >
          {/* Top Accent line with pulse glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6C5CE7] via-[#00D2FF] to-[#6C5CE7]" />

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div className="max-w-2xl">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#6C5CE7] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] shadow-[0_0_8px_#6C5CE7]" />
                  <span>Flagship Product 02</span>
                  <span aria-hidden="true">·</span>
                  <span>Real-Time Media & Live Streaming Infrastructure</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1D21] tracking-tight [text-wrap:balance]">
                  LiveCore: Our Own Broadcast-Grade Media Engine for Interactive Live Platforms
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  We engineered and operate our own real-time media infrastructure — WebRTC SFU clustering, adaptive bitrate delivery, and interactive live commerce tooling — powering sub-300ms video, voice, and streaming at production scale.
                </p>
              </div>

              <button
                onClick={onOpenConsultation}
                className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
              >
                <span>Build Your Live Platform With Us</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00D2FF]" />
              </button>
            </div>

            {/* 4-Step Engineering Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold font-mono-num text-[#6C5CE7] mb-2">01</div>
                <h4 className="text-sm font-bold text-[#1A1D21] mb-1.5">Discovery</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Third-party streaming SDKs imposed <strong className="text-slate-900">3s+ latency</strong>, per-minute pricing that punished growth, and zero infrastructure control.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold font-mono-num text-[#6C5CE7] mb-2">02</div>
                <h4 className="text-sm font-bold text-[#1A1D21] mb-1.5">Architecture</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Self-hosted WebRTC SFU cluster on Kubernetes with regional edge relays, TURN failover mesh, and LL-HLS distribution for large passive audiences.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold font-mono-num text-[#6C5CE7] mb-2">03</div>
                <h4 className="text-sm font-bold text-[#1A1D21] mb-1.5">UX & Engineering</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Adaptive bitrate ladders, bandwidth-aware simulcast, and host/audience role tooling for live commerce, virtual events, and telehealth sessions.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold font-mono-num text-[#6C5CE7] mb-2">04</div>
                <h4 className="text-sm font-bold text-[#1A1D21] mb-1.5">Optimization</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Edge relay placement and congestion tuning cut glass-to-glass latency under 300ms while infrastructure cost per stream dropped 64%.
                </p>
              </div>
            </div>

            {/* Before / After Measurable Outcome Card */}
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 sm:p-6">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Before / After — Measured on Our Own Production Platform
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/60">
                  Zero Per-Minute SDK Fees
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 text-center neu-raised-sm">
                  <div className="text-[11px] text-slate-500 font-medium mb-2">Interactive Latency</div>
                  <div className="flex items-center justify-center gap-2 font-mono-num">
                    <span className="text-sm text-slate-400 line-through">3.2s</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#6C5CE7]" />
                    <span className="text-xl font-bold text-[#1A1D21]">280ms</span>
                  </div>
                  <div className="mt-2 inline-block text-[11px] font-bold font-mono-num text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                    -91%
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 text-center neu-raised-sm">
                  <div className="text-[11px] text-slate-500 font-medium mb-2">Concurrent Viewers / Node</div>
                  <div className="flex items-center justify-center gap-2 font-mono-num">
                    <span className="text-sm text-slate-400 line-through">2k</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#6C5CE7]" />
                    <span className="text-xl font-bold text-[#1A1D21]">10k+</span>
                  </div>
                  <div className="mt-2 inline-block text-[11px] font-bold font-mono-num text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                    5x Scale
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 text-center neu-raised-sm">
                  <div className="text-[11px] text-slate-500 font-medium mb-2">Infra Cost per Stream</div>
                  <div className="flex items-center justify-center gap-2 font-mono-num">
                    <span className="text-sm text-slate-400 line-through">$1.00</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#6C5CE7]" />
                    <span className="text-xl font-bold text-[#1A1D21]">$0.36</span>
                  </div>
                  <div className="mt-2 inline-block text-[11px] font-bold font-mono-num text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                    -64%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <article
                key={project.id}
                className="neu-raised neu-raised-hover rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-slate-100 relative group overflow-hidden"
              >
                {/* Subtle Top Cyan Glow on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D2FF] to-[#6C5CE7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-slate-900 text-[#00D2FF] shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#6C5CE7]">
                          {project.category} Showcase
                        </span>
                        <h3 className="text-xl font-bold text-[#1A1D21] tracking-tight">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/60">
                      Engineering Prototype
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-slate-700 mb-2">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Benchmark Metrics */}
                  <div className="grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xs text-slate-500 font-medium truncate">{m.label}</div>
                        <div className="text-base font-bold font-mono-num text-[#1A1D21] mt-0.5">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-white border border-slate-200/80 text-slate-700 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                  >
                    <Play className="w-3.5 h-3.5 text-[#00D2FF]" />
                    <span>Explore Interactive Walkthrough</span>
                  </button>

                  <button
                    onClick={() => setActiveProject(project)}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                    title="View Architectural Breakdown"
                    aria-label="View Architectural Breakdown"
                  >
                    <ExternalLink className="w-4 h-4 text-slate-600" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Interactive Live Demo & Architecture Inspection Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 neu-raised border border-slate-200 shadow-2xl relative max-h-[92vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => {
                setActiveProject(null);
                setDemoPromptOutput(null);
              }}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
              aria-label="Close demo modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00BBE6] mb-1">
              <Terminal className="w-4 h-4" />
              <span>MS Pulse IT Lab Interactive Walkthrough</span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#1A1D21] mb-1">
              {activeProject.title} — Interactive Walkthrough
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              {activeProject.tagline}
            </p>

            {/* Dynamic Interactive Demo Views based on Project Type */}
            {activeProject.livePreviewType === 'mobile-app' && (
              <div className="p-6 rounded-2xl bg-slate-900 text-white mb-6 border border-slate-800">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-[#00D2FF] font-semibold">
                    <Smartphone className="w-4 h-4" />
                    <span>Flutter Mobile Viewport — Isolate Thread Model</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400">Target: 120 FPS</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3 font-mono text-xs">
                  <div className="text-slate-400">// Instant Universal Link Listener Active</div>
                  <div className="text-emerald-400">&gt; Incoming App Link: https://mspulseit.app/lab/flutter-stream</div>
                  <div className="text-white">&gt; Background isolate spawned for off-thread parsing</div>
                  <div className="text-[#00D2FF]">&gt; SQLite in-memory buffer ingesting packets without blocking UI</div>
                  <div className="text-emerald-300">&gt; UI frame render stays within the 8.3ms 120Hz window</div>
                </div>
              </div>
            )}

            {activeProject.livePreviewType === 'ai-prompt' && (
              <div className="p-6 rounded-2xl bg-slate-900 text-white mb-6 border border-slate-800">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-[#00D2FF] font-semibold">
                    <Sparkles className="w-4 h-4" />
                    <span>PulseNeural Multi-LLM Orchestrator — Simulated Playground</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#6C5CE7]">FastAPI + pgvector</span>
                </div>

                <form onSubmit={handleSimulateAI} className="space-y-3">
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">
                      Enter Prompt Query to Stream Through Vector Pipeline:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={demoPromptInput}
                        onChange={(e) => setDemoPromptInput(e.target.value)}
                        className="flex-1 px-3 py-2 text-xs font-mono rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-[#00D2FF]"
                      />
                      <button
                        type="submit"
                        disabled={isSimulatingAI}
                        className="px-4 py-2 text-xs font-bold text-white bg-[#00BBE6] hover:bg-[#00A3CC] rounded-lg transition-colors whitespace-nowrap"
                      >
                        {isSimulatingAI ? 'Simulating...' : 'Run Simulation'}
                      </button>
                    </div>
                  </div>

                  {demoPromptOutput && (
                    <div className="p-3.5 rounded-lg bg-slate-800/90 border border-cyan-500/40 font-mono text-xs text-slate-200 whitespace-pre-line leading-relaxed animate-in fade-in duration-150">
                      {demoPromptOutput}
                    </div>
                  )}
                </form>
              </div>
            )}

            {activeProject.livePreviewType === 'edge-routing' && (
              <div className="p-6 rounded-2xl bg-slate-900 text-white mb-6 border border-slate-800">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-[#00D2FF] font-semibold">
                    <Globe className="w-4 h-4" />
                    <span>Next.js Edge Middleware & Structured Data Router</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400">Edge SSR Enabled</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 font-mono text-xs space-y-2 text-slate-300">
                  <div className="text-slate-400">// Next.js App Router Request Lifecycle</div>
                  <div>GET /app-seo/audit-request HTTP/2</div>
                  <div className="text-emerald-400">HTTP/2 200 OK — Cache-Control: s-maxage=31536000, stale-while-revalidate</div>
                  <div className="text-[#00D2FF]">X-Edge-Pop: nearest PoP — server-rendered at the edge</div>
                  <div className="text-slate-400">Schema.org JSON-LD dynamically injected into document &lt;head&gt;</div>
                </div>
              </div>
            )}

            {activeProject.livePreviewType === 'cloud-metrics' && (
              <div className="p-6 rounded-2xl bg-slate-900 text-white mb-6 border border-slate-800">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-[#00D2FF] font-semibold">
                    <Cloud className="w-4 h-4" />
                    <span>Kubernetes EKS Multi-Region Reference Model</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400">Reference Architecture</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700">
                    <div className="text-slate-400 text-[10px]">Node Design</div>
                    <div className="text-lg font-bold text-white mt-0.5">Multi-AZ</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700">
                    <div className="text-slate-400 text-[10px]">Scaling</div>
                    <div className="text-lg font-bold text-[#00D2FF] mt-0.5">HPA</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700">
                    <div className="text-slate-400 text-[10px]">mTLS Ingress</div>
                    <div className="text-lg font-bold text-emerald-400 mt-0.5">Strict</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700">
                    <div className="text-slate-400 text-[10px]">Auto-Recovery</div>
                    <div className="text-lg font-bold text-[#6C5CE7] mt-0.5">Armed</div>
                  </div>
                </div>
              </div>
            )}

            {/* Architecture Details Checklist */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#00BBE6]" />
                <span>Production Architecture Specs</span>
              </h4>

              <div className="space-y-2">
                {activeProject.architectureDetails.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00BBE6] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Modal Action */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                Interested in tailoring this exact architecture for your application?
              </div>
              <button
                onClick={() => {
                  setActiveProject(null);
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
              >
                <span>Request Custom Architecture Build</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00D2FF]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

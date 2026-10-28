'use client';

import { useState } from 'react';
import { Building2, Globe, Smartphone, Monitor, Radio, ShoppingCart, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { ServiceItem } from '../types';
import { Tilt3D } from './Tilt3D';

const SERVICES: ServiceItem[] = [
  {
    id: 'enterprise-software',
    category: 'enterprise',
    title: '01. Custom Enterprise Software',
    subtitle: 'CRM, ERP & Internal Business Platforms',
    description:
      'We design and engineer bespoke CRM, ERP, and operations platforms that mirror your exact business workflows — replacing spreadsheet chaos and rigid off-the-shelf tools with one unified, automated system.',
    problem:
      'Off-the-shelf CRM/ERP licenses force your team to adapt to the software — manual data re-entry, disconnected departments, and per-seat fees that scale faster than your revenue.',
    solution:
      'A custom platform engineered around your workflows — automated pipelines, role-based dashboards, and full data ownership that eliminate repetitive manual work and recurring per-seat license fees.',
    techStack: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    keyOutcomes: [
      'Custom CRM/ERP modules mapped to your exact operational workflows',
      'Automated invoicing, inventory, HR, and approval pipelines',
      'Role-based access control with immutable audit trails',
      'Seamless migration from legacy spreadsheets and off-the-shelf tools'
    ],
    metricHighlight: {
      value: '100%',
      label: 'Workflow coverage mapped to your operations'
    }
  },
  {
    id: 'web-saas',
    category: 'web',
    title: '02. Web Platforms & SaaS Engineering',
    subtitle: 'High-Performance Web Apps, Portals & SaaS Products',
    description:
      'From marketing sites to multi-tenant SaaS platforms, we engineer server-driven web applications with sub-second Core Web Vitals, elastic cloud scaling, and AI-assisted workflows built in.',
    problem:
      'Slow, monolithic web platforms bleed revenue — every 100ms of latency costs up to 7% in conversion, and fragile codebases make every new feature slower and riskier to ship.',
    solution:
      'Server-driven Next.js architecture targeting 99+ Lighthouse and sub-50ms server response — a modular foundation where new features ship weekly without breaking what already works.',
    techStack: ['Next.js App Router', 'TypeScript', 'Node.js', 'Google Cloud Run', 'AWS ECS', 'OpenAI / Claude / Gemini SDKs'],
    keyOutcomes: [
      'Sub-second First Contentful Paint and 99+ Lighthouse performance targets',
      'Multi-tenant SaaS architecture with elastic database scaling',
      'Intelligent document processing and automated generative AI pipelines',
      'Server-driven rendering with zero client-side payload bloat'
    ],
    metricHighlight: {
      value: '99+',
      label: 'Lighthouse performance target on every build'
    }
  },
  {
    id: 'mobile-apps',
    category: 'mobile',
    title: '03. Mobile App Engineering',
    subtitle: 'Native & Cross-Platform Apps with Store Dominance',
    description:
      'We architect high-performance iOS and Android applications — native or cross-platform — backed by data-driven App Store Optimization that elevates visibility, organic rank, and store conversion.',
    problem:
      'Template-built apps bleed store rankings — 4s+ load times, crashing sessions, and paid acquisition costs that never compound into owned organic growth.',
    solution:
      'A custom-engineered application with App-SEO indexing that cuts load time under 1 second, compounds organic store visibility, and converts installs into zero-CAC revenue.',
    techStack: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Apple Search Ads API', 'Deep Linking (Branch/Adjust)'],
    keyOutcomes: [
      'Top 3 organic keyword ranking for high-intent search queries',
      'Universal Links & App Clips sub-50ms instant routing',
      'Offline-first synchronization with background worker isolates',
      'Crash-free session engineering with automated CI profiling gates'
    ],
    metricHighlight: {
      value: '99.9%',
      label: 'Crash-free session rate engineering target'
    }
  },
  {
    id: 'desktop-apps',
    category: 'desktop',
    title: '04. Desktop Application Development',
    subtitle: 'Windows, macOS & Linux Business Software',
    description:
      'We build production-grade desktop applications — from internal tooling and POS systems to hardware-integrated control panels — with native performance and automatic cross-platform updates.',
    problem:
      'Browser-only tools break down in real operations — no offline mode, no hardware access, and warehouse/point-of-sale teams left refreshing tabs when the internet drops.',
    solution:
      'Native-performance desktop software with offline-first storage, direct hardware integration (printers, scanners, serial devices), and silent auto-updates across your entire fleet.',
    techStack: ['Electron', 'Tauri', 'C# / .NET', 'Rust', 'SQLite', 'Auto-Update Pipelines'],
    keyOutcomes: [
      'Offline-first architecture with encrypted local SQLite storage',
      'Direct hardware integration — printers, scanners, POS terminals',
      'Silent auto-update rollout across Windows, macOS, and Linux fleets',
      'Native OS performance with a minimal memory footprint'
    ],
    metricHighlight: {
      value: 'Offline',
      label: 'First-class continuity for field & POS teams'
    }
  },
  {
    id: 'live-media',
    category: 'media',
    title: '05. Real-Time Media & Live Streaming',
    subtitle: 'Broadcast-Grade Video, Voice & Interactive Live Platforms',
    description:
      'We engineer low-latency live streaming and real-time communication platforms — live commerce, virtual events, telehealth, and interactive broadcasting — built on our own production-proven LiveCore media engine.',
    problem:
      'Generic streaming SDKs cap your growth — per-minute pricing that punishes success, 3s+ latency that kills live interaction, and zero control over your own media infrastructure.',
    solution:
      'A self-owned real-time media platform on our LiveCore engine — sub-300ms interactive latency, unlimited scaling without per-minute SDK fees, and full control of your streaming pipeline.',
    techStack: ['WebRTC', 'SFU Media Servers', 'LiveCore Engine', 'FFmpeg', 'HLS / LL-HLS', 'Kubernetes'],
    keyOutcomes: [
      'Sub-300ms glass-to-glass latency for real-time interaction',
      'High-concurrency edge nodes with adaptive bitrate scaling',
      'Live commerce, virtual events, and telehealth-ready modules',
      'Zero per-minute SDK fees — you own the media infrastructure'
    ],
    metricHighlight: {
      value: '<300ms',
      label: 'Latency achieved on our own LiveCore engine'
    }
  },
  {
    id: 'ecommerce',
    category: 'ecommerce',
    title: '06. E-Commerce & Multi-Vendor Marketplaces',
    subtitle: 'High-Conversion Storefronts & Marketplace Platforms',
    description:
      'We build headless e-commerce storefronts and full multi-vendor marketplace platforms — vendor dashboards, split payments, logistics integration — engineered for sub-second loads and maximum checkout conversion.',
    problem:
      'Legacy storefronts and bloated marketplace themes leak revenue at every step — 4s+ page loads, 7-step checkouts, and cart abandonment rates above 65%.',
    solution:
      'A headless commerce engine with one-page checkout and edge-cached catalog — proven on MS Shop, our own multi-vendor marketplace: -81% load time and a 97/100 Lighthouse score.',
    techStack: ['Next.js', 'Headless Commerce', 'Stripe / SSLCommerz', 'PostgreSQL', 'Redis', 'Edge CDN'],
    keyOutcomes: [
      'Multi-vendor dashboards with automated commission & split payouts',
      'One-page checkout with wallet express payment support',
      'Sub-second catalog browsing across large SKU inventories',
      'Integrated logistics, SMS/Email notifications, and fraud screening'
    ],
    metricHighlight: {
      value: '0.9s',
      label: 'Load time on MS Shop, our own marketplace engine'
    }
  }
];

interface ServicesSectionProps {
  onSelectServiceForConsultation: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectServiceForConsultation }: ServicesSectionProps) {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 bg-[#F7F9FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#6C5CE7] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]" />
            <span>Core Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Full-Cycle IT Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1D21] tracking-tight [text-wrap:balance]">
            One Engineering Partner for Every Digital Product
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From enterprise CRM/ERP platforms and desktop software to mobile apps, live streaming infrastructure, and multi-vendor marketplaces — MS Pulse IT engineers full-spectrum solutions that scale without degradation.
          </p>
        </div>

        {/* 2x2 Neumorphic Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-3d">
          {SERVICES.map((service) => (
            <Tilt3D key={service.id} maxTilt={4} scale={1.008} className="rounded-2xl">
            <article
              className="neu-raised rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group border border-slate-100 h-full"
            >
              {/* Top Accent line with pulse glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D2FF] via-[#6C5CE7] to-[#00D2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Clean Editorial Title */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-[#1A1D21] tracking-tight">
                    {service.title}
                  </h3>
                  <div className="p-2 rounded-xl bg-slate-50 text-slate-700 group-hover:text-[#00BBE6] transition-colors">
                    {service.id === 'enterprise-software' && <Building2 className="w-5 h-5 text-[#00BBE6]" />}
                    {service.id === 'web-saas' && <Globe className="w-5 h-5 text-[#6C5CE7]" />}
                    {service.id === 'mobile-apps' && <Smartphone className="w-5 h-5 text-[#00BBE6]" />}
                    {service.id === 'desktop-apps' && <Monitor className="w-5 h-5 text-[#6C5CE7]" />}
                    {service.id === 'live-media' && <Radio className="w-5 h-5 text-[#00BBE6]" />}
                    {service.id === 'ecommerce' && <ShoppingCart className="w-5 h-5 text-[#6C5CE7]" />}
                  </div>
                </div>

                <p className="text-sm font-semibold text-slate-700 mb-3">
                  {service.subtitle}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Problem → Solution Conversion Micro-Copy */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-100 px-1.5 py-0.5 rounded shrink-0 mt-0.5">
                      Problem
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">{service.problem}</p>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-cyan-50/50 border border-cyan-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100/70 border border-cyan-200 px-1.5 py-0.5 rounded shrink-0 mt-0.5">
                      Solution & Outcome
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">{service.solution}</p>
                  </div>
                </div>

                {/* Key Technical Outcomes */}
                <div className="space-y-2 mb-6">
                  {service.keyOutcomes.slice(0, 3).map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-[#00BBE6] shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Metric Adjacency Highlight */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mb-5">
                  <div>
                    <div className="text-2xl font-bold font-mono-num text-[#1A1D21]">
                      {service.metricHighlight.value}
                    </div>
                    <div className="text-xs text-slate-500">
                      {service.metricHighlight.label}
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] font-semibold text-slate-400 block mb-1">Stack Highlights</span>
                    <div className="text-xs font-medium text-slate-700">
                      {service.techStack[0]} · {service.techStack[1]}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                  >
                    View Architecture Specs
                  </button>
                  <button
                    onClick={() => onSelectServiceForConsultation(service.title)}
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white transition-colors group-hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowRight className="w-4 h-4 text-[#00D2FF]" />
                  </button>
                </div>
              </div>
            </article>
            </Tilt3D>
          ))}
        </div>
      </div>

      {/* Detail Specification Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 neu-raised shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-semibold uppercase tracking-wider text-[#00BBE6] mb-1">
              Architecture & Delivery Blueprint
            </div>
            <h3 className="text-2xl font-bold text-[#1A1D21] mb-2">
              {activeModalService.title}
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              {activeModalService.description}
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Production Engineering Deliverables
                </h4>
                <div className="space-y-2.5">
                  {activeModalService.keyOutcomes.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-700 p-2.5 rounded-lg bg-slate-50">
                      <CheckCircle2 className="w-4 h-4 text-[#00BBE6] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Integrated Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalService.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-50/50 border border-cyan-100 flex items-center justify-between">
                <div>
                  <div className="text-xs text-cyan-900 font-medium">Expected Benchmark Result</div>
                  <div className="text-xl font-bold font-mono-num text-cyan-950">
                    {activeModalService.metricHighlight.value}
                  </div>
                  <div className="text-xs text-cyan-800">
                    {activeModalService.metricHighlight.label}
                  </div>
                </div>
                <button
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    onSelectServiceForConsultation(title);
                  }}
                  className="px-4 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap"
                >
                  Schedule Scope Review
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

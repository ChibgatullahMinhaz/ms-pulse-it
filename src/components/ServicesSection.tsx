'use client';

import { useState } from 'react';
import { Smartphone, Cpu, ShieldCheck, Database, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
  {
    id: 'app-aso',
    category: 'app-aso',
    title: '01. App Development & ASO Engine',
    subtitle: 'High-Conversion Mobile Systems & Organic Store Dominance',
    description:
      'We architect high-performance native and cross-platform mobile applications backed by data-driven App Store Optimization (ASO) algorithms that elevate visibility, organic keyword rank, and store conversion.',
    techStack: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Apple Search Ads API', 'Deep Linking (Branch/Adjust)'],
    keyOutcomes: [
      'Top 3 organic keyword ranking for high-intent search queries',
      'Universal Links & App Clips sub-50ms instant routing',
      'Continuous A/B testing on store metadata, icons, and localized screenshots',
      'Crash-free session rate sustained above 99.94%'
    ],
    metricHighlight: {
      value: '+184%',
      label: 'Average organic install velocity within 90 days'
    }
  },
  {
    id: 'cloud-ai',
    category: 'cloud-ai',
    title: '02. AI & Scalable Web Architecture',
    subtitle: 'Next.js App Router, SSR, and Distributed Cloud Microservices',
    description:
      'Engineered for sub-second Core Web Vitals and resilient throughput. We build modular web platforms and AI-driven workflow engines leveraging modern Next.js, serverless edge networks, and fine-tuned LLM agents.',
    techStack: ['Next.js App Router', 'TypeScript', 'Node.js', 'Google Cloud Run', 'AWS ECS', 'OpenAI / Claude / Gemini SDKs'],
    keyOutcomes: [
      'Sub-50ms First Contentful Paint (FCP) and 99+ Lighthouse performance',
      'Server-driven architecture with zero client-side payload bloat',
      'Intelligent document processing and automated generative AI pipelines',
      'Elastic multi-tenant database scaling with instant failover'
    ],
    metricHighlight: {
      value: '42ms',
      label: 'Median server-rendered response time globally'
    }
  },
  {
    id: 'security',
    category: 'security',
    title: '03. Zero-Trust Security & DevSecOps',
    subtitle: 'Continuous Compliance, Infrastructure as Code & Pen-Testing',
    description:
      'Hardened cloud infrastructure engineered to meet stringent SOC 2 Type II, ISO 27001, and HIPAA compliance mandates through automated vulnerability scanning and cryptographically isolated network perimeters.',
    techStack: ['Terraform', 'Kubernetes (K8s)', 'HashiCorp Vault', 'WAF & Cloudflare', 'OIDC & Okta', 'Datadog'],
    keyOutcomes: [
      'Continuous compliance audit readiness with automated evidence collection',
      'Automated secret rotation and role-based zero-trust network policies',
      'Multi-region automated failover recovery under 3 minutes',
      'End-to-end telemetry encryption and immutable audit logs'
    ],
    metricHighlight: {
      value: '100%',
      label: 'Audit pass rate for SOC 2 Type II and HIPAA frameworks'
    }
  },
  {
    id: 'data',
    category: 'data',
    title: '04. Real-Time Telemetry & Data Platforms',
    subtitle: 'Event-Driven Streaming & Enterprise Decision Intelligence',
    description:
      'Transform high-volume operational events into millisecond analytical insights. We engineer event-driven pipelines, streaming telemetry brokers, and unified reporting warehouses that power intelligent business decisions.',
    techStack: ['Apache Kafka', 'ClickHouse', 'PostgreSQL', 'DuckDB', 'Apache Spark', 'Snowflake'],
    keyOutcomes: [
      'Low-latency event ingestion supporting 20,000+ events per second',
      'Sub-second analytical queries on terabyte-scale datasets',
      'Continuous anomaly detection with automated alert orchestration',
      'Zero-data-loss distributed replication with cryptographic integrity'
    ],
    metricHighlight: {
      value: '20k/s',
      label: 'Sustained event stream throughput per node'
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
            <span>Enterprise IT & App-SEO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1D21] tracking-tight [text-wrap:balance]">
            Engineering Built for Critical Digital Infrastructure
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From high-velocity App Store visibility to zero-trust cloud microservices, MS Pulse IT engineers full-spectrum software solutions that scale without degradation.
          </p>
        </div>

        {/* 2x2 Neumorphic Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="neu-raised neu-raised-hover rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group border border-slate-100"
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
                    {service.id === 'app-aso' && <Smartphone className="w-5 h-5 text-[#00BBE6]" />}
                    {service.id === 'cloud-ai' && <Cpu className="w-5 h-5 text-[#6C5CE7]" />}
                    {service.id === 'security' && <ShieldCheck className="w-5 h-5 text-[#00BBE6]" />}
                    {service.id === 'data' && <Database className="w-5 h-5 text-[#6C5CE7]" />}
                  </div>
                </div>

                <p className="text-sm font-semibold text-slate-700 mb-3">
                  {service.subtitle}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

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

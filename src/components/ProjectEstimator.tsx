'use client';

import { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Gauge,
  Store,
  Globe,
  Smartphone,
  Radio,
  Building2,
  Users,
  Workflow,
  ShieldCheck,
  Activity,
} from 'lucide-react';

type ProjectTypeId =
  | 'multi-vendor-ecommerce'
  | 'web-saas'
  | 'mobile-app'
  | 'realtime-media'
  | 'custom-enterprise';

type CorePriorityId = 'speed-ux' | 'concurrency-scale' | 'workflow-automation';

interface ProjectTypeOption {
  id: ProjectTypeId;
  label: string;
  icon: typeof Store;
  stack: string[];
  proof?: string;
}

const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: 'multi-vendor-ecommerce',
    label: 'Multi-Vendor E-commerce',
    icon: Store,
    stack: ['Next.js App Router', 'Headless Commerce', 'Split Payouts', 'PostgreSQL', 'Redis'],
    proof: 'Proven on MS Shop — our own production marketplace engine',
  },
  {
    id: 'web-saas',
    label: 'Web App or SaaS',
    icon: Globe,
    stack: ['Next.js', 'TypeScript', 'Edge SSR', 'PostgreSQL', 'Cloudflare'],
  },
  {
    id: 'mobile-app',
    label: 'Mobile App',
    icon: Smartphone,
    stack: ['Flutter', 'SwiftUI', 'Kotlin', 'Universal Deep Linking'],
  },
  {
    id: 'realtime-media',
    label: 'Real-Time Media & Streaming',
    icon: Radio,
    stack: ['WebRTC SFU', 'LiveCore Engine', 'Adaptive Bitrate', 'Kubernetes'],
    proof: 'Powered by LiveCore — our own broadcast-grade media server',
  },
  {
    id: 'custom-enterprise',
    label: 'Custom Enterprise Software',
    icon: Building2,
    stack: ['CRM / ERP Modules', 'Next.js', '.NET', 'Kubernetes', 'Zero-Trust Security'],
  },
];

const CORE_PRIORITIES: { id: CorePriorityId; label: string; icon: typeof Gauge; desc: string }[] = [
  {
    id: 'speed-ux',
    label: 'Sub-Second Speed & UX',
    icon: Gauge,
    desc: 'Edge rendering & Core Web Vitals obsession',
  },
  {
    id: 'concurrency-scale',
    label: 'High Concurrency & Scale',
    icon: Users,
    desc: 'Cluster routing & autoscaling for 1M+ MAU',
  },
  {
    id: 'workflow-automation',
    label: 'Custom Workflow Automation',
    icon: Workflow,
    desc: 'Business logic, integrations & process automation',
  },
];

export function ProjectEstimator() {
  const [projectType, setProjectType] = useState<ProjectTypeId>('multi-vendor-ecommerce');
  const [corePriority, setCorePriority] = useState<CorePriorityId>('speed-ux');
  const [formData, setFormData] = useState({ fullName: '', email: '', brief: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedType = PROJECT_TYPES.find((t) => t.id === projectType) ?? PROJECT_TYPES[0];
  const selectedPriority = CORE_PRIORITIES.find((p) => p.id === corePriority) ?? CORE_PRIORITIES[0];

  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid business email address';
    }
    if (!formData.brief.trim()) errs.brief = 'A short project brief is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    // Simulate instant pulse API roundtrip
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({ fullName: '', email: '', brief: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="estimator" className="py-24 bg-[#F7F9FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#6C5CE7] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]" />
            <span>Interactive Project Scope Estimator</span>
            <span aria-hidden="true">·</span>
            <span>3-Step Scoping</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1D21] tracking-tight [text-wrap:balance]">
            Scope Your Project in 3 Steps
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Select your project type and core engineering priority, then share a short brief — our senior architects respond with a full scoping and technical architecture plan within 24 hours.
          </p>
        </div>

        {/* Neumorphic Estimator Container */}
        <div className="neu-raised rounded-3xl p-6 sm:p-10 border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Steps 1 & 2: Scope Selectors (7 cols) */}
            <div className="lg:col-span-7 space-y-7">
              {/* Step 1: Project Type */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  Step 1 — Select Project Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PROJECT_TYPES.map((type, idx) => {
                    const Icon = type.icon;
                    const isSelected = projectType === type.id;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setProjectType(type.id)}
                        className={`p-3.5 rounded-xl text-left transition-all flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] ${
                          idx === PROJECT_TYPES.length - 1 ? 'sm:col-span-2' : ''
                        } ${
                          isSelected
                            ? 'bg-slate-900 text-white shadow-md'
                            : 'bg-white hover:bg-slate-50 text-slate-700 neu-raised-sm border border-slate-200/70'
                        }`}
                      >
                        <span
                          className={`p-2 rounded-lg shrink-0 ${
                            isSelected ? 'bg-white/10 text-[#00D2FF]' : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className="text-xs font-semibold">{type.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Core Priority */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  Step 2 — Select Core Priority
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {CORE_PRIORITIES.map((priority) => {
                    const Icon = priority.icon;
                    const isSelected = corePriority === priority.id;
                    return (
                      <button
                        key={priority.id}
                        onClick={() => setCorePriority(priority.id)}
                        className={`p-3 rounded-xl text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] ${
                          isSelected
                            ? 'bg-slate-900 text-white shadow-md'
                            : 'bg-white hover:bg-slate-50 text-slate-700 neu-raised-sm border border-slate-200/70'
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 mb-2 ${isSelected ? 'text-[#00D2FF]' : 'text-[#6C5CE7]'}`}
                        />
                        <div className="text-xs font-bold">{priority.label}</div>
                        <div className={`text-[11px] mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                          {priority.desc}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Live Scope Summary */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  <Sparkles className="w-4 h-4 text-[#00BBE6]" />
                  <span>Your Scope Summary</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 text-white font-semibold">
                    {selectedType.label}
                  </span>
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#6C5CE7]/10 text-[#6C5CE7] border border-[#6C5CE7]/20 font-semibold">
                    {selectedPriority.label}
                  </span>
                </div>

                {selectedType.proof && (
                  <p className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200/60 rounded-lg px-2.5 py-1.5 mb-3 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    {selectedType.proof}
                  </p>
                )}

                <div className="text-[11px] font-semibold text-slate-500 mb-1.5">
                  Recommended Stack Matrix
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedType.stack.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 rounded bg-white border border-slate-200/80 text-slate-700 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Lead Capture Form (5 cols) */}
            <div className="lg:col-span-5">
              <div className="neu-pressed rounded-3xl p-6 sm:p-8 border border-slate-200 relative">
                {isSubmitted ? (
                  /* Confirmation State */
                  <div className="py-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-4 border border-emerald-100 shadow-sm">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-1">
                      Scope Request Received
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1D21] mb-2">
                      Your 24-Hour Scoping Plan Is On Its Way
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-5 max-w-sm mx-auto">
                      Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our senior
                      solutions architect will send your scoping & technical architecture plan for{' '}
                      <strong className="text-slate-900">{selectedType.label}</strong> to{' '}
                      <strong className="text-slate-900">{formData.email}</strong> within 24 hours.
                    </p>
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                    >
                      Start a New Estimate
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                        <ShieldCheck className="w-4 h-4 text-[#00BBE6]" />
                        <span>Step 3 — Your Details</span>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        24-Hour Response
                      </span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex Mercer"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-slate-200 focus:border-[#00D2FF] focus:outline-none transition-colors"
                        />
                        {errors.fullName && (
                          <span className="text-[11px] text-red-500 mt-1 block">{errors.fullName}</span>
                        )}
                      </div>

                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                          Business Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-slate-200 focus:border-[#00D2FF] focus:outline-none transition-colors"
                        />
                        {errors.email && (
                          <span className="text-[11px] text-red-500 mt-1 block">{errors.email}</span>
                        )}
                      </div>

                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                          Project Brief / Description
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Briefly describe your goals, current stack, or the problem you're solving..."
                          value={formData.brief}
                          onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-slate-200 focus:border-[#00D2FF] focus:outline-none transition-colors"
                        />
                        {errors.brief && (
                          <span className="text-[11px] text-red-500 mt-1 block">{errors.brief}</span>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 transition-colors shadow-md flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                      >
                        {isSubmitting ? (
                          <>
                            <Activity className="w-4 h-4 text-[#00D2FF] animate-spin" />
                            <span>Submitting Scope Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Get 24-Hour Scoping & Technical Architecture Plan</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                          </>
                        )}
                      </button>

                      {/* Trust Micro-Copy */}
                      <p className="pt-1 text-center text-[11px] text-slate-400">
                        Free 30-min consultation • 100% Confidential NDA • Zero obligation
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

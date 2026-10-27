'use client';

import { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Shield, Layers, Gauge } from 'lucide-react';
import { EstimatorOptions } from '../types';

interface ProjectEstimatorProps {
  onPreFillConsultation: (scopeData: {
    track: string;
    scale: string;
    compliance: string;
    timeline: string;
    weeks: number;
  }) => void;
}

export function ProjectEstimator({ onPreFillConsultation }: ProjectEstimatorProps) {
  const [options, setOptions] = useState<EstimatorOptions>({
    serviceTrack: 'app-aso',
    scaleTier: 'scaleup',
    compliance: 'standard',
    timeline: 'standard',
  });

  // Calculate sprint estimations based on parameters
  const getCalculatedSpecs = () => {
    let baseWeeks = 8;
    let stack: string[] = [];
    let trackName = 'Mobile App & ASO Dominance';

    if (options.serviceTrack === 'app-aso') {
      baseWeeks = 8;
      trackName = 'Mobile App Development & App Store Optimization';
      stack = ['SwiftUI', 'Kotlin', 'React Native', 'Apple Search Ads API', 'Deep Linking'];
    } else if (options.serviceTrack === 'cloud-architecture') {
      baseWeeks = 10;
      trackName = 'Next.js Enterprise Web & Cloud Microservices';
      stack = ['Next.js App Router', 'TypeScript', 'Kubernetes', 'Cloudflare Workers', 'PostgreSQL'];
    } else if (options.serviceTrack === 'ai-enterprise') {
      baseWeeks = 12;
      trackName = 'Generative AI & Intelligent Workflow Automation';
      stack = ['Fine-tuned LLMs', 'pgvector', 'FastAPI', 'Python', 'Kafka', 'Docker'];
    } else {
      baseWeeks = 16;
      trackName = 'Full Digital Transformation & Data Platform';
      stack = ['Next.js', 'Mobile Apps', 'ClickHouse', 'Kubernetes', 'Zero-Trust Mesh'];
    }

    if (options.scaleTier === 'mvp') baseWeeks -= 2;
    if (options.scaleTier === 'enterprise') baseWeeks += 4;

    if (options.compliance === 'soc2') baseWeeks += 2;
    if (options.compliance === 'hipaa') baseWeeks += 3;

    if (options.timeline === 'accelerated') {
      baseWeeks = Math.max(4, Math.round(baseWeeks * 0.7));
    }

    return {
      weeks: baseWeeks,
      trackName,
      stack,
      uptimeSla: options.scaleTier === 'enterprise' ? '99.99%' : '99.95%',
      targetCWV: '99 / 100',
    };
  };

  const calculated = getCalculatedSpecs();

  const handleLaunchConsultation = () => {
    onPreFillConsultation({
      track: calculated.trackName,
      scale: options.scaleTier,
      compliance: options.compliance,
      timeline: options.timeline,
      weeks: calculated.weeks,
    });
  };

  return (
    <section id="estimator" className="py-24 bg-[#F7F9FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#6C5CE7] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]" />
            <span>Interactive Architecture Planner</span>
            <span aria-hidden="true">·</span>
            <span>Real-Time Estimation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1D21] tracking-tight [text-wrap:balance]">
            Configure Your Digital Transformation Scope
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Select your architectural parameters, target scale, and compliance requirements to immediately project project sprint velocity and recommended engineering stack.
          </p>
        </div>

        {/* Neumorphic Estimator Container */}
        <div className="neu-raised rounded-3xl p-6 sm:p-10 border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Options Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-7">
              {/* Service Track */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  1. Primary Engineering Track
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'app-aso', label: 'App Development & ASO Engine' },
                    { id: 'cloud-architecture', label: 'Next.js Web & Cloud Services' },
                    { id: 'ai-enterprise', label: 'AI & Automated Workflows' },
                    { id: 'full-ecosystem', label: 'Full Enterprise Ecosystem' },
                  ].map((track) => (
                    <button
                      key={track.id}
                      onClick={() =>
                        setOptions({ ...options, serviceTrack: track.id as EstimatorOptions['serviceTrack'] })
                      }
                      className={`p-3.5 rounded-xl text-left text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] ${
                        options.serviceTrack === track.id
                          ? 'bg-slate-900 text-white shadow-md'
                          : 'bg-white hover:bg-slate-50 text-slate-700 neu-raised-sm border border-slate-200/70'
                      }`}
                    >
                      {track.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Target Scale */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  2. Targeted Scale & User Throughput
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'mvp', label: 'Growth MVP', detail: '< 50k MAU' },
                    { id: 'scaleup', label: 'Scale-Up', detail: '50k - 500k MAU' },
                    { id: 'enterprise', label: 'Global Enterprise', detail: '1M+ MAU' },
                  ].map((scale) => (
                    <button
                      key={scale.id}
                      onClick={() =>
                        setOptions({ ...options, scaleTier: scale.id as EstimatorOptions['scaleTier'] })
                      }
                      className={`p-3 rounded-xl text-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] ${
                        options.scaleTier === scale.id
                          ? 'bg-slate-900 text-white shadow-md'
                          : 'bg-white hover:bg-slate-50 text-slate-700 neu-raised-sm border border-slate-200/70'
                      }`}
                    >
                      <div className="text-xs font-bold">{scale.label}</div>
                      <div className={`text-[11px] mt-0.5 ${options.scaleTier === scale.id ? 'text-slate-300' : 'text-slate-400'}`}>
                        {scale.detail}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Compliance & Security */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  3. Security & Regulatory Compliance
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'standard', label: 'Standard CIS' },
                    { id: 'soc2', label: 'SOC 2 Type II' },
                    { id: 'hipaa', label: 'HIPAA Health' },
                    { id: 'pci-dss', label: 'PCI-DSS Pay' },
                  ].map((comp) => (
                    <button
                      key={comp.id}
                      onClick={() =>
                        setOptions({ ...options, compliance: comp.id as EstimatorOptions['compliance'] })
                      }
                      className={`p-2.5 rounded-xl text-center text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] ${
                        options.compliance === comp.id
                          ? 'bg-slate-900 text-white shadow-sm'
                          : 'bg-white hover:bg-slate-50 text-slate-700 neu-raised-sm border border-slate-200/70'
                      }`}
                    >
                      {comp.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Delivery Velocity */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  4. Deployment Velocity
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: 'standard', label: 'Standard Agile Cadence', desc: 'Bi-weekly sprint deliverables' },
                    { id: 'accelerated', label: 'Accelerated Fast-Track', desc: 'Dedicated multi-disciplinary pod' },
                  ].map((time) => (
                    <button
                      key={time.id}
                      onClick={() =>
                        setOptions({ ...options, timeline: time.id as EstimatorOptions['timeline'] })
                      }
                      className={`p-3 rounded-xl text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] ${
                        options.timeline === time.id
                          ? 'bg-slate-900 text-white shadow-sm'
                          : 'bg-white hover:bg-slate-50 text-slate-700 neu-raised-sm border border-slate-200/70'
                      }`}
                    >
                      <div className="text-xs font-bold">{time.label}</div>
                      <div className={`text-[11px] ${options.timeline === time.id ? 'text-slate-300' : 'text-slate-400'}`}>
                        {time.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Projection Output Blueprint Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="neu-pressed rounded-3xl p-6 sm:p-8 border border-slate-200 relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                    <Sparkles className="w-4 h-4 text-[#00BBE6]" />
                    <span>Projected Scope Blueprint</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Engineered Estimate
                  </span>
                </div>

                {/* Primary Projection Box */}
                <div className="bg-white neu-raised-sm rounded-2xl p-5 mb-5 border border-slate-200/80">
                  <div className="text-xs text-slate-500 font-medium">Estimated Delivery Velocity</div>
                  <div className="text-4xl font-extrabold font-mono-num text-[#1A1D21] mt-1">
                    ~{calculated.weeks} <span className="text-lg font-normal text-slate-600">Sprints</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    From architectural audit to production deployment
                  </p>
                </div>

                {/* Key Architecture Commitments */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-white/70 border border-slate-200/60">
                    <span className="text-slate-600 flex items-center gap-1.5">
                      <Gauge className="w-3.5 h-3.5 text-[#00BBE6]" />
                      Core Web Vitals Target
                    </span>
                    <span className="font-mono-num font-bold text-slate-900">
                      {calculated.targetCWV}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-white/70 border border-slate-200/60">
                    <span className="text-slate-600 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-[#6C5CE7]" />
                      Availability Guarantee
                    </span>
                    <span className="font-mono-num font-bold text-slate-900">
                      {calculated.uptimeSla} SLA
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/70 border border-slate-200/60">
                    <div className="text-[11px] font-semibold text-slate-500 mb-1.5 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-slate-700" />
                      Recommended Stack Matrix
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {calculated.stack.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  onClick={handleLaunchConsultation}
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                >
                  <span>Lock In Scope & Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00D2FF]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

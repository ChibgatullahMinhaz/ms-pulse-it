'use client';

import { ArrowRight, Sparkles, ShieldCheck, Gauge, TrendingUp, Smartphone } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onViewCaseStudy: () => void;
}

export function HeroSection({ onOpenConsultation, onViewCaseStudy }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#F7F9FC]">
      {/* Interactive Digital Particle Canvas */}
      <ParticleCanvas />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Brand Tagline */}
        <div className="inline-flex items-center gap-2 mb-6 text-xs font-semibold tracking-wider uppercase text-slate-500">
          <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] animate-pulse" />
          <span>Full-Cycle Software Engineering & IT Solutions</span>
          <span aria-hidden="true">·</span>
          <span>Enterprise Reliability</span>
        </div>

        {/* Primary Headline with Balances & Dynamic Gradient Accent */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1A1D21] max-w-5xl mx-auto leading-[1.08] [text-wrap:balance]">
          Transforming Visions into{' '}
          <span className="text-gradient-pulse drop-shadow-sm">Custom Software & Scalable Digital Architecture</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed [text-wrap:balance]">
          A full-cycle software agency engineering custom enterprise platforms (CRM/ERP), web & mobile apps, desktop software, and real-time media infrastructure — converting ambitious roadmaps into measurable business outcomes: faster platforms, higher conversion, and systems built to scale.
        </p>

        {/* Interactive Action CTAs with Neumorphic Physicality */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-lg shadow-slate-900/15 hover:shadow-slate-900/25 transition-all duration-200 flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
          >
            <span>Get a Free Project Consultation</span>
            <ArrowRight className="w-4 h-4 text-[#00D2FF] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onViewCaseStudy}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-800 neu-button flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] border border-slate-200/60"
          >
            <Sparkles className="w-4 h-4 text-[#6C5CE7]" />
            <span>See Featured Case Study</span>
          </button>
        </div>

        {/* Claim-to-Proof Quantitative Adjacency Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200/70 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="neu-raised-sm rounded-xl p-4 transition-transform hover:-translate-y-0.5">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
                <Gauge className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span>Performance Target</span>
              </div>
              <div className="text-2xl font-bold font-mono-num text-[#1A1D21]">&lt;1s</div>
              <p className="text-[11px] text-slate-500 mt-0.5">Page load on every build</p>
            </div>

            <div className="neu-raised-sm rounded-xl p-4 transition-transform hover:-translate-y-0.5">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
                <TrendingUp className="w-3.5 h-3.5 text-[#6C5CE7]" />
                <span>Products Shipped</span>
              </div>
              <div className="text-2xl font-bold font-mono-num text-[#1A1D21]">2 In-House</div>
              <p className="text-[11px] text-slate-500 mt-0.5">Marketplace + live media engine</p>
            </div>

            <div className="neu-raised-sm rounded-xl p-4 transition-transform hover:-translate-y-0.5">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
                <Smartphone className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span>Delivery Model</span>
              </div>
              <div className="text-2xl font-bold font-mono-num text-[#1A1D21]">2-Week</div>
              <p className="text-[11px] text-slate-500 mt-0.5">Verifiable sprint releases</p>
            </div>

            <div className="neu-raised-sm rounded-xl p-4 transition-transform hover:-translate-y-0.5">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#6C5CE7]" />
                <span>IP & Ownership</span>
              </div>
              <div className="text-2xl font-bold text-[#1A1D21]">100% Yours</div>
              <p className="text-[11px] text-slate-500 mt-0.5">Full source code handover</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

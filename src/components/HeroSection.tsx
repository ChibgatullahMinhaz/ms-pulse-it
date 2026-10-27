'use client';

import { ArrowRight, Sparkles, ShieldCheck, Gauge, TrendingUp, Smartphone } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export function HeroSection({ onOpenConsultation, onOpenEstimator }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#F7F9FC]">
      {/* Interactive Digital Particle Canvas */}
      <ParticleCanvas />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Brand Tagline */}
        <div className="inline-flex items-center gap-2 mb-6 text-xs font-semibold tracking-wider uppercase text-slate-500">
          <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] animate-pulse" />
          <span>Next-Generation IT Agency & App-SEO Practice</span>
          <span aria-hidden="true">·</span>
          <span>Enterprise Reliability</span>
        </div>

        {/* Primary Headline with Balances & Dynamic Gradient Accent */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1A1D21] max-w-5xl mx-auto leading-[1.08] [text-wrap:balance]">
          Transforming Visions into{' '}
          <span className="text-gradient-pulse drop-shadow-sm">Digital Pulse</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed [text-wrap:balance]">
          Next-gen software engineering, App Store Optimization (ASO), and AI-driven scalable digital solutions engineered for enterprise velocity.
        </p>

        {/* Interactive Action CTAs with Neumorphic Physicality */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-lg shadow-slate-900/15 hover:shadow-slate-900/25 transition-all duration-200 flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="w-4 h-4 text-[#00D2FF] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenEstimator}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-800 neu-button flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] border border-slate-200/60"
          >
            <Sparkles className="w-4 h-4 text-[#6C5CE7]" />
            <span>Launch Solution Scope Calculator</span>
          </button>
        </div>

        {/* Claim-to-Proof Quantitative Adjacency Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200/70 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="neu-raised-sm rounded-xl p-4 transition-transform hover:-translate-y-0.5">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
                <Gauge className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span>System Uptime</span>
              </div>
              <div className="text-2xl font-bold font-mono-num text-[#1A1D21]">99.98%</div>
              <p className="text-[11px] text-slate-500 mt-0.5">Automated multi-region SLA</p>
            </div>

            <div className="neu-raised-sm rounded-xl p-4 transition-transform hover:-translate-y-0.5">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
                <TrendingUp className="w-3.5 h-3.5 text-[#6C5CE7]" />
                <span>ASO Organic Lift</span>
              </div>
              <div className="text-2xl font-bold font-mono-num text-[#1A1D21]">+184%</div>
              <p className="text-[11px] text-slate-500 mt-0.5">Top-3 category index rate</p>
            </div>

            <div className="neu-raised-sm rounded-xl p-4 transition-transform hover:-translate-y-0.5">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
                <Smartphone className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span>Active End Users</span>
              </div>
              <div className="text-2xl font-bold font-mono-num text-[#1A1D21]">12M+</div>
              <p className="text-[11px] text-slate-500 mt-0.5">Distributed cross-platform</p>
            </div>

            <div className="neu-raised-sm rounded-xl p-4 transition-transform hover:-translate-y-0.5">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#6C5CE7]" />
                <span>Compliance</span>
              </div>
              <div className="text-2xl font-bold text-[#1A1D21]">SOC2 / ISO</div>
              <p className="text-[11px] text-slate-500 mt-0.5">Zero-trust architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

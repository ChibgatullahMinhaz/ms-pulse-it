'use client';

import { Search, PenTool, Code2, Rocket, ArrowRight, ShieldCheck } from 'lucide-react';
import { Tilt3D } from './Tilt3D';

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  deliverable: string;
  icon: typeof Search;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 'discover-scope',
    title: 'Discover & Scope',
    description:
      'We audit your current stack, map business goals to technical requirements, and lock a fixed-scope roadmap with timeline and budget certainty before any code is written.',
    deliverable: 'Technical audit + scoped roadmap',
    icon: Search,
  },
  {
    id: 'design-prototype',
    title: 'Design & Prototype',
    description:
      'UX architects translate requirements into clickable high-fidelity prototypes, validated against real user flows before a single line of production code is committed.',
    deliverable: 'Interactive prototype + architecture spec',
    icon: PenTool,
  },
  {
    id: 'agile-engineering',
    title: 'Agile Engineering',
    description:
      'Two-week sprint cycles with CI/CD staging previews from day one. Every pull request passes peer review, automated tests, and performance benchmark gates before merge.',
    deliverable: 'Bi-weekly verifiable releases',
    icon: Code2,
  },
  {
    id: 'launch-support',
    title: 'Launch & Support',
    description:
      'Zero-downtime deployment with full observability dashboards, followed by a dedicated SLA and bug-fix support window that keeps your platform compounding post-launch.',
    deliverable: 'Go-live + SLA-backed support',
    icon: Rocket,
  },
];

export function WorkflowProcessSection({ onOpenConsultation }: { onOpenConsultation: () => void }) {
  return (
    <section id="process" className="py-24 bg-[#F7F9FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#6C5CE7] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]" />
            <span>How We Work</span>
            <span aria-hidden="true">·</span>
            <span>Proven Delivery Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1D21] tracking-tight [text-wrap:balance]">
            A 4-Step Timeline from Vision to Production
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every engagement follows the same disciplined engineering cadence — transparent scope, validated design, verifiable sprints, and a launch backed by a real SLA.
          </p>
        </div>

        {/* Timeline Panel */}
        <div className="rounded-3xl neu-raised p-6 sm:p-10 border border-slate-100 relative overflow-hidden">
          {/* Top Accent line with pulse glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D2FF] via-[#6C5CE7] to-[#00D2FF]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 perspective-3d">
            {WORKFLOW_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Tilt3D key={step.id} maxTilt={6} className="rounded-2xl">
                <div
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col relative group hover:border-[#00D2FF]/50 transition-colors duration-300 h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold font-mono-num text-[#00BBE6]">
                      0{idx + 1}
                    </span>
                    <div className="p-2 rounded-xl bg-white border border-slate-200/80 text-[#00BBE6] group-hover:text-[#6C5CE7] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#1A1D21] tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed flex-1">
                    {step.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>{step.deliverable}</span>
                  </div>
                </div>
                </Tilt3D>
              );
            })}
          </div>

          {/* Panel Footer CTA */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <p className="text-xs text-slate-500 text-center sm:text-left">
              Week 1 starts with a free technical consultation — leave with a scoped roadmap whether we work together or not.
            </p>
            <button
              onClick={onOpenConsultation}
              className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
            >
              <span>Start Step 01 — Free</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#00D2FF]" />
            </button>
          </div>

          {/* Transparent Quality Assurance Protocol */}
          <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 relative z-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              <ShieldCheck className="w-4 h-4 text-[#00BBE6]" />
              <span>Our Published Quality Assurance Protocol</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {[
                'Peer-Reviewed Pull Requests',
                'Automated CI Test Gates',
                'Core Web Vitals Budgets',
                'WCAG AA Accessibility',
                'Cross-Browser Matrix Testing',
                'Zero Plaintext Secrets',
              ].map((item) => (
                <div
                  key={item}
                  className="text-[11px] font-semibold text-slate-700 bg-white border border-slate-200/80 rounded-lg px-2.5 py-2 text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

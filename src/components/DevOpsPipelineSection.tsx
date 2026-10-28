'use client';

import { GitBranch, Container, FileCode2, Activity, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Tilt3D } from './Tilt3D';

interface PipelineItem {
  id: string;
  name: string;
  stage: string;
  description: string;
  icon: typeof GitBranch;
  gradient: string;
  features: string[];
  badge: string;
}

const PIPELINE: PipelineItem[] = [
  {
    id: 'cicd',
    name: 'GitHub Actions CI/CD',
    stage: 'Build & Release',
    description:
      'Every pull request passes automated lint, type-check, unit tests, and performance benchmark gates before merge — shipping to staging on every commit and production on tagged releases.',
    icon: GitBranch,
    gradient: 'from-[#00D2FF] to-[#6C5CE7]',
    features: ['Automated Test Gates', 'Preview Deployments', 'Tagged Release Pipelines'],
    badge: 'Zero-Click Deploys',
  },
  {
    id: 'iac',
    name: 'Terraform & GitOps',
    stage: 'Infrastructure as Code',
    description:
      'Entire environments declared as versioned code — reproducible multi-AZ provisioning, drift detection, and one-command rollbacks with full audit history in git.',
    icon: FileCode2,
    gradient: 'from-[#6C5CE7] to-[#00BBE6]',
    features: ['Versioned Infrastructure', 'Drift Detection', 'One-Command Rollback'],
    badge: '100% Reproducible',
  },
  {
    id: 'containers',
    name: 'Docker & Container Security',
    stage: 'Packaging & Hardening',
    description:
      'Distroless minimal images scanned for vulnerabilities in CI, signed at build, and deployed with read-only filesystems and non-root execution by default.',
    icon: Container,
    gradient: 'from-[#00BBE6] to-[#0088CC]',
    features: ['Distroless Base Images', 'Trivy Vulnerability Scans', 'Non-Root Execution'],
    badge: 'CIS-Hardened',
  },
  {
    id: 'observability',
    name: 'Observability & SLA Monitoring',
    stage: 'Operate & Respond',
    description:
      'Prometheus metrics, structured logging, and uptime probes wired to alert channels — performance regressions and error spikes are caught before your users notice.',
    icon: Activity,
    gradient: 'from-[#00D2FF] to-[#0088CC]',
    features: ['Prometheus Dashboards', 'Error-Rate Alerting', 'Uptime SLA Probes'],
    badge: '24/7 Monitoring',
  },
];

export function DevOpsPipelineSection({ onOpenConsultation }: { onOpenConsultation: () => void }) {
  return (
    <section id="devops" className="py-24 bg-white relative border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#00BBE6] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
            <span>DevOps & Delivery Pipeline</span>
            <span aria-hidden="true">·</span>
            <span>Ship With Confidence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1D21] tracking-tight [text-wrap:balance]">
            From Commit to Production — Fully Automated
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Great code is only half the story. Our delivery pipeline automates testing, infrastructure, security hardening, and monitoring — so every release ships fast, reproducibly, and without 2 AM surprises.
          </p>
        </div>

        {/* Pipeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-3d mb-10">
          {PIPELINE.map((item) => {
            const Icon = item.icon;
            return (
              <Tilt3D key={item.id} maxTilt={7} className="rounded-2xl">
                <div className="neu-raised rounded-2xl p-6 flex flex-col justify-between border border-slate-100 group relative overflow-hidden h-full">
                  {/* Top Subtle Pulse Gradient Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D2FF] to-[#6C5CE7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-900 text-[#00D2FF] p-2.5 flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                        {item.stage}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#1A1D21] tracking-tight mb-3">
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {item.description}
                    </p>

                    <div className="space-y-1.5 mb-5">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00BBE6] shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-medium">Delivery Standard</span>
                    <span className="text-xs font-mono font-bold text-[#1A1D21] bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60">
                      {item.badge}
                    </span>
                  </div>
                </div>
              </Tilt3D>
            );
          })}
        </div>

        {/* Footer CTA Strip */}
        <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#00D2FF]/20 via-[#6C5CE7]/10 to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 text-center sm:text-left">
            <h3 className="text-lg font-bold tracking-tight">
              Want this pipeline running on your project?
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Every engagement includes the full CI/CD, IaC, and monitoring setup — from the first sprint.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="relative z-10 px-5 py-3 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
          >
            <span>Discuss Your Delivery Setup</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#00BBE6]" />
          </button>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, ShieldCheck, Sparkles, Terminal } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  initials: string;
  avatarGradient: string;
  bio: string;
  techFocus: string[];
  metricsBadge: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email: string;
  };
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'minhazul',
    name: 'Minhazul Abedin',
    role: 'Chief Operating Officer (COO)',
    specialty: 'Operations, Delivery & Client Success',
    initials: 'MA',
    avatarGradient: 'from-[#00D2FF] to-[#0088CC]',
    bio: 'Drives operations and delivery at MS Pulse IT — sprint governance, milestone transparency, and client success across every engagement from scoping to launch.',
    techFocus: ['Delivery Operations', 'Sprint Governance', 'Client Success', 'Product Strategy'],
    metricsBadge: 'COO',
    socials: {
      github: 'https://github.com/mspulseit',
      linkedin: 'https://linkedin.com/company/mspulseit',
      email: 'minhaz@mspulseit.com',
    },
  },
  {
    id: 'tahmid',
    name: 'Tahmid Hasan',
    role: 'Chief Technology Officer (CTO)',
    specialty: 'Real-Time Systems & Web Architecture',
    initials: 'TH',
    avatarGradient: 'from-[#6C5CE7] to-[#4834D4]',
    bio: 'Architected and built LiveCore — our broadcast-grade WebRTC SFU media server — and leads all engineering: server-driven Next.js platforms, edge rendering, and the headless commerce stack powering MS Shop.',
    techFocus: ['WebRTC & Media Infra', 'Next.js App Router', 'System Design', 'Edge SSR'],
    metricsBadge: 'CTO · Built LiveCore',
    socials: {
      github: 'https://github.com/mspulseit',
      linkedin: 'https://linkedin.com/company/mspulseit',
      email: 'tahmid@mspulseit.com',
    },
  },
  {
    id: 'rafiqul',
    name: 'Rafiqul Islam',
    role: 'Lead AI & Data Systems Engineer',
    specialty: 'Multi-LLM Orchestration & Data Platforms',
    initials: 'RI',
    avatarGradient: 'from-[#00BBE6] to-[#6C5CE7]',
    bio: 'Builds our AI and data backbone — multi-provider LLM failover pipelines, pgvector hybrid search, and the streaming telemetry platforms behind client dashboards.',
    techFocus: ['Python & FastAPI', 'PostgreSQL pgvector', 'Multi-LLM SDKs', 'Docker'],
    metricsBadge: 'AI & Data Lead',
    socials: {
      github: 'https://github.com/mspulseit',
      linkedin: 'https://linkedin.com/company/mspulseit',
      email: 'rafiqul@mspulseit.com',
    },
  },
  {
    id: 'farhan',
    name: 'Kazi Farhan',
    role: 'Principal Security & DevSecOps Lead',
    specialty: 'Zero-Trust Cloud & Infrastructure',
    initials: 'KF',
    avatarGradient: 'from-[#6C5CE7] to-[#00D2FF]',
    bio: 'Directs infrastructure and security — automated multi-AZ Terraform provisioning, GitOps CI/CD pipelines, and zero-trust network enforcement across every deployment.',
    techFocus: ['AWS EKS & Terraform', 'Kubernetes mTLS', 'HashiCorp Vault', 'Prometheus'],
    metricsBadge: 'DevSecOps Lead',
    socials: {
      github: 'https://github.com/mspulseit',
      linkedin: 'https://linkedin.com/company/mspulseit',
      email: 'farhan@mspulseit.com',
    },
  },
];

interface TeamSectionProps {
  onOpenConsultation: () => void;
}

export function TeamSection({ onOpenConsultation }: TeamSectionProps) {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <section id="team" className="py-24 bg-[#F7F9FC] relative border-b border-slate-200/60 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00D2FF]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#6C5CE7]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#6C5CE7] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]" />
              <span>Engineering Leadership</span>
              <span aria-hidden="true">·</span>
              <span>Systems Architects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1D21] tracking-tight [text-wrap:balance]">
              Meet the Pulse Engineering Team
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We are a team of senior software engineers, mobile specialists, and cloud architects who design, build, and deploy production software with speed and mathematical precision.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
            >
              <span>Schedule Technical Architecture Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00D2FF]" />
            </button>
          </div>
        </div>

        {/* 4-Column Responsive Glassmorphic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {TEAM_MEMBERS.map((member) => {
            const isHovered = hoveredMember === member.id;

            return (
              <div
                key={member.id}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                className="relative rounded-3xl bg-white/85 backdrop-blur-xl border border-white/80 neu-raised p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-[8px_8px_24px_rgba(206,217,233,0.45),-8px_-8px_24px_rgba(255,255,255,0.95)] hover:shadow-[12px_14px_30px_rgba(206,217,233,0.55),-12px_-12px_30px_rgba(255,255,255,1),0_0_20px_rgba(0,210,255,0.14)]"
              >
                {/* Top Subtle Cyan Pulse Wave Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D2FF] to-[#6C5CE7] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl" />

                <div>
                  {/* Top Badge & Avatar Lockup */}
                  <div className="flex items-center justify-between mb-5">
                    {/* Tactile Initial Ring Avatar */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${member.avatarGradient} p-0.5 shadow-md flex items-center justify-center relative group-hover:scale-105 transition-transform`}
                    >
                      <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-white font-extrabold text-sm tracking-wider">
                        {member.initials}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white shadow-xs" title="Available for Architectural Advisory" />
                    </div>

                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60">
                      {member.metricsBadge}
                    </span>
                  </div>

                  {/* Name and Title */}
                  <h3 className="text-lg font-bold text-[#1A1D21] tracking-tight group-hover:text-[#00BBE6] transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-xs font-semibold text-[#6C5CE7] mt-0.5 mb-2">
                    {member.role}
                  </p>

                  <div className="text-[11px] font-medium text-slate-500 mb-4 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#00BBE6] shrink-0" />
                    <span className="truncate">{member.specialty}</span>
                  </div>

                  {/* Bio with Smooth Hover Animation */}
                  <div className="relative mb-5">
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                      {member.bio}
                    </p>
                  </div>

                  {/* Core Stack Focus Tags */}
                  <div className="space-y-1 mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Core Stack
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {member.techFocus.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-50 border border-slate-200/70 text-slate-700 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Social Links & Direct Connect Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                        aria-label={`${member.name} on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-[#00BBE6] hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                        aria-label={`${member.name} on X (Twitter)`}
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-[#6C5CE7] hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="text-[11px] font-bold text-slate-700 hover:text-[#00BBE6] transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                  >
                    <span>Connect</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

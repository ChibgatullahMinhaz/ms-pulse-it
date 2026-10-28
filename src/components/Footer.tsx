'use client';

import { PulseLogo } from './PulseLogo';
import { NewsletterSubscription } from './NewsletterSubscription';
import { ArrowUpRight } from 'lucide-react';

export function Footer({ onOpenConsultation }: { onOpenConsultation: () => void }) {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* AI-Driven Insights Newsletter Subscription Card */}
        <NewsletterSubscription />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="inline-block" aria-label="MS Pulse IT Home">
              <PulseLogo size="md" />
            </a>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              MS Pulse IT is a full-cycle software engineering company building custom enterprise platforms (CRM/ERP), web & mobile applications, desktop software, real-time media infrastructure, and e-commerce marketplaces — including products we ship and operate ourselves.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              <span>Currently accepting new engagements</span>
              <span className="text-slate-300">·</span>
              <span className="font-mono text-[11px]">Response within 24 hours</span>
            </div>
          </div>

          {/* Column: Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-[#00BBE6] transition-colors">
                  Custom Enterprise Software (CRM / ERP)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00BBE6] transition-colors">
                  Web Platforms & SaaS
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00BBE6] transition-colors">
                  Mobile & Desktop Applications
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00BBE6] transition-colors">
                  Live Streaming & Real-Time Media
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00BBE6] transition-colors">
                  E-Commerce & Marketplaces
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Engineering & Lab */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Engineering Lab
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#tech-stack" className="hover:text-[#00BBE6] transition-colors">
                  Core Tech Stack
                </a>
              </li>
              <li>
                <a href="#devops" className="hover:text-[#00BBE6] transition-colors">
                  DevOps & Delivery Pipeline
                </a>
              </li>
              <li>
                <a href="#featured-lab" className="hover:text-[#00BBE6] transition-colors">
                  Featured Lab & Demos
                </a>
              </li>
              <li>
                <a href="#app-seo" className="hover:text-[#00BBE6] transition-colors">
                  App-SEO Simulator
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-[#00BBE6] transition-colors">
                  5-Tier Architecture
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#00BBE6] transition-colors">
                  Expertise FAQ
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-[#00BBE6] transition-colors">
                  Scope Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Contact & Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Engagement
            </h4>
            <p className="text-xs text-slate-500">
              Ready to engineer your digital infrastructure for sub-second velocity?
            </p>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight className="w-3 h-3 text-[#00D2FF]" />
            </button>
            <div className="text-[11px] text-slate-400 pt-1">
              Direct inquiries: <a href="mailto:contact@mspulseit.com" className="hover:underline">contact@mspulseit.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} MS Pulse IT Corporation. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/mspulseit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/company/mspulseit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-600 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/MSPulseIT"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-600 transition-colors"
            >
              X / Twitter
            </a>
            <a href="mailto:contact@mspulseit.com" className="hover:text-slate-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

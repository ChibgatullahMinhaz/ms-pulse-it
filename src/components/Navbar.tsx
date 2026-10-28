'use client';

import { useState, useEffect } from 'react';
import { PulseLogo } from './PulseLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLocale } from '../context/LocaleContext';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export function Navbar({ onOpenConsultation, onOpenEstimator }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.techStack'), href: '#tech-stack' },
    { label: t('nav.featuredLab'), href: '#featured-lab' },
    { label: t('nav.appSeo'), href: '#app-seo' },
    { label: t('nav.estimator'), href: '#estimator' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'glass-nav py-3.5 shadow-sm'
          : 'bg-white/70 backdrop-blur-md py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single Brand Element Wordmark with Pulse Line */}
          <a
            href="#"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] rounded-lg"
            aria-label="MS Pulse IT Home"
          >
            <PulseLogo size="md" />
          </a>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#00BBE6] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] rounded whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 Primary Actions & Glassmorphic Language Switcher */}
          <div className="hidden sm:flex items-center gap-2.5">
            <LanguageSwitcher />

            <button
              onClick={onOpenEstimator}
              className="text-xs font-semibold text-slate-700 hover:text-[#6C5CE7] px-3 py-2 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
            >
              {t('nav.scopeCalculator')}
            </button>
            <button
              onClick={onOpenConsultation}
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all duration-150 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] whitespace-nowrap"
            >
              <span>{t('nav.requestConsultation')}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00D2FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-5 shadow-lg space-y-3">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-[#00BBE6] py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <div className="flex items-center justify-between py-1">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {t('nav.selectLanguage')}
              </span>
              <LanguageSwitcher />
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full text-center py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              {t('nav.scopeCalculator')}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
            >
              {t('nav.requestConsultation')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

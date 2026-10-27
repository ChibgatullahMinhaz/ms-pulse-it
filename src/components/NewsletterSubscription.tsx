'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, ArrowRight, CheckCircle2, Sparkles, Activity, ShieldCheck } from 'lucide-react';

export function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid corporate email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Simulate instant pulse API subscription roundtrip
    setTimeout(() => {
      setStatus('success');
    }, 650);
  };

  const handleReset = () => {
    setEmail('');
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className="relative rounded-3xl bg-white neu-raised p-8 sm:p-10 mb-14 border border-slate-200/80 overflow-hidden shadow-xl">
      {/* Soft Ambient Ethereal Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#00D2FF]/10 via-[#6C5CE7]/6 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#00D2FF]/8 rounded-full blur-2xl pointer-events-none" />

      {/* Decorative Top Accent Wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00D2FF] to-[#6C5CE7]" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Copy Column (6 cols) */}
        <div className="lg:col-span-6 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6C5CE7]">
            <Sparkles className="w-3.5 h-3.5 text-[#00BBE6]" />
            <span>AI-Driven Insights</span>
            <span aria-hidden="true">·</span>
            <span>Bi-Weekly Engineering Digest</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1D21] tracking-tight [text-wrap:balance]">
            Engineering Whitepapers & App-SEO Algorithms in Your Inbox
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed max-w-lg">
            Receive exclusive technical breakdowns on Flutter isolates, Next.js edge performance, and multi-LLM orchestration. Strictly architecture — no sales spam.
          </p>

          <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00BBE6]" />
              Zero spam guarantee
            </span>
            <span aria-hidden="true">·</span>
            <span>Unsubscribe in 1-click</span>
          </div>
        </div>

        {/* Interactive Form & Success Animation Column (6 cols) */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              /* Success State with Spring-Fade Animation */
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 neu-raised-sm flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.35)]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-950">
                      Pulse Signal Verified!
                    </h4>
                    <p className="text-xs text-emerald-800 mt-0.5">
                      Subscribed as <strong className="font-semibold">{email}</strong>. The latest edition is on its way.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="px-3.5 py-1.5 text-xs font-semibold text-emerald-900 hover:text-emerald-950 bg-white/80 hover:bg-white rounded-lg border border-emerald-300 transition-colors whitespace-nowrap"
                >
                  Add Another
                </button>
              </motion.div>
            ) : (
              /* Active Neumorphic Form Input */
              <motion.form
                key="subscription-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-2.5"
              >
                <div className="flex flex-col sm:flex-row gap-2.5">
                  {/* Neumorphic Inset Input Container */}
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4 text-slate-500" />
                    </div>

                    <input
                      type="email"
                      value={email}
                      disabled={status === 'loading'}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="Enter corporate email (e.g. dev@company.com)"
                      className={`w-full pl-10 pr-4 py-3.5 text-xs font-medium rounded-xl bg-[#F7F9FC] text-[#1A1D21] placeholder-slate-400 border transition-all duration-200 focus:outline-none ${
                        status === 'error'
                          ? 'border-red-400 shadow-[inset_2px_2px_6px_rgba(239,68,68,0.2)]'
                          : 'border-slate-200/90 shadow-[inset_3px_3px_7px_rgba(206,217,233,0.55),inset_-3px_-3px_7px_rgba(255,255,255,0.95)] focus:border-[#00D2FF] focus:shadow-[0_0_12px_rgba(0,210,255,0.25)] focus:bg-white'
                      }`}
                      aria-label="Corporate Email Address"
                    />
                  </div>

                  {/* Tactile Neumorphic Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 transition-all duration-150 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                  >
                    {status === 'loading' ? (
                      <>
                        <Activity className="w-3.5 h-3.5 text-[#00D2FF] animate-spin" />
                        <span>Verifying...</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#00D2FF] group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                {/* Inline Error Message */}
                {status === 'error' && (
                  <p className="text-[11px] text-red-500 font-medium pl-1 flex items-center gap-1.5 animate-in fade-in duration-150">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                    <span>{errorMessage}</span>
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import { ConsultationRequest } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preFilledScope?: {
    track: string;
    scale: string;
    compliance: string;
    timeline: string;
    weeks: number;
  } | null;
}

export function ConsultationModal({ isOpen, onClose, preFilledScope }: ConsultationModalProps) {
  const [formData, setFormData] = useState<ConsultationRequest>({
    fullName: '',
    email: '',
    company: '',
    projectTrack: 'Custom Enterprise Software (CRM / ERP)',
    scaleTier: 'Scale-Up (50k - 500k MAU)',
    timeline: 'Standard Agile Cadence',
    targetPlatforms: ['iOS', 'Android', 'Web (Next.js)'],
    message: '',
  });

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (preFilledScope) {
      setFormData((prev) => ({
        ...prev,
        projectTrack: preFilledScope.track,
        scaleTier: preFilledScope.scale,
        timeline: preFilledScope.timeline,
      }));
    }
  }, [preFilledScope]);

  if (!isOpen) return null;

  const validateStep1 = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Corporate email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid work email address';
    }
    if (!formData.company.trim()) errs.company = 'Company name is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant pulse API roundtrip
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const togglePlatform = (platform: string) => {
    setFormData((prev) => {
      const exists = prev.targetPlatforms.includes(platform);
      return {
        ...prev,
        targetPlatforms: exists
          ? prev.targetPlatforms.filter((p) => p !== platform)
          : [...prev.targetPlatforms, platform],
      };
    });
  };

  const resetModal = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 neu-raised border border-slate-200 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={resetModal}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
          aria-label="Close consultation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Confirmation State */
          <div className="py-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-5 border border-emerald-100 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-1">
              Pulse Signal Confirmed
            </div>
            <h3 className="text-2xl font-bold text-[#1A1D21] mb-2">
              Consultation Dispatched
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our enterprise engineering lead will review your architecture scope for <strong className="text-slate-900">{formData.company}</strong> and send an executive briefing within 4 business hours.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 mb-6 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">Track:</span>
                <span className="font-semibold text-slate-800">{formData.projectTrack}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Target Platforms:</span>
                <span className="font-semibold text-slate-800">{formData.targetPlatforms.join(', ') || 'Enterprise'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Target Scale:</span>
                <span className="font-semibold text-slate-800">{formData.scaleTier}</span>
              </div>
            </div>

            <button
              onClick={resetModal}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
            >
              Return to Landing Page
            </button>
          </div>
        ) : (
          /* Multi-step Form Flow */
          <div>
            {/* Step Indicators */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                    step >= 1 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  1
                </span>
                <span>Profile</span>
                <span className="text-slate-300">/</span>
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                    step >= 2 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  2
                </span>
                <span>Scope</span>
                <span className="text-slate-300">/</span>
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                    step >= 3 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  3
                </span>
                <span>Confirmation</span>
              </div>
            </div>

            <div className="text-xs font-bold uppercase tracking-wider text-[#00BBE6] mb-1">
              Direct Engineering Consultation
            </div>
            <h3 className="text-2xl font-bold text-[#1A1D21] mb-2">
              Request Your Architecture Review
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Speak directly with an enterprise solutions architect. No sales scripts, only technical analysis and roadmap planning.
            </p>

            {/* Step 1: Contact Details */}
            {step === 1 && (
              <form onSubmit={handleNext} className="space-y-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#00D2FF] focus:outline-none transition-colors"
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-500 mt-1 block">{errors.fullName}</span>
                  )}
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    Corporate Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#00D2FF] focus:outline-none transition-colors"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-500 mt-1 block">{errors.email}</span>
                  )}
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    Organization / Company Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Global Systems"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#00D2FF] focus:outline-none transition-colors"
                  />
                  {errors.company && (
                    <span className="text-[11px] text-red-500 mt-1 block">{errors.company}</span>
                  )}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                  >
                    <span>Proceed to Project Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00D2FF]" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 2: Project Scope & Target Platforms */}
            {step === 2 && (
              <form onSubmit={handleNext} className="space-y-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                    Target Deployment Platforms
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['iOS (Swift/Universal Links)', 'Android (Kotlin/App Links)', 'Web (Next.js SSR)', 'Cloud Microservices'].map(
                      (plat) => {
                        const isSelected = formData.targetPlatforms.includes(plat);
                        return (
                          <button
                            type="button"
                            key={plat}
                            onClick={() => togglePlatform(plat)}
                            className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-all ${
                              isSelected
                                ? 'bg-slate-900 text-white shadow-sm'
                                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                            }`}
                          >
                            {plat}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    Primary Service Focus
                  </label>
                  <select
                    value={formData.projectTrack}
                    onChange={(e) => setFormData({ ...formData, projectTrack: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#00D2FF] focus:outline-none transition-colors"
                  >
                    <option value="Custom Enterprise Software (CRM / ERP)">
                      Custom Enterprise Software (CRM / ERP)
                    </option>
                    <option value="Web Platform or SaaS Product">
                      Web Platform or SaaS Product
                    </option>
                    <option value="Mobile App (iOS / Android)">
                      Mobile App (iOS / Android)
                    </option>
                    <option value="Desktop Application (Windows / macOS / Linux)">
                      Desktop Application (Windows / macOS / Linux)
                    </option>
                    <option value="Live Streaming & Real-Time Media Platform">
                      Live Streaming & Real-Time Media Platform
                    </option>
                    <option value="E-Commerce / Multi-Vendor Marketplace">
                      E-Commerce / Multi-Vendor Marketplace
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    Specific Technical Objectives or Current Pain Points
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your current tech stack, store ranking goals, or latency bottlenecks..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#00D2FF] focus:outline-none transition-colors"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 py-2"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                  >
                    <span>Review & Finalize</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00D2FF]" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Review & Submit */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex justify-between text-xs pb-2 border-b border-slate-200">
                    <span className="text-slate-500">Contact:</span>
                    <span className="font-semibold text-slate-900">
                      {formData.fullName} ({formData.email})
                    </span>
                  </div>
                  <div className="flex justify-between text-xs pb-2 border-b border-slate-200">
                    <span className="text-slate-500">Organization:</span>
                    <span className="font-semibold text-slate-900">{formData.company}</span>
                  </div>
                  <div className="flex justify-between text-xs pb-2 border-b border-slate-200">
                    <span className="text-slate-500">Service Focus:</span>
                    <span className="font-semibold text-slate-900">{formData.projectTrack}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Platforms:</span>
                    <span className="font-semibold text-slate-900">
                      {formData.targetPlatforms.join(', ') || 'Web & Mobile'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 p-2">
                  <ShieldCheck className="w-4 h-4 text-[#00BBE6] shrink-0" />
                  <span>Strict NDA and data isolation standards apply to all engineering consultations.</span>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 py-2"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                  >
                    {isSubmitting ? (
                      <>
                        <Activity className="w-4 h-4 text-[#00D2FF] animate-spin" />
                        <span>Transmitting Architecture Pulse...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#00D2FF]" />
                      </>
                    )}
                  </button>
                </div>

                {/* Trust Micro-Copy */}
                <p className="pt-3 text-center text-[11px] text-slate-400">
                  Free 30-min Technical Consultation • Response within 24 Hours • Strict NDA Protection
                </p>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

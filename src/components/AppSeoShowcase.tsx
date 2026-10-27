'use client';

import { useState } from 'react';
import { Smartphone, Zap, Search, Link2, CheckCircle2, ArrowRight } from 'lucide-react';

interface AppCategoryOption {
  id: string;
  name: string;
  defaultDownloads: number;
  sampleKeywords: string[];
}

const CATEGORIES: AppCategoryOption[] = [
  {
    id: 'fintech',
    name: 'Fintech & Banking',
    defaultDownloads: 14000,
    sampleKeywords: ['instant transfer', 'smart invest', 'crypto wallet', 'budget ai'],
  },
  {
    id: 'health',
    name: 'Health & Wellness',
    defaultDownloads: 11000,
    sampleKeywords: ['telehealth', 'sleep tracker', 'vitals log', 'habit coach'],
  },
  {
    id: 'saas',
    name: 'B2B Workflow & SaaS',
    defaultDownloads: 8500,
    sampleKeywords: ['project planner', 'team chat', 'crm mobile', 'invoice sync'],
  },
  {
    id: 'ecommerce',
    name: 'Omnichannel Retail',
    defaultDownloads: 18000,
    sampleKeywords: ['flash deals', 'curbside pickup', 'smart catalog', 'fast checkout'],
  },
];

export function AppSeoShowcase({ onOpenConsultation }: { onOpenConsultation: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState<AppCategoryOption>(CATEGORIES[0]);
  const [optimizationLevel, setOptimizationLevel] = useState<number>(3); // 1 = Baseline, 2 = Core SEO, 3 = Advanced MS Pulse IT ASO
  const [deepLinkTestState, setDeepLinkTestState] = useState<'idle' | 'routing' | 'success'>('idle');

  // Dynamic calculations based on slider level
  const metricsByLevel = [
    {
      level: 1,
      title: 'Unoptimized Baseline',
      keywordRank: '#48 Avg Rank',
      conversionRate: '2.1%',
      deepLinkLatency: '780ms',
      visibilityScore: '32 / 100',
      multiplier: 1.0,
      description: 'Standard store listing with unmanaged metadata, fragmented keywords, and standard web links.',
    },
    {
      level: 2,
      title: 'Core App-SEO & Metadata',
      keywordRank: '#12 Avg Rank',
      conversionRate: '4.2%',
      deepLinkLatency: '240ms',
      visibilityScore: '74 / 100',
      multiplier: 1.95,
      description: 'Semantic keyword indexing, localized screenshots, Apple Search Ads alignment, and fast App Clips.',
    },
    {
      level: 3,
      title: 'MS Pulse IT Algorithmic Dominance',
      keywordRank: '#2 Top Category',
      conversionRate: '6.8%',
      deepLinkLatency: '38ms',
      visibilityScore: '98 / 100',
      multiplier: 3.1,
      description: 'Continuous A/B testing on store conversion, zero-latency Universal Links, schema structured data, and review sentiment engine.',
    },
  ];

  const currentLevel = metricsByLevel[optimizationLevel - 1];
  const projectedInstalls = Math.round(selectedCategory.defaultDownloads * currentLevel.multiplier);

  const handleTestDeepLink = () => {
    setDeepLinkTestState('routing');
    setTimeout(() => {
      setDeepLinkTestState('success');
      setTimeout(() => setDeepLinkTestState('idle'), 3500);
    }, 450);
  };

  return (
    <section id="app-seo" className="py-24 bg-white relative overflow-hidden border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#00BBE6] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00BBE6]" />
            <span>App-SEO & ASO Intelligence</span>
            <span aria-hidden="true">·</span>
            <span>Algorithmic Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1D21] tracking-tight [text-wrap:balance]">
            Engineering App Store Algorithms for Predictable Organic Scale
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Most IT teams treat mobile app stores as an afterthought. MS Pulse IT treats App Store Optimization (ASO) and Deep Linking as core software architecture. Test our algorithmic impact below.
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="neu-raised rounded-2xl p-6 sm:p-8">
              {/* Category Segmented Control */}
              <div className="mb-6">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  Select Target Industry Sector
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] ${
                        selectedCategory.id === cat.id
                          ? 'bg-slate-900 text-white shadow-md'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optimization Slider */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor="optimization-range" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Architecture & ASO Pipeline Depth
                  </label>
                  <span className="text-xs font-bold text-[#6C5CE7] bg-indigo-50 px-2.5 py-1 rounded-md">
                    Level {optimizationLevel}: {currentLevel.title}
                  </span>
                </div>

                <div className="relative py-2">
                  <input
                    id="optimization-range"
                    type="range"
                    min="1"
                    max="3"
                    step="1"
                    value={optimizationLevel}
                    onChange={(e) => setOptimizationLevel(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00BBE6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-medium">
                    <span>1. Baseline Listing</span>
                    <span>2. Core SEO & Keywords</span>
                    <span>3. MS Pulse IT ASO Matrix</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 mt-3 p-3 rounded-xl bg-slate-50 border border-slate-100 leading-relaxed">
                  {currentLevel.description}
                </p>
              </div>

              {/* Real-time Dynamic Impact Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-500">Keyword Position</div>
                  <div className="text-lg font-bold font-mono-num text-[#1A1D21] mt-0.5">
                    {currentLevel.keywordRank}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-500">Store Conversion</div>
                  <div className="text-lg font-bold font-mono-num text-[#00BBE6] mt-0.5">
                    {currentLevel.conversionRate}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-500">Deep Link Latency</div>
                  <div className="text-lg font-bold font-mono-num text-[#6C5CE7] mt-0.5">
                    {currentLevel.deepLinkLatency}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-500">Monthly Installs</div>
                  <div className="text-lg font-bold font-mono-num text-emerald-600 mt-0.5">
                    {projectedInstalls.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Deep Link Redirection Simulator */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Link2 className="w-4 h-4 text-[#00BBE6]" />
                    <span>App-SEO Universal Deep Link Protocol</span>
                  </div>
                  <span className="text-[11px] text-slate-400">RFC 3986 Standard</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <div className="w-full flex-1 px-3 py-2 text-xs font-mono text-slate-700 bg-slate-100 rounded-lg border border-slate-200 truncate">
                    https://mspulseit.app/{selectedCategory.id}/deep-link?campaign=organic_aso_v3
                  </div>
                  <button
                    onClick={handleTestDeepLink}
                    disabled={deepLinkTestState !== 'idle'}
                    className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                  >
                    {deepLinkTestState === 'idle' && 'Test Universal Link'}
                    {deepLinkTestState === 'routing' && 'Resolving Route...'}
                    {deepLinkTestState === 'success' && 'Routed in 38ms! ✓'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Mobile Device Simulator Preview (5 cols) */}
          <div className="lg:col-span-5">
            <div className="neu-raised rounded-3xl p-6 border-4 border-slate-200 max-w-sm mx-auto shadow-2xl relative">
              {/* Phone Camera Notch */}
              <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-5" />

              {/* Store App Header */}
              <div className="flex items-start gap-3.5 mb-5 pb-5 border-b border-slate-100">
                <div className="w-16 h-16 rounded-2xl bg-gradient-pulse p-0.5 shadow-md shrink-0 flex items-center justify-center text-white">
                  <Smartphone className="w-8 h-8" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-bold text-slate-900 truncate">
                    Pulse{selectedCategory.name.split(' ')[0]} Pro
                  </h4>
                  <p className="text-xs text-slate-500 truncate">
                    by MS Pulse IT Enterprise
                  </p>

                  <div className="flex items-center gap-1.5 mt-1.5 text-xs">
                    <span className="font-bold text-amber-500">4.9 ★</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500 text-[11px]">38.4k Ratings</span>
                  </div>
                </div>
              </div>

              {/* Algorithmic Badges & Rank Preview */}
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                      <Search className="w-3.5 h-3.5 text-[#00BBE6]" />
                      Organic Keyword Index
                    </span>
                    <span className="font-mono-num font-bold text-emerald-600">
                      {optimizationLevel === 3 ? 'Top 1% Store Tier' : 'Standard Tier'}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {selectedCategory.sampleKeywords.map((kw, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700"
                      >
                        #{optimizationLevel === 3 ? i + 1 : (i + 1) * 12} {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#6C5CE7]" />
                      Instant App Clip Handoff
                    </span>
                    <span className="font-mono-num font-bold text-slate-900">
                      {currentLevel.deepLinkLatency}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Direct conversion without full installation barrier.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>App Store Optimization Certified</span>
                  </div>
                  <p className="text-[11px] text-emerald-700 mt-1">
                    Full Schema.org, iOS Universal Links & Android App Links configured.
                  </p>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                >
                  <span>Request Full ASO Audit For Your App</span>
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

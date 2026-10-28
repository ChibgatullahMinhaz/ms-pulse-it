'use client';

import { useState, useEffect } from 'react';

interface SectionTarget {
  id: string;
  label: string;
  shortCode: string;
}

const SECTIONS: SectionTarget[] = [
  { id: 'hero', label: 'Vision & Pulse', shortCode: '01' },
  { id: 'services', label: 'Capabilities', shortCode: '02' },
  { id: 'tech-stack', label: 'Tech Stack', shortCode: '03' },
  { id: 'devops', label: 'DevOps Pipeline', shortCode: '04' },
  { id: 'featured-lab', label: 'Featured Lab', shortCode: '05' },
  { id: 'app-seo', label: 'App-SEO Matrix', shortCode: '06' },
  { id: 'architecture', label: 'Architecture', shortCode: '07' },
  { id: 'faq', label: 'Architecture FAQ', shortCode: '08' },
  { id: 'estimator', label: 'Scope Calculator', shortCode: '09' },
];

export function ScrollProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress percentage
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScrollPos = window.scrollY;

      if (totalScrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (currentScrollPos / totalScrollHeight) * 100));
        setScrollProgress(progress);
      }

      // Determine active section based on scroll offset
      const triggerOffset = window.innerHeight * 0.35;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTIONS[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= triggerOffset) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Page section navigation and scroll progress"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center select-none"
    >
      {/* Neumorphic Glassmorphic Dock Container */}
      <div className="relative py-5 px-2 rounded-full bg-white/80 backdrop-blur-xl border border-white/80 shadow-[6px_6px_20px_rgba(206,217,233,0.4),-6px_-6px_20px_rgba(255,255,255,0.95)] flex flex-col items-center gap-6">
        
        {/* Background Track Line */}
        <div className="absolute top-7 bottom-7 w-[2px] bg-slate-200/80 rounded-full" />

        {/* Glowing Electric Cyan Progress Line */}
        <div
          className="absolute top-7 w-[2px] bg-gradient-to-b from-[#00D2FF] to-[#6C5CE7] rounded-full transition-all duration-150 ease-out shadow-[0_0_8px_#00D2FF]"
          style={{ height: `calc(${scrollProgress}% * 0.82)` }}
        />

        {/* Glowing Pulse Head Beacon that glides along the line */}
        <div
          className="absolute w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_10px_#00D2FF,0_0_16px_rgba(0,210,255,0.8)] pointer-events-none transition-all duration-150 ease-out"
          style={{
            top: `calc(28px + ${scrollProgress * 0.82}% * (1 - 10px / 100))`,
            transform: 'translateY(-50%)',
          }}
        />

        {/* Section Pips */}
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          const isHovered = hoveredSection === section.id;

          return (
            <div
              key={section.id}
              className="relative flex items-center justify-center group"
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Tooltip Label on Hover / Active State */}
              {(isHovered || isActive) && (
                <div
                  className={`absolute right-7 px-2.5 py-1 rounded-lg text-[11px] font-semibold tracking-wide whitespace-nowrap transition-all duration-200 pointer-events-none flex items-center gap-1.5 shadow-lg ${
                    isActive
                      ? 'bg-slate-900 text-white border border-slate-700/80 shadow-[0_4px_16px_rgba(0,210,255,0.18)]'
                      : 'bg-white text-slate-800 border border-slate-200 shadow-md'
                  }`}
                >
                  <span className={`font-mono text-[10px] ${isActive ? 'text-[#00D2FF]' : 'text-slate-400'}`}>
                    {section.shortCode}
                  </span>
                  <span>{section.label}</span>
                </div>
              )}

              {/* Pip Button */}
              <button
                onClick={() => scrollToSection(section.id)}
                className={`relative z-10 w-3 h-3 rounded-full transition-all duration-200 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] ${
                  isActive
                    ? 'scale-125 bg-white ring-2 ring-[#00D2FF] shadow-[0_0_12px_#00D2FF]'
                    : 'bg-white hover:scale-125 border border-slate-300 hover:border-[#00D2FF]'
                }`}
                aria-label={`Scroll to ${section.label}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-150 ${
                    isActive
                      ? 'bg-[#00D2FF] shadow-[0_0_6px_#00D2FF]'
                      : 'bg-slate-300 group-hover:bg-[#00D2FF]'
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLocale, LANGUAGES, type Locale } from '../context/LocaleContext';

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale, currentLanguage } = useLocale();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelectLanguage = (code: Locale) => {
    setLocale(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button: Glassmorphic with Subtle Neumorphic Elevation */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white/80 hover:bg-white backdrop-blur-md rounded-xl border border-slate-200/80 transition-all duration-150 neu-raised-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Current language: ${currentLanguage.label}. Click to switch language`}
      >
        <Globe className="w-3.5 h-3.5 text-[#00BBE6] group-hover:rotate-12 transition-transform duration-200" />
        <span className="font-mono text-xs uppercase tracking-wider text-slate-800 font-bold">
          {currentLanguage.code}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-slate-400 group-hover:text-slate-700 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#00D2FF]' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu: Glassmorphic Frosted Surface with Spring Fade */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 6 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 mt-2 w-48 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/80 shadow-[0_12px_32px_rgba(26,29,33,0.12),0_2px_8px_rgba(26,29,33,0.06)] p-1.5 z-50 neu-raised"
            role="listbox"
            aria-label="Language options"
          >
            {/* Top Micro Cyan Gradient Line */}
            <div className="absolute top-0 left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent rounded-full" />

            <div className="px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 flex items-center justify-between">
              <span>Select Locale</span>
              <span className="font-mono text-[9px] text-[#00BBE6]">MS Pulse IT Global</span>
            </div>

            <div className="py-1 space-y-0.5">
              {LANGUAGES.map((lang) => {
                const isSelected = lang.code === locale;

                return (
                  <button
                    key={lang.code}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelectLanguage(lang.code)}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-all duration-150 ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-xs font-semibold'
                        : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-sm select-none" aria-hidden="true">
                        {lang.flag}
                      </span>
                      <div className="text-left">
                        <div className="leading-tight">{lang.nativeName}</div>
                        <div
                          className={`text-[10px] ${
                            isSelected ? 'text-slate-300' : 'text-slate-400'
                          }`}
                        >
                          {lang.region}
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] shadow-[0_0_6px_#00D2FF]" />
                        <Check className="w-3.5 h-3.5 text-[#00D2FF]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

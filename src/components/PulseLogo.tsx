interface PulseLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  iconOnly?: boolean;
}

export function PulseLogo({ className = '', size = 'md', iconOnly = false }: PulseLogoProps) {
  const dimensions = {
    sm: { height: 32, iconWidth: 46, markScale: 'h-8' },
    md: { height: 42, iconWidth: 60, markScale: 'h-10' },
    lg: { height: 52, iconWidth: 74, markScale: 'h-13' },
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 font-display select-none group cursor-pointer ${className}`}>
      {/* Precision Vector Representation of User's MS Pulse IT Emblem */}
      <svg
        viewBox="0 0 120 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${dimensions.markScale} w-auto shrink-0 transition-transform duration-200 group-hover:scale-[1.03]`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="pulseAccentGrad" x1="45" y1="5" x2="70" y2="70" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E232A" />
            <stop offset="0.45" stopColor="#00D2FF" />
            <stop offset="0.85" stopColor="#1E232A" />
          </linearGradient>
        </defs>

        {/* --- Letter 'M' --- */}
        {/* Left vertical pillar with rounded top-left and sharp baseline tail */}
        <path
          d="M 6 62 L 20 62 L 20 28 C 20 24 23 21 27 21 C 31 21 34 24 35 28 L 44 48 L 51 34 L 46 25 C 43 19 36 15 28 15 C 16 15 9 22 9 33 L 9 62 Z"
          fill="#23272F"
          className="transition-colors group-hover:fill-[#1A1D21]"
        />
        {/* Left base extending tail */}
        <path
          d="M 2 62.5 L 24 62.5 L 22 60 L 6 60 Z"
          fill="#23272F"
        />

        {/* --- Pulse Cardiogram / EKG Rhythm Wave --- */}
        {/* The sharp pulse spikes that connect the M right leg to the S */}
        <path
          d="M 44 48 L 48 40 L 52 56 L 61 7 L 70 70 L 76 34 L 81 44 L 86 42"
          stroke="#23272F"
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors group-hover:stroke-[#00BBE6]"
        />

        {/* Glowing electric cyan pulse highlight on the center cardiogram spike */}
        <path
          d="M 52 56 L 61 7 L 70 70"
          stroke="#00D2FF"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
          className="filter drop-shadow-[0_0_5px_rgba(0,210,255,0.7)]"
        />

        {/* --- Letter 'S' with integrated wave cross-cut --- */}
        {/* Top arch of S */}
        <path
          d="M 80 27 C 80 20 86 15 96 15 C 108 15 116 21 116 29 L 98 29 C 98 26 95 24 93 24 C 89 24 87 25 87 27 C 87 30 89 31 93 32 L 102 34 C 111 36 117 41 117 48 C 117 57 109 63 96 63 C 83 63 74 57 74 47 L 92 47 C 92 51 96 54 98 54 C 102 54 105 52 105 49 C 105 46 102 44 97 43 L 88 41 C 82 39 80 34 80 27 Z"
          fill="#23272F"
          className="transition-colors group-hover:fill-[#1A1D21]"
        />

        {/* S connecting wave line flowing from the pulse */}
        <path
          d="M 86 42 C 90 42 93 38 97 38 C 101 38 104 42 108 42"
          stroke="#23272F"
          strokeWidth="2.8"
          strokeLinecap="round"
          className="transition-colors group-hover:stroke-[#00D2FF]"
        />
      </svg>

      {/* Brand Wordmark matching user's logo: "MS PULSE" and "I T" underneath */}
      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none pl-0.5">
          <div className="flex items-center tracking-[0.08em] font-extrabold text-[#0D1522] group-hover:text-black transition-colors">
            <span
              className={`${
                size === 'sm' ? 'text-[15px]' : size === 'lg' ? 'text-[22px]' : 'text-[18px]'
              } font-black uppercase tracking-[0.09em] font-display`}
            >
              MS PULSE
            </span>
          </div>
          <div
            className={`font-semibold tracking-[0.45em] text-[#0D1522]/80 mt-1 uppercase ${
              size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-[12px]' : 'text-[10px]'
            }`}
          >
            I T
          </div>
        </div>
      )}
    </div>
  );
}

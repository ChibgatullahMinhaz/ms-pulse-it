import { ImageResponse } from 'next/og';

export const alt = 'MS Pulse IT – Enterprise IT, App-SEO & Digital Engineering';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0D1522 0%, #1A1D21 55%, #23272F 100%)',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top: Brand mark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '18px',
              background: 'linear-gradient(135deg, #23272F, #0D1522)',
              border: '1px solid rgba(0, 210, 255, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="48" height="48" viewBox="0 0 64 64">
              <path
                d="M10 40 L19 40 L25 26 L31 50 L37 14 L43 40 L54 40"
                stroke="#00D2FF"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'white', fontSize: '34px', fontWeight: 800, letterSpacing: '2px' }}>
              MS PULSE IT
            </span>
            <span style={{ color: '#00D2FF', fontSize: '18px', letterSpacing: '6px' }}>
              ENTERPRISE ENGINEERING
            </span>
          </div>
        </div>

        {/* Middle: Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <span style={{ color: 'white', fontSize: '64px', fontWeight: 800, lineHeight: 1.1, maxWidth: '900px' }}>
            Custom Software & Scalable Digital Architecture
          </span>
          <span style={{ color: '#94A3B8', fontSize: '26px', maxWidth: '820px' }}>
            Enterprise platforms, web & mobile apps, and real-time media infrastructure — proven on our own production products.
          </span>
        </div>

        {/* Bottom: Proof chips */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {['0.9s Load — MS Shop', '<300ms Latency — LiveCore', '100% IP Ownership'].map((chip) => (
            <div
              key={chip}
              style={{
                display: 'flex',
                padding: '12px 24px',
                borderRadius: '999px',
                border: '1px solid rgba(0, 210, 255, 0.4)',
                background: 'rgba(0, 210, 255, 0.08)',
                color: '#00D2FF',
                fontSize: '22px',
                fontWeight: 700,
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}

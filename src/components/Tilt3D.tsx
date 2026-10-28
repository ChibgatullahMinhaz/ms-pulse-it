'use client';

import { useRef, useCallback, useEffect } from 'react';

interface Tilt3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
}

export function Tilt3D({
  children,
  className = '',
  maxTilt = 6,
  scale = 1.012,
  glare = true,
}: Tilt3DProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const glareRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const enabledRef = useRef(false);

  useEffect(() => {
    enabledRef.current =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el || !enabledRef.current) return;

      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const rotateY = (px - 0.5) * 2 * maxTilt;
        const rotateX = (0.5 - py) * 2 * maxTilt;
        el.style.transform = `perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`;
        if (glareRef.current) {
          glareRef.current.style.setProperty('--glare-x', `${(px * 100).toFixed(1)}%`);
          glareRef.current.style.setProperty('--glare-y', `${(py * 100).toFixed(1)}%`);
          glareRef.current.style.opacity = '1';
        }
      });
    },
    [maxTilt, scale]
  );

  const handleLeave = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    const el = ref.current;
    if (el) el.style.transform = '';
    if (glareRef.current) glareRef.current.style.opacity = '0';
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-3d relative ${className}`}
    >
      {children}
      {glare && <div ref={glareRef} className="tilt-3d-glare" aria-hidden="true" />}
    </div>
  );
}

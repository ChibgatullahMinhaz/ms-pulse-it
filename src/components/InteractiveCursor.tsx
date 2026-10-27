'use client';

import { useEffect, useRef, useState } from 'react';

export function InteractiveCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const trailCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse)
    if (window.matchMedia('(pointer: fine)').matches) {
      setEnabled(true);
    } else {
      return;
    }

    const canvas = trailCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    interface TrailPoint {
      x: number;
      y: number;
      age: number;
    }

    const trail: TrailPoint[] = [];
    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      trail.push({ x: mouseX, y: mouseY, age: 0 });
      if (trail.length > 25) trail.shift();

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = target.closest('button, a, input, select, textarea, [role="button"], [tabindex]');
        setHovered(!!isInteractive);
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    let animId: number;
    const renderTrail = () => {
      // Smooth lerp for outer dot
      currentX += (mouseX - currentX) * 0.35;
      currentY += (mouseY - currentY) * 0.35;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw ethereal glowing light trail
      for (let i = 0; i < trail.length; i++) {
        const pt = trail[i];
        pt.age += 1;
        const progress = 1 - pt.age / 24;
        if (progress <= 0) continue;

        const radius = (hovered ? 7 : 4) * progress;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);

        // Mix from cyan to soft indigo-purple based on index
        const isHead = i > trail.length * 0.5;
        ctx.fillStyle = isHead
          ? `rgba(0, 210, 255, ${progress * 0.32})`
          : `rgba(108, 92, 231, ${progress * 0.22})`;
        ctx.shadowColor = isHead ? '#00D2FF' : '#6C5CE7';
        ctx.shadowBlur = 10 * progress;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Filter out dead trail points
      for (let i = trail.length - 1; i >= 0; i--) {
        if (trail[i].age > 24) {
          trail.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(renderTrail);
    };

    animId = requestAnimationFrame(renderTrail);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <canvas
        ref={trailCanvasRef}
        className="fixed inset-0 pointer-events-none z-50 select-none"
        aria-hidden="true"
      />
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-all duration-150 ease-out will-change-transform ${
          hovered
            ? 'w-9 h-9 bg-[#00D2FF]/20 border border-[#00D2FF]/70 shadow-[0_0_15px_rgba(0,210,255,0.5)]'
            : 'w-3.5 h-3.5 bg-[#00D2FF] shadow-[0_0_10px_#00D2FF]'
        }`}
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
        aria-hidden="true"
      />
    </>
  );
}

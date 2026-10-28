# DESIGN.md — Visual Design System, Layout Architecture & 3D Visuals

> **Scope:** This document specifies the exact visual theme, section-by-section layout guidelines, and interactive 3D visual implementations for the **MS Pulse IT** website.

---

## 1. Visual Theme & Aesthetic Baseline

- **Aesthetic:** Light enterprise neumorphism with glassmorphism accents and high-contrast technical highlights.
- **Color Tokens:**
  - Base Background: `#F7F9FC` (light slate) with white `#FFFFFF` elevated surfaces
  - Primary Typography: `#1A1D21` headings, `#475569` (slate-600) body text
  - Accent Color 1 (Interactive / Primary): Pulse Cyan `#00D2FF` / `#00BBE6`
  - Accent Color 2 (Secondary / AI): Indigo `#6C5CE7`
  - Accent Color 3 (Success / Metrics): Emerald (`emerald-600/700` on `emerald-50`)
  - Accent Color 4 (Problem / Danger Highlights): Rose/Red (`rose-500`, `red-700` on `red-50`)
- **Styling Effects:**
  - Neumorphic elevation utilities: `.neu-raised`, `.neu-raised-sm`, `.neu-pressed`, `.neu-button` (defined in `globals.css`)
  - Glassmorphism: `.glass-nav` (`backdrop-blur` + translucent white)
  - Gradient accents: `.bg-gradient-pulse`, `.text-gradient-pulse` (cyan → indigo)
  - Soft glow effects on hover (`pulse-cyan-glow`, `pulse-indigo-glow`)

---

## 2. Section-by-Section 3D & Interactive Visual Specifications

> **Implementation note:** All 3D effects are **CSS-based** (no WebGL/Three.js dependency). The reusable [`Tilt3D`](./src/components/Tilt3D.tsx) wrapper provides mouse-tracked perspective tilt with a glare highlight. All 3D motion is pointer-fine-only and disabled under `prefers-reduced-motion`.

### 1. Hero Section
- **3D Implementation:** Interactive `ParticleCanvas` (2D canvas particle field) layered with floating **3D orbs** (`.orb-3d` sphere-shaded elements animated with `float3d` keyframes inside a `.perspective-3d` stage).
- **Behavior:** Orbs float on independent 8–10s loops; the 4 claim-to-proof metric cards use `Tilt3D` (max 7°) with glare.
- **Performance Rule:** Canvas is client-only; orbs are hidden below `md` breakpoints.

### 2. Featured Lab / Flagship Case Studies
- **3D Implementation:** Both flagship case study articles (**MS Shop**, **LiveCore**) are wrapped in subtle `Tilt3D` (max 2.5°) for depth; the 4 R&D project cards use `Tilt3D` (max 6°).
- **Layout Rule:** Challenge → Architecture panels side-by-side, followed by before/after metric cards (-81% load time, 97/100 Lighthouse; <300ms glass-to-glass latency).

### 3. Engineering Tech Stack
- **3D Implementation:** **Floating tilt tech cards** — all 8 stack cards use `Tilt3D` (max 7°) with glare inside a `.perspective-3d` grid.
- **Behavior:** Interactive tilt-on-hover with the existing top gradient pulse line reveal.

### 4. Workflow Process
- **3D Implementation:** The 4 delivery-step cards use `Tilt3D` (max 6°) inside the neumorphic timeline panel.

### 5. Interactive Scope Estimator & Lead Form
- **3D Implementation:** None on inputs (forms stay stable for usability). The live **Scope Summary** panel dynamically updates selected type/priority chips, proof badges, and stack matrix as the user configures steps 1–2.

---

## 3. 3D Component Performance Guidelines

1. **No WebGL dependency:** 3D is pure CSS (`perspective`, `preserve-3d`, `transform`); keep it that way unless a future scene genuinely requires WebGL — in which case it MUST be wrapped in React `Suspense` and loaded via `next/dynamic` with `ssr: false`.
2. **Mobile Fallback:** Tilt effects auto-disable on coarse pointers; floating orbs are hidden below `md` viewports.
3. **Reduced Motion:** All 3D animation and tilt is disabled under `prefers-reduced-motion: reduce` (enforced in `globals.css` and `Tilt3D`).
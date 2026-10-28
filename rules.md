# RULES.md — Operating Guidelines & Engineering Rules for AI Agents

> **Scope:** This document defines the strict engineering standards, component boundaries, and workflow procedures for AI agents working on the **MS Pulse IT** codebase.

---

## 1. Core Operating Principles

1. **Non-Destructive Development:**
   - **DO NOT** delete, rewrite, or break existing working animations, canvas elements, styling definitions, or layout structures unless explicitly instructed.
   - Always preserve working component logic and existing state handlers.

2. **Strict Type Safety & Code Standards:**
   - Write 100% strict **TypeScript**. Do not use `any` types.
   - Use modular, clean functional components following **Next.js (App Router)** patterns.
   - Ensure all interactive components (e.g., forms, accordions, 3D tilt cards, estimators) explicitly include `'use client';` at the very top of the file.
   - Maintain clean separation between data definitions (typed constants colocated in components), component UI (`src/components/`), and shared interfaces (`src/types/`).

3. **Performance & Core Web Vitals Constraints:**
   - Target **Core Web Vitals**: LCP < 1.2s, FID < 100ms, CLS < 0.05.
   - Heavy canvas animations (e.g. `ParticleCanvas`) must remain client-only and lightweight; any future WebGL/Three.js scene must be lazy-loaded using `next/dynamic` with `ssr: false`.
   - Ensure all media assets are optimized using Next.js `<Image />` tags with explicit sizing.

---

## 2. Mandatory Section Implementation Rules

### A. Featured Lab / Case Studies
- Must strictly feature our two real production-grade systems:
  1. **MS Shop (Multi-Vendor E-commerce Engine):** Headless storefront, 1-page checkout, sub-second load times (-81% load time drop, 97 Lighthouse score).
  2. **LiveCore (Broadcast-Grade Real-Time Media & Streaming Server):** Self-hosted WebRTC SFU media server, sub-300ms interactive latency, live commerce & broadcast capabilities.

### B. Service Cards Messaging Pattern
- Every service block must explicitly feature:
  - **PROBLEM Callout:** Red/Warning accent badge highlighting client pain points.
  - **SOLUTION & OUTCOME Callout:** Cyan/Success accent badge highlighting measurable business outcomes (speed, conversion, cost reduction).

### C. Objection Handling & FAQ Accordion
- Address core B2B client concerns clearly:
  - **100% Client IP Ownership** (full repository transfer).
  - **2-Week Agile Sprint Deliveries** with functional staging builds.
  - **Dedicated Post-Launch SLA Maintenance** options.

---

## 3. Pre-Execution AI Checklist
Before finalizing any task, verify:
- [ ] Are existing styling tokens and working components preserved?
- [ ] Is TypeScript strict type checking satisfied without warnings?
- [ ] Are MS Shop and LiveCore metrics accurately displayed?
- [ ] Are 3D tilt effects pointer-fine-only and `prefers-reduced-motion` safe?
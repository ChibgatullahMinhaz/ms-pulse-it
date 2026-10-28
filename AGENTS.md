# AGENTS.md — System Instructions & Workflow for AI Engineering Agents

> **Primary Objective:** Build and refine the **MS Pulse IT** High-Converting B2B IT Agency Website by strictly following the conversion architecture, engineering rules, design system, and 3D visual specifications defined in our project documentation.

---

## 📚 Primary System Documents & Linked References

Before making any changes, writing code, or modifying existing features, you **MUST** read and internalize the following documentation files:

1. **`rules.md` (Engineering & Workflow Rules):**
   - Read [`rules.md`](./rules.md) for strict coding standards, non-destructive development guidelines, TypeScript rules, and section content patterns.
2. **`design.md` (Design System & 3D Implementation Guidelines):**
   - Read [`design.md`](./design.md) for theme colors, glassmorphism aesthetics, section layouts, and section-by-section 3D visual implementations (Hero mesh, Lab 3D architecture, Tech Stack floating cards, Estimator visualizers).

---

## 📁 Next.js App Router Architecture Standards

Maintain strict adherence to the project's actual Next.js App Router directory layout:

```text
src/
├── app/                      # Next.js App Router root
│   ├── layout.tsx            # Global layout, root metadata & JSON-LD schema
│   ├── page.tsx              # Primary homepage (server component + FAQ schema)
│   ├── globals.css           # Global Tailwind utilities, neumorphic & 3D design tokens
│   ├── icon.svg              # Brand favicon (EKG pulse mark)
│   ├── opengraph-image.tsx   # Dynamic OG social card (next/og)
│   ├── robots.ts             # Robots directives
│   └── sitemap.ts            # XML sitemap
├── components/               # All UI components (flat structure)
│   ├── Tilt3D.tsx            # Reusable mouse-tracked 3D tilt wrapper (CSS perspective)
│   ├── HeroSection.tsx       # Hero with ParticleCanvas + floating 3D orbs
│   ├── FeaturedLabSection.tsx# MS Shop & LiveCore flagship case studies
│   ├── ProjectEstimator.tsx  # 3-step scope estimator + lead capture
│   ├── ExpertiseFaqSection.tsx # Objection-handling FAQ accordion
│   └── ...                   # Services, TechStack, Workflow, Footer, etc.
├── context/                  # React context providers (LocaleContext)
└── types/                    # Strict TypeScript interfaces
```

**Note:** Form submissions (Consultation, Estimator, Newsletter) currently use simulated client-side handlers. When wiring real delivery, create `src/app/api/` route handlers (e.g. `api/contact/route.ts`) and point the forms at them.

---

## 🛠️ Execution Protocol for AI Agents

1. **Read Linked Files First:** Always check `rules.md` and `design.md` prior to executing any prompt or refactoring task.
2. **Preserve Foundations:** Never overwrite working styles, canvas backgrounds, or component states.
3. **Real Projects Focus:** Ensure all case study edits accurately highlight **MS Shop** (Multi-Vendor E-commerce — live at https://ms-shop.store/) and **LiveCore** (WebRTC Media Server) with their respective performance metrics.
4. **Interactive Component Rule:** Ensure any file rendering 3D scenes, estimators, or interactive state explicitly starts with `'use client';`.
5. **3D Implementation:** 3D effects are CSS-based (perspective tilt via `Tilt3D`, floating `orb-3d` elements, `preserve-3d` layers) — no WebGL dependencies. Keep them pointer-fine-only and respect `prefers-reduced-motion`.

---

## 📋 Quick Pre-Execution Checklist
- [ ] Have I reviewed `rules.md` and `design.md`?
- [ ] Is the Next.js App Router directory structure respected?
- [ ] Are 3D components dynamic, performance-checked, and mobile-friendly?
- [ ] Are MS Shop and LiveCore metrics intact?
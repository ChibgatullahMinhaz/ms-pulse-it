import { Smartphone, Globe, Terminal, Cpu, Cloud, Database, Layers, ShieldCheck, Code2 } from 'lucide-react';
import { Tilt3D } from './Tilt3D';

interface TechStackItem {
  id: string;
  name: string;
  category: 'Mobile' | 'Web & SSR' | 'AI & Data' | 'Cloud & DevOps';
  role: string;
  description: string;
  latencyBadge: string;
  icon: typeof Smartphone;
  gradient: string;
  features: string[];
}

const TECH_STACK: TechStackItem[] = [
  {
    id: 'flutter',
    name: 'Flutter & Dart',
    category: 'Mobile',
    role: 'Cross-Platform Mobile Engineering',
    description:
      'High-velocity single-codebase mobile applications targeting iOS, Android, and desktop with native 120 FPS frame rates and Dart isolate multithreading.',
    latencyBadge: 'Native 120 FPS Target',
    icon: Smartphone,
    gradient: 'from-[#00D2FF] to-[#0088CC]',
    features: ['Universal / App Links', 'Background Isolates', 'Offline SQLite Sync'],
  },
  {
    id: 'nextjs',
    name: 'Next.js & React',
    category: 'Web & SSR',
    role: 'Enterprise Web & Edge SSR',
    description:
      'React Server Components (RSC) architecture engineered for sub-second Core Web Vitals, dynamic App-SEO structured data injection, and zero-bundle hydration overhead.',
    latencyBadge: 'Edge SSR Rendering',
    icon: Globe,
    gradient: 'from-[#6C5CE7] to-[#4834D4]',
    features: ['App Router SSR', 'Dynamic JSON-LD Schema', 'Turbopack Bundler'],
  },
  {
    id: 'react-native',
    name: 'React Native',
    category: 'Mobile',
    role: 'Native-Performance Cross-Platform Apps',
    description:
      'Single TypeScript codebase shipping truly native iOS and Android experiences — with native module bridges, OTA updates, and shared business logic with your web platform.',
    latencyBadge: 'OTA Update Pipeline',
    icon: Code2,
    gradient: 'from-[#00BBE6] to-[#0088CC]',
    features: ['Native Module Bridges', 'Expo & Bare Workflows', 'Shared TS Business Logic'],
  },
  {
    id: 'python',
    name: 'Python & FastAPI',
    category: 'AI & Data',
    role: 'High-Throughput Intelligence Backends',
    description:
      'Asynchronous microservices handling concurrent inference workloads, event stream processing, mathematical modeling, and enterprise data normalization.',
    latencyBadge: 'High-Throughput AsyncIO',
    icon: Terminal,
    gradient: 'from-[#00BBE6] to-[#6C5CE7]',
    features: ['AsyncIO Concurrency', 'Pydantic Strict Contracts', 'NumPy & Polars Pipelines'],
  },
  {
    id: 'openai-gemini',
    name: 'OpenAI & Google Gemini',
    category: 'AI & Data',
    role: 'Generative AI & Agent Workflows',
    description:
      'Multi-model LLM orchestration featuring pgvector semantic search, dynamic model fallback, token usage governors, and real-time streaming response pipelines.',
    latencyBadge: 'Streaming Multi-Model Failover',
    icon: Cpu,
    gradient: 'from-[#00D2FF] to-[#6C5CE7]',
    features: ['Hybrid Vector Search', 'Multi-Provider Failover', 'Deterministic Schema Outputs'],
  },
  {
    id: 'aws-k8s',
    name: 'AWS & Kubernetes',
    category: 'Cloud & DevOps',
    role: 'Zero-Downtime Cloud Infrastructure',
    description:
      'Multi-Availability Zone Elastic Kubernetes Service (EKS) clusters provisioned via Terraform with automated horizontal pod autoscaling and GitOps CI/CD.',
    latencyBadge: 'Multi-AZ High Availability',
    icon: Cloud,
    gradient: 'from-[#6C5CE7] to-[#00D2FF]',
    features: ['Terraform IaC', 'Horizontal Pod Autoscaler', 'Automated Blue-Green Deploy'],
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL & pgvector',
    category: 'AI & Data',
    role: 'Relational ACID Core & Vector Store',
    description:
      'Rock-solid relational state management unified with dense HNSW vector index embeddings, automated point-in-time recovery, and connection pooling.',
    latencyBadge: 'ACID Core + Vector Search',
    icon: Database,
    gradient: 'from-[#0088CC] to-[#00D2FF]',
    features: ['pgvector HNSW Search', 'Connection Pooling', 'Immutable Audit Trails'],
  },
  {
    id: 'typescript',
    name: 'TypeScript & Node.js',
    category: 'Web & SSR',
    role: 'End-to-End Type Safety',
    description:
      'Strict static typing across client, server, and shared API contracts to eliminate runtime regression errors and accelerate enterprise feature delivery.',
    latencyBadge: 'Strict Type Safety',
    icon: Layers,
    gradient: 'from-[#00BBE6] to-[#4834D4]',
    features: ['Strict Null Checks', 'Zod Runtime Validation', 'Shared Monorepo Packages'],
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare & Zero-Trust',
    category: 'Cloud & DevOps',
    role: 'Edge Computing & Security Perimeter',
    description:
      'Global Anycast edge network executing lightweight V8 workers, intelligent caching, automated SSL/TLS termination, and DDoS mitigation perimeters.',
    latencyBadge: 'Global Anycast Ingress',
    icon: ShieldCheck,
    gradient: 'from-[#6C5CE7] to-[#00BBE6]',
    features: ['V8 Edge Workers', 'Enterprise WAF / DDoS', 'Anycast DNS Routing'],
  },
];

export function TechStackGrid() {
  return (
    <section id="tech-stack" className="py-24 bg-[#F7F9FC] relative border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#6C5CE7] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]" />
            <span>Modern Production Tooling</span>
            <span aria-hidden="true">·</span>
            <span>Zero Legacy Overhead</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1D21] tracking-tight [text-wrap:balance]">
            Core Tech Stack: Built with Best-of-Breed Standards
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            MS Pulse IT leverages modern, enterprise-proven frameworks. We do not use legacy monoliths or bloated templates; every stack layer is picked for maximum velocity, sub-second latency, and scale.
          </p>
        </div>

        {/* Responsive Neumorphic Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-3d">
          {TECH_STACK.map((tech) => {
            const Icon = tech.icon;
            return (
              <Tilt3D key={tech.id} maxTilt={7} className="rounded-2xl">
              <div
                className="neu-raised rounded-2xl p-6 flex flex-col justify-between border border-slate-100 group relative overflow-hidden h-full"
              >
                {/* Top Subtle Pulse Gradient Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D2FF] to-[#6C5CE7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 text-[#00D2FF] p-2.5 flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                      {tech.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1A1D21] tracking-tight mb-1">
                    {tech.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#00BBE6] mb-3">
                    {tech.role}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {tech.description}
                  </p>

                  <div className="space-y-1.5 mb-5">
                    {tech.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">Production Metric</span>
                  <span className="text-xs font-mono font-bold text-[#1A1D21] bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60">
                    {tech.latencyBadge}
                  </span>
                </div>
              </div>
              </Tilt3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}

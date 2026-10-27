'use client';

import { useState } from 'react';
import { Smartphone, Globe, Layers, Cpu, Database, Activity, Check } from 'lucide-react';

interface ArchitectureNode {
  id: string;
  name: string;
  category: string;
  icon: typeof Smartphone;
  latency: string;
  availability: string;
  description: string;
  protocols: string[];
}

const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: 'client',
    name: '01. Client & Mobile Tier',
    category: 'Universal Interface',
    icon: Smartphone,
    latency: 'Sub-16ms Frame Render',
    availability: 'Offline-First Cache',
    description:
      'Native Swift/Kotlin and cross-platform Next.js/React Native engines engineered with local optimistic state and instantaneous interaction response.',
    protocols: ['Next.js SSR', 'SwiftUI', 'Jetpack Compose', 'WebSockets', 'HTTP/3']
  },
  {
    id: 'edge',
    name: '02. Edge & ASO Gateway',
    category: 'Traffic & Routing',
    icon: Globe,
    latency: '12ms Global Edge',
    availability: 'Anycast DNS 100%',
    description:
      'Global edge compute network handling deep link resolution, App Clip instantaneous redirects, dynamic Schema.org injection, and DDoS mitigation.',
    protocols: ['Cloudflare Workers', 'TLS 1.3', 'Universal Links', 'JSON-LD Injector']
  },
  {
    id: 'services',
    name: '03. Scalable Microservices',
    category: 'Application Logic',
    icon: Layers,
    latency: '24ms Service Mesh',
    availability: '99.98% Multi-Cluster',
    description:
      'Decoupled Kubernetes microservices with automated horizontal pod autoscaling, gRPC high-throughput communications, and zero-trust service perimeters.',
    protocols: ['Kubernetes (EKS/GKE)', 'gRPC / Protobuf', 'Docker Containers', 'mTLS']
  },
  {
    id: 'ai-engine',
    name: '04. AI & Inference Mesh',
    category: 'Intelligent Processing',
    icon: Cpu,
    latency: '140ms Streaming TTFT',
    availability: 'Model Failover Redundancy',
    description:
      'Enterprise generative AI agents, vector embeddings, semantic ranking, and automated categorization pipelines with token-rate governance.',
    protocols: ['Gemini 2.5 SDK', 'Claude / GPT APIs', 'pgvector', 'LangChain Agents']
  },
  {
    id: 'data-core',
    name: '05. Resilient Data Storage',
    category: 'State & Telemetry',
    icon: Database,
    latency: '4ms Analytical Query',
    availability: 'Zero-Data-Loss Replication',
    description:
      'Dual-tier database layer uniting transactional ACID PostgreSQL with high-throughput columnar ClickHouse for real-time telemetry streaming.',
    protocols: ['PostgreSQL', 'ClickHouse', 'Apache Kafka', 'Immutable Audit Log']
  }
];

export function ArchitecturePulse() {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode>(ARCHITECTURE_NODES[0]);

  return (
    <section id="architecture" className="py-24 bg-[#F7F9FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#6C5CE7] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]" />
            <span>MS Pulse IT Architecture Matrix</span>
            <span aria-hidden="true">·</span>
            <span>Zero-Single-Point-of-Failure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1D21] tracking-tight [text-wrap:balance]">
            End-to-End Enterprise Architecture, Visualized
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every software system built by MS Pulse IT follows our battle-tested 5-tier resilience framework. Click each architectural layer below to inspect latency budgets and protocols.
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="neu-raised rounded-3xl p-6 sm:p-10 mb-8 border border-slate-200/80">
          {/* Animated Pulse Beam Visualizer */}
          <div className="relative mb-10 overflow-hidden rounded-2xl bg-slate-900 p-6 sm:p-8 text-white">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#00D2FF]">
                <Activity className="w-4 h-4 animate-pulse" />
                <span>LIVE ARCHITECTURE PULSE STREAM</span>
              </div>
              <div className="text-xs font-mono text-slate-400">
                Avg Pipeline Latency: <span className="text-white font-bold">48ms</span>
              </div>
            </div>

            {/* Stage Timeline */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative z-10">
              {ARCHITECTURE_NODES.map((node, index) => {
                const isSelected = selectedNode.id === node.id;
                const Icon = node.icon;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`p-4 rounded-xl text-left transition-all duration-200 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] ${
                      isSelected
                        ? 'bg-slate-800 ring-2 ring-[#00D2FF] shadow-[0_0_20px_rgba(0,210,255,0.3)]'
                        : 'bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-[#00D2FF]' : 'text-slate-400 group-hover:text-slate-200'}`} />
                      <span className="text-[11px] font-mono text-slate-400">0{index + 1}</span>
                    </div>
                    <div className="text-xs font-bold text-white truncate">
                      {node.name.split('. ')[1]}
                    </div>
                    <div className="text-[11px] text-slate-400 truncate mt-0.5">
                      {node.category}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Glowing animated wave bar under cards */}
            <div className="mt-6 pt-4 border-t border-slate-800 relative">
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden relative">
                <div className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent animate-[pulseWave_3s_ease-in-out_infinite]" />
              </div>
              <div className="flex justify-between items-center text-[11px] text-slate-400 mt-2">
                <span>Ingress: Edge Entry</span>
                <span className="text-[#00D2FF]">Real-Time Pulse Routing Active</span>
                <span>Egress: Distributed Storage</span>
              </div>
            </div>
          </div>

          {/* Detailed Selected Node Specs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <div className="text-xs font-bold uppercase tracking-wider text-[#00BBE6] mb-1">
                Tier Inspector
              </div>
              <h3 className="text-2xl font-bold text-[#1A1D21] mb-2">
                {selectedNode.name}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                {selectedNode.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Applied Protocols & Engineering Standards
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedNode.protocols.map((protocol, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white neu-raised-sm border border-slate-200/60"
                    >
                      <Check className="w-3.5 h-3.5 text-[#00BBE6]" />
                      <span>{protocol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-white neu-raised-sm border border-slate-200/70">
                <div className="text-xs text-slate-500 font-medium">Observed Latency Target</div>
                <div className="text-2xl font-bold font-mono-num text-[#1A1D21] mt-1">
                  {selectedNode.latency}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  99th percentile across production clusters
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white neu-raised-sm border border-slate-200/70">
                <div className="text-xs text-slate-500 font-medium">Availability Guarantee</div>
                <div className="text-2xl font-bold font-mono-num text-[#6C5CE7] mt-1">
                  {selectedNode.availability}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Continuous zero-downtime rolling upgrades
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

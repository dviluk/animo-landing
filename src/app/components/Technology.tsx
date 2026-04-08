import { ScrollReveal } from "./ScrollReveal";
import { Lock, Brain, ScrollText, Zap } from "lucide-react";

const techStack = [
  "Frontend    → React + Ant Design 5 + ProComponents",
  "Backend     → Laravel 12 + PHP 8.2 + PostgreSQL",
  "AI Engine   → CrewAI + DeepSeek + MCP Protocol",
  "ML Pipeline → LayoutLMv3 + Qwen2-VL + spaCy",
  "Vector DB   → PostgreSQL pgvector (HNSW)",
  "Real-Time   → WebSocket (Reverb) + Laravel Echo",
  "Embeddings  → sentence-transformers (768-dim)",
  "Auth        → JWT Multi-Tenant + OAuth 2.0",
  "Infra       → Docker + Redis + Queue Workers",
];

const highlights = [
  { icon: Lock, title: "Multi-Tenant Isolation", desc: "Organization is the hard boundary. Zero cross-org data leakage.", color: "#4F46E5" },
  { icon: Brain, title: "AI Authority Boundaries", desc: "4-level system: Authoritative, Threshold, Advisory, Forbidden.", color: "#06B6D4" },
  { icon: ScrollText, title: "Append-Only Evidence", desc: "No one can rewrite history. Every change is attributed and timestamped.", color: "#F59E0B" },
  { icon: Zap, title: "160+ MCP Tools", desc: "AI agents have native access to every platform capability.", color: "#10B981" },
];

export function Technology() {
  return (
    <section id="technology" className="bg-[#0F172A] py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="max-w-7xl mx-auto px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-[36px] lg:text-[44px] font-[800] text-[#F8FAFC] mb-4" style={{ fontFamily: "Inter" }}>
              Enterprise Architecture, <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">Startup Speed</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-2xl mx-auto bg-[#1E293B]/60 backdrop-blur border border-white/10 rounded-2xl overflow-hidden mb-16">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-[#F43F5E]" />
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
              <div className="w-3 h-3 rounded-full bg-[#10B981]" />
              <span className="ml-3 text-[#64748B] text-[12px]" style={{ fontFamily: "JetBrains Mono" }}>animo tech stack</span>
            </div>
            <div className="p-5 space-y-1">
              {techStack.map((line) => (
                <div key={line} className="text-[13px] text-[#E2E8F0]" style={{ fontFamily: "JetBrains Mono" }}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <ScrollReveal key={h.title} delay={i * 0.1}>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 text-center h-full">
                <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: `${h.color}15` }}>
                  <h.icon size={24} style={{ color: h.color }} />
                </div>
                <h4 className="text-[15px] font-[700] text-[#F8FAFC] mb-2" style={{ fontFamily: "Inter" }}>{h.title}</h4>
                <p className="text-[#94A3B8] text-[13px] leading-[1.6]" style={{ fontFamily: "Inter" }}>{h.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

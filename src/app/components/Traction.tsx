import { AnimatedCounter } from "./AnimatedCounter";
import { ScrollReveal } from "./ScrollReveal";
import { Check, Clock } from "lucide-react";

const metrics = [
  { value: 160, suffix: "+", label: "AI-Powered Tools" },
  { value: 36, suffix: "+", label: "Operational Record Types" },
  { value: 6, suffix: "", label: "Industry Verticals Supported" },
  { value: 92, suffix: "%", label: "Avg Compliance Readiness Score" },
];

const milestones = [
  { date: "Q1 2026", text: "Multi-tenant engine, document processing, compliance scoring", done: true },
  { date: "Q2 2026", text: "Configurable industry modules, AI onboarding, operations engine", done: true },
  { date: "Q3 2026", text: "Connected sources, relationship intelligence, anomaly detection", done: true },
  { date: "Q4 2026", text: "ML-based risk prediction, trend forecasting, proactive compliance", done: false },
  { date: "2027", text: "PWA with offline, integration marketplace, multi-language AI", done: false },
];

export function Traction() {
  return (
    <section className="bg-[#0F172A] py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#4F46E5]/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-[36px] lg:text-[44px] font-[800] text-[#F8FAFC] mb-4" style={{ fontFamily: "Inter" }}>
              Built. Proven. <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">Scaling.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-[48px] font-[800] text-[#F8FAFC]" style={{ fontFamily: "JetBrains Mono" }}>
                  <AnimatedCounter end={m.value} suffix={m.suffix} />
                </div>
                <div className="text-[#94A3B8] text-[14px] mt-1" style={{ fontFamily: "Inter" }}>{m.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-[20px] font-[700] text-[#F8FAFC] mb-8 text-center" style={{ fontFamily: "Inter" }}>Roadmap</h3>
            <div className="space-y-4">
              {milestones.map((m) => (
                <div key={m.date} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                  {m.done ? (
                    <Check size={18} className="text-[#10B981] shrink-0" />
                  ) : (
                    <Clock size={18} className="text-[#F59E0B] shrink-0" />
                  )}
                  <span className="text-[#06B6D4] text-[13px] font-[600] w-20 shrink-0" style={{ fontFamily: "JetBrains Mono" }}>{m.date}</span>
                  <span className="text-[#E2E8F0] text-[14px]" style={{ fontFamily: "Inter" }}>{m.text}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

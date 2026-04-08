import { ScrollReveal } from "./ScrollReveal";
import { ShieldCheck, ClipboardCheck, BrainCircuit, X, Check, Clock, Zap } from "lucide-react";

const oldWay = [
  "Spreadsheets tracking hundreds of requirements",
  "Manually chasing vendors for expired documents",
  "Paper-based inspections and handwritten logs",
  "Scrambling before every audit",
  "No visibility into what's missing until it's too late",
];

const newWay = [
  "AI tracks every obligation, deadline, and gap automatically",
  "Autonomous agents follow up with vendors on your behalf",
  "Digital operational records with immutable evidence trails",
  "Always audit-ready — real-time compliance scoring",
  "Proactive alerts before anything expires or degrades",
];

const cards = [
  {
    icon: ShieldCheck,
    title: "Third-Party Compliance",
    desc: "Track partner/vendor documents, validate against your requirements, score readiness, chase gaps — automatically. Works for supplier certificates, contractor qualifications, or partner agreements.",
    color: "#4F46E5",
  },
  {
    icon: ClipboardCheck,
    title: "Internal Operations",
    desc: "Digitize your operational records — inspections, audits, logs, checklists — with state-machine-driven lifecycles and immutable evidence trails.",
    color: "#06B6D4",
  },
  {
    icon: BrainCircuit,
    title: "Intelligence Layer",
    desc: "AI monitors email, calendar, documents, and connected sources to surface what matters — before it becomes a problem. Relationship intelligence, anomaly detection, regulatory radar.",
    color: "#7C3AED",
  },
];

export function SolutionOverview() {
  return (
    <section id="features" className="bg-[#0F172A] py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#4F46E5]/10 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-6">
            <h2 className="text-[36px] lg:text-[44px] font-[800] text-[#F8FAFC] mb-4" style={{ fontFamily: "Inter" }}>
              One Platform. Any Compliance Context.{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">Complete Coverage.</span>
            </h2>
            <p className="text-[#94A3B8] text-[17px] max-w-2xl mx-auto" style={{ fontFamily: "Inter" }}>
              Animo doesn't care what industry you're in. It cares about one thing: are your obligations met, your evidence valid, and your gaps closed?
            </p>
          </div>
        </ScrollReveal>

        {/* Old way vs New way */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 mt-14">
          <ScrollReveal>
            <div className="bg-[#1E293B]/60 backdrop-blur border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-2 text-[#F43F5E] text-[13px] font-[600] mb-6" style={{ fontFamily: "Inter" }}>
                <X size={16} /> THE OLD WAY
              </div>
              <div className="space-y-3 mb-6">
                {oldWay.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <X size={16} className="text-[#F43F5E] mt-0.5 shrink-0" />
                    <span className="text-[#94A3B8] text-[14px]" style={{ fontFamily: "Inter" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 bg-[#F43F5E]/10 border border-[#F43F5E]/20 rounded-lg p-3">
                <Clock size={16} className="text-[#F43F5E]" />
                <span className="text-[#F43F5E] text-[14px] font-[700]" style={{ fontFamily: "JetBrains Mono" }}>3 weeks</span>
                <span className="text-[#94A3B8] text-[13px]" style={{ fontFamily: "Inter" }}>average follow-up time</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="bg-[#10B981]/5 backdrop-blur border border-[#10B981]/20 rounded-2xl p-8">
              <div className="flex items-center gap-2 text-[#10B981] text-[13px] font-[600] mb-6" style={{ fontFamily: "Inter" }}>
                <Check size={16} /> THE ANIMO WAY
              </div>
              <div className="space-y-3 mb-6">
                {newWay.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={16} className="text-[#10B981] mt-0.5 shrink-0" />
                    <span className="text-[#E2E8F0] text-[14px]" style={{ fontFamily: "Inter" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/20 rounded-lg p-3">
                <Zap size={16} className="text-[#10B981]" />
                <span className="text-[#10B981] text-[14px] font-[700]" style={{ fontFamily: "JetBrains Mono" }}>2 minutes</span>
                <span className="text-[#E2E8F0] text-[13px]" style={{ fontFamily: "Inter" }}>to intelligent coverage</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 3 Feature cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.1}>
              <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: `${c.color}15` }}>
                  <c.icon size={28} style={{ color: c.color }} />
                </div>
                <h3 className="text-[20px] font-[700] text-[#F8FAFC] mb-3" style={{ fontFamily: "Inter" }}>{c.title}</h3>
                <p className="text-[#94A3B8] text-[15px] leading-[1.7]" style={{ fontFamily: "Inter" }}>{c.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { AnimatedCounter } from "./AnimatedCounter";
import { ScrollReveal } from "./ScrollReveal";
import { Check, Clock } from "lucide-react";

const metrics = [
  { value: 170, suffix: "+", label: "Automated actions" },
  { value: 47, suffix: "", label: "Record types (or design your own)" },
  { value: 6, suffix: "", label: "Assurance functions" },
  { value: 92, suffix: "%", label: "Avg compliance readiness" },
];

const milestones = [
  { date: "Shipped", text: "Document intelligence, readiness scoring & the compliance time machine", done: true },
  { date: "Shipped", text: "No-code record designer, multi-function modules & onboarding from your own documents", done: true },
  { date: "Shipped", text: "Connected sources, vendor risk, anomaly detection & meeting intelligence", done: true },
  { date: "Shipped", text: "Visual evidence — photos & video become operational records", done: true },
  { date: "Coming", text: "Photo → digital form, predictive risk & one-click evidence packs", done: false },
  { date: "Coming", text: "Third-party & auditor portal, broad visual compliance & a no-code automation builder", done: false },
  { date: "Coming", text: "Mobile field app, AR-guided assistance & conversational analytics", done: false },
  { date: "Later", text: "Single sign-on, integration marketplace & multi-language", done: false },
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

import { ScrollReveal } from "./ScrollReveal";
import { Lock, Bot, ScrollText, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Lock,
    title: "Your data stays yours",
    desc: "Every organization is a hard boundary. Nothing is ever shared across companies.",
    color: "#4F46E5",
  },
  {
    icon: Bot,
    title: "AI that asks before it acts",
    desc: "Four levels of authority — the AI knows what it can do, what needs your approval, and what it must never touch.",
    color: "#06B6D4",
  },
  {
    icon: ScrollText,
    title: "A history nobody can rewrite",
    desc: "Every record and change is append-only and attributed — who did what, when, and why.",
    color: "#F59E0B",
  },
  {
    icon: ShieldCheck,
    title: "Hundreds of actions, handled for you",
    desc: "From validating a document to preparing an evidence pack, the AI can do it — always under your control.",
    color: "#10B981",
  },
];

export function Technology() {
  return (
    <section id="technology" className="bg-[#0F172A] py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />
      <div className="max-w-7xl mx-auto px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-[36px] lg:text-[44px] font-[800] text-[#F8FAFC] mb-4" style={{ fontFamily: "Inter" }}>
              Built for{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">Trust</span>
            </h2>
            <p className="text-[#94A3B8] text-[17px] max-w-2xl mx-auto" style={{ fontFamily: "Inter" }}>
              Autonomous where it helps, accountable everywhere. Animo is built so you can hand it real work
              without handing over control.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-6">
          {pillars.map((h, i) => (
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

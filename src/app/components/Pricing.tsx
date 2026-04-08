import { ScrollReveal } from "./ScrollReveal";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    best: "Small teams getting started",
    features: ["Core module (5 record types)", "1 requirement framework", "Basic compliance scoring", "Email support"],
    highlight: false,
  },
  {
    name: "Professional",
    best: "Growing organizations",
    features: ["Core + industry modules", "AI agents", "Connected sources", "Gap analysis", "Priority support"],
    highlight: true,
  },
  {
    name: "Enterprise",
    best: "Large orgs with complex needs",
    features: ["All modules, all verticals", "Custom record types", "Dedicated success manager", "SLA & full API access", "SSO"],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#FAFBFF] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-[36px] lg:text-[44px] font-[800] text-[#1E293B] mb-4" style={{ fontFamily: "Inter" }}>
              Scales <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">With You</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {tiers.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className={`rounded-2xl p-8 h-full flex flex-col ${
                t.highlight
                  ? "bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-white shadow-xl shadow-[#4F46E5]/20"
                  : "bg-white border border-[#E2E8F0] shadow-sm"
              }`}>
                <h3 className="text-[22px] font-[700] mb-1" style={{ fontFamily: "Inter" }}>{t.name}</h3>
                <p className={`text-[13px] mb-4 ${t.highlight ? "text-white/70" : "text-[#64748B]"}`} style={{ fontFamily: "Inter" }}>{t.best}</p>
                <div className="text-[28px] font-[800] mb-6" style={{ fontFamily: "Inter" }}>Contact Us</div>
                <ul className="space-y-3 mb-8 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[14px]" style={{ fontFamily: "Inter" }}>
                      <Check size={16} className={`mt-0.5 shrink-0 ${t.highlight ? "text-white/80" : "text-[#10B981]"}`} />
                      <span className={t.highlight ? "text-white/90" : "text-[#64748B]"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-xl text-[15px] font-[600] transition-colors ${
                    t.highlight
                      ? "bg-white text-[#4F46E5] hover:bg-white/90"
                      : "bg-[#4F46E5] text-white hover:bg-[#3730A3]"
                  }`}
                  style={{ fontFamily: "Inter" }}
                >
                  Contact Us
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-center text-[#64748B] text-[14px]" style={{ fontFamily: "Inter" }}>
            All plans include AI chat, document processing, and audit trail.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

import { ScrollReveal } from "./ScrollReveal";
import { Check, Search, FileText, Brain, Camera, Mic } from "lucide-react";
import { PriceCalculator } from "./PriceCalculator";

const tiers = [
  {
    name: "Starter",
    users: "Best for 1–3 people",
    price: "$20",
    period: "/month",
    actions: "2,000 actions / month",
    features: [
      "Ask in plain words — chat, email or voice",
      "Read & check your documents",
      "Deep AI analysis",
      "A taste of photo checks",
      "Email support",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Professional",
    users: "Best for 4–25 people",
    price: "From $40",
    period: "/month",
    actions: "5,000–30,000 actions / month",
    bands: "4–6 · $40      7–12 · $80      13–25 · $160",
    features: [
      "Everything in Starter",
      "Photo checks & voice included",
      "Specialized AI for tricky documents",
      "Connected sources & partner health scores",
      "Priority support",
    ],
    cta: "Get started",
    highlight: true,
  },
  {
    name: "Enterprise",
    users: "Best for 26+ people",
    price: "Custom",
    period: "",
    actions: "Custom action pool",
    features: [
      "Everything in Professional",
      "Dedicated success manager",
      "Advanced access controls",
      "Guaranteed response time",
      "Connect your other software",
    ],
    cta: "Contact us",
    highlight: false,
  },
];

const actionUses = [
  { icon: Search, label: "File or search", cost: "1 action" },
  { icon: FileText, label: "Read a document", cost: "a few" },
  { icon: Brain, label: "Deep AI analysis", cost: "more" },
  { icon: Camera, label: "Photo check", cost: "more" },
  { icon: Mic, label: "Voice (per minute)", cost: "most" },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#FAFBFF] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-6">
            <h2 className="text-[36px] lg:text-[44px] font-[800] text-[#1E293B] mb-4" style={{ fontFamily: "Inter" }}>
              Pricing that <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">grows with you</span>
            </h2>
            <p className="text-[#64748B] text-[17px] max-w-2xl mx-auto" style={{ fontFamily: "Inter" }}>
              Pick the plan that fits your team. Every plan includes a shared monthly pool of actions
              your whole team draws from.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-10 items-stretch">
          {tiers.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className={`rounded-2xl p-8 h-full flex flex-col ${
                t.highlight
                  ? "bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-white shadow-xl shadow-[#4F46E5]/20"
                  : "bg-white border border-[#E2E8F0] shadow-sm"
              }`}>
                <h3 className="text-[22px] font-[700] mb-0.5" style={{ fontFamily: "Inter" }}>{t.name}</h3>
                <p className={`text-[13px] mb-4 ${t.highlight ? "text-white/70" : "text-[#64748B]"}`} style={{ fontFamily: "Inter" }}>{t.users}</p>

                <div className="flex items-end gap-1 mb-1">
                  <span className="text-[34px] font-[800] leading-none" style={{ fontFamily: "Inter" }}>{t.price}</span>
                  {t.period && (
                    <span className={`text-[14px] mb-1 ${t.highlight ? "text-white/70" : "text-[#94A3B8]"}`} style={{ fontFamily: "Inter" }}>{t.period}</span>
                  )}
                </div>
                <div className={`inline-flex self-start text-[12px] font-[600] px-2.5 py-1 rounded-full mb-2 ${
                  t.highlight ? "bg-white/15 text-white" : "bg-[#4F46E5]/10 text-[#4F46E5]"
                }`} style={{ fontFamily: "Inter" }}>
                  {t.actions}
                </div>
                {t.bands && (
                  <p className="text-[11px] text-white/70 mb-4" style={{ fontFamily: "JetBrains Mono" }}>{t.bands}</p>
                )}

                <ul className={`space-y-3 mb-8 flex-1 ${t.bands ? "" : "mt-2"}`}>
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
                  {t.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-center text-[#64748B] text-[14px] max-w-2xl mx-auto mb-12" style={{ fontFamily: "Inter" }}>
            Smaller team but need voice, photo checks, or a bigger pool?{" "}
            <span className="text-[#1E293B] font-[600]">Pick a higher plan — you pay for the plan, not per seat.</span>
          </p>
        </ScrollReveal>

        {/* What uses an action? */}
        <ScrollReveal>
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
            <h3 className="text-center text-[17px] font-[700] text-[#1E293B] mb-6" style={{ fontFamily: "Inter" }}>
              What uses an action?
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 mb-6">
              {actionUses.map((u) => (
                <div key={u.label} className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center mx-auto mb-2">
                    <u.icon size={18} className="text-[#4F46E5]" />
                  </div>
                  <div className="text-[13px] font-[600] text-[#1E293B] leading-tight" style={{ fontFamily: "Inter" }}>{u.label}</div>
                  <div className="text-[12px] text-[#64748B]" style={{ fontFamily: "Inter" }}>{u.cost}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-[#64748B] text-[14px] leading-[1.7]" style={{ fontFamily: "Inter" }}>
              Simple tasks use one action; deep analysis, photo checks and voice use more. Running low in a busy
              month? Add an action pack anytime — 1,000 for $12 · 5,000 for $50 · 15,000 for $120.
            </p>
            <p className="text-center text-[#94A3B8] text-[13px] mt-3" style={{ fontFamily: "Inter" }}>
              You'll always see how many actions your team has left — and we'll never run anything big without asking first.
            </p>
          </div>
        </ScrollReveal>

        <PriceCalculator />
      </div>
    </section>
  );
}

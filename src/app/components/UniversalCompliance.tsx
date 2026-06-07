import {
  ShieldCheck,
  BadgeCheck,
  FileSearch,
  Handshake,
  Scale,
  HardHat,
  MessageCircle,
  Bot,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const skins = [
  {
    label: "Compliance",
    icon: ShieldCheck,
    desc: "Prove you meet outside standards and regulations, score how ready you are, and close the gaps.",
    tags: "ISO · SQF (Safe Quality Food) · OSHA · SOC 2",
    color: "#4F46E5",
  },
  {
    label: "Quality Assurance",
    icon: BadgeCheck,
    desc: "Hold your processes and output to spec, and drive every corrective action to done.",
    tags: "ISO 9001 · inspections · corrective actions",
    color: "#06B6D4",
  },
  {
    label: "Audit & Assurance",
    icon: FileSearch,
    desc: "Always ready for a review — internal or external — and able to show your state on any past date.",
    tags: "internal & external audits",
    color: "#10B981",
  },
  {
    label: "Third-Party / Vendor Risk",
    icon: Handshake,
    desc: "Collect, check, score, and keep outside parties in good standing — automatically.",
    tags: "insurance · licenses · certs",
    color: "#F59E0B",
  },
  {
    label: "Governance",
    icon: Scale,
    desc: "Your policies, documents, decisions, and risk — in one trail you can trust.",
    tags: "policies · SOPs · controls",
    color: "#7C3AED",
  },
  {
    label: "Field Ops / EHS (Environment, Health & Safety)",
    icon: HardHat,
    desc: "Capture what happens on site, and push every issue through to resolution.",
    tags: "inspections · incidents · corrective actions",
    color: "#F43F5E",
  },
];

export function UniversalCompliance() {
  return (
    <section className="bg-[#0F172A] py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />
      <div className="max-w-7xl mx-auto px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-[36px] lg:text-[44px] font-[800] text-[#F8FAFC] mb-4" style={{ fontFamily: "Inter" }}>
              Whatever you have to{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">
                keep up and prove.
              </span>
            </h2>
            <p className="text-[#94A3B8] text-[17px] max-w-2xl mx-auto" style={{ fontFamily: "Inter" }}>
              Compliance, quality, audit, vendor risk, governance, safety — different names for the same job:
              keep the rules and prove you followed them. Animo runs all of them, in the words your team already uses.
            </p>
          </div>
        </ScrollReveal>

        {/* Six functions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {skins.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.08}>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-transform h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${s.color}20` }}>
                    <s.icon size={18} style={{ color: s.color }} />
                  </div>
                  <h3 className="text-[16px] font-[700] text-[#F8FAFC]" style={{ fontFamily: "Inter" }}>{s.label}</h3>
                </div>
                <p className="text-[#94A3B8] text-[13px] leading-[1.6] mb-3" style={{ fontFamily: "Inter" }}>{s.desc}</p>
                <p className="text-[12px] text-[#06B6D4]" style={{ fontFamily: "JetBrains Mono" }}>{s.tags}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

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
    desc: "Prove conformance to external standards and regulations, score readiness, close gaps.",
    tags: "ISO · SQF · OSHA · SOC 2",
    color: "#4F46E5",
  },
  {
    label: "Quality Assurance",
    icon: BadgeCheck,
    desc: "Hold processes and outputs to spec, and drive corrective actions to closure.",
    tags: "ISO 9001 · CAPA · inspections",
    color: "#06B6D4",
  },
  {
    label: "Audit & Assurance",
    icon: FileSearch,
    desc: "Be permanently audit-ready — assemble the evidence and prove your state at any past date.",
    tags: "internal & external audits",
    color: "#10B981",
  },
  {
    label: "Third-Party / Vendor Risk",
    icon: Handshake,
    desc: "Collect, validate, score, and keep external parties in good standing — automatically.",
    tags: "COIs · licenses · certifications",
    color: "#F59E0B",
  },
  {
    label: "Governance",
    icon: Scale,
    desc: "Controlled documents, policies, decisions, and enterprise risk in one trail.",
    tags: "policies · SOPs · GRC",
    color: "#7C3AED",
  },
  {
    label: "Field Ops / EHS",
    icon: HardHat,
    desc: "Capture operational and inspection evidence, and auto-escalate issues to resolution.",
    tags: "inspections · incidents · CAPA",
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
              Run any{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">
                assurance function.
              </span>
            </h2>
            <p className="text-[#94A3B8] text-[17px] max-w-2xl mx-auto" style={{ fontFamily: "Inter" }}>
              Compliance, quality, audit, risk, governance, safety — different names for the same job:
              prove the rules are followed. Animo runs all of them on one engine, in your function's language.
            </p>
          </div>
        </ScrollReveal>

        {/* Diagram C — one engine, your function */}
        <ScrollReveal>
          <div className="flex flex-col items-center mb-12">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#4F46E5]/25 to-[#06B6D4]/25 rounded-2xl blur-xl -z-10" />
              <div className="px-6 py-3 rounded-xl bg-gradient-to-br from-[#4F46E5]/20 to-[#06B6D4]/15 border border-[#4F46E5]/30">
                <span className="text-white text-[15px] font-[700]" style={{ fontFamily: "Inter" }}>ANIMO ENGINE</span>
              </div>
            </div>
            <div className="w-px h-8 bg-gradient-to-b from-[#4F46E5]/50 to-transparent" />
            <span className="text-[#64748B] text-[12px]" style={{ fontFamily: "Inter" }}>
              Same engine — six functions, your vocabulary.
            </span>
          </div>
        </ScrollReveal>

        {/* Six skins */}
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

        {/* Onboard-from-your-documents demo */}
        <ScrollReveal>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-center text-[#F8FAFC] text-[16px] font-[600] mb-2" style={{ fontFamily: "Inter" }}>
              Animo proposes your setup from your own documents — not a blank template.
            </p>
            <p className="text-center text-[#94A3B8] text-[13px] mb-6" style={{ fontFamily: "Inter" }}>
              Describe what you do, or point it at your files. You confirm what's right.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#4F46E5]/20 flex items-center justify-center shrink-0">
                  <MessageCircle size={16} className="text-[#4F46E5]" />
                </div>
                <div className="bg-[#4F46E5]/10 border border-[#4F46E5]/20 rounded-lg p-3 flex-1">
                  <span className="text-[#E2E8F0] text-[13px]" style={{ fontFamily: "Inter" }}>
                    "We run inspections across 30 sites and collect insurance and certifications from 120 vendors."
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#06B6D4]/20 flex items-center justify-center shrink-0">
                  <Bot size={16} className="text-[#06B6D4]" />
                </div>
                <div className="bg-[#06B6D4]/10 border border-[#06B6D4]/20 rounded-lg p-3 flex-1">
                  <span className="text-[#E2E8F0] text-[13px]" style={{ fontFamily: "Inter" }}>
                    Animo proposes inspection & incident record types, a requirement set, and vendor document tracking — each drawn from your own documents.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#10B981]/20 flex items-center justify-center shrink-0">
                  <CheckCircle size={16} className="text-[#10B981]" />
                </div>
                <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-lg p-3 flex-1">
                  <span className="text-[#10B981] text-[13px] font-[600]" style={{ fontFamily: "Inter" }}>
                    You review and publish → ready to run
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 text-[#06B6D4] text-[14px] font-[600] hover:gap-3 transition-all"
                style={{ fontFamily: "Inter" }}
              >
                See solutions by function &amp; industry <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

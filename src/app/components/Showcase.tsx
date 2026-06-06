import { ScrollReveal } from "./ScrollReveal";
import { Utensils, HardHat, Briefcase, Check } from "lucide-react";

const skinColors: Record<string, string> = {
  Compliance: "#4F46E5",
  "Quality Assurance": "#06B6D4",
  "Audit & Assurance": "#10B981",
  "Vendor Risk": "#F59E0B",
  Governance: "#7C3AED",
  "Field Ops / EHS": "#F43F5E",
};

const showcases = [
  {
    icon: Utensils,
    title: "Food Safety & Agriculture",
    skins: ["Compliance", "Quality Assurance", "Field Ops / EHS"],
    scenario: "A fresh-produce operation running a GFSI program across multiple sites and dozens of third parties.",
    runs: [
      "Keeps third-party certificates collected, validated, and current — and collects what's missing.",
      "Digitizes temperature, sanitation, and pest-control logs with an immutable trail; a breach auto-creates a corrective action.",
      "Turns photos and video of sanitation and field activity into records, automatically.",
      "Holds one readiness score across the program — and assembles the evidence pack in minutes.",
    ],
  },
  {
    icon: HardHat,
    title: "Construction & Site Safety",
    skins: ["Field Ops / EHS", "Vendor Risk"],
    scenario: "A contractor managing safety across many sites and subcontractors.",
    runs: [
      "Keeps subcontractor insurance, licenses, and certifications in good standing.",
      "Digitizes site inspections and incidents; a failed check escalates to resolution.",
      "Flags PPE and site-safety issues from a photo for your team to confirm.",
      "Keeps every site inspection-ready, with the evidence assembled on demand.",
    ],
  },
  {
    icon: Briefcase,
    title: "Consulting & Professional Services",
    skins: ["Governance"],
    scenario: "A firm running multiple client engagements and contracts.",
    runs: [
      "Tracks contracts, deliverables, and deadlines — and flags what's expiring or overdue.",
      "Keeps SOPs, policies, and client documents organized and searchable.",
      "Surfaces engagement health and at-risk work before it slips.",
      "Keeps a complete, attributed trail of every decision and commitment.",
    ],
  },
];

export function Showcase() {
  return (
    <section id="solutions" className="bg-[#FAFBFF] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-[36px] lg:text-[44px] font-[800] text-[#1E293B] mb-4" style={{ fontFamily: "Inter" }}>
              See it in{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">action</span>
            </h2>
            <p className="text-[#64748B] text-[16px] max-w-2xl mx-auto" style={{ fontFamily: "Inter" }}>
              The same engine, three very different operations. Here's what it runs for each.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {showcases.map((s) => (
            <ScrollReveal key={s.title}>
              <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#4F46E5]/10 flex items-center justify-center shrink-0">
                        <s.icon size={24} className="text-[#4F46E5]" />
                      </div>
                      <h3 className="text-[19px] font-[700] text-[#1E293B]" style={{ fontFamily: "Inter" }}>{s.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {s.skins.map((sk) => (
                        <span
                          key={sk}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-[500]"
                          style={{ background: `${skinColors[sk]}15`, color: skinColors[sk], fontFamily: "Inter" }}
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                    <p className="text-[#64748B] text-[14px] leading-[1.6]" style={{ fontFamily: "Inter" }}>{s.scenario}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="text-[#94A3B8] text-[11px] mb-3" style={{ fontFamily: "JetBrains Mono" }}>WHAT ANIMO RUNS</div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {s.runs.map((r) => (
                        <div key={r} className="flex items-start gap-2 bg-[#10B981]/5 border border-[#10B981]/15 rounded-lg p-3">
                          <Check size={15} className="text-[#10B981] mt-0.5 shrink-0" />
                          <span className="text-[#1E293B] text-[13px] leading-[1.5]" style={{ fontFamily: "Inter" }}>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

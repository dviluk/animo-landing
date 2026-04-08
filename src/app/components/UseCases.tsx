import { useState } from "react";
import { ChevronDown, Factory, Heart, HardHat, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollReveal } from "./ScrollReveal";

const useCases = [
  {
    icon: Briefcase,
    title: "Consulting Engagement & Contract Intelligence",
    industry: "Professional Services",
    story: "Apex Strategy Group — a consulting firm with 20 operators, 6 active client engagements, and 2 offices — uses Animo to manage contracts, budgets, proposals, invoices, and team utilization. The AI tracks engagement health, monitors budget burn rates against SOW scope, flags expiring contracts, identifies overdue deliverables, and surfaces underutilized consultants. Partners ask in plain language: 'How are our active engagements doing? Any at risk?' — and get instant health dashboards with billable hours, proposal win rates, and revenue pipeline.",
    before: "Managing Partners juggling spreadsheets for utilization, budgets tracked in email threads, contracts expiring without notice",
    after: "Real-time engagement health scores, auto-escalation on overdue invoices and expiring contracts, AI-generated utilization and pipeline reports",
    color: "#8B5CF6",
  },
  {
    icon: Factory,
    title: "Third-Party Vendor Compliance",
    industry: "Manufacturing",
    story: "A manufacturing company tracks 200+ suppliers. Each must provide valid insurance, safety certifications, and quality audits. Animo ingests documents, validates against requirements, scores each vendor, and automatically follows up when something expires.",
    before: "3 FTEs managing spreadsheets, 3-week follow-up cycles",
    after: "AI handles 90% of tracking, follow-ups sent in hours, real-time dashboard",
    color: "#4F46E5",
  },
  {
    icon: Heart,
    title: "Regulatory Audit Preparation",
    industry: "Healthcare",
    story: "A healthcare organization faces a Joint Commission audit. Animo's AI assembles the evidence package — mapping every requirement to its supporting document, flagging gaps, and generating a readiness report with current scores.",
    before: "6-week scramble, late nights, missed items",
    after: "Always audit-ready, evidence assembled in minutes",
    color: "#F43F5E",
  },
  {
    icon: HardHat,
    title: "Operational Record Digitization",
    industry: "Construction",
    story: "A construction firm replaces paper inspection logs with Animo. Site supervisors log inspections via chat or form. If a threshold is breached, the system auto-creates a corrective action, notifies the safety manager, and tracks resolution to closure.",
    before: "Paper forms, delayed reporting, no escalation trail",
    after: "Real-time logging, automatic escalation, immutable evidence",
    color: "#F59E0B",
  },
];

export function UseCases() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-[#FAFBFF] py-24">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-[36px] lg:text-[44px] font-[800] text-[#1E293B] mb-4" style={{ fontFamily: "Inter" }}>
              Real Scenarios, <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">Real Value</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {useCases.map((uc, i) => (
            <ScrollReveal key={uc.title} delay={i * 0.1}>
              <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center gap-4 p-6 text-left"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${uc.color}15` }}>
                    <uc.icon size={20} style={{ color: uc.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[17px] font-[700] text-[#1E293B]" style={{ fontFamily: "Inter" }}>{uc.title}</h3>
                    <span className="text-[12px] text-[#64748B]" style={{ fontFamily: "Inter" }}>{uc.industry}</span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-[#64748B] transition-transform ${openIdx === i ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {openIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-4">
                        <p className="text-[#64748B] text-[15px] leading-[1.7]" style={{ fontFamily: "Inter" }}>{uc.story}</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="bg-[#F43F5E]/5 border border-[#F43F5E]/15 rounded-xl p-4">
                            <div className="text-[#F43F5E] text-[12px] font-[600] mb-2" style={{ fontFamily: "Inter" }}>BEFORE</div>
                            <p className="text-[#64748B] text-[13px]" style={{ fontFamily: "Inter" }}>{uc.before}</p>
                          </div>
                          <div className="bg-[#10B981]/5 border border-[#10B981]/15 rounded-xl p-4">
                            <div className="text-[#10B981] text-[12px] font-[600] mb-2" style={{ fontFamily: "Inter" }}>AFTER</div>
                            <p className="text-[#1E293B] text-[13px]" style={{ fontFamily: "Inter" }}>{uc.after}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
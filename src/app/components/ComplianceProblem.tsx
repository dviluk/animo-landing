import { ScrollReveal } from "./ScrollReveal";
import { AnimatedCounter } from "./AnimatedCounter";
import { Clock, AlertTriangle, FolderSearch, HelpCircle } from "lucide-react";

const cards = [
  {
    icon: Clock,
    title: "Chasing people for paperwork",
    desc: "Certificates and insurance that lapsed months ago — and you're the last to know.",
    example: "The follow-up that never ends.",
    color: "#4F46E5",
  },
  {
    icon: AlertTriangle,
    title: "Gaps you find too late",
    desc: "The missing piece always turns up the week of the inspection.",
    example: "Always a surprise, never on your terms.",
    color: "#F59E0B",
  },
  {
    icon: FolderSearch,
    title: "Proof nobody can find",
    desc: "Paper, spreadsheets, inboxes, drives. The evidence exists… somewhere.",
    example: "Hours lost assembling it by hand.",
    color: "#06B6D4",
  },
  {
    icon: HelpCircle,
    title: "No straight answer",
    desc: "Ask \"are we ready right now?\" and nobody actually knows.",
    example: "Confidence by guesswork.",
    color: "#7C3AED",
  },
];

export function ComplianceProblem() {
  return (
    <section className="bg-[#FAFBFF] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-center text-[22px] lg:text-[28px] text-[#1E293B] leading-[1.6] max-w-3xl mx-auto mb-16" style={{ fontFamily: "Inter", fontWeight: 400 }}>
            Most teams don't fail their standard on purpose. They fail because a document{" "}
            <span className="font-[700]">expired</span>, a record went{" "}
            <span className="font-[700]">missing</span>, or nobody noticed until the day of the{" "}
            <span className="font-[700]">inspection</span>.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.1}>
              <div className="group bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${c.color}15` }}>
                  <c.icon size={24} style={{ color: c.color }} />
                </div>
                <h3 className="text-[17px] font-[700] text-[#1E293B] mb-2" style={{ fontFamily: "Inter" }}>{c.title}</h3>
                <p className="text-[#64748B] text-[14px] leading-[1.6] mb-3" style={{ fontFamily: "Inter" }}>{c.desc}</p>
                <p className="text-[#94A3B8] text-[12px] leading-[1.5] italic" style={{ fontFamily: "Inter" }}>{c.example}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-gradient-to-r from-[#F59E0B]/10 to-[#F43F5E]/10 border border-[#F59E0B]/20 rounded-2xl p-8 text-center mb-10">
            <div className="flex flex-wrap justify-center gap-8 mb-4">
              <div>
                <span className="text-[36px] font-[800] text-[#1E293B]" style={{ fontFamily: "JetBrains Mono" }}>
                  $<AnimatedCounter end={2.71} suffix="M" />
                </span>
                <p className="text-[#64748B] text-[13px] mt-1" style={{ fontFamily: "Inter" }}>Avg cost of a compliance violation</p>
              </div>
              <div className="w-px bg-[#E2E8F0]" />
              <div>
                <span className="text-[36px] font-[800] text-[#1E293B]" style={{ fontFamily: "JetBrains Mono" }}>
                  <AnimatedCounter end={67} suffix="%" />
                </span>
                <p className="text-[#64748B] text-[13px] mt-1" style={{ fontFamily: "Inter" }}>Stem from expired or missing docs</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-center text-[#64748B] text-[16px] max-w-2xl mx-auto leading-[1.7]" style={{ fontFamily: "Inter" }}>
            Documents from other people, or records your own team creates — you need
            something that never looks away.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

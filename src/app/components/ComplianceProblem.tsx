import { ScrollReveal } from "./ScrollReveal";
import { AnimatedCounter } from "./AnimatedCounter";
import { Scale, FileCheck, Award, Building } from "lucide-react";

const cards = [
  {
    icon: Scale,
    title: "Legal Compliance",
    desc: "Following laws set by governments and regulatory bodies",
    example: "Tax obligations, labor laws, environmental regulations",
    color: "#4F46E5",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    desc: "Meeting requirements from industry-specific regulatory agencies",
    example: "Drug safety (FDA), financial reporting (SEC), workplace safety (OSHA)",
    color: "#06B6D4",
  },
  {
    icon: Award,
    title: "Standards Compliance",
    desc: "Adhering to established standards and specifications",
    example: "ISO 9001, SOC 2, SQF, GFSI, LEED, HIPAA",
    color: "#F59E0B",
  },
  {
    icon: Building,
    title: "Organizational Compliance",
    desc: "Following internal policies, codes of conduct, and SOPs",
    example: "Workplace safety procedures, vendor qualification, training requirements",
    color: "#7C3AED",
  },
];

export function ComplianceProblem() {
  return (
    <section className="bg-[#FAFBFF] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-center text-[22px] lg:text-[28px] text-[#1E293B] leading-[1.6] max-w-3xl mx-auto mb-16" style={{ fontFamily: "Inter", fontWeight: 400 }}>
            Compliance isn't just a legal checkbox. It's the foundation of{" "}
            <span className="font-[700]">safety</span>,{" "}
            <span className="font-[700]">consistency</span>,{" "}
            <span className="font-[700]">accountability</span>, and{" "}
            <span className="font-[700]">trust</span>.
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
            Whether you're tracking vendor certificates, managing operational inspections, meeting regulatory deadlines,
            or proving you're ready — you need a system that never sleeps.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

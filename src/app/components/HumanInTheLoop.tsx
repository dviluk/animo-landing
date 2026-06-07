import { ScrollReveal } from "./ScrollReveal";
import { CheckCircle, UserCheck, ShieldOff } from "lucide-react";

const levels = [
  {
    Icon: CheckCircle,
    name: "Does it on its own",
    desc: "The safe, routine stuff — reading, filing, checking, searching.",
    example: "Read a document, file it, check it against your standard, run a search.",
    color: "#10B981",
    bg: "#10B981",
  },
  {
    Icon: UserCheck,
    name: "Checks with you first",
    desc: "Anything that leaves the building or changes a status.",
    example: "Send a follow-up email, approve a document, close out an action.",
    color: "#F59E0B",
    bg: "#F59E0B",
  },
  {
    Icon: ShieldOff,
    name: "Never, ever",
    desc: "The calls only a person should make — no exceptions.",
    example:
      "Declare you compliant, change your rules, or make up evidence.",
    color: "#F43F5E",
    bg: "#F43F5E",
  },
];

export function HumanInTheLoop() {
  return (
    <section id="technology" className="bg-[#FAFBFF] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2
              className="text-[36px] lg:text-[44px] font-[800] text-[#1E293B] mb-4"
              style={{ fontFamily: "Inter" }}
            >
              Autonomous.{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">
                Not Reckless.
              </span>
            </h2>
            <p
              className="text-[#64748B] text-[17px] max-w-2xl mx-auto"
              style={{ fontFamily: "Inter" }}
            >
              Animo's AI has clear rules about what it can do on its own, what it
              checks with you first, and what it must never touch.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4 mb-12">
          {levels.map((l, i) => (
            <ScrollReveal key={l.name} delay={i * 0.12}>
              <div className="flex items-stretch bg-white/60 backdrop-blur-xl border border-white/80 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-2 shrink-0" style={{ background: l.bg }} />
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 flex-1">
                  <div className="flex items-center gap-3 shrink-0">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `${l.color}20` }}
                    >
                      <l.Icon size={16} style={{ color: l.color }} />
                    </div>
                    <span
                      className="text-[16px] font-[700] text-[#1E293B]"
                      style={{ fontFamily: "Inter" }}
                    >
                      {l.name}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-[#1E293B] text-[14px]"
                      style={{ fontFamily: "Inter" }}
                    >
                      {l.desc}
                    </p>
                    <p
                      className="text-[#94A3B8] text-[12px] mt-1 italic"
                      style={{ fontFamily: "Inter" }}
                    >
                      {l.example}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-[#EEF2FF] rounded-xl p-6 text-center">
            <p
              className="text-[#64748B] text-[15px] leading-[1.7]"
              style={{ fontFamily: "Inter" }}
            >
              Every action is logged — who did it (you or the AI), what changed,
              when, and why. And your data stays yours — every organization is a
              hard boundary, never shared with anyone else.{" "}
              <span className="text-[#1E293B] font-[600]">
                Your audit trail is always complete.
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

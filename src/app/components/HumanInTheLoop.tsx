import { ScrollReveal } from "./ScrollReveal";
import { CheckCircle, AlertTriangle, Eye, ShieldOff } from "lucide-react";

const levels = [
  {
    Icon: CheckCircle,
    name: "Authoritative",
    desc: "AI executes immediately",
    example: "Search, retrieve, classify, validate",
    color: "#10B981",
    bg: "#10B981",
  },
  {
    Icon: AlertTriangle,
    name: "Threshold-Based",
    desc: "AI acts if conditions met; human can override",
    example: "Auto-validate document if confidence > 95%",
    color: "#F59E0B",
    bg: "#F59E0B",
  },
  {
    Icon: Eye,
    name: "Advisory",
    desc: "AI drafts; human approves before execution",
    example: "Draft follow-up email, propose corrective action",
    color: "#4F46E5",
    bg: "#4F46E5",
  },
  {
    Icon: ShieldOff,
    name: "Forbidden",
    desc: "AI never allowed, regardless of context",
    example:
      "Declare compliance status, modify requirements, fabricate evidence",
    color: "#F43F5E",
    bg: "#F43F5E",
  },
];

export function HumanInTheLoop() {
  return (
    <section className="bg-[#FAFBFF] py-24">
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
              Animo's AI agents have clearly defined authority boundaries. They
              know what they can do, what needs approval, and what they must
              never do.
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
              Every AI action is logged with full attribution — who triggered it
              (human or AI), what decision was made, when, and why.{" "}
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

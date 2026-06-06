import { ScrollReveal } from "./ScrollReveal";
import {
  ShieldCheck,
  ClipboardCheck,
  BrainCircuit,
  FileText,
  ClipboardList,
  Camera,
  Mail,
  Gauge,
  FolderCheck,
  History,
  ArrowRight,
  X,
  Check,
  Clock,
  Zap,
} from "lucide-react";

const oldWay = [
  "Spreadsheets tracking hundreds of requirements",
  "Manually following up for expired documents",
  "Paper-based inspections and handwritten logs",
  "Scrambling before every inspection",
  "No visibility into what's missing until it's too late",
];

const newWay = [
  "AI tracks every obligation, deadline, and gap automatically",
  "Agents follow up for you and collect what's missing",
  "Digital records with immutable evidence trails",
  "Always inspection-ready — real-time readiness scoring",
  "Proactive alerts before anything expires or degrades",
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "Third-Party Compliance",
    desc: "Collect, validate, and keep your third parties and providers in good standing. Animo requests what's owed, validates it, and flags what's about to expire.",
    coming: "a secure portal where they upload evidence themselves",
    color: "#4F46E5",
  },
  {
    icon: ClipboardCheck,
    title: "Internal Operations",
    desc: "The same engine on your own records, SOPs, and inspections — digitized, with state-driven lifecycles and an immutable evidence trail.",
    coming: null,
    color: "#06B6D4",
  },
  {
    icon: BrainCircuit,
    title: "Intelligence",
    desc: "Animo watches email, calendar, documents, and connected sources to surface risk, anomalies, and deadlines — before they become a problem.",
    coming: null,
    color: "#7C3AED",
  },
];

/* Connector arrow — points right on desktop, down on mobile */
function FlowArrow() {
  return (
    <div className="flex items-center justify-center shrink-0 text-[#4F46E5]">
      <ArrowRight size={22} className="hidden lg:block" />
      <ArrowRight size={22} className="lg:hidden rotate-90" />
    </div>
  );
}

/* Diagram A — the engine at a glance: evidence -> Animo -> proof */
function EngineGlance() {
  const inputs = [
    { icon: FileText, label: "Documents" },
    { icon: ClipboardList, label: "Records" },
    { icon: Camera, label: "Photos & video" },
    { icon: Mail, label: "Email & Drive" },
  ];
  const outputs = [
    { icon: Gauge, label: "Readiness score" },
    { icon: FolderCheck, label: "Gaps collected" },
    { icon: History, label: "Inspection-ready trail" },
  ];
  return (
    <ScrollReveal>
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 mb-16">
        <div className="flex flex-col lg:flex-row items-stretch gap-4">
          <div className="flex-1 bg-[#0F172A]/40 border border-white/5 rounded-xl p-5">
            <div className="text-[#64748B] text-[11px] mb-3" style={{ fontFamily: "JetBrains Mono" }}>
              YOUR EVIDENCE
            </div>
            <div className="grid grid-cols-2 gap-2">
              {inputs.map((it) => (
                <div key={it.label} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                  <it.icon size={14} className="text-[#06B6D4] shrink-0" />
                  <span className="text-[#E2E8F0] text-[12px]" style={{ fontFamily: "Inter" }}>{it.label}</span>
                </div>
              ))}
            </div>
          </div>

          <FlowArrow />

          <div className="flex-1 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#4F46E5]/20 to-[#06B6D4]/20 rounded-2xl blur-xl -z-10" />
            <div className="h-full bg-gradient-to-br from-[#4F46E5]/15 to-[#06B6D4]/10 border border-[#4F46E5]/30 rounded-xl p-5 flex flex-col justify-center">
              <div className="text-white text-[16px] font-[700] mb-3" style={{ fontFamily: "Inter" }}>Animo</div>
              <div className="flex flex-wrap gap-1.5">
                {["reads", "validates", "scores", "collects", "acts"].map((v) => (
                  <span
                    key={v}
                    className="px-2 py-0.5 rounded bg-white/10 text-[#E2E8F0] text-[11px]"
                    style={{ fontFamily: "JetBrains Mono" }}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <FlowArrow />

          <div className="flex-1 bg-[#10B981]/5 border border-[#10B981]/20 rounded-xl p-5">
            <div className="text-[#10B981] text-[11px] mb-3" style={{ fontFamily: "JetBrains Mono" }}>
              PROOF
            </div>
            <div className="space-y-2">
              {outputs.map((it) => (
                <div key={it.label} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                  <it.icon size={14} className="text-[#10B981] shrink-0" />
                  <span className="text-[#E2E8F0] text-[12px]" style={{ fontFamily: "Inter" }}>{it.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-5 text-[#64748B] text-[12px]" style={{ fontFamily: "Inter" }}>
          Everything measured against <span className="text-[#94A3B8] font-[600]">your standard</span>.
        </div>
      </div>
    </ScrollReveal>
  );
}

/* Diagram B — two modes converge into one score + one trail */
function TwoModesBridge() {
  return (
    <ScrollReveal>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
        <div className="flex flex-col gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-2 bg-[#4F46E5]/10 border border-[#4F46E5]/20 rounded-lg px-4 py-2.5">
            <ShieldCheck size={15} className="text-[#4F46E5] shrink-0" />
            <span className="text-[#E2E8F0] text-[13px]" style={{ fontFamily: "Inter" }}>Third-party evidence</span>
          </div>
          <div className="flex items-center gap-2 bg-[#06B6D4]/10 border border-[#06B6D4]/20 rounded-lg px-4 py-2.5">
            <ClipboardCheck size={15} className="text-[#06B6D4] shrink-0" />
            <span className="text-[#E2E8F0] text-[13px]" style={{ fontFamily: "Inter" }}>Your own operations</span>
          </div>
        </div>
        <FlowArrow />
        <div className="bg-[#10B981]/10 border border-[#10B981]/25 rounded-xl px-5 py-4 text-center">
          <div className="text-[#10B981] text-[14px] font-[700]" style={{ fontFamily: "Inter" }}>
            One readiness score
          </div>
          <div className="text-[#94A3B8] text-[12px]" style={{ fontFamily: "Inter" }}>
            and one inspection-ready trail
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function SolutionOverview() {
  return (
    <section id="features" className="bg-[#0F172A] py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#4F46E5]/10 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-[36px] lg:text-[44px] font-[800] text-[#F8FAFC] mb-4" style={{ fontFamily: "Inter" }}>
              One engine.{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">
                Both sides of compliance.
              </span>
            </h2>
            <p className="text-[#94A3B8] text-[17px] max-w-2xl mx-auto" style={{ fontFamily: "Inter" }}>
              Animo doesn't care what industry you're in. It cares about one thing: are your obligations met,
              your evidence valid, and your gaps closed?
            </p>
          </div>
        </ScrollReveal>

        {/* Diagram A — the engine at a glance */}
        <EngineGlance />

        {/* Diagram B — two modes, one proof */}
        <TwoModesBridge />

        {/* 3 pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pillars.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.1}>
              <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: `${c.color}15` }}>
                  <c.icon size={28} style={{ color: c.color }} />
                </div>
                <h3 className="text-[20px] font-[700] text-[#F8FAFC] mb-3" style={{ fontFamily: "Inter" }}>{c.title}</h3>
                <p className="text-[#94A3B8] text-[15px] leading-[1.7]" style={{ fontFamily: "Inter" }}>{c.desc}</p>
                {c.coming && (
                  <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/25">
                    <Clock size={11} className="text-[#F59E0B] shrink-0" />
                    <span className="text-[#F59E0B] text-[11px]" style={{ fontFamily: "Inter" }}>Coming: {c.coming}</span>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Old way vs Animo way */}
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="bg-[#1E293B]/60 backdrop-blur border border-white/10 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-2 text-[#F43F5E] text-[13px] font-[600] mb-6" style={{ fontFamily: "Inter" }}>
                <X size={16} /> THE OLD WAY
              </div>
              <div className="space-y-3 mb-6">
                {oldWay.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <X size={16} className="text-[#F43F5E] mt-0.5 shrink-0" />
                    <span className="text-[#94A3B8] text-[14px]" style={{ fontFamily: "Inter" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 bg-[#F43F5E]/10 border border-[#F43F5E]/20 rounded-lg p-3">
                <Clock size={16} className="text-[#F43F5E]" />
                <span className="text-[#F43F5E] text-[14px] font-[700]" style={{ fontFamily: "JetBrains Mono" }}>3 weeks</span>
                <span className="text-[#94A3B8] text-[13px]" style={{ fontFamily: "Inter" }}>average follow-up time</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="bg-[#10B981]/5 backdrop-blur border border-[#10B981]/20 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-2 text-[#10B981] text-[13px] font-[600] mb-6" style={{ fontFamily: "Inter" }}>
                <Check size={16} /> THE ANIMO WAY
              </div>
              <div className="space-y-3 mb-6">
                {newWay.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={16} className="text-[#10B981] mt-0.5 shrink-0" />
                    <span className="text-[#E2E8F0] text-[14px]" style={{ fontFamily: "Inter" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/20 rounded-lg p-3">
                <Zap size={16} className="text-[#10B981]" />
                <span className="text-[#10B981] text-[14px] font-[700]" style={{ fontFamily: "JetBrains Mono" }}>minutes</span>
                <span className="text-[#E2E8F0] text-[13px]" style={{ fontFamily: "Inter" }}>to intelligent coverage</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

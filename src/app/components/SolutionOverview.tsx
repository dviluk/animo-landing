import { Fragment } from "react";
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
  "AI tracks every rule, deadline, and gap automatically",
  "Animo follows up for you and collects what's missing",
  "Digital records with a trail nobody can change",
  "Always ready — a live score of where you stand",
  "Heads-up before anything expires or slips",
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "Collects and checks your documents",
    desc: "Vendor and contractor certificates, insurance, and licenses. Animo asks for what's owed, validates it, and flags what's about to expire — automatically.",
    coming: "a secure portal where they upload it themselves",
    color: "#4F46E5",
  },
  {
    icon: ClipboardCheck,
    title: "Digitizes your own records",
    desc: "Your inspections, logs, checklists, and reports — organized and kept in a record nobody can quietly change.",
    coming: null,
    color: "#06B6D4",
  },
  {
    icon: BrainCircuit,
    title: "Watches for what's coming",
    desc: "Risks and deadlines across your email, calendar, and files — surfaced before they become problems.",
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

/* Flow — Collect / Check / Act / Prove (one solution, end to end) */
function EngineGlance() {
  const steps = [
    {
      key: "COLLECT",
      sub: "What you already have",
      color: "#06B6D4",
      items: ["Certs & licenses", "Contracts & insurance", "Policies, records & reports", "Photos, emails & files"],
    },
    {
      key: "CHECK",
      sub: "Reads & checks each one against your standard",
      color: "#4F46E5",
      items: ["Reads it", "Files it", "Checks the details"],
    },
    {
      key: "ACT",
      sub: "Does the legwork, around the clock",
      color: "#7C3AED",
      items: ["Flags what's expiring", "Chases what's missing", "Turns any gap into a tracked fix", "Spots risks early"],
    },
    {
      key: "PROVE",
      sub: "What you get",
      color: "#10B981",
      items: ["One score: how ready you are right now", "A record nobody can change", "Your evidence pack, in minutes"],
    },
  ];
  return (
    <ScrollReveal>
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 mb-16">
        <div className="flex flex-col lg:flex-row items-stretch gap-3">
          {steps.map((s, i) => (
            <Fragment key={s.key}>
              <div className="flex-1 bg-[#0F172A]/40 border rounded-xl p-5" style={{ borderColor: `${s.color}30` }}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: s.color }} />
                  <span className="text-[13px] font-[700]" style={{ color: s.color, fontFamily: "JetBrains Mono" }}>{s.key}</span>
                </div>
                <div className="text-[#94A3B8] text-[11px] mb-3 leading-[1.5]" style={{ fontFamily: "Inter" }}>{s.sub}</div>
                <div className="space-y-1.5">
                  {s.items.map((it) => (
                    <div key={it} className="flex items-start gap-2 bg-white/5 rounded-lg px-3 py-2">
                      <Check size={13} className="mt-0.5 shrink-0" style={{ color: s.color }} />
                      <span className="text-[#E2E8F0] text-[12px] leading-[1.4]" style={{ fontFamily: "Inter" }}>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
              {i < steps.length - 1 && <FlowArrow />}
            </Fragment>
          ))}
        </div>
        <div className="text-center mt-5 text-[#64748B] text-[12px]" style={{ fontFamily: "Inter" }}>
          Everything measured against <span className="text-[#94A3B8] font-[600]">your standard</span> — and it asks before anything leaves your hands.
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
              One solution for{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">
                everything you have to prove.
              </span>
            </h2>
            <p className="text-[#94A3B8] text-[17px] max-w-2xl mx-auto" style={{ fontFamily: "Inter" }}>
              A certificate from a vendor, an inspection your own team ran, a deadline you can't miss — it all
              lives in one place, checked against your standard, with one answer always ready: are you ready?
            </p>
          </div>
        </ScrollReveal>

        {/* Flow — Collect / Check / Act / Prove */}
        <EngineGlance />

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
                <span className="text-[#E2E8F0] text-[13px]" style={{ fontFamily: "Inter" }}>to know where you stand</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

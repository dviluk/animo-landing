import { ScrollReveal } from "./ScrollReveal";
import {
  MessageSquare,
  Bot,
  FileSearch,
  BarChart3,
  Settings,
  Radar,
  Check,
  ClipboardList,
  AlertTriangle,
  Calendar,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Talk to Your Compliance Data",
    desc: "Natural language everything. Chat, email, or voice — ask questions, create records, run reports, trigger actions. One AI brain handles it all.",
    badge: "Hundreds of automated actions",
    mockup: (
      <div className="space-y-3">
        <div className="bg-[#4F46E5]/20 border border-[#4F46E5]/30 rounded-lg p-3">
          <div
            className="text-[#94A3B8] text-[11px] mb-1"
            style={{ fontFamily: "Inter" }}
          >
            You
          </div>
          <div
            className="text-white text-[13px]"
            style={{ fontFamily: "Inter" }}
          >
            Show me everything expiring this month
          </div>
        </div>
        <div className="bg-[#06B6D4]/10 border border-[#06B6D4]/20 rounded-lg p-3">
          <div
            className="text-[#06B6D4] text-[11px] mb-1"
            style={{ fontFamily: "Inter" }}
          >
            Animo AI
          </div>
          <div
            className="text-[#E2E8F0] text-[13px]"
            style={{ fontFamily: "Inter" }}
          >
            I found 7 expiring items across your records and documents. Want
            me to draft follow-ups?
          </div>
          <div className="mt-2 flex gap-2">
            <span className="px-2 py-0.5 text-[10px] rounded bg-[#10B981]/20 text-[#10B981]">
              Draft Follow-ups
            </span>
            <span className="px-2 py-0.5 text-[10px] rounded bg-[#4F46E5]/20 text-[#4F46E5]">
              View Details
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Bot,
    title: "AI Agents running 24/7. Zero Coffee Breaks.",
    desc: "Autonomous agents that check compliance daily, validate documents on upload, draft follow-up emails, and prepare evidence packages — all while you sleep.",
    badge: "Human-in-the-Loop Safety Gates",
    mockup: (
      <div className="space-y-2">
        {[
          {
            status: "bg-[#10B981]",
            text: "ComplianceChecker completed daily scan — 3 gaps found across 2 sites",
          },
          {
            status: "bg-[#F59E0B]",
            text: "OutreachCoordinator drafted 5 follow-up emails (awaiting your approval)",
          },
          {
            status: "bg-[#10B981]",
            text: "DocumentValidator auto-validated 12 uploads against requirements",
          },
          {
            status: "bg-[#06B6D4]",
            text: "EvidencePreparer assembled Q1 evidence package — 94% complete",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-2 bg-[#0F172A]/40 rounded-lg p-3 border border-white/5"
          >
            <div
              className={`w-2 h-2 rounded-full ${item.status} mt-1.5 shrink-0`}
            />
            <span
              className="text-[#E2E8F0] text-[12px]"
              style={{ fontFamily: "JetBrains Mono" }}
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: FileSearch,
    title: "Upload Anything. AI Does the Rest.",
    desc: "Certificates, permits, licenses, inspection reports, training records — AI reads it, classifies it, extracts the key fields, checks it against your requirements, and flags what's wrong. In seconds.",
    badge: "Reads any document or image",
    mockup: (
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {["DPI Check", "Legibility", "Orientation"].map((t, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-md bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-[11px] flex items-center gap-1"
              style={{ fontFamily: "JetBrains Mono" }}
            >
              {t} <Check size={10} />
            </span>
          ))}
        </div>
        <div className="bg-[#4F46E5]/10 border border-[#4F46E5]/20 rounded-lg p-3">
          <div
            className="text-[#4F46E5] text-[11px] mb-1"
            style={{ fontFamily: "Inter" }}
          >
            Classification
          </div>
          <div
            className="text-[#E2E8F0] text-[13px]"
            style={{ fontFamily: "JetBrains Mono" }}
          >
            Compliance Certificate
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Expiry", value: "2026-08-15" },
            { label: "Issued", value: "2025-08-15" },
            { label: "Ref #", value: "A-2847" },
          ].map((f) => (
            <div
              key={f.label}
              className="bg-[#0F172A]/40 rounded-lg p-2 border border-white/5"
            >
              <div
                className="text-[#64748B] text-[9px]"
                style={{ fontFamily: "Inter" }}
              >
                {f.label}
              </div>
              <div
                className="text-[#E2E8F0] text-[11px]"
                style={{ fontFamily: "JetBrains Mono" }}
              >
                {f.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: BarChart3,
    title: "Not Pass/Fail. Granular, Evidence-Backed, Actionable.",
    desc: "Real-time readiness scores across every requirement set — whether it's ISO 9001, OSHA, SOC 2, or your own internal standards. See exactly where you stand and what to fix first.",
    badge: "Compliance Time Machine™",
    mockup: (
      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16">
            <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="26"
                fill="none"
                stroke="#1E293B"
                strokeWidth="5"
              />
              <circle
                cx="32"
                cy="32"
                r="26"
                fill="none"
                stroke="#10B981"
                strokeWidth="5"
                strokeDasharray={`${0.92 * 163.4} 163.4`}
                strokeLinecap="round"
              />
            </svg>
            <span
              className="absolute inset-0 flex items-center justify-center text-white text-[13px] font-[700]"
              style={{ fontFamily: "JetBrains Mono" }}
            >
              92%
            </span>
          </div>
          <div className="space-y-1 flex-1">
            {[
              { label: "Framework A", pct: 97 },
              { label: "Framework B", pct: 88 },
              { label: "Framework C", pct: 91 },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-2">
                <span
                  className="text-[#94A3B8] text-[10px] w-20"
                  style={{ fontFamily: "Inter" }}
                >
                  {f.label}
                </span>
                <div className="flex-1 h-1.5 bg-[#1E293B] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#10B981] rounded-full"
                    style={{ width: `${f.pct}%` }}
                  />
                </div>
                <span
                  className="text-[#E2E8F0] text-[10px] w-8 text-right"
                  style={{ fontFamily: "JetBrains Mono" }}
                >
                  {f.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <span className="px-2 py-0.5 rounded text-[10px] bg-[#F43F5E]/20 text-[#F43F5E]">
            3 Critical
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] bg-[#F59E0B]/20 text-[#F59E0B]">
            5 Medium
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] bg-[#06B6D4]/20 text-[#06B6D4]">
            12 Low
          </span>
        </div>
      </div>
    ),
  },
  {
    icon: Settings,
    title: "Your Operational Evidence. Digitized. Immutable.",
    desc: "47 record types out of the box — inspections, logs, checklists, incident reports, training records, corrective actions — or design your own in plain language. Each with state-driven lifecycles and append-only correction history.",
    badge: "Immutable Evidence Trail",
    mockup: (
      <div className="space-y-3">
        <div className="flex items-center gap-3 bg-[#10B981]/10 border border-[#10B981]/20 rounded-lg p-3">
          <ClipboardList size={14} className="text-[#10B981] shrink-0" />
          <span
            className="text-[#10B981] text-[13px] font-[600] flex items-center gap-1"
            style={{ fontFamily: "JetBrains Mono" }}
          >
            Inspection #2847 — Validated <Check size={12} />
          </span>
        </div>
        <div className="flex gap-1">
          {["Draft", "Review", "Approved", "Implementing", "Verified"].map(
            (s, i) => (
              <div
                key={s}
                className={`flex-1 py-1.5 text-center text-[9px] rounded ${i <= 3 ? "bg-[#4F46E5]/20 text-[#4F46E5]" : "bg-white/5 text-[#64748B]"}`}
                style={{ fontFamily: "Inter" }}
              >
                {s}
              </div>
            ),
          )}
        </div>
        <div className="bg-[#0F172A]/40 border border-white/5 rounded-lg p-3">
          <div
            className="text-[#64748B] text-[10px] mb-1"
            style={{ fontFamily: "Inter" }}
          >
            Correction Chain
          </div>
          <div
            className="flex items-center gap-2 text-[11px]"
            style={{ fontFamily: "JetBrains Mono" }}
          >
            <span className="text-[#94A3B8]">Original</span>
            <span className="text-[#64748B]">→</span>
            <span className="text-[#F59E0B]">Correction 1</span>
            <span className="text-[#64748B]">→</span>
            <span className="text-[#06B6D4]">Correction 2</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Radar,
    title: "Your AI-Powered Radar. Always Watching.",
    desc: "Relationship risk scores, communication anomaly detection, meeting intelligence, smart follow-ups, and regulatory change monitoring — all delivered to the right person at the right level.",
    badge: "6-Source Risk Scoring",
    mockup: (
      <div className="space-y-2">
        <div className="flex items-center justify-between bg-[#0F172A]/40 rounded-lg p-3 border border-white/5">
          <span
            className="text-[#E2E8F0] text-[12px]"
            style={{ fontFamily: "Inter" }}
          >
            Relationship Health
          </span>
          <span
            className="text-[#F59E0B] text-[14px] font-[700]"
            style={{ fontFamily: "JetBrains Mono" }}
          >
            78/100
          </span>
        </div>
        <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-lg p-3">
          <span
            className="text-[#F59E0B] text-[11px] flex items-center gap-1"
            style={{ fontFamily: "Inter" }}
          >
            <AlertTriangle size={11} className="shrink-0" /> Communication
            silence from a key contact — 14 days, expected: 3 days
          </span>
        </div>
        <div className="bg-[#4F46E5]/10 border border-[#4F46E5]/20 rounded-lg p-3">
          <span
            className="text-[#94A3B8] text-[11px] flex items-center gap-1"
            style={{ fontFamily: "Inter" }}
          >
            <Calendar size={11} className="shrink-0" /> Tomorrow 10 AM:
            Quarterly review with Acme Corp — 3 open items
          </span>
        </div>
        <div className="bg-[#06B6D4]/10 border border-[#06B6D4]/20 rounded-lg p-3">
          <span
            className="text-[#94A3B8] text-[11px] flex items-center gap-1"
            style={{ fontFamily: "Inter" }}
          >
            <Bell size={11} className="shrink-0" /> New regulation impacts 2 of
            your requirement sets
          </span>
        </div>
      </div>
    ),
  },
];

export function FeatureDeepDive() {
  return (
    <section className="bg-[#FAFBFF] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2
              className="text-[36px] lg:text-[44px] font-[800] text-[#1E293B] mb-4"
              style={{ fontFamily: "Inter" }}
            >
              The AI{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">
                Advantage
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-24">
          {features.map((f, i) => (
            <ScrollReveal key={f.title}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center">
                      <f.icon size={20} className="text-[#4F46E5]" />
                    </div>
                    <span
                      className="px-3 py-1 rounded-full bg-[#06B6D4]/10 text-[#06B6D4] text-[12px] font-[500]"
                      style={{ fontFamily: "Inter" }}
                    >
                      {f.badge}
                    </span>
                  </div>
                  <h3
                    className="text-[28px] font-[700] text-[#1E293B] mb-4"
                    style={{ fontFamily: "Inter" }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="text-[#64748B] text-[16px] leading-[1.7]"
                    style={{ fontFamily: "Inter" }}
                  >
                    {f.desc}
                  </p>
                </div>
                <div
                  className={`bg-[#1E293B] border border-white/10 rounded-2xl p-6 ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}
                >
                  {f.mockup}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

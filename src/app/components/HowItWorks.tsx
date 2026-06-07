import { ScrollReveal } from "./ScrollReveal";
import { Upload, Sparkles, Link2, Zap, Camera, Clock } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Point Animo at your documents",
    desc: "Upload your standard operating procedures (SOPs), policies, and forms — or pull them from Google Drive or OneDrive.",
    color: "#4F46E5",
  },
  {
    icon: Sparkles,
    title: "AI proposes your setup",
    desc: "It reads them and proposes your record types, requirements, and dashboards — each cited to its source. You review and publish.",
    color: "#06B6D4",
  },
  {
    icon: Link2,
    title: "Connect your sources",
    desc: "Link Gmail, Outlook, Drive, or OneDrive so Animo keeps importing, classifying, and filing new documents on its own.",
    color: "#7C3AED",
  },
  {
    icon: Zap,
    title: "Agents take over",
    desc: "24/7 monitoring begins — readiness checks, document validation, and follow-ups, and it checks with you before anything important.",
    color: "#10B981",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#FAFBFF] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-[36px] lg:text-[44px] font-[800] text-[#1E293B] mb-4" style={{ fontFamily: "Inter" }}>
              From zero to running in{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">about 2 minutes</span>
            </h2>
            <p className="text-[#64748B] text-[17px] max-w-2xl mx-auto" style={{ fontFamily: "Inter" }}>
              No blank templates. Animo reads what you already have and builds your setup around it.
            </p>
          </div>
        </ScrollReveal>

        {/* Diagram D — the onboarding flow */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="relative text-center">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-0.5 bg-gradient-to-r from-[#E2E8F0] to-[#E2E8F0]" />
                )}
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center relative"
                  style={{ background: `${s.color}15` }}
                >
                  <s.icon size={28} style={{ color: s.color }} />
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#1E293B] text-white text-[11px] font-[700] flex items-center justify-center"
                    style={{ fontFamily: "Inter" }}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-[17px] font-[700] text-[#1E293B] mb-2" style={{ fontFamily: "Inter" }}>{s.title}</h3>
                <p className="text-[#64748B] text-[14px] leading-[1.6]" style={{ fontFamily: "Inter" }}>{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Coming: photo -> digital form */}
        <ScrollReveal>
          <div className="flex justify-center mt-14">
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/25">
              <Camera size={15} className="text-[#F59E0B] shrink-0" />
              <span className="text-[#64748B] text-[13px]" style={{ fontFamily: "Inter" }}>
                <span className="text-[#F59E0B] font-[600] inline-flex items-center gap-1">
                  <Clock size={12} /> Coming soon:
                </span>{" "}
                snap a photo of a paper form and Animo rebuilds it as a digital record.
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

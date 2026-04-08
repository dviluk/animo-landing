import { ScrollReveal } from "./ScrollReveal";
import { MessageCircle, Cpu, Link, Zap } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Describe Your Business", desc: 'Tell the AI what you do. "We\'re a food manufacturer with 3 plants and 47 suppliers."', color: "#4F46E5" },
  { icon: Cpu, title: "AI Configures Everything", desc: "Modules activated, record types created, requirements loaded, dashboards built — automatically.", color: "#06B6D4" },
  { icon: Link, title: "Connect Your Sources", desc: "Link Gmail, Outlook, Google Drive. AI starts ingesting and classifying immediately.", color: "#7C3AED" },
  { icon: Zap, title: "Agents Take Over", desc: "24/7 monitoring begins. Compliance checking, document validation, vendor follow-up — all autonomous.", color: "#10B981" },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#FAFBFF] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-[36px] lg:text-[44px] font-[800] text-[#1E293B] mb-4" style={{ fontFamily: "Inter" }}>
              From Zero to Intelligent in{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">Minutes</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="relative text-center">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-0.5 bg-gradient-to-r from-[#E2E8F0] to-[#E2E8F0]" />
                )}
                <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center relative" style={{ background: `${s.color}15` }}>
                  <s.icon size={28} style={{ color: s.color }} />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#1E293B] text-white text-[11px] font-[700] flex items-center justify-center" style={{ fontFamily: "Inter" }}>
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-[17px] font-[700] text-[#1E293B] mb-2" style={{ fontFamily: "Inter" }}>{s.title}</h3>
                <p className="text-[#64748B] text-[14px] leading-[1.6]" style={{ fontFamily: "Inter" }}>{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

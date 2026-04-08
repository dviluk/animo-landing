import { Factory, HardHat, Heart, FlaskConical, Briefcase, Utensils, MessageCircle, Bot, CheckCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const industries = [
  { label: "Manufacturing", icon: Factory, standards: "ISO 9001, ISO 14001, OSHA", uses: "Supplier qualifications, equipment inspections, quality records", color: "#4F46E5" },
  { label: "Construction", icon: HardHat, standards: "OSHA, LEED, local permits", uses: "Contractor certifications, safety inspections, incident tracking", color: "#F59E0B" },
  { label: "Healthcare", icon: Heart, standards: "HIPAA, Joint Commission, CMS", uses: "Vendor credentialing, policy compliance, training records", color: "#F43F5E" },
  { label: "Pharma & Life Sciences", icon: FlaskConical, standards: "FDA 21 CFR, GMP, ICH", uses: "Document control, audit trails, CAPA workflows", color: "#10B981" },
  { label: "Professional Services", icon: Briefcase, standards: "SOC 2, ISO 27001, GDPR", uses: "Engagement compliance, data handling, client audits", color: "#7C3AED" },
  { label: "Food & Beverage", icon: Utensils, standards: "SQF, GFSI, HACCP, FDA", uses: "Supplier programs, operational logs, certificate tracking", color: "#06B6D4" },
];

export function UniversalCompliance() {
  return (
    <section className="bg-[#0F172A] py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="max-w-7xl mx-auto px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-[36px] lg:text-[44px] font-[800] text-[#F8FAFC] mb-4" style={{ fontFamily: "Inter" }}>
              Compliance Is Universal.{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">Your Platform Finally Is Too.</span>
            </h2>
            <p className="text-[#94A3B8] text-[17px] max-w-2xl mx-auto" style={{ fontFamily: "Inter" }}>
              Animo's configurable module system means you describe your industry, your standards, and your processes — and the platform shapes itself around you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.label} delay={i * 0.08}>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-transform h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${ind.color}20` }}>
                    <ind.icon size={18} style={{ color: ind.color }} />
                  </div>
                  <h3 className="text-[16px] font-[700] text-[#F8FAFC]" style={{ fontFamily: "Inter" }}>{ind.label}</h3>
                </div>
                <p className="text-[12px] text-[#06B6D4] mb-2" style={{ fontFamily: "JetBrains Mono" }}>{ind.standards}</p>
                <p className="text-[#94A3B8] text-[13px] leading-[1.6]" style={{ fontFamily: "Inter" }}>{ind.uses}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-center text-[#F8FAFC] text-[16px] font-[600] mb-6" style={{ fontFamily: "Inter" }}>
              Don't see your industry? AI-guided onboarding sets you up in under 2 minutes.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#4F46E5]/20 flex items-center justify-center shrink-0">
                  <MessageCircle size={16} className="text-[#4F46E5]" />
                </div>
                <div className="bg-[#4F46E5]/10 border border-[#4F46E5]/20 rounded-lg p-3 flex-1">
                  <span className="text-[#E2E8F0] text-[13px]" style={{ fontFamily: "Inter" }}>
                    "We're a construction firm with 12 sites and 84 subcontractors. We need OSHA compliance and insurance tracking."
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#06B6D4]/20 flex items-center justify-center shrink-0">
                  <Bot size={16} className="text-[#06B6D4]" />
                </div>
                <div className="bg-[#06B6D4]/10 border border-[#06B6D4]/20 rounded-lg p-3 flex-1">
                  <span className="text-[#E2E8F0] text-[13px]" style={{ fontFamily: "Inter" }}>
                    AI proposes: Construction module + Core module, 16 record types, OSHA requirement set, subcontractor tracking
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#10B981]/20 flex items-center justify-center shrink-0">
                  <CheckCircle size={16} className="text-[#10B981]" />
                </div>
                <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-lg p-3 flex-1">
                  <span className="text-[#10B981] text-[13px] font-[600]" style={{ fontFamily: "Inter" }}>
                    User confirms → Organization ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
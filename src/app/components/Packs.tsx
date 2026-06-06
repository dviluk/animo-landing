import { ScrollReveal } from "./ScrollReveal";
import { Star } from "lucide-react";

const skinColors: Record<string, string> = {
  Compliance: "#4F46E5",
  "Quality Assurance": "#06B6D4",
  "Audit & Assurance": "#10B981",
  "Vendor Risk": "#F59E0B",
  Governance: "#7C3AED",
  "Field Ops / EHS": "#F43F5E",
};

const packs = [
  { name: "Food Safety & Agriculture", blurb: "GFSI/HACCP programs, third-party certs, operational logs, visual evidence.", skin: "Compliance" },
  { name: "Manufacturing Quality", blurb: "Quality management, third-party quality, inspections and corrective actions.", skin: "Quality Assurance" },
  { name: "Pharma & Life Sciences", blurb: "Good-practice records, batch documentation, CAPA and document control.", skin: "Compliance" },
  { name: "Medical Devices", blurb: "Device quality management, design records and inspection readiness.", skin: "Quality Assurance" },
  { name: "Construction & Contractor Safety", blurb: "Subcontractor compliance, site inspections and incident tracking.", skin: "Field Ops / EHS" },
  { name: "Facilities & Property", blurb: "Recurring inspections, vendor documents and work orders.", skin: "Field Ops / EHS" },
  { name: "Energy & Utilities", blurb: "Environmental compliance and asset inspections.", skin: "Field Ops / EHS" },
  { name: "Hospitality & Restaurants", blurb: "Brand standards, health checks and multi-site operations.", skin: "Quality Assurance" },
  { name: "Retail Operations", blurb: "Store operations, vendor compliance and brand reviews.", skin: "Field Ops / EHS" },
  { name: "Logistics & Cold Chain", blurb: "Temperature and condition compliance, carrier documents.", skin: "Compliance" },
  { name: "Aviation & Fleet", blurb: "Maintenance records and crew credentialing.", skin: "Compliance" },
  { name: "Cannabis", blurb: "Seed-to-sale compliance and state reporting.", skin: "Compliance" },
  { name: "Law Firm Matter Governance", blurb: "Conflicts, deadlines, client intake and discovery assembly.", skin: "Governance", featured: true },
  { name: "Financial Controls", blurb: "Internal controls, client due-diligence and exam readiness.", skin: "Governance" },
  { name: "Third-Party / Vendor Risk", blurb: "Collect, validate, score and keep any external party in good standing.", skin: "Vendor Risk", featured: true },
  { name: "Procurement & Third-Party Quality", blurb: "Third-party scorecards, document collection and reviews.", skin: "Vendor Risk" },
  { name: "ISO / SOC 2 Certification", blurb: "Frameworks, crosswalks, readiness scoring and audit packs.", skin: "Audit & Assurance" },
  { name: "ESG & Sustainability", blurb: "Evidence collection and assurance reporting.", skin: "Audit & Assurance" },
  { name: "Government & Grant Compliance", blurb: "Grant obligations, evidence and audit.", skin: "Audit & Assurance" },
  { name: "Healthcare & Clinics", blurb: "Accreditation, credentialing and policy compliance.", skin: "Compliance", featured: true },
  { name: "HR & Workforce Compliance", blurb: "Training, credentials and policy attestation.", skin: "Governance" },
];

export function Packs() {
  return (
    <section id="packs" className="bg-[#0F172A] py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-[36px] lg:text-[44px] font-[800] text-[#F8FAFC] mb-4" style={{ fontFamily: "Inter" }}>
              Built for any function.{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">Any industry.</span>
            </h2>
            <p className="text-[#94A3B8] text-[16px] max-w-2xl mx-auto" style={{ fontFamily: "Inter" }}>
              Animo configures to your standard. Here's where teams put it to work — and you can shape a new one in minutes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {packs.map((p, i) => (
            <ScrollReveal key={p.name} delay={Math.min(i * 0.04, 0.4)}>
              <div
                className={`relative bg-white/5 backdrop-blur rounded-xl p-5 h-full hover:-translate-y-1 transition-transform ${
                  p.featured ? "border border-[#4F46E5]/40 ring-1 ring-[#4F46E5]/20" : "border border-white/10"
                }`}
              >
                {p.featured && (
                  <span
                    className="absolute top-3 right-3 inline-flex items-center gap-1 text-[#4F46E5] text-[10px] font-[600]"
                    style={{ fontFamily: "Inter" }}
                  >
                    <Star size={10} /> Featured
                  </span>
                )}
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: skinColors[p.skin] }} />
                  <span className="text-[11px]" style={{ color: skinColors[p.skin], fontFamily: "JetBrains Mono" }}>{p.skin}</span>
                </div>
                <h4 className="text-[15px] font-[700] text-[#F8FAFC] mb-1.5" style={{ fontFamily: "Inter" }}>{p.name}</h4>
                <p className="text-[#94A3B8] text-[12px] leading-[1.5]" style={{ fontFamily: "Inter" }}>{p.blurb}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-center text-[#94A3B8] text-[14px] mt-12" style={{ fontFamily: "Inter" }}>
            Don't see your standard?{" "}
            <a href="#contact" className="text-[#06B6D4] font-[600] hover:underline">
              Describe it — Animo builds your setup from your own documents.
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

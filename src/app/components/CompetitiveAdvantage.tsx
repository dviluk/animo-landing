import { ScrollReveal } from "./ScrollReveal";
import { Check, X, AlertTriangle } from "lucide-react";

const rows = [
  { cap: "Natural language data entry", animo: ["check", "AI form filling via chat"], legacy: ["x", "Manual CRUD forms"], dms: ["x", "Manual"] },
  { cap: "24/7 autonomous monitoring", animo: ["check", "AI agent"], legacy: ["x", "Manual periodic checks"], dms: ["x", "None"] },
  { cap: "Reads & validates any document", animo: ["check", "Documents & images"], legacy: ["x", "Basic scanning only"], dms: ["x", "None"] },
  { cap: "Dual-mode compliance", animo: ["check", "Third-party + Internal ops"], legacy: ["warn", "One mode only"], dms: ["x", "None"] },
  { cap: "Human-in-the-loop AI", animo: ["check", "4-level authority gates"], legacy: ["warn", "All-auto or nothing"], dms: ["x", "None"] },
  { cap: "Immutable evidence trail", animo: ["check", "Append-only + attribution"], legacy: ["warn", "Editable records"], dms: ["x", "None"] },
  { cap: "Relationship intelligence", animo: ["check", "6-source vendor scoring"], legacy: ["warn", "Limited"], dms: ["x", "None"] },
  { cap: "Multi-function & multi-industry", animo: ["check", "Config-driven, any function"], legacy: ["x", "Single-purpose"], dms: ["x", "None"] },
  { cap: "Time-to-value", animo: ["check", "~2 min AI onboarding"], legacy: ["x", "Weeks of setup"], dms: ["x", "None"] },
];

function StatusIcon({ type }: { type: string }) {
  if (type === "check") return <Check size={16} className="text-[#10B981]" />;
  if (type === "warn") return <AlertTriangle size={16} className="text-[#F59E0B]" />;
  return <X size={16} className="text-[#F43F5E]" />;
}

export function CompetitiveAdvantage() {
  return (
    <section className="bg-[#FAFBFF] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-[36px] lg:text-[44px] font-[800] text-[#1E293B] mb-4" style={{ fontFamily: "Inter" }}>
              Not Another Document Repository
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#E2E8F0]">
                  <th className="py-4 pr-4 text-[14px] font-[600] text-[#1E293B]" style={{ fontFamily: "Inter" }}>Capability</th>
                  <th className="py-4 px-4 text-[14px] font-[600] text-[#4F46E5]" style={{ fontFamily: "Inter" }}>Animo</th>
                  <th className="py-4 px-4 text-[14px] font-[600] text-[#64748B]" style={{ fontFamily: "Inter" }}>Legacy Tools</th>
                  <th className="py-4 px-4 text-[14px] font-[600] text-[#64748B]" style={{ fontFamily: "Inter" }}>Generic DMS</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className="border-b border-[#E2E8F0]/60">
                    <td className="py-3.5 pr-4 text-[14px] text-[#1E293B]" style={{ fontFamily: "Inter" }}>{r.cap}</td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <StatusIcon type={r.animo[0]} />
                        <span className="text-[13px] text-[#1E293B]" style={{ fontFamily: "Inter" }}>{r.animo[1]}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <StatusIcon type={r.legacy[0]} />
                        <span className="text-[13px] text-[#64748B]" style={{ fontFamily: "Inter" }}>{r.legacy[1]}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <StatusIcon type={r.dms[0]} />
                        <span className="text-[13px] text-[#64748B]" style={{ fontFamily: "Inter" }}>{r.dms[1]}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

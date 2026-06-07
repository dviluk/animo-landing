import { ScrollReveal } from "./ScrollReveal";
import { Check, X, AlertTriangle } from "lucide-react";

const rows = [
  { cap: "Ask in plain words (chat, email, voice)", animo: ["check", "Yes"], legacy: ["x", "No — manual forms"], dms: ["x", "No"] },
  { cap: "Works on its own, around the clock", animo: ["check", "Yes — always watching"], legacy: ["x", "Only when you run it"], dms: ["x", "No"] },
  { cap: "Reads and checks documents and photos", animo: ["check", "Yes"], legacy: ["x", "Basic scanning only"], dms: ["x", "No"] },
  { cap: "Everything in one place (documents, records, daily operations)", animo: ["check", "Yes"], legacy: ["warn", "One job only"], dms: ["x", "Storage only"] },
  { cap: "Asks your OK before acting", animo: ["check", "Yes"], legacy: ["warn", "All-or-nothing"], dms: ["x", "No"] },
  { cap: "Keeps records nobody can secretly change", animo: ["check", "Yes"], legacy: ["warn", "Records can be edited"], dms: ["x", "No"] },
  { cap: "Gives each partner a health score", animo: ["check", "Yes"], legacy: ["warn", "Limited"], dms: ["x", "No"] },
  { cap: "Adapts to your standard", animo: ["check", "Yes"], legacy: ["x", "One-size only"], dms: ["x", "No"] },
  { cap: "Up and running fast", animo: ["check", "About 2 minutes"], legacy: ["x", "Weeks of setup"], dms: ["x", "No"] },
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
                  <th className="py-4 pr-4 text-[14px] font-[600] text-[#1E293B]" style={{ fontFamily: "Inter" }}>What you want</th>
                  <th className="py-4 px-4 text-[14px] font-[600] text-[#4F46E5]" style={{ fontFamily: "Inter" }}>Animo</th>
                  <th className="py-4 px-4 text-[14px] font-[600] text-[#64748B]" style={{ fontFamily: "Inter" }}>Old software</th>
                  <th className="py-4 px-4 text-[14px] font-[600] text-[#64748B]" style={{ fontFamily: "Inter" }}>Basic file storage</th>
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

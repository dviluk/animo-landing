import { Linkedin, Twitter, Github } from "lucide-react";
import logo from "../../assets/icons/animo_horizontal_light.svg";

const columns = [
  { title: "Product", links: ["Features", "Pricing", "Integrations", "Roadmap", "Documentation"] },
  { title: "By Function", links: ["Compliance", "Quality Assurance", "Audit & Assurance", "Vendor Risk", "Governance", "Field Ops / EHS"] },
  { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Security"] },
];

export function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-6 gap-12 mb-12">
          <div className="md:col-span-2">
            <img src={logo} alt="Animo" className="h-7 w-auto" />
            <p className="text-[#64748B] text-[14px] mt-3 max-w-xs leading-[1.6]" style={{ fontFamily: "Inter" }}>
              Compliance that keeps itself up to date. AI that watches, checks, and keeps you ready.
            </p>
            <div className="flex gap-3 mt-5">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Icon size={16} className="text-[#94A3B8]" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[14px] font-[600] text-[#F8FAFC] mb-4" style={{ fontFamily: "Inter" }}>{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#64748B] text-[13px] hover:text-white transition-colors" style={{ fontFamily: "Inter" }}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[#64748B] text-[13px]" style={{ fontFamily: "Inter" }}>
            &copy; 2026 Animo. All rights reserved.
          </span>
          <span className="text-[#4F46E5] text-[13px]" style={{ fontFamily: "Inter" }}>
            Built with AI by a team that believes compliance shouldn't require suffering.
          </span>
        </div>
      </div>
    </footer>
  );
}

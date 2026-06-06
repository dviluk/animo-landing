import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "motion/react";
import { Shield, Globe, Server, Lock } from "lucide-react";

export function CTA() {
  const [email, setEmail] = useState("");

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A]"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-[#4F46E5]/15 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#06B6D4]/10 blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2
            className="text-[36px] lg:text-[48px] font-[800] text-[#F8FAFC] mb-4 leading-tight"
            style={{ fontFamily: "Inter" }}
          >
            Let's Show You What Autonomous Compliance Looks Like
          </h2>
          <p
            className="text-[#94A3B8] text-[17px] mb-10"
            style={{ fontFamily: "Inter" }}
          >
            Book a 30-minute demo. We'll set up your standard — during the call.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-[#64748B] focus:outline-none focus:border-[#4F46E5] transition-colors"
              style={{ fontFamily: "Inter", fontSize: "15px" }}
            />
            <motion.button
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-[600] shadow-lg shadow-[#4F46E5]/25"
              style={{ fontFamily: "Inter", fontSize: "15px" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Demo
            </motion.button>
          </div>

          <p
            className="text-[#64748B] text-[13px] mb-10"
            style={{ fontFamily: "Inter" }}
          >
            Or reach us at{" "}
            <a
              href="mailto:hello@animoanimo.com"
              className="text-[#06B6D4] hover:underline"
            >
              hello@animoanimo.com
            </a>
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Shield, text: "SOC 2 (Planned)" },
              { icon: Globe, text: "GDPR Ready" },
              { icon: Server, text: "Enterprise-Grade" },
              { icon: Lock, text: "Your data stays yours" },
            ].map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-2 text-[#64748B] text-[13px]"
                style={{ fontFamily: "Inter" }}
              >
                <b.icon size={14} />
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

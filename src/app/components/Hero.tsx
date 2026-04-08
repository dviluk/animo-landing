import { motion } from "motion/react";
import { Rocket } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A] flex items-center pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#4F46E5]/20 blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-[#06B6D4]/15 blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[#7C3AED]/10 blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/10 text-[#F59E0B] text-[13px] font-[500]" style={{ fontFamily: "Inter" }}>
              <Rocket size={14} /> AI-Powered Compliance for Every Industry
            </span>
          </motion.div>

          <motion.h1
            className="text-[#F8FAFC] text-[42px] lg:text-[60px] leading-[1.1] font-[800] tracking-tight"
            style={{ fontFamily: "Inter" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            AI Agents That Run Your Compliance —{" "}
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">
              While You Run Your Business
            </span>
          </motion.h1>

          <motion.p
            className="text-[#94A3B8] text-[17px] leading-[1.7] max-w-xl"
            style={{ fontFamily: "Inter", fontWeight: 400 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Every organization lives by rules — laws, regulations, standards, internal policies.
            Animo deploys autonomous AI agents that track obligations, validate evidence, chase gaps,
            and prepare audits — 24/7, across any industry. All with human-in-the-loop safety.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <a href="#contact" className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-[15px] font-[600] shadow-lg shadow-[#4F46E5]/25 hover:shadow-[#4F46E5]/40 transition-shadow" style={{ fontFamily: "Inter" }}>
              Request Demo
            </a>
            <a href="#how-it-works" className="px-7 py-3.5 rounded-xl border border-white/20 text-white text-[15px] font-[500] hover:bg-white/5 transition-colors" style={{ fontFamily: "Inter" }}>
              See How It Works
            </a>
          </motion.div>

          <motion.p className="text-[#64748B] text-[13px]" style={{ fontFamily: "Inter" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            Trusted by organizations across manufacturing, construction, consulting, healthcare, and more
          </motion.p>
          {/* <motion.div className="flex gap-3 flex-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-20 h-8 rounded bg-white/5 border border-white/10" />
            ))}
          </motion.div> */}
        </div>

        <motion.div className="lg:col-span-2" initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <div className="relative" style={{ perspective: "1200px" }}>
            <div className="relative bg-[#1E293B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl" style={{ transform: "rotateY(-5deg) rotateX(3deg)" }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#4F46E5]/20 to-[#06B6D4]/20 rounded-3xl blur-xl -z-10" />

              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-20 h-20">
                  <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                    <circle cx="40" cy="40" r="34" fill="none" stroke="#1E293B" strokeWidth="6" />
                    <circle cx="40" cy="40" r="34" fill="none" stroke="url(#gauge)" strokeWidth="6" strokeDasharray={`${0.92 * 213.6} ${213.6}`} strokeLinecap="round" />
                    <defs>
                      <linearGradient id="gauge" x1="0" y1="0" x2="1" y2="1">
                        <stop stopColor="#10B981" />
                        <stop offset="1" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[18px] font-[700] text-white" style={{ fontFamily: "Inter" }}>92%</span>
                  </div>
                </div>
                <div>
                  <div className="text-white text-[14px] font-[600]" style={{ fontFamily: "Inter" }}>Compliance Readiness</div>
                  <div className="text-[#10B981] text-[12px]" style={{ fontFamily: "Inter" }}>+4.1% this month</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-5">
                {[
                  { label: "Obligations Tracked", value: "1,847" },
                  { label: "Active Agents", value: "9" },
                  { label: "Avg Response", value: "2.3s" },
                ].map((m) => (
                  <div key={m.label} className="bg-[#0F172A]/60 rounded-lg p-3 border border-white/5">
                    <div className="text-[#64748B] text-[10px]" style={{ fontFamily: "Inter" }}>{m.label}</div>
                    <div className="text-white text-[16px] font-[700]" style={{ fontFamily: "JetBrains Mono" }}>{m.value}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="bg-[#4F46E5]/20 border border-[#4F46E5]/30 rounded-lg p-3">
                  <div className="text-[#94A3B8] text-[11px] mb-1" style={{ fontFamily: "Inter" }}>You</div>
                  <div className="text-white text-[12px]" style={{ fontFamily: "Inter" }}>Show me all expiring certifications this month</div>
                </div>
                <div className="bg-[#06B6D4]/10 border border-[#06B6D4]/20 rounded-lg p-3">
                  <div className="text-[#06B6D4] text-[11px] mb-1" style={{ fontFamily: "Inter" }}>Animo AI</div>
                  <div className="text-[#E2E8F0] text-[12px]" style={{ fontFamily: "Inter" }}>Found 7 expiring items across 4 vendors. 2 certificates expire this week. Shall I draft follow-ups?</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

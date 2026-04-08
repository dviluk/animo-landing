import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ScrollReveal } from "./ScrollReveal";
import { Camera, Video, Wrench, ChevronLeft, ChevronRight, Shield, CheckCircle, XCircle, AlertTriangle, CircleDot, BookOpen, Clock, Search, FileCheck, Cog, ArrowRight } from "lucide-react";

/* ── Scan-line overlay ── */
function ScanLine() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl z-10">
      <motion.div
        className="absolute left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent 0%, #F59E0B 30%, #FBBF24 50%, #F59E0B 70%, transparent 100%)", boxShadow: "0 0 20px 4px rgba(245,158,11,0.3)" }}
        initial={{ top: "-2px" }}
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

/* ── Animated detection box ── */
function DetectionBox({ label, icon, color, confidence, x, y, w, h, delay }: { label: string; icon: "check" | "x" | "warn"; color: string; confidence: number; x: string; y: string; w: string; h: string; delay: number }) {
  const IconComp = icon === "check" ? CheckCircle : icon === "x" ? XCircle : AlertTriangle;
  return (
    <motion.div
      className="absolute border-2 rounded-md"
      style={{ left: x, top: y, width: w, height: h, borderColor: color }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        className="absolute -top-6 left-0 px-2 py-0.5 rounded text-[10px] font-[600] whitespace-nowrap flex items-center gap-1"
        style={{ background: color, color: "#fff", fontFamily: "JetBrains Mono, monospace" }}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: delay + 0.3 }}
      >
        <IconComp size={10} />
        {label}
        <motion.span
          className="ml-1 opacity-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.5 }}
        >
          {confidence}%
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

/* ── Card 1: Visual Compliance Verification mockup ── */
function ComplianceMockup() {
  return (
    <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl overflow-hidden border border-white/10">
      {/* Simulated construction site background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-amber-900/40 to-transparent" />
        <div className="absolute top-[10%] left-[20%] w-[30%] h-[60%] bg-gray-600/30 rounded-sm" />
        <div className="absolute top-[5%] left-[25%] w-[2%] h-[70%] bg-gray-500/40" />
        <div className="absolute bottom-[10%] right-[15%] w-[20%] h-[35%] bg-gray-700/30 rounded-sm" />
      </div>

      {/* Detection boxes */}
      <DetectionBox label="PPE Compliant" icon="check" color="#10B981" confidence={97} x="10%" y="25%" w="22%" h="45%" delay={0.3} />
      <DetectionBox label="Fall Protection Violation" icon="x" color="#EF4444" confidence={94} x="55%" y="15%" w="35%" h="30%" delay={0.6} />
      <DetectionBox label="Signage Obstructed" icon="warn" color="#F59E0B" confidence={82} x="38%" y="60%" w="28%" h="22%" delay={0.9} />

      {/* HUD overlay */}
      <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm rounded-lg p-2 border border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-emerald-400 font-[600]" style={{ fontFamily: "JetBrains Mono, monospace" }}>LIVE ANALYSIS</span>
          <span className="text-[10px] text-white/50" style={{ fontFamily: "JetBrains Mono, monospace" }}>3 items detected • 2 violations</span>
        </div>
      </div>
    </div>
  );
}

/* ── Card 2: Activity Recognition mockup ── */
function ActivityMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const activities = [
    { type: "detect" as const, label: "Activity Detected: Area cleaning — Floor Section B, 14:32-14:47", conf: 96 },
    { type: "created" as const, label: "Auto-created: Sanitation Log #4821", conf: null },
    { type: "detect" as const, label: "Activity Detected: Equipment inspection — Mixer #3, 14:52-15:01", conf: 91 },
    { type: "created" as const, label: "Auto-created: Inspection Record #1203", conf: null },
  ];

  return (
    <div ref={ref} className="relative w-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl overflow-hidden border border-white/10">
      {/* Video player bar */}
      <div className="px-3 py-2 border-b border-white/10 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-[10px] text-white/50" style={{ fontFamily: "JetBrains Mono, monospace" }}>FEED — Camera 02 • Floor B</span>
      </div>
      {/* Timeline bar */}
      <div className="px-3 py-2 border-b border-white/10">
        <div className="h-1.5 bg-white/10 rounded-full relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-[70%] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          <div className="absolute top-[-2px] left-[30%] w-1 h-[calc(100%+4px)] bg-emerald-400 rounded-full" />
          <div className="absolute top-[-2px] left-[55%] w-1 h-[calc(100%+4px)] bg-emerald-400 rounded-full" />
        </div>
      </div>
      {/* Activity log */}
      <div className="p-3 space-y-2">
        {activities.map((a, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-2 text-[11px]"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.4 + 0.3, duration: 0.4 }}
          >
            <span className="shrink-0 mt-0.5">{a.type === "detect" ? <CircleDot size={12} className="text-emerald-400" /> : <CheckCircle size={12} className="text-emerald-400" />}</span>
            <span className={a.conf ? "text-white/80" : "text-emerald-400"}>{a.label}</span>
            {a.conf && (
              <div className="ml-auto flex items-center gap-1 shrink-0">
                <div className="w-12 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-emerald-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${a.conf}%` } : {}}
                    transition={{ delay: i * 0.4 + 0.5, duration: 0.6 }}
                  />
                </div>
                <span className="text-white/40 text-[9px]">{a.conf}%</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Card 3: AI-Guided Visual Assistance mockup ── */
function GuidanceMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const steps = [
    { n: 1, text: "Open the access panel", color: "#6366F1" },
    { n: 2, text: "Locate the pressure valve", color: "#8B5CF6" },
    { n: 3, text: "Turn counterclockwise to release", color: "#EC4899" },
  ];

  return (
    <div ref={ref} className="relative w-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl overflow-hidden border border-white/10">
      {/* Phone frame header */}
      <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between">
        <span className="text-[10px] text-white/50" style={{ fontFamily: "JetBrains Mono, monospace" }}>AR MODE</span>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] text-emerald-400" style={{ fontFamily: "JetBrains Mono, monospace" }}>LIVE</span>
        </div>
      </div>
      {/* Equipment view area */}
      <div className="relative h-28 bg-gradient-to-br from-gray-800/50 to-gray-900/50 mx-3 mt-2 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-white/10"><Cog size={48} strokeWidth={1} /></div>
        {/* AR overlay arrows */}
        {steps.map((s, i) => (
          <motion.div
            key={i}
            className="absolute px-2 py-1 rounded text-[9px] text-white border"
            style={{
              borderColor: s.color, background: `${s.color}30`,
              top: `${20 + i * 25}%`, left: `${15 + i * 20}%`,
              fontFamily: "JetBrains Mono, monospace",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.4 + 0.5, duration: 0.4 }}
          >
            Step {s.n}: {s.text}
          </motion.div>
        ))}
      </div>
      {/* Knowledge base reference */}
      <motion.div
        className="mx-3 mt-2 p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.8, duration: 0.4 }}
      >
        <span className="text-[9px] text-indigo-300 flex items-center gap-1" style={{ fontFamily: "JetBrains Mono, monospace" }}><BookOpen size={10} className="inline" /> Source: Mixer Model X-200 Service Manual, pg 47</span>
      </motion.div>
      {/* Chat bubble */}
      <div className="p-3">
        <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-2">
          <span className="text-[10px] text-white/30" style={{ fontFamily: "Inter" }}>Need more help? Ask me anything about this equipment.</span>
        </div>
      </div>
    </div>
  );
}

/* ── Scenario pills ── */
const scenarios = [
  { Icon: Camera, q: "Is this site OSHA-compliant?", industry: "Construction", desc: "AI scans photo → detects missing guardrails, identifies PPE violations, checks signage — generates violation report with evidence" },
  { Icon: Camera, q: "Validate this document is authentic", industry: "Any", desc: "AI examines photo of physical certificate → checks watermarks, signatures, dates, seal → cross-references with digital records" },
  { Icon: Video, q: "Did the cleaning get done?", industry: "Manufacturing", desc: "AI watches 2-min video → recognizes sanitation activity → auto-creates cleaning log with timestamp, area, operator, and duration" },
  { Icon: Video, q: "Was the safety briefing held?", industry: "Construction", desc: "AI analyzes meeting video → detects group assembly, speaker, duration → auto-creates training record, links attendees" },
  { Icon: Wrench, q: "How do I fix this valve?", industry: "Any", desc: "Technician points camera → AI identifies equipment model → overlays step-by-step instructions from knowledge base" },
  { Icon: Wrench, q: "What's wrong with this reading?", industry: "Manufacturing", desc: "Operator photographs gauge → AI reads value, compares to threshold → flags deviation, suggests corrective action" },
];

const cards = [
  { Icon: Camera, title: "Visual Compliance Verification", desc: "Point your camera at a construction site, a kitchen, a warehouse floor, or a piece of equipment — AI analyzes the image against your compliance rules in real-time. Missing PPE? Fire exit blocked? Expired safety label? Violations detected instantly.", Mockup: ComplianceMockup },
  { Icon: Video, title: "Activity Recognition & Auto-Logging", desc: "Upload a video or connect a feed — AI watches and understands what's happening. Employee completing a sanitation procedure? Equipment maintenance being performed? Animo recognizes the activity, timestamps it, and automatically creates the operational record — no manual data entry.", Mockup: ActivityMockup },
  { Icon: Wrench, title: "AI-Guided Visual Assistance", desc: "A technician faces a broken machine they've never seen before. They point their phone camera at it — Animo identifies the equipment, pulls up the manual, and overlays step-by-step repair instructions on the live feed. AR-style guidance, powered by your knowledge base.", Mockup: GuidanceMockup },
];

export function VisionAI() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #0F172A 0%, #1E1B4B 100%)" }}>
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Animated grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Badge */}
        <ScrollReveal>
          <div className="flex justify-center mb-8">
            <motion.div
              className="px-5 py-2 rounded-full border text-[13px] font-[700] tracking-wider"
              style={{
                background: "linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(251,191,36,0.08) 100%)",
                borderColor: "rgba(245,158,11,0.3)",
                color: "#FBBF24",
                fontFamily: "Inter",
              }}
              animate={{ boxShadow: ["0 0 20px rgba(245,158,11,0.15)", "0 0 40px rgba(245,158,11,0.3)", "0 0 20px rgba(245,158,11,0.15)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              COMING SOON
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Eyebrow */}
        <ScrollReveal>
          <div className="flex justify-center mb-6">
            <motion.span
              className="px-4 py-1.5 rounded-full text-[12px] font-[600] tracking-wider"
              style={{
                background: "rgba(245,158,11,0.1)",
                border: "1px solid rgba(245,158,11,0.25)",
                color: "#F59E0B",
                fontFamily: "JetBrains Mono, monospace",
              }}
              animate={{ boxShadow: ["0 0 10px rgba(245,158,11,0.1)", "0 0 25px rgba(245,158,11,0.25)", "0 0 10px rgba(245,158,11,0.1)"] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Clock size={14} className="inline mr-1" /> COMING Q1 2027
            </motion.span>
          </div>
        </ScrollReveal>

        {/* Header */}
        <ScrollReveal>
          <h2 className="text-center text-[36px] lg:text-[48px] font-[800] text-white mb-4" style={{ fontFamily: "Inter" }}>
            AI That <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">Sees</span> What You Can't
          </h2>
          <p className="text-center text-[17px] text-white/50 max-w-3xl mx-auto mb-4 leading-[1.7]" style={{ fontFamily: "Inter" }}>
            Document scanning was just the beginning. Animo's next frontier: real-time visual intelligence for compliance verification, guided assistance, and automatic activity recognition — from a single photo or live video feed.
          </p>
          <p className="text-center text-[14px] text-amber-400/60 italic mb-16" style={{ fontFamily: "Inter" }}>
            "Your Eyes on Every Site. Every Process. Every Moment."
          </p>
        </ScrollReveal>

        {/* Three capability cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.15}>
              <div className="relative group h-full">
                {/* Scan-line effect */}
                <ScanLine />
                <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col hover:border-amber-500/30 transition-colors duration-500">
                  {/* Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                        <card.Icon size={20} className="text-amber-400" />
                      </div>
                      <h3 className="text-[17px] font-[700] text-white" style={{ fontFamily: "Inter" }}>{card.title}</h3>
                    </div>
                    <p className="text-[14px] text-white/50 leading-[1.7]" style={{ fontFamily: "Inter" }}>{card.desc}</p>
                  </div>
                  {/* Mockup */}
                  <div className="p-4 pt-0 mt-auto">
                    <card.Mockup />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Scenario strip */}
        <ScrollReveal>
          <div className="mb-20">
            <h3 className="text-[14px] font-[600] text-white/40 tracking-wider text-center mb-6" style={{ fontFamily: "Inter" }}>
              REAL-WORLD SCENARIOS
            </h3>
            <div className="relative">
              {canScrollLeft && (
                <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                  <ChevronLeft size={16} />
                </button>
              )}
              {canScrollRight && (
                <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                  <ChevronRight size={16} />
                </button>
              )}
              <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-2" style={{ scrollbarWidth: "none" }}>
                {scenarios.map((s, i) => (
                  <motion.div
                    key={s.q}
                    className="shrink-0 w-[300px] bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:border-amber-500/20 transition-colors"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <s.Icon size={16} className="text-amber-400 shrink-0" />
                      <span className="text-[13px] font-[700] text-white" style={{ fontFamily: "Inter" }}>"{s.q}"</span>
                    </div>
                    <div className="inline-block px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-400 font-[600] mb-2" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                      {s.industry}
                    </div>
                    <p className="text-[12px] text-white/40 leading-[1.6]" style={{ fontFamily: "Inter" }}>{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom callout */}
        <ScrollReveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <Shield className="w-8 h-8 text-amber-400 mx-auto mb-4" />
              <p className="text-[15px] text-white/70 leading-[1.8]" style={{ fontFamily: "Inter" }}>
                Every visual analysis creates an <span className="text-white font-[700]">immutable evidence record</span> — the original image/video, AI's analysis, confidence scores, detected items, and any auto-created logs. Your visual compliance trail is as audit-defensible as every other record in Animo.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Technical preview strip */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto bg-black/40 border border-white/5 rounded-xl p-5 overflow-x-auto">
            <div className="text-[11px] text-white/25 leading-[2]" style={{ fontFamily: "JetBrains Mono, monospace" }}>
              <div><span className="text-amber-400/50">Powered by:</span> Vision Language Models (Qwen2-VL, GPT-4V) + Activity Recognition + Object Detection + OCR</div>
              <div><span className="text-amber-400/50">Integrations:</span> Mobile camera, CCTV feeds, drone footage, uploaded media</div>
              <div><span className="text-amber-400/50">Output:</span> Operational records, violation reports, guided workflows, evidence packages</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
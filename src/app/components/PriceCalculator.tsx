import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";

/*
 * Customer-facing "estimate your plan" calculator.
 * Config mirrors animo-agents/docs/PRINCING.md (the pricing source of truth).
 * Everything here is in plain "actions" — never tokens, models, or multipliers.
 * Edit these constants to retune; they are the single place prices live.
 */
const PLANS = [
  { id: "starter", label: "Starter", usersMin: 1, usersMax: 3, priceLabel: "$20", actions: 2000 },
  { id: "pro_s", label: "Professional", usersMin: 4, usersMax: 6, priceLabel: "$40", actions: 5000 },
  { id: "pro_m", label: "Professional", usersMin: 7, usersMax: 12, priceLabel: "$80", actions: 12000 },
  { id: "pro_l", label: "Professional", usersMin: 13, usersMax: 25, priceLabel: "$160", actions: 30000 },
  { id: "enterprise", label: "Enterprise", usersMin: 26, usersMax: null, priceLabel: "Custom", actions: null },
];

const ACTION_COST = { documents: 4, analyses: 18, vision: 30, voice: 50 };
const PACKS = [
  { actions: 1000, price: 12 },
  { actions: 5000, price: 50 },
  { actions: 15000, price: 120 },
];
const BOOST = { actions: 5000, price: 45 };

const fmt = (n) => n.toLocaleString("en-US");

function Slider({ label, value, onChange, min = 0, max, step, suffix }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-[13px] text-[#1E293B] font-[500]" style={{ fontFamily: "Inter" }}>{label}</span>
        <span className="text-[14px] font-[700] text-[#4F46E5]" style={{ fontFamily: "JetBrains Mono" }}>
          {fmt(value)}{suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#4F46E5] cursor-pointer"
      />
    </div>
  );
}

export function PriceCalculator() {
  const [team, setTeam] = useState(4);
  const [docs, setDocs] = useState(120);
  const [analyses, setAnalyses] = useState(15);
  const [vision, setVision] = useState(20);
  const [voice, setVoice] = useState(0);

  const estimated =
    docs * ACTION_COST.documents +
    analyses * ACTION_COST.analyses +
    vision * ACTION_COST.vision +
    voice * ACTION_COST.voice;

  // Plan = the GREATER of three drivers: team size, the features in use, and the
  // action volume. Seats are guidance, not a gate — a solo user who needs voice or a
  // bigger pool can size up and just pays the higher plan price. (PLANS is smallest→largest.)
  const seatIdx = Math.max(
    0,
    PLANS.findIndex((p) => team >= p.usersMin && (p.usersMax === null || team <= p.usersMax)),
  );
  const featureIdx = voice > 0 ? 1 : 0; // voice isn't on Starter → at least Professional
  const coveringPool = PLANS.find((p) => p.actions !== null && p.actions >= estimated);
  const poolIdx = coveringPool ? PLANS.indexOf(coveringPool) : 3; // biggest standard pool; overflow shown below
  const recIdx = Math.max(seatIdx, featureIdx, poolIdx);
  const plan = PLANS[recIdx];

  const isEnterprise = plan.id === "enterprise";
  const isStarter = plan.id === "starter";
  const fits = isEnterprise ? true : estimated <= plan.actions;
  const overflow = isEnterprise ? 0 : Math.max(0, estimated - plan.actions);
  const pack = overflow > 0 ? PACKS.find((p) => p.actions >= overflow) : null;

  // Recommended above the team-size band? Why? (seats are guidance, not a gate)
  const sizedUp = recIdx > seatIdx;
  const sizedUpForVoice = sizedUp && featureIdx > seatIdx && featureIdx >= poolIdx;
  const visionTaste = isStarter && vision > 0;

  return (
    <ScrollReveal>
      <div className="mt-10 bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
        <h3 className="text-center text-[20px] font-[700] text-[#1E293B] mb-1" style={{ fontFamily: "Inter" }}>
          Estimate your plan
        </h3>
        <p className="text-center text-[#64748B] text-[14px] mb-8" style={{ fontFamily: "Inter" }}>
          Move the sliders to match a typical month — we'll suggest the plan that fits.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Inputs */}
          <div className="space-y-5">
            <Slider label="Team size" value={team} onChange={setTeam} min={1} max={40} step={1} suffix=" users" />
            <Slider label="Documents to read / month" value={docs} onChange={setDocs} max={400} step={10} suffix="" />
            <Slider label="Deep AI analyses / month" value={analyses} onChange={setAnalyses} max={100} step={1} suffix="" />
            <Slider label="Photo checks / month" value={vision} onChange={setVision} max={200} step={5} suffix="" />
            <Slider label="Voice minutes / month" value={voice} onChange={setVoice} max={200} step={5} suffix="" />
          </div>

          {/* Result */}
          <div className="bg-[#FAFBFF] border border-[#E2E8F0] rounded-xl p-6 flex flex-col">
            <div className="text-[#64748B] text-[12px] mb-1" style={{ fontFamily: "Inter" }}>Your estimated use</div>
            <div className="text-[#1E293B] text-[32px] font-[800] leading-none mb-5" style={{ fontFamily: "JetBrains Mono" }}>
              ~{fmt(estimated)}<span className="text-[15px] font-[500] text-[#94A3B8]"> actions/mo</span>
            </div>

            <div className="flex items-center justify-between bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 mb-4">
              <div>
                <div className="text-[11px] text-[#64748B]" style={{ fontFamily: "Inter" }}>Recommended plan</div>
                <div className="text-[16px] font-[700] text-[#1E293B]" style={{ fontFamily: "Inter" }}>
                  {plan.label}{" "}
                  <span className="text-[#4F46E5]">{plan.priceLabel}</span>
                  {!isEnterprise && <span className="text-[12px] font-[400] text-[#94A3B8]">/mo</span>}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[11px] text-[#64748B]" style={{ fontFamily: "Inter" }}>Included</div>
                <div className="text-[14px] font-[700] text-[#1E293B]" style={{ fontFamily: "JetBrains Mono" }}>
                  {plan.actions ? fmt(plan.actions) : "Custom"}
                </div>
              </div>
            </div>

            {/* Status line */}
            {isEnterprise ? (
              <div className="flex items-start gap-2 text-[13px] text-[#4F46E5]" style={{ fontFamily: "Inter" }}>
                <Sparkles size={15} className="mt-0.5 shrink-0" />
                <span>For 26+ people we tailor a custom pool — let's talk.</span>
              </div>
            ) : fits ? (
              <div className="flex items-start gap-2 text-[13px] text-[#10B981]" style={{ fontFamily: "Inter" }}>
                <Check size={15} className="mt-0.5 shrink-0" />
                <span>Comfortably covered — about {fmt(estimated)} of {fmt(plan.actions)} actions.</span>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-[13px] text-[#F59E0B]" style={{ fontFamily: "Inter" }}>
                  <ArrowUpRight size={15} className="mt-0.5 shrink-0" />
                  <span>About {fmt(overflow)} actions over this plan in a month like that.</span>
                </div>
                <p className="text-[13px] text-[#64748B] leading-[1.6]" style={{ fontFamily: "Inter" }}>
                  {pack ? (
                    <>Cover it with a <span className="font-[600] text-[#1E293B]">{fmt(pack.actions)}-action pack for ${pack.price}</span>. If every month runs this hot, a recurring <span className="font-[600] text-[#1E293B]">+{fmt(BOOST.actions)}/mo for ${BOOST.price}</span> is cheaper — or move up a plan as your team grows.</>
                  ) : (
                    <>That's heavy, steady usage — an <span className="font-[600] text-[#1E293B]">Enterprise</span> custom pool will fit better.</>
                  )}
                </p>
              </div>
            )}

            {/* Why this plan — seats are guidance, not a gate */}
            {sizedUp && !isEnterprise && (
              <div className="mt-4 flex items-start gap-2 text-[13px] text-[#4F46E5]" style={{ fontFamily: "Inter" }}>
                <Sparkles size={15} className="mt-0.5 shrink-0" />
                <span>
                  {sizedUpForVoice
                    ? `Even for ${team} ${team === 1 ? "person" : "people"}, ${plan.label} is the pick — voice starts there. You pay for the plan, not per seat.`
                    : "More work than your team size suggests — this bigger pool beats topping up a smaller plan. You pay for the plan, not per seat."}
                </span>
              </div>
            )}

            {visionTaste && (
              <p className="text-[12px] text-[#94A3B8] mt-4 pt-4 border-t border-[#E2E8F0]" style={{ fontFamily: "Inter" }}>
                Photo checks are a taste on Starter — Professional unlocks the full allowance.
              </p>
            )}

            <a
              href="#contact"
              className="mt-6 block text-center py-3 rounded-xl bg-[#4F46E5] text-white text-[14px] font-[600] hover:bg-[#3730A3] transition-colors"
              style={{ fontFamily: "Inter" }}
            >
              Request a demo
            </a>
          </div>
        </div>

        <p className="text-center text-[#94A3B8] text-[12px] mt-6" style={{ fontFamily: "Inter" }}>
          An estimate to help you choose — not a bill. You only ever pay for the plan you pick.
        </p>
      </div>
    </ScrollReveal>
  );
}

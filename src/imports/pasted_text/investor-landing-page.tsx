# Investor Landing Page Generation Prompt — Universal Compliance

> **Purpose:** Use this prompt with an AI code generator (v0, Bolt, Lovable, Claude Artifacts, etc.) to produce a single-page React landing page for Animo, targeting investors. This version positions Animo as a **universal compliance intelligence platform** — not tied to any single industry.

---

## PROMPT

You are a world-class landing page designer. Build a **single-page, investor-grade landing page** for **Animo** — an AI-powered compliance and operations intelligence platform. The page must look premium, modern, and visually stunning. Think Y Combinator Demo Day polish. It must convey trust, intelligence, and enterprise readiness while feeling cutting-edge.

**CRITICAL POSITIONING:** Animo is NOT a food-safety app or a single-industry tool. It is a **universal compliance intelligence platform** that works across ANY regulated industry. Compliance means: following laws, meeting regulatory requirements, adhering to internal policies, and conforming to standards. Every organization in every industry has compliance obligations — Animo is the AI layer that makes them manageable.

---

### BRAND IDENTITY

- **Product Name:** Animo
- **Tagline:** "The Operating System for Compliance Intelligence"
- **Secondary Tagline:** "AI agents that monitor, reason, and act — so your team doesn't have to."
- **Tone:** Confident, sophisticated, data-driven, forward-looking. Not corporate-boring. Think Notion meets Palantir meets Stripe.
- **Logo:** Use a clean wordmark "animo" in lowercase, with a subtle AI-circuit motif on the letter "a". Place it top-left on a transparent navbar.

### COLOR PALETTE

| Role | Color | Hex | Usage |
|---|---|---|---|
| **Primary** | Deep Indigo | `#4F46E5` | CTAs, active states, primary accents |
| **Primary Dark** | Midnight Indigo | `#3730A3` | Hover states, dark section backgrounds |
| **Secondary** | Electric Teal | `#06B6D4` | Highlights, data visualizations, secondary accents |
| **Accent** | Warm Amber | `#F59E0B` | Alerts, badges, attention-grabbing elements |
| **Background (Light)** | Snow White | `#FAFBFF` | Main page background |
| **Background (Dark)** | Obsidian | `#0F172A` | Hero section, dark feature sections, footer |
| **Surface** | Soft Lavender | `#EEF2FF` | Cards, panels, subtle contrast areas |
| **Text Primary** | Charcoal | `#1E293B` | Body text on light backgrounds |
| **Text Secondary** | Slate | `#64748B` | Captions, muted text |
| **Text on Dark** | White | `#F8FAFC` | Text on dark backgrounds |
| **Success** | Emerald | `#10B981` | Compliance scores, positive indicators |
| **Danger** | Rose | `#F43F5E` | Risk alerts, critical flags |
| **Gradient Hero** | Indigo → Teal | `#4F46E5 → #06B6D4` | Hero background gradient (diagonal, 135deg) |
| **Gradient CTA** | Indigo → Purple | `#4F46E5 → #7C3AED` | Primary CTA buttons |

### TYPOGRAPHY

- **Headings:** Inter (bold/semibold), large and impactful
- **Body:** Inter (regular/medium)
- **Monospace/Data:** JetBrains Mono — for any code snippets, stats, or data callouts
- **Sizing:** Hero title 56-72px, section titles 36-48px, body 16-18px

### VISUAL STYLE

- **Glassmorphism cards** with subtle backdrop-blur, thin 1px white/10% borders
- **Subtle grid pattern** overlay on dark sections (dot grid or line grid at 5% opacity)
- **Floating UI mockups** with perspective transforms and soft shadows (showcase the product)
- **Animated gradient orbs** (blurred purple/teal circles) behind hero and key sections
- **Micro-interactions:** Fade-in-up on scroll, counter animations for stats, hover lifts on cards
- **Data visualization elements:** Mini charts, gauges, progress rings as decorative elements reinforcing "data intelligence" identity
- **Lottie or CSS animations** for the AI agent illustration in the hero
- **Icons:** Lucide React icons, consistent 24px stroke-1.5

### IMAGE & ILLUSTRATION DIRECTION

Since this is a code-generated page, use these strategies:

1. **Hero Illustration:** Create an SVG/CSS art composition showing:
   - A stylized dashboard with floating cards (compliance score gauge at 92%, alert badges, chat bubble)
   - Connected nodes representing AI agents (3-4 circles with connecting lines, pulsing animation)
   - Small document icons flowing into the system
   - Industry-agnostic — no food/hard-hat/briefcase imagery in the hero

2. **Product Screenshots:** Use styled `div` mockups that look like app screenshots:
   - A compliance dashboard with a donut chart (92% compliant), gap list, status pills
   - A chat interface with AI response bubbles and tool execution indicators
   - An operations dashboard with KPI widgets (gauges, trend lines, counters)
   - A vendor/partner risk card (health score 78/100, communication timeline, risk breakdown)

3. **Background Decorations:**
   - Gradient mesh blobs (3-4 large blurred shapes) positioned behind sections
   - Subtle animated particles or floating dots connecting to form network patterns
   - Faint topographic/contour lines on light sections

4. **Section Dividers:** Use angled/wave SVG dividers between sections, alternating light/dark

---

### PAGE SECTIONS (in order)

#### 1. HERO — "Compliance Is Universal. Your Platform Should Be Too."

**Layout:** Full-viewport height, dark gradient background (`#0F172A` → `#1E1B4B`), split layout.

**Left side (60%):**
- Eyebrow badge: "🚀 AI-Powered Compliance for Every Industry" (pill-shaped, amber border)
- Main headline: **"AI Agents That Run Your Compliance — While You Run Your Business"**
- Subtitle: "Every organization lives by rules — laws, regulations, standards, internal policies. Animo deploys autonomous AI agents that track obligations, validate evidence, chase gaps, and prepare audits — 24/7, across any industry. All with human-in-the-loop safety."
- Two CTA buttons:
  - Primary (gradient): "Request Demo" → links to #contact
  - Secondary (outline): "See How It Works" → links to #how-it-works
- Social proof strip: "Trusted by organizations across manufacturing, construction, consulting, healthcare, and more" (placeholder logos as gray rectangles)

**Right side (40%):**
- Floating dashboard mockup (perspective transform, slight rotation) showing:
  - Compliance readiness gauge (92%)
  - 3 small metric cards (Obligations Tracked: 1,847 | Active Agents: 9 | Avg Response: 2.3s)
  - Mini chat bubble: "Show me all expiring certifications this month" → AI response preview
- Subtle glow effect behind the mockup

#### 2. THE COMPLIANCE PROBLEM — "Every Industry Has Rules. No One Has a Good Way to Manage Them."

**Layout:** Light section (`#FAFBFF`), centered.

**Opening statement (large, centered text):**
"Compliance isn't just a legal checkbox. It's the foundation of **safety**, **consistency**, **accountability**, and **trust**."

**Then a 4-card row showing the universal compliance contexts:**

| Card | Title | Description | Example | Icon |
|---|---|---|---|---|
| 1 | **Legal Compliance** | Following laws set by governments and regulatory bodies | Tax obligations, labor laws, environmental regulations | Scale/Balance |
| 2 | **Regulatory Compliance** | Meeting requirements from industry-specific regulatory agencies | Drug safety (FDA), financial reporting (SEC), workplace safety (OSHA) | FileCheck |
| 3 | **Standards Compliance** | Adhering to established standards and specifications | ISO 9001, SOC 2, SQF, GFSI, LEED, HIPAA | Award/Certificate |
| 4 | **Organizational Compliance** | Following internal policies, codes of conduct, and SOPs | Workplace safety procedures, vendor qualification, training requirements | Building |

**Below cards, a bold stat callout:**
"**$2.71M** — Average cost of a single compliance violation. **67%** stem from expired or missing documentation."

**Bottom text:** "Whether you're tracking vendor certificates, managing operational inspections, meeting regulatory deadlines, or proving audit readiness — you need a system that never sleeps."

#### 3. SOLUTION OVERVIEW — "Meet Animo"

**Layout:** Dark section (`#0F172A`), centered header + problem→solution visual transition.

**Header:** "One Platform. Any Compliance Context. Complete Coverage."
**Subtitle:** "Animo doesn't care what industry you're in. It cares about one thing: are your obligations met, your evidence valid, and your gaps closed?"

**Two-column layout:**

**Left: "The Old Way" (faded, muted styling)**
- ❌ Spreadsheets tracking hundreds of requirements
- ❌ Manually chasing vendors for expired documents
- ❌ Paper-based inspections and handwritten logs
- ❌ Scrambling before every audit
- ❌ No visibility into what's missing until it's too late
- Timer icon: **"3 weeks"** average follow-up time

**Right: "The Animo Way" (vibrant, glowing cards)**
- ✅ AI tracks every obligation, deadline, and gap automatically
- ✅ Autonomous agents follow up with vendors on your behalf
- ✅ Digital operational records with immutable evidence trails
- ✅ Always audit-ready — real-time compliance scoring
- ✅ Proactive alerts before anything expires or degrades
- Timer icon: **"2 minutes"** to intelligent coverage

**Below, 3 large feature cards (glassmorphism, hover-lift):**

| Card | Title | Description | Icon |
|---|---|---|---|
| 1 | **Third-Party Compliance** | Track partner/vendor documents, validate against your requirements, score readiness, chase gaps — automatically. Works for supplier certificates, contractor qualifications, or partner agreements. | Shield + Check |
| 2 | **Internal Operations** | Digitize your operational records — inspections, audits, logs, checklists — with state-machine-driven lifecycles and immutable evidence trails. | ClipboardCheck |
| 3 | **Intelligence Layer** | AI monitors email, calendar, documents, and connected sources to surface what matters — before it becomes a problem. Relationship intelligence, anomaly detection, regulatory radar. | Brain + Sparkle |

#### 4. FEATURE DEEP-DIVE — "The AI Advantage"

**Layout:** Alternating left-right sections (feature + mockup), 6 features. Light background.

**Feature 1: AI Communication Engine**
- **Headline:** "Talk to Your Compliance Data"
- "Natural language everything. Chat, email, or voice — ask questions, create records, run reports, trigger actions. One AI brain handles it all."
- Mockup: Chat interface with user saying "Show me all vendors with expiring certifications this month" → AI response with a formatted table + "I found 7 expiring items across 4 vendors. Want me to draft follow-up emails?"
- Badge: "160+ AI-Powered Tools"

**Feature 2: Autonomous Agent Crews**
- **Headline:** "12 AI Crews. Running 24/7. Zero Coffee Breaks."
- "Autonomous agents that check compliance daily, validate documents on upload, draft follow-up emails, and prepare audit evidence packages — all while you sleep."
- Mockup: Agent activity feed showing:
  - 🟢 ComplianceChecker completed daily scan — 3 gaps found across 2 partners
  - 🟡 OutreachCoordinator drafted 5 follow-up emails (awaiting your approval)
  - 🟢 DocumentValidator auto-validated 12 uploads against requirements
  - 🔵 AuditPreparer assembled Q1 evidence package — 94% complete
- Badge: "Human-in-the-Loop Safety Gates"

**Feature 3: Intelligent Document Processing**
- **Headline:** "Upload Anything. AI Does the Rest."
- "Certificates, permits, licenses, inspection reports, insurance docs — AI reads it, classifies it, extracts key fields, checks it against your requirements, and flags what's wrong. In seconds."
- Mockup: Document upload flow → Quality gate (✅ DPI, ✅ Legibility, ✅ Orientation) → Classification (Certificate of Insurance) → Field extraction panel (Expiry: 2026-08-15, Coverage: $2M, Insured: Acme Corp) → Mapped to compliance requirements
- Badge: "Vision Language Models + OCR"

**Feature 4: Compliance Scoring & Gap Analysis**
- **Headline:** "Not Pass/Fail. Granular, Evidence-Backed, Actionable."
- "Real-time readiness scores across every requirement set — whether it's ISO 9001, OSHA, SQF, SOC 2, or your own internal standards. See exactly where you stand and what to fix first."
- Mockup: Compliance dashboard with:
  - Overall score donut (92%)
  - Requirement framework breakdown (Framework A: 97%, Framework B: 88%, Framework C: 91%)
  - Gap cards: "3 Critical | 5 Medium | 12 Low"
  - Time Machine slider: "View compliance state as of [date picker]"
- Badge: "Compliance Time Machine™"

**Feature 5: Operations Engine**
- **Headline:** "Your Operational Evidence. Digitized. Immutable. Always Audit-Ready."
- "36+ typed record models — inspections, logs, checklists, incident reports, training records, corrective actions. Each with state-machine-driven lifecycles, auto-escalation rules, and append-only correction history."
- Mockup: Operations dashboard with:
  - An inspection record (Status: Validated ✅)
  - Immediate Action card (auto-created from threshold breach)
  - CAPA workflow timeline (Draft → Review → Approved → Implementing → Verified)
  - Correction chain: Original → Correction 1 → Correction 2 (linked)
- Badge: "Immutable Evidence Trail"

**Feature 6: Corporate Intelligence**
- **Headline:** "Your AI-Powered Radar. Always Watching. Always Learning."
- "Vendor risk scores, communication anomaly detection, meeting intelligence, smart follow-ups, and regulatory change monitoring — all delivered to the right person at the right level."
- Mockup: Intelligence dashboard with:
  - Vendor health card (78/100, trending ↓, 6 components)
  - Anomaly alert: "⚠️ Communication silence from Partner X — 14 days, expected: 3 days"
  - Meeting brief card: "Tomorrow 10 AM: Quarterly review with Acme Corp — 3 open items, 1 overdue follow-up"
  - Regulatory radar: "New regulation impacts 2 of your requirement sets"
- Badge: "10-Source Risk Scoring"

#### 5. UNIVERSAL COMPLIANCE — "One Platform. Any Industry. Any Standard."

**Layout:** Dark section with visual grid.

**Header:** "Compliance Is Universal. Your Platform Finally Is Too."
**Subtitle:** "Animo's configurable module system means you describe your industry, your standards, and your processes — and the platform shapes itself around you."

**Horizontal row of 6 industry tiles** (muted icon + label, all equal visual weight — no single industry emphasized):

| Industry | Icon | Example Standards | Example Use Cases |
|---|---|---|---|
| 🏭 **Manufacturing** | Factory | ISO 9001, ISO 14001, OSHA | Supplier qualifications, equipment inspections, quality records |
| 🏗️ **Construction** | Crane | OSHA, LEED, local permits | Contractor certifications, safety inspections, incident tracking |
| 🏥 **Healthcare** | Heart/Cross | HIPAA, Joint Commission, CMS | Vendor credentialing, policy compliance, training records |
| 💊 **Pharma & Life Sciences** | Flask | FDA 21 CFR, GMP, ICH | Document control, audit trails, CAPA workflows |
| 🏢 **Professional Services** | Briefcase | SOC 2, ISO 27001, GDPR | Engagement compliance, data handling, client audits |
| 🍽️ **Food & Beverage** | Utensils | SQF, GFSI, HACCP, FDA | Supplier programs, operational logs, certificate tracking |

**Below tiles, a callout:**
"**Don't see your industry?** Animo's AI-guided onboarding lets you describe your business in plain language. The platform creates your modules, record types, requirements, and dashboards — in under 2 minutes."

**Mini demo flow (3 steps, inline):**
1. 💬 "We're a construction firm with 12 sites and 84 subcontractors. We need OSHA compliance and insurance tracking."
2. 🤖 AI proposes: Construction module + Core module, 16 record types, OSHA requirement set, subcontractor tracking  
3. ✅ User confirms → Organization ready

#### 6. HOW IT WORKS — "From Zero to Compliant in Minutes" {#how-it-works}

**Layout:** Light section, horizontal stepper (4 steps) with connecting line.

| Step | Title | Description | Visual |
|---|---|---|---|
| 1 | **Describe Your Business** | Tell the AI what you do, what standards you follow, and who your partners are. Natural language — no forms. | Chat bubble |
| 2 | **AI Configures Everything** | Modules activated, record types created, requirement frameworks loaded, dashboards built — automatically. | Gear/magic wand |
| 3 | **Connect Your Sources** | Link email (Gmail/Outlook), cloud storage (Google Drive), calendar. AI starts ingesting and classifying immediately. | Plug/connection |
| 4 | **Agents Take Over** | 24/7 monitoring begins. Compliance checking, document validation, vendor follow-up, audit prep — all autonomous with human approval gates. | Robot with shield |

Each step has a small animated illustration/icon with a connecting dotted line between steps.

#### 7. HUMAN-IN-THE-LOOP — "AI With Guardrails. Not a Black Box."

**Layout:** Light section, centered.

**Header:** "Autonomous. Not Reckless."
**Subtitle:** "Animo's AI agents have clearly defined authority boundaries. They know what they can do, what needs approval, and what they must never do."

**4-level authority visualization (horizontal pipeline or vertical stack):**

| Level | Name | Description | Example | Color |
|---|---|---|---|---|
| ✅ | **Authoritative** | AI executes immediately | Search, retrieve, classify, validate | Green |
| ⚠️ | **Threshold-Based** | AI acts if conditions met; human can override | Auto-validate document if confidence > 95% | Amber |
| 👁️ | **Advisory** | AI drafts; human approves before execution | Draft follow-up email to vendor, propose corrective action | Blue |
| 🚫 | **Forbidden** | AI never allowed, regardless of context | Declare compliance status, modify requirements, fabricate evidence | Red |

**Below:** "Every AI action is logged with full attribution — who triggered it (human or AI), what decision was made, when, and why. Your audit trail is always complete."

#### 8. TECHNOLOGY — "Enterprise Architecture, Startup Speed"

**Layout:** Dark section, centered tech stack grid.

**Styled as a terminal/code window with a realistic macOS-style title bar:**

```
╭──────────────────────────────────────────────────╮
│  $ animo stack                                    │
├──────────────────────────────────────────────────┤
│  Frontend    → React + Ant Design 5 + ProComponents │
│  Backend     → Laravel 12 + PHP 8.2 + PostgreSQL    │
│  AI Engine   → CrewAI + DeepSeek + MCP Protocol     │
│  ML Pipeline → LayoutLMv3 + Qwen2-VL + spaCy        │
│  Vector DB   → PostgreSQL pgvector (HNSW)            │
│  Real-Time   → WebSocket (Reverb) + Laravel Echo     │
│  Embeddings  → sentence-transformers (768-dim)       │
│  Auth        → JWT Multi-Tenant + OAuth 2.0          │
│  Infra       → Docker + Redis + Queue Workers        │
╰──────────────────────────────────────────────────╯
```

Below the terminal: 4 architecture highlights as icon cards:
- 🔒 **Multi-Tenant Isolation** — Organization is the hard boundary. Zero cross-tenant data leakage.
- 🧠 **AI Authority Boundaries** — 4-level system ensures AI never oversteps.
- 📜 **Append-Only Evidence** — No one can rewrite history. Every change is attributed and timestamped.
- ⚡ **160+ MCP Tools** — AI agents have native access to every platform capability via Model Context Protocol.

#### 9. COMPETITIVE ADVANTAGE — "Why Animo Wins"

**Layout:** Light section, comparison table.

**Header:** "Not Another Document Repository"

| Capability | Animo | Legacy Compliance Tools | Generic DMS |
|---|---|---|---|
| Natural language data entry | ✅ AI form filling via chat | ❌ Manual CRUD forms | ❌ Manual |
| 24/7 autonomous monitoring | ✅ 12 AI agent crews | ❌ Manual periodic checks | ❌ None |
| Document quality + VLM | ✅ Vision language models | ❌ Basic OCR only | ❌ None |
| Dual-mode compliance | ✅ Third-party + Internal ops | ⚠️ One mode only | ❌ None |
| Human-in-the-loop AI | ✅ 4-level authority gates | ⚠️ All-auto or nothing | ❌ None |
| Immutable evidence trail | ✅ Append-only + attribution | ⚠️ Editable records | ❌ None |
| Relationship intelligence | ✅ 10-source vendor scoring | ⚠️ Limited | ❌ None |
| Multi-industry modules | ✅ Config-driven, any vertical | ❌ Single-industry | ❌ None |
| Time-to-value | ✅ ~2 min AI onboarding | ❌ Weeks of setup | ❌ None |

Use check/x/warning icons with green/red/amber colors. Animo column should glow subtly.

#### 10. TRACTION & ROADMAP — "Built. Proven. Scaling."

**Layout:** Dark section, large animated counters + timeline.

**4 main metrics (animated count-up on scroll):**
- **160+** AI-Powered Tools
- **36+** Operational Record Types
- **6** Industry Verticals Supported
- **92%** Average Compliance Readiness Score

**Below: Visual timeline roadmap (horizontal, styled as a progress track):**

| Phase | When | What | Status |
|---|---|---|---|
| Core Platform | Q1 2026 | Multi-tenant engine, document processing, compliance scoring | ✅ Shipped |
| Multi-Vertical Modules | Q2 2026 | Configurable industry modules, AI onboarding, operations engine | ✅ Shipped |
| Intelligence OS | Q3 2026 | Connected sources, relationship intelligence, anomaly detection, meeting intelligence | ✅ Shipped |
| Predictive Analytics | Q4 2026 | ML-based risk prediction, trend forecasting, proactive compliance | 🔜 In Progress |
| Mobile + Marketplace | 2027 | PWA with offline, integration marketplace, multi-language AI | 🔜 Planned |

#### 11. USE CASES — "Real Scenarios, Real Value"

**Layout:** Light section, 3 expandable use-case cards.

**Use Case 1: Third-Party Vendor Compliance**
"A manufacturing company tracks 200+ suppliers. Each must provide valid insurance, safety certifications, and quality audits. Animo ingests documents, validates against requirements, scores each vendor, and automatically follows up when something expires."
- Before: 3 FTEs managing spreadsheets, 3-week follow-up cycles
- After: AI handles 90% of tracking, follow-ups sent in hours, real-time dashboard

**Use Case 2: Regulatory Audit Preparation**
"A healthcare organization faces a Joint Commission audit. Animo's AI assembles the evidence package — mapping every requirement to its supporting document, flagging gaps, and generating a readiness report with current scores."
- Before: 6-week scramble, late nights, missed items
- After: Always audit-ready, evidence assembled in minutes

**Use Case 3: Operational Record Digitization**
"A construction firm replaces paper inspection logs with Animo. Site supervisors log inspections via chat or form. If a threshold is breached, the system auto-creates a corrective action, notifies the safety manager, and tracks resolution to closure."
- Before: Paper forms, delayed reporting, no escalation trail
- After: Real-time logging, automatic escalation, immutable evidence

#### 12. PRICING — "Scales With You"

**Layout:** Light section, 3 pricing cards side by side.

| Tier | Best For | Features |
|---|---|---|
| **Starter** | Small teams getting started | Core module (5 record types), 1 requirement framework, email support, basic compliance scoring |
| **Professional** | Growing organizations | Core + industry modules, AI agents, connected sources, gap analysis, priority support |
| **Enterprise** | Large orgs with complex needs | All modules, custom record types, dedicated success manager, SLA, full API access, SSO |

All cards have "Contact Us" buttons — enterprise sales model, no public pricing.
Center text below: "All plans include AI chat, document processing, and audit trail."

#### 13. CTA — "Ready to See Animo in Action?" {#contact}

**Layout:** Full-width dark gradient section with centered content.

- Headline: **"Let's Show You What Autonomous Compliance Looks Like"**
- Subtitle: "Book a 30-minute demo. We'll set up your industry — live — in under 2 minutes."
- Large email input + "Request Demo" button (gradient CTA, indigo → purple)
- Below: "Or reach us at hello@animoanimo.com"
- Trust badges row: "SOC 2 (Planned) | GDPR Ready | Enterprise-Grade | Multi-Tenant Isolated"

#### 14. FOOTER

**Layout:** Dark (`#0F172A`), multi-column.

- **Column 1:** Animo logo + "The Operating System for Compliance Intelligence" + social icons (LinkedIn, Twitter/X, GitHub)
- **Column 2:** Product — Features, Pricing, Integrations, Roadmap, Documentation
- **Column 3:** Industries — Manufacturing, Construction, Healthcare, Pharma, Services, Food & Beverage
- **Column 4:** Company — About, Careers, Blog, Contact
- **Column 5:** Legal — Privacy Policy, Terms of Service, Security
- **Bottom bar:** "© 2026 Animo. All rights reserved." + "Built with 🤖 by a team that believes compliance shouldn't require suffering."

---

### TECHNICAL REQUIREMENTS

- **Framework:** React (Next.js or Vite) + Tailwind CSS
- **Animations:** Framer Motion for scroll-triggered animations, counter animations, hover effects
- **Responsive:** Mobile-first, fully responsive (looks great on phone for investor demos)
- **Performance:** Lighthouse score 95+, lazy-load below-fold sections
- **Dark/Light sections:** Alternate between dark (`#0F172A`) and light (`#FAFBFF`) sections for visual rhythm
- **Smooth scroll:** Anchor links with smooth scroll behavior
- **No external images required:** All visuals built with CSS/SVG/components (self-contained)
- **Font loading:** Google Fonts (Inter + JetBrains Mono) with font-display: swap

### ANIMATION SPEC

| Element | Animation | Trigger |
|---|---|---|
| Hero headline | Fade-in-up, stagger words | On load |
| Hero mockup | Float-in from right + subtle continuous float | On load |
| Compliance context cards | Fade-in-up, stagger 100ms | Scroll into view |
| Stat counters | Count-up from 0 | Scroll into view |
| Feature sections | Fade-in-up (text) + slide-in (mockup) from alternating sides | Scroll into view |
| Industry tiles | Fade-in-up, stagger 80ms | Scroll into view |
| Authority levels | Slide-in from left, stagger 150ms | Scroll into view |
| Comparison table rows | Slide-in from left, stagger | Scroll into view |
| Roadmap items | Reveal along the timeline track | Scroll into view |
| CTA section | Scale-up + glow pulse on button | Scroll into view |
| Gradient orbs | Slow continuous drift (CSS keyframes) | Always |
| Agent activity feed | Typewriter effect per line | Scroll into view |
| Dashboard mockups | Perspective tilt on hover (subtle parallax) | Mouse move |
| Onboarding steps | Step-by-step reveal along connecting line | Scroll into view |

### MICRO-COPY & TONE GUIDELINES

- Use active voice: "AI monitors" not "monitoring is performed by AI"
- Use concrete numbers: "12 agent crews" not "multiple agents"
- **Avoid industry-specific jargon** — use universal compliance language (obligations, evidence, requirements, standards, audits)
- Use "you/your" language: "Your compliance team" not "The compliance team"
- Bold key phrases within paragraphs for scannability
- Include subtle humor in footer: "Built by a team that believes compliance shouldn't require suffering"
- When showing examples, **rotate across industries** — don't repeat the same industry twice in a row
- Frame compliance as protecting **safety, consistency, accountability, and trust** — not just avoiding fines

---

### ⚠️ IMPORTANT NOTES

1. **All company logos and investor badges are placeholders** — use gray rounded rectangles
2. **Pricing is "Contact Us"** — no public pricing shown
3. **No single industry should dominate the page** — Food safety, construction, healthcare, pharma, and services should each appear roughly equally
4. **Do NOT use stock photos** — all visuals must be CSS/SVG generated mockups
5. **The page must work as a SINGLE FILE** or minimal file set — easy to deploy to Vercel/Netlify
6. **Make it feel ALIVE** — animations, gradients, glows, floating elements. This is not a static brochure.
7. **The word "food" should appear no more than 2-3 times on the entire page** — always in a list alongside other industries, never as the primary example
8. **Use "compliance" in its broadest sense** — legal, regulatory, standards, organizational policies. This is universal.

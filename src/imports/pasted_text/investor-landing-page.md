# Investor Landing Page Generation Prompt

> **Purpose:** Use this prompt with an AI code generator (v0, Bolt, Lovable, Claude Artifacts, etc.) to produce a single-page React landing page for Animo, targeting investors.

---

## PROMPT

You are a world-class landing page designer. Build a **single-page, investor-grade landing page** for **AnimoAnimo** — an AI-powered compliance and operations platform. The page must look premium, modern, and visually stunning. Think Y Combinator Demo Day polish. It must convey trust, intelligence, and enterprise readiness while feeling cutting-edge.

---

### BRAND IDENTITY

- **Product Name:** AnimoAnimo
- **Tagline:** "The Operating System for Compliance Intelligence"
- **Secondary Tagline:** "AI agents that monitor, reason, and act — so your team doesn't have to."
- **Tone:** Confident, sophisticated, data-driven, forward-looking. Not corporate-boring. Think Notion meets Palantir meets Stripe.
- **Logo:** Use a clean wordmark "animo" in lowercase, with a subtle AI-circuit motif on the letter "a". Place it top-left on a transparent navbar.

### COLOR PALETTE

| Role                   | Color           | Hex                 | Usage                                              |
| ---------------------- | --------------- | ------------------- | -------------------------------------------------- |
| **Primary**            | Deep Indigo     | `#4F46E5`           | CTAs, active states, primary accents               |
| **Primary Dark**       | Midnight Indigo | `#3730A3`           | Hover states, dark section backgrounds             |
| **Secondary**          | Electric Teal   | `#06B6D4`           | Highlights, data visualizations, secondary accents |
| **Accent**             | Warm Amber      | `#F59E0B`           | Alerts, badges, attention-grabbing elements        |
| **Background (Light)** | Snow White      | `#FAFBFF`           | Main page background                               |
| **Background (Dark)**  | Obsidian        | `#0F172A`           | Hero section, dark feature sections, footer        |
| **Surface**            | Soft Lavender   | `#EEF2FF`           | Cards, panels, subtle contrast areas               |
| **Text Primary**       | Charcoal        | `#1E293B`           | Body text on light backgrounds                     |
| **Text Secondary**     | Slate           | `#64748B`           | Captions, muted text                               |
| **Text on Dark**       | White           | `#F8FAFC`           | Text on dark backgrounds                           |
| **Success**            | Emerald         | `#10B981`           | Compliance scores, positive indicators             |
| **Danger**             | Rose            | `#F43F5E`           | Risk alerts, critical flags                        |
| **Gradient Hero**      | Indigo → Teal   | `#4F46E5 → #06B6D4` | Hero background gradient (diagonal, 135deg)        |
| **Gradient CTA**       | Indigo → Purple | `#4F46E5 → #7C3AED` | Primary CTA buttons                                |

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
   - A stylized dashboard with floating cards (compliance score gauge at 87%, alert badges, chat bubble)
   - Connected nodes representing AI agents (3-4 circles with connecting lines, pulsing animation)
   - Small document icons flowing into the system

2. **Product Screenshots:** Use styled `div` mockups that look like app screenshots:
   - A compliance dashboard with a donut chart (87% ready), gap list, status pills
   - A chat interface with AI response bubbles and tool execution indicators
   - An operations dashboard with KPI widgets (gauges, trend lines, counters)
   - A vendor risk card (health score 72/100, communication timeline, risk breakdown)

3. **Background Decorations:**
   - Gradient mesh blobs (3-4 large blurred shapes) positioned behind sections
   - Subtle animated particles or floating dots connecting to form network patterns
   - Faint topographic/contour lines on light sections

4. **Section Dividers:** Use angled/wave SVG dividers between sections, alternating light/dark

---

### PAGE SECTIONS (in order)

#### 1. HERO — "The Intelligence Layer Your Operations Are Missing"

**Layout:** Full-viewport height, dark gradient background (`#0F172A` → `#1E1B4B`), split layout.

**Left side (60%):**

- Eyebrow badge: "🚀 Backed by [Y Combinator / Techstars / etc.]" (placeholder, pill-shaped, amber border)
- Main headline: **"AI Agents That Run Your Compliance — While You Run Your Business"**
- Subtitle: "Animo deploys autonomous AI agents that monitor documents, chase vendors, detect anomalies, and prepare audits — 24/7, across every channel. All with human-in-the-loop safety gates."
- Two CTA buttons:
  - Primary (gradient): "Request Demo" → links to #contact
  - Secondary (outline): "See How It Works" → links to #how-it-works
- Social proof strip: "Trusted by 50+ organizations across Food Safety, Construction, and Consulting" (placeholder logos as gray rectangles)

**Right side (40%):**

- Floating dashboard mockup (perspective transform, slight rotation) showing:
  - Compliance readiness gauge (87%)
  - 3 small metric cards (Documents Processed: 12,847 | Active Agents: 9 | Avg Response: 2.3s)
  - Mini chat bubble: "Show me vendor compliance gaps" → AI response preview
- Subtle glow effect behind the mockup

#### 2. SOCIAL PROOF BAR — Logos + Key Stats

**Layout:** Slim horizontal bar, light background (`#FAFBFF`), centered.

**Content:**

- Row of placeholder company logos (8 gray rectangles with rounded corners)
- Divider line
- 4 stat counters with animated count-up:
  - **160+** AI-Powered Tools
  - **36+** Operational Record Types
  - **12** Autonomous Agent Crews
  - **3** Enterprise Verticals

#### 3. PROBLEM STATEMENT — "Compliance Is Broken"

**Layout:** Dark section (`#0F172A`), two-column.

**Left column:** Large text block:

- "Your compliance team is drowning in spreadsheets, chasing vendors by email, and manually validating the same documents over and over."
- "Meanwhile, one missed certificate can shut down your operation."
- Bold callout stat: **"67% of compliance violations stem from expired or missing documentation"** (amber highlight)

**Right column:** Animated illustration or styled mockup showing the "old way":

- Stack of messy documents
- Red X marks
- Clock icon with "3 weeks average follow-up time"
- Transform/arrow into the "Animo way" with green checkmarks and "2 minutes" badge

#### 4. SOLUTION OVERVIEW — "Meet Animo"

**Layout:** Light section, centered header + 3 large feature cards.

**Header:** "One Platform. Two Modes. Complete Coverage."

**Three cards (glassmorphism, hover-lift):**

| Card | Title                      | Description                                                                                                          | Icon            |
| ---- | -------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------- |
| 1    | **Third-Party Compliance** | Track vendor documents, validate against requirements, score readiness, chase gaps — automatically.                  | Shield + Check  |
| 2    | **Internal Operations**    | Digitize operational records (temperature logs, inspections, incident reports) with immutable evidence trails.       | ClipboardCheck  |
| 3    | **Intelligence Layer**     | AI monitors email, calendar, documents, and connected sources to surface what matters — before it becomes a problem. | Brain + Sparkle |

Each card has a mini illustration/mockup inside it.

#### 5. FEATURE DEEP-DIVE — "The AI Advantage"

**Layout:** Alternating left-right sections (feature + mockup), 6 features.

**Feature 1: AI Communication Engine**

- "Natural language everything. Chat, email, or voice — one AI brain handles it all."
- Mockup: Chat interface with user saying "Show me all expiring vendor certificates this month" → AI response with a formatted table + "I found 7 certificates expiring. Want me to draft follow-up emails?"
- Badge: "160+ MCP Tools"

**Feature 2: Autonomous Agent Crews**

- "12 AI crews run 24/7 — checking compliance, validating documents, drafting follow-ups, preparing audits."
- Mockup: Agent activity feed showing:
  - 🟢 ComplianceChecker completed daily scan — 3 gaps found
  - 🟡 OutreachCoordinator drafted 5 follow-up emails (awaiting approval)
  - 🟢 DocumentValidator auto-validated 12 uploads
- Badge: "Human-in-the-Loop Safety Gates"

**Feature 3: Intelligent Document Processing**

- "Upload anything. AI reads it, classifies it, extracts fields, and maps it to requirements — in seconds."
- Mockup: Document upload flow → Quality gate (✅ DPI, ✅ Legibility, ✅ Orientation) → Classification (COI - Certificate of Insurance) → Field extraction panel → Mapped to compliance requirements
- Badge: "Vision Language Models + OCR"

**Feature 4: Compliance Scoring & Gap Analysis**

- "Real-time readiness scores. Not pass/fail — granular, evidence-backed, actionable."
- Mockup: Compliance dashboard with:
  - Overall score donut (87.5%)
  - Requirement breakdown table (SQF Level 3, OSHA, GFSI)
  - Gap cards: "3 Critical | 5 Medium | 12 Low"
  - Time Machine slider: "View compliance state as of [date]"
- Badge: "Compliance Time Machine"

**Feature 5: Operations Engine**

- "36+ typed record models. Temperature logs, inspections, incidents, timesheets — all with state machines and auto-escalation."
- Mockup: Operations dashboard with:
  - Temperature gauge (38.2°F → PASS ✅)
  - Immediate Action card (auto-created, SM-7 state)
  - CAPA workflow timeline (Draft → Review → Approved → Implementing)
- Badge: "Immutable Evidence Trail"

**Feature 6: Corporate Intelligence**

- "Your AI-powered radar. Vendor risk scores, meeting intelligence, communication anomaly detection, regulatory monitoring."
- Mockup: Intelligence dashboard with:
  - Vendor health card (72/100, trending ↓)
  - Anomaly alert: "⚠️ Communication silence from Vendor X — 14 days, expected: 3 days"
  - Meeting brief card: "Tomorrow 10 AM: Quarterly review with ABC Corp — 3 open items"
  - Regulatory radar: "New FDA regulation affects 2 of your requirements"
- Badge: "10-Source Vendor Scoring"

#### 6. MULTI-VERTICAL — "One Platform, Every Industry"

**Layout:** Dark section with 3 vertical cards side by side.

**Header:** "Built for Regulated Industries. Configurable for Yours."

**Three vertical cards:**

| Vertical            | Icon        | Record Types    | Example Features                                                                               |
| ------------------- | ----------- | --------------- | ---------------------------------------------------------------------------------------------- |
| 🍽️ **Food Safety**  | Thermometer | 15 record types | HACCP monitoring, supplier scoring, SQF/GFSI compliance, temp logs, sanitation checks          |
| 🏗️ **Construction** | HardHat     | 8 record types  | Safety incident tracking, equipment inspections, OSHA compliance, toolbox talks                |
| 💼 **Consulting**   | Briefcase   | 8 record types  | Utilization rates, billable hours, project pipeline, deliverable tracking, proposal management |

**Bottom text:** "New vertical? AI-guided onboarding creates your entire org in ~2 minutes. Describe your business, we'll do the rest."

#### 7. HOW IT WORKS — "From Zero to Intelligent in Minutes" {#how-it-works}

**Layout:** Light section, horizontal stepper (4 steps).

| Step | Title                        | Description                                                                                                                    |
| ---- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 1    | **Describe Your Business**   | Tell the AI what you do. "We're a food manufacturer with 3 plants and 47 suppliers."                                           |
| 2    | **AI Configures Everything** | Modules activated, record types created, requirements loaded, dashboards built — automatically.                                |
| 3    | **Connect Your Sources**     | Link Gmail, Outlook, Google Drive. AI starts ingesting and classifying immediately.                                            |
| 4    | **Agents Take Over**         | 24/7 monitoring begins. Compliance checking, document validation, vendor follow-up — all autonomous with human approval gates. |

Each step has a small animated illustration.

#### 8. TECHNOLOGY — "Enterprise Architecture, Startup Speed"

**Layout:** Dark section, centered tech stack grid.

**Styled as a terminal/code window:**

```
╭──────────────────────────────────────────────────╮
│  animo tech stack                                 │
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

- 🔒 **Multi-Tenant Isolation** — Organization is the hard boundary. Zero cross-org data leakage.
- 🧠 **AI Authority Boundaries** — 4-level system: Authoritative, Threshold, Advisory, Forbidden.
- 📜 **Append-Only Evidence** — No one can rewrite history. Every change is attributed and timestamped.
- ⚡ **160+ MCP Tools** — AI agents have native access to every platform capability.

#### 9. COMPETITIVE ADVANTAGE — "Why Animo Wins"

**Layout:** Light section, comparison table.

**Header:** "Not Another Document Management System"

| Capability                  | Animo                 | Legacy Compliance Tools | Generic DMS |
| --------------------------- | --------------------- | ----------------------- | ----------- |
| Natural language data entry | ✅ AI form filling    | ❌ Manual forms         | ❌ Manual   |
| 24/7 autonomous monitoring  | ✅ 12 AI crews        | ❌ Manual checks        | ❌ None     |
| Document quality + VLM      | ✅ Vision models      | ❌ Basic OCR            | ❌ None     |
| Cross-mode compliance       | ✅ 3P + Internal      | ⚠️ One mode             | ❌ None     |
| Human-in-the-loop AI        | ✅ Authority gates    | ⚠️ All or nothing       | ❌ None     |
| Immutable evidence trail    | ✅ Append-only        | ⚠️ Editable             | ❌ None     |
| Vendor risk intelligence    | ✅ 10-source scoring  | ⚠️ Limited              | ❌ None     |
| Meeting intelligence        | ✅ Briefing + actions | ❌ None                 | ❌ None     |
| Multi-vertical modules      | ✅ Config-driven      | ❌ Single industry      | ❌ None     |

Use check/x/warning icons with green/red/amber colors.

#### 10. TRACTION & METRICS — "The Numbers"

**Layout:** Dark section, large animated counters.

**4 main metrics (animated count-up on scroll):**

- **160+** AI Tools Deployed
- **36+** Operational Record Types
- **3** Enterprise Verticals Live
- **87%** Average Compliance Readiness (demo data)

**Below:** Timeline roadmap showing milestones:

- Q1 2026: Core platform + Food Safety vertical ✅
- Q2 2026: Construction + Consulting verticals ✅
- Q3 2026: Intelligence OS + Connected Sources ✅
- Q4 2026: Predictive Analytics + Mobile PWA 🔜
- 2027: Integration Marketplace + Multi-Language 🔜

#### 11. PRICING TIERS — "Scales With You"

**Layout:** Light section, 3 pricing cards.

| Tier             | Price      | Features                                                                                    |
| ---------------- | ---------- | ------------------------------------------------------------------------------------------- |
| **Starter**      | Contact Us | Core module (5 record types), 1 vertical, basic compliance, email support                   |
| **Professional** | Contact Us | Core + 1 vertical (15-20 record types), AI agents, connected sources, priority support      |
| **Enterprise**   | Contact Us | All modules, all verticals, custom record types, dedicated success manager, SLA, API access |

All cards have "Contact Us" buttons (no public pricing — enterprise sales model).

#### 12. CTA — "Ready to See Animo in Action?" {#contact}

**Layout:** Full-width dark gradient section with centered content.

- Headline: **"Let's Show You What Autonomous Compliance Looks Like"**
- Subtitle: "Book a 30-minute demo. We'll set up your industry in real-time."
- Large email input + "Request Demo" button (gradient)
- Below: "Or email us at hello@animoflow.com"
- Trust badges: "SOC 2 Type II (Planned) | GDPR Compliant | Enterprise-Ready"

#### 13. FOOTER

**Layout:** Dark (`#0F172A`), multi-column.

- **Column 1:** Animo logo + brief tagline + social icons (LinkedIn, Twitter/X, GitHub)
- **Column 2:** Product — Features, Pricing, Integrations, Roadmap
- **Column 3:** Company — About, Careers, Blog, Contact
- **Column 4:** Legal — Privacy Policy, Terms of Service, Security
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

| Element               | Animation                                     | Trigger          |
| --------------------- | --------------------------------------------- | ---------------- |
| Hero headline         | Fade-in-up, stagger words                     | On load          |
| Hero mockup           | Float-in from right + subtle continuous float | On load          |
| Stat counters         | Count-up from 0                               | Scroll into view |
| Feature cards         | Fade-in-up, stagger 100ms                     | Scroll into view |
| Comparison table rows | Slide-in from left, stagger                   | Scroll into view |
| CTA section           | Scale-up + glow pulse on button               | Scroll into view |
| Gradient orbs         | Slow continuous drift (CSS)                   | Always           |
| Agent activity feed   | Typewriter effect per line                    | Scroll into view |
| Dashboard mockups     | Perspective tilt on hover                     | Mouse move       |

### MICRO-COPY & TONE GUIDELINES

- Use active voice: "AI monitors" not "monitoring is performed by AI"
- Use concrete numbers: "12 agent crews" not "multiple agents"
- Avoid jargon overload: explain what it DOES, not how it's architected
- Use "you/your" language: "Your compliance team" not "The compliance team"
- Bold key phrases within paragraphs for scannability
- Include subtle humor in footer: "Built by a team that believes compliance shouldn't require suffering"

---

### ⚠️ IMPORTANT NOTES

1. **All company logos and investor badges are placeholders** — use gray rounded rectangles
2. **Pricing is "Contact Us"** — no public pricing shown
3. **Metrics are from demo/staging data** — mark with subtle "(beta)" if needed
4. **Do NOT use stock photos** — all visuals must be CSS/SVG generated mockups
5. **The page must work as a SINGLE FILE** or minimal file set — easy to deploy to Vercel/Netlify
6. **Make it feel ALIVE** — animations, gradients, glows, floating elements. This is not a static brochure.

# AnimoAnimo Landing Page - Design Guidelines

> Reference document for AI agents working on the AnimoAnimo investor-grade landing page.

---

## 1. Color System

### Brand Colors

| Token     | Hex       | Usage                                                       |
| --------- | --------- | ----------------------------------------------------------- |
| Primary   | `#4F46E5` | Indigo - buttons, gradients, active states, primary accents |
| Secondary | `#7C3AED` | Purple - gradient endpoints, secondary accents              |
| Cyan      | `#06B6D4` | Teal/Cyan - AI elements, gradient endpoints, info states    |
| Amber     | `#F59E0B` | Warning states, "coming soon" badges, attention indicators  |
| Rose      | `#F43F5E` | Error states, "old way" indicators, critical alerts         |
| Green     | `#10B981` | Success states, "new way" indicators, validation checks     |

### Surface Colors (Dark sections)

| Token             | Hex                         | Usage                                         |
| ----------------- | --------------------------- | --------------------------------------------- |
| Dark BG Primary   | `#0F172A`                   | Main dark background (slate-900)              |
| Dark BG Secondary | `#1E1B4B`                   | Gradient midpoint (indigo-950)                |
| Dark Card         | `#1E293B`                   | Card backgrounds on dark sections (slate-800) |
| Dark Inset        | `#0F172A` at 40-60% opacity | Nested elements within dark cards             |

### Surface Colors (Light sections)

| Token             | Hex                    | Usage                          |
| ----------------- | ---------------------- | ------------------------------ |
| Light BG          | `#FAFBFF`              | Main light background          |
| Light Card        | `white` at 60% opacity | Cards with `backdrop-blur-xl`  |
| Light Card Border | `white` at 80% opacity | Card borders on light sections |

### Text Colors

| Token              | Hex       | Usage                                      |
| ------------------ | --------- | ------------------------------------------ |
| Heading (dark bg)  | `#F8FAFC` | Primary headings on dark backgrounds       |
| Body (dark bg)     | `#E2E8F0` | Body text on dark backgrounds              |
| Muted (dark bg)    | `#94A3B8` | Secondary text on dark backgrounds         |
| Dim (dark bg)      | `#64748B` | Tertiary text, labels on dark backgrounds  |
| Heading (light bg) | `#1E293B` | Primary headings on light backgrounds      |
| Body (light bg)    | `#64748B` | Body text on light backgrounds             |
| Muted (light bg)   | `#94A3B8` | Secondary/italic text on light backgrounds |

---

## 2. Typography

### Fonts

- **Inter** - All body text, headings, labels, buttons
- **JetBrains Mono** - Code blocks, technical values, counters, metrics, timestamps, standards listings

### Font Import (in `/src/styles/fonts.css`)

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap");
```

### Application Pattern

Fonts are applied via inline `style` attributes, NOT Tailwind classes:

```tsx
style={{ fontFamily: "Inter" }}
style={{ fontFamily: "JetBrains Mono" }}
```

### Heading Scale

| Element        | Size (mobile)   | Size (desktop) | Weight      |
| -------------- | --------------- | -------------- | ----------- |
| Section H2     | `36px`          | `44px`         | `800`       |
| Hero H1        | `42px`          | `60px`         | `800`       |
| Card H3        | `17px` - `20px` | same           | `700`       |
| Sub-heading H4 | `15px` - `16px` | same           | `600`-`700` |

### Body Text

| Context       | Size            | Weight      |
| ------------- | --------------- | ----------- |
| Section intro | `17px`          | `400`       |
| Card body     | `14px` - `15px` | `400`       |
| Small/meta    | `12px` - `13px` | `400`-`500` |
| Badges        | `10px` - `12px` | `500`-`600` |

### Key Rule

**Do NOT use Tailwind utility classes for font-size (e.g. `text-2xl`), font-weight (e.g. `font-bold`), or line-height (e.g. `leading-none`).** Use explicit pixel values via bracket notation: `text-[17px]`, `font-[700]`, `leading-[1.7]`.

---

## 3. Gradient Patterns

### Primary Text Gradient (used in every section heading)

```tsx
<span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">
  Highlighted Words
</span>
```

### Button Gradient

```tsx
className = "bg-gradient-to-r from-[#4F46E5] to-[#7C3AED]";
```

### Hero/CTA Background Gradient

```tsx
className = "bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A]";
```

### Glow Orbs (ambient lighting on dark sections)

```tsx
<div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#4F46E5]/20 blur-[120px] animate-pulse" />
<div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-[#06B6D4]/15 blur-[120px] animate-pulse" />
```

### Dot Grid Pattern (dark section overlay)

```tsx
<div
  className="absolute inset-0 opacity-[0.03]"
  style={{
    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
    backgroundSize: "40px 40px",
  }}
/>
```

---

## 4. Glassmorphism Cards

### Dark Section Cards

```tsx
className = "bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6";
// Hover variant:
className =
  "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300";
```

### Light Section Cards

```tsx
className =
  "bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300";
```

### Mockup/Dashboard Cards

```tsx
className="bg-[#1E293B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
// With glow:
<div className="absolute -inset-4 bg-gradient-to-r from-[#4F46E5]/20 to-[#06B6D4]/20 rounded-3xl blur-xl -z-10" />
```

---

## 5. Section Layout Pattern

### Alternating Dark/Light Rhythm

Sections alternate between dark (`#0F172A`) and light (`#FAFBFF`) backgrounds:

1. **Navbar** - Transparent/dark blur on scroll
2. **Hero** - Dark gradient
3. **ComplianceProblem** - Light
4. **SolutionOverview** - Dark
5. **FeatureDeepDive** - Light
6. **UniversalCompliance** - Dark
7. **HumanInTheLoop** - Light
8. **UseCases** - Light
9. **HowItWorks** - Light
10. **Technology** - Dark
11. **CompetitiveAdvantage** - Light
12. **Traction** - Dark
13. **VisionAI** - Dark (special gradient)
14. **Pricing** - Light
15. **CTA** - Dark gradient
16. **Footer** - Dark

### Section Padding

```tsx
className = "py-24";
```

### Max Width Container

```tsx
<div className="max-w-7xl mx-auto px-6">  // Full-width sections
<div className="max-w-5xl mx-auto px-6">  // Narrower sections (tables, pricing)
<div className="max-w-4xl mx-auto px-6">  // Content-focused (use cases)
<div className="max-w-3xl mx-auto px-6">  // CTA
<div className="max-w-2xl mx-auto">        // Centered text blocks
```

### Section Heading Pattern

Every section uses this consistent heading structure:

```tsx
<ScrollReveal>
  <div className="text-center mb-16">
    <h2
      className="text-[36px] lg:text-[44px] font-[800] text-[#1E293B] mb-4"
      style={{ fontFamily: "Inter" }}
    >
      Static Text.{" "}
      <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">
        Gradient Highlight
      </span>
    </h2>
    <p
      className="text-[#64748B] text-[17px] max-w-2xl mx-auto"
      style={{ fontFamily: "Inter" }}
    >
      Supporting description text.
    </p>
  </div>
</ScrollReveal>
```

On dark backgrounds, swap `text-[#1E293B]` to `text-[#F8FAFC]` and `text-[#64748B]` to `text-[#94A3B8]`.

---

## 6. Animation System

### Library

- **Motion** (formerly Framer Motion) - `import { motion } from "motion/react"`

### ScrollReveal Component (`/src/app/components/ScrollReveal.tsx`)

Wraps any element for scroll-triggered fade-in-up animation:

```tsx
<ScrollReveal delay={0.1}>
  <div>...</div>
</ScrollReveal>
```

- `initial={{ opacity: 0, y: 40 }}`
- `whileInView={{ opacity: 1, y: 0 }}`
- `viewport={{ once: true, amount: 0.2 }}`
- `duration: 0.6`, `ease: "easeOut"`

### Staggered List Animation

Apply incremental delays to list items:

```tsx
{
  items.map((item, i) => (
    <ScrollReveal key={item.id} delay={i * 0.08}>
      ...
    </ScrollReveal>
  ));
}
```

Common stagger values: `0.08`, `0.1`, `0.12`

### Hero Entrance Animations

Sequential motion.div animations with staggered delays (0, 0.1, 0.3, 0.4, 0.6, 0.7):

```tsx
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
```

### AnimatedCounter Component (`/src/app/components/AnimatedCounter.tsx`)

IntersectionObserver-triggered count-up with easeOut cubic easing over 2 seconds:

```tsx
<AnimatedCounter end={92} suffix="%" />
<AnimatedCounter end={2.71} prefix="$" suffix="M" />
```

### Hover Transitions

```tsx
className = "hover:-translate-y-1 transition-all duration-300"; // Card lift
className = "hover:shadow-xl transition-shadow"; // Shadow grow
className = "hover:bg-white/10 transition-colors"; // Background lighten
```

---

## 7. Icon System

### Library

- **lucide-react** - All icons throughout the landing page

### No Emojis Policy

**Never use emoji characters.** Always use lucide-react icons. Common replacements:

- Checkmark: `<Check size={16} className="text-[#10B981]" />`
- Warning: `<AlertTriangle size={16} className="text-[#F59E0B]" />`
- Error/X: `<X size={16} className="text-[#F43F5E]" />`
- Eye/View: `<Eye size={16} />`
- Shield/Forbidden: `<ShieldOff size={16} />`

### Icon Container Pattern

Icons are placed inside tinted containers matching their semantic color:

```tsx
<div
  className="w-12 h-12 rounded-xl flex items-center justify-center"
  style={{ background: `${color}15` }}
>
  <IconComponent size={24} style={{ color }} />
</div>
```

Container sizes: `w-8 h-8` (small), `w-10 h-10` (medium), `w-12 h-12` (standard), `w-14 h-14` (large), `w-16 h-16` (stepper)

### Common Icon Sizes

- Inline with small text: `size={10}` - `size={12}`
- Inline with body text: `size={14}` - `size={16}`
- Card icons: `size={20}` - `size={24}`
- Feature icons: `size={28}`

---

## 8. Component Patterns

### Color-Coded Status Badges

```tsx
<span className="px-2 py-0.5 rounded text-[10px] bg-[#F43F5E]/20 text-[#F43F5E]">Critical</span>
<span className="px-2 py-0.5 rounded text-[10px] bg-[#F59E0B]/20 text-[#F59E0B]">Medium</span>
<span className="px-2 py-0.5 rounded text-[10px] bg-[#10B981]/20 text-[#10B981]">Valid</span>
```

### Chat/Conversation Mockup

```tsx
// User message
<div className="bg-[#4F46E5]/20 border border-[#4F46E5]/30 rounded-lg p-3">
  <div className="text-[#94A3B8] text-[11px] mb-1">You</div>
  <div className="text-white text-[13px]">...</div>
</div>
// AI response
<div className="bg-[#06B6D4]/10 border border-[#06B6D4]/20 rounded-lg p-3">
  <div className="text-[#06B6D4] text-[11px] mb-1">Animo AI</div>
  <div className="text-[#E2E8F0] text-[13px]">...</div>
</div>
```

### Color-Tinted Info Boxes

Pattern: `bg-[COLOR]/10 border border-[COLOR]/20 rounded-lg p-3`

```tsx
<div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-lg p-3">
  <span className="text-[#10B981] text-[13px]">Success message</span>
</div>
```

### Progress Bars

```tsx
<div className="flex-1 h-1.5 bg-[#1E293B] rounded-full overflow-hidden">
  <div
    className="h-full bg-[#10B981] rounded-full"
    style={{ width: `${percentage}%` }}
  />
</div>
```

### Circular Score Gauge (SVG)

```tsx
<svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
  <circle cx="40" cy="40" r="34" fill="none" stroke="#1E293B" strokeWidth="6" />
  <circle
    cx="40"
    cy="40"
    r="34"
    fill="none"
    stroke="url(#gradient)"
    strokeWidth="6"
    strokeDasharray={`${percentage * circumference} ${circumference}`}
    strokeLinecap="round"
  />
</svg>
```

### Accordion Pattern

Uses `AnimatePresence` + `motion.div` with `height: 0 -> auto` for expand/collapse.

### Pricing Highlight Card

The featured tier uses the primary gradient as full background:

```tsx
className =
  "bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-white shadow-xl shadow-[#4F46E5]/20";
```

---

## 9. Button Styles

### Primary CTA

```tsx
className =
  "px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-[15px] font-[600] shadow-lg shadow-[#4F46E5]/25 hover:shadow-[#4F46E5]/40 transition-shadow";
```

### Secondary/Ghost CTA

```tsx
className =
  "px-7 py-3.5 rounded-xl border border-white/20 text-white text-[15px] font-[500] hover:bg-white/5 transition-colors";
```

### Nav CTA (compact)

```tsx
className =
  "px-5 py-2 rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-[14px] font-[600] hover:opacity-90 transition-opacity";
```

---

## 10. Navbar Behavior

- Fixed top, full-width, `z-50`
- Transparent by default, glass on scroll: `bg-[#0F172A]/90 backdrop-blur-xl shadow-lg`
- Scroll detection threshold: `window.scrollY > 50`
- Mobile: hamburger toggle with slide-down menu

---

## 11. Responsive Breakpoints

Uses Tailwind's standard breakpoints with `lg:` prefix for desktop overrides:

- Grid layouts: `grid sm:grid-cols-2 lg:grid-cols-3` or `md:grid-cols-4`
- Text scaling: `text-[36px] lg:text-[44px]`
- Layout direction: `lg:grid-cols-2` with alternating `lg:[direction:rtl]` for feature sections
- Mobile nav: `hidden md:flex` / `md:hidden`

---

## 12. File Structure

```
/src/app/
  App.tsx                          # Main layout, imports all sections in order
  components/
    Navbar.tsx                     # Fixed navigation
    Hero.tsx                       # Hero with floating dashboard mockup
    ComplianceProblem.tsx          # 4 context cards + animated stats
    SolutionOverview.tsx           # Old way/new way + 3 solution cards
    FeatureDeepDive.tsx            # 6 alternating feature sections with mockups
    UniversalCompliance.tsx        # 6 industry tiles + AI onboarding demo
    HumanInTheLoop.tsx             # 4-level authority visualization
    UseCases.tsx                   # Expandable accordion cards
    HowItWorks.tsx                 # 4-step stepper
    Technology.tsx                 # Tech highlights (4 cards)
    CompetitiveAdvantage.tsx       # Comparison table
    Traction.tsx                   # Metrics + roadmap
    VisionAI.tsx                   # Vision AI preview (dark, futuristic)
    Pricing.tsx                    # 3 tiers
    CTA.tsx                        # Email capture + demo CTA
    Footer.tsx                     # 4-column footer
    ScrollReveal.tsx               # Reusable scroll animation wrapper
    AnimatedCounter.tsx            # Intersection-triggered count-up
/src/styles/
  fonts.css                        # Google Fonts import
  theme.css                        # Tailwind v4 theme tokens
```

---

## 13. Key Rules Summary

1. **No emojis** - Use lucide-react icons exclusively
2. **No Tailwind font utilities** - Use bracket notation: `text-[17px]`, `font-[700]`, `leading-[1.7]`
3. **Inline font-family** - Always apply via `style={{ fontFamily: "Inter" }}` or `"JetBrains Mono"`
4. **Color opacity via slash** - `bg-[#4F46E5]/20` not `bg-[#4F46E520]`
5. **ScrollReveal everything** - Every visible section element gets a `<ScrollReveal>` wrapper
6. **Stagger list animations** - Use `delay={i * 0.08}` through `delay={i * 0.12}`
7. **Glassmorphism on all cards** - `backdrop-blur` + semi-transparent bg + border
8. **Gradient text in every heading** - Each section H2 has at least one gradient-highlighted phrase
9. **Dark/light alternation** - Maintain visual rhythm between sections
10. **Unique keys** - Always use meaningful keys, not array indices, when data has unique identifiers

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ComplianceProblem } from "./components/ComplianceProblem";
import { SolutionOverview } from "./components/SolutionOverview";
import { FeatureDeepDive } from "./components/FeatureDeepDive";
import { UniversalCompliance } from "./components/UniversalCompliance";
import { Showcase } from "./components/Showcase";
import { Packs } from "./components/Packs";
import { HowItWorks } from "./components/HowItWorks";
import { HumanInTheLoop } from "./components/HumanInTheLoop";
import { VisionAI } from "./components/VisionAI";
import { Technology } from "./components/Technology";
import { CompetitiveAdvantage } from "./components/CompetitiveAdvantage";
import { Traction } from "./components/Traction";
import { Pricing } from "./components/Pricing";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#FAFBFF]" style={{ scrollBehavior: "smooth", fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <Hero />
      <ComplianceProblem />
      <SolutionOverview />
      <FeatureDeepDive />
      <UniversalCompliance />
      <Showcase />
      <Packs />
      <HowItWorks />
      <HumanInTheLoop />
      <VisionAI />
      <Technology />
      <CompetitiveAdvantage />
      <Traction />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

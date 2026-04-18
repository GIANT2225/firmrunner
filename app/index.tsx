import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { ProblemSection } from "../components/ProblemSection";
import { WhatIsGiant } from "../components/WhatIsGiant";
import { HowItWorks } from "../components/SolutionSection";
import { AgentsSection } from "../components/WhyNowSection";
import { FirmFitSection } from "../components/FirmFitSection";
import { PositioningSection } from "../components/ProgressSection";
import { Pricing } from "../components/Pricing";
import { FounderNote } from "../components/FounderNote";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";
import { InvestorPage } from "../components/InvestorAndProduct";
import { WaitlistForm } from "../components/WaitlistForm";

const LandingPage = () => (
  <div className="bg-black text-white min-h-screen">
    <Navbar />
    <main>
      <Hero />
      <ProblemSection />
      <WhatIsGiant />
      <HowItWorks />
      <AgentsSection />
      <PositioningSection />
      <FirmFitSection />
      <Pricing />
      <FounderNote />
      <FinalCTA />
    </main>
    <Footer />
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/investors" element={<InvestorPage />} />
        <Route path="/apply" element={<WaitlistForm />} />
      </Routes>
    </Router>
  );
}

import { Hero } from '../components/Hero';
import { ProblemStatement } from '../components/ProblemStatement';
import { Solution } from '../components/Solution';
import { SocialImpact } from '../components/SocialImpact';
import { MarketOpportunity } from '../components/MarketOpportunity';
import { VisionCallToAction } from '../components/VisionCallToAction';
import { RevenueModel } from '../components/RevenueModel';
import { Footer } from '../components/Footer';
import { SectionDivider } from '../components/SectionDivider';

export function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SectionDivider />
      <ProblemStatement />
      <SectionDivider />
      <Solution />
      <SectionDivider />
      <SocialImpact />
      <SectionDivider />
      <MarketOpportunity />
      <SectionDivider />
      <VisionCallToAction />
      <SectionDivider />
      <RevenueModel />
      <Footer />
    </div>
  );
}

import HeroSection from '../components/sections/HeroSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import ResultsSection from '../components/sections/ResultsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ResultsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
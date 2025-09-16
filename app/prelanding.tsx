//
import PrelandingHeader from "./components/prelanding/PrelandingHeader";
import HeroSection from "./components/prelanding/HeroSection";
import HowWeTestedSection from "./components/prelanding/HowWeTestedSection";
import ProductComparisonSection from "./components/prelanding/ProductComparisonSection";
import BestOverallSection from "./components/prelanding/BestOverallSection";
import ConclusionSection from "./components/prelanding/ConclusionSection";
import AuthorBioSection from "./components/prelanding/AuthorBioSection";
import Sidebar from "./components/prelanding/Sidebar";
import FooterSection from "./components/prelanding/FooterSection";

export default function PreLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <PrelandingHeader />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Content and Sidebar Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main Content */}
          <main className="flex-1 lg:max-w-4xl xl:max-w-5xl">
            <HeroSection />

            <HowWeTestedSection />

            <ProductComparisonSection />
            <BestOverallSection />

            <ConclusionSection />

            <AuthorBioSection />
          </main>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}

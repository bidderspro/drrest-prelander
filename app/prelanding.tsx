import PrelandingHeader from "./components/prelanding/PrelandingHeader";
import HeroSection from "./components/prelanding/HeroSection";
import HowWeTestedSection from "./components/prelanding/HowWeTestedSection";
import ProductComparisonSection from "./components/prelanding/ProductComparisonSection";
import BestOverallSection from "./components/prelanding/BestOverallSection";
import ConclusionSection from "./components/prelanding/ConclusionSection";
import AuthorBioSection from "./components/prelanding/AuthorBioSection";
import Sidebar from "./components/prelanding/Sidebar";
import FooterSection from "./components/prelanding/FooterSection";
import RunnerUpSection from "./components/prelanding/RunnerUpSection";
import ZZZTapeSection from "./components/prelanding/ZZZTapeSection";

export default function PreLandingPage() {
  return (
    <div className="h-screen bg-white flex flex-col overflow-x-hidden">
      {/* Fixed Header */}
      <div className="sticky top-0 z-20 bg-white">
        <PrelandingHeader />
      </div>

      {/* Main Container (scrollable) */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-invisible">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-[60px] relative">
          <div className="lg:flex lg:gap-8 lg:justify-between">
            {/* Main Content (scrolls) */}
            <main className="w-full min-w-0 overflow-x-hidden lg:w-[929px] lg:flex lg:flex-col lg:justify-start lg:items-center lg:gap-[33px] lg:flex-shrink-0">
              <HeroSection />
              <HowWeTestedSection />
              <ProductComparisonSection />
              <BestOverallSection />
              <RunnerUpSection />
              <ZZZTapeSection />
              <ConclusionSection />
              <AuthorBioSection />

              {/* Sidebar below main content on mobile (<lg) */}
              <div className="w-full my-4 lg:hidden">
                <Sidebar />
              </div>

              <FooterSection />
            </main>

            {/* Desktop Sidebar (fixed via sticky) */}
            <div className="hidden lg:block lg:flex-shrink-0">
              <div className="sticky top-24 lg:top-24 mt-24">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-[60px] relative">
          <div className="xl:flex xl:gap-8 xl:justify-between">
            {/* Main Content (scrolls) */}
            <main className="w-full min-w-0 overflow-x-hidden flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:w-[929px] xl:gap-[33px] xl:flex-shrink-0">
              <HeroSection />
              <HowWeTestedSection />
              <ProductComparisonSection />
              <BestOverallSection />
              <RunnerUpSection />
              <ZZZTapeSection />
              <ConclusionSection />
              <AuthorBioSection />

              {/* Sidebar below main content on mobile (<xl) */}
              <div className="w-full my-4 sm:my-6 md:my-8 lg:my-10 ">
                <Sidebar />
              </div>

              <FooterSection />
            </main>

            {/* Desktop Sidebar (fixed) */}
            <div className="hidden xl:block xl:w-[26rem] xl:flex-shrink-0 fixed right-0 top-24">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

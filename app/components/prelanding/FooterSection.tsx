export default function FooterSection() {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row justify-start items-start gap-8 sm:gap-36">
        <div className="text-neutral-500 text-base font-normal font-['Poppins']">
          @2025 Verified Buyers Guide
        </div>
        <a href="#privacy" className="text-neutral-500 text-base font-normal font-['Poppins'] underline hover:text-neutral-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}



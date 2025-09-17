export default function FooterSection() {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-8">
        <div className="text-neutral-500 text-sm sm:text-base font-normal font-['Poppins']">
          @2025 Verified Buyers Guide
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <a 
            href="#privacy" 
            className="text-neutral-500 text-sm sm:text-base font-normal font-['Poppins'] hover:text-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
          >
            Privacy Policy
          </a>
          
        </div>
      </div>
    </footer>
  );
}



import Image from 'next/image';
import PrimaryButton from '../ui/buttons/PrimaryButton';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              <Image 
                src="/assets/images/verified.svg" 
                alt="Verified" 
                width={16} 
                height={16} 
                className="mr-2" 
              />
              Doctor Recommended
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Stop <span className="text-red-600">Mouth Breathing</span> 
              <br />Start <span className="text-green-600">Better Sleep</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Dr. RestRight Mouth Tape promotes healthy nasal breathing while you sleep. 
              Wake up refreshed, reduce snoring, and improve your sleep quality naturally.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image 
                  src="/assets/images/verified.svg" 
                  alt="Check" 
                  width={20} 
                  height={20} 
                />
                <span className="text-gray-700">Promotes deeper, more restful sleep</span>
              </div>
              <div className="flex items-center space-x-3">
                <Image 
                  src="/assets/images/verified.svg" 
                  alt="Check" 
                  width={20} 
                  height={20} 
                />
                <span className="text-gray-700">Reduces snoring and mouth breathing</span>
              </div>
              <div className="flex items-center space-x-3">
                <Image 
                  src="/assets/images/verified.svg" 
                  alt="Check" 
                  width={20} 
                  height={20} 
                />
                <span className="text-gray-700">Comfortable, breathable material</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <PrimaryButton size="lg" className="shadow-lg">
                Try Risk-Free for 30 Days
              </PrimaryButton>
              <button className="px-8 py-4 text-lg border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                </div>
                <span className="ml-3">10,000+ Happy Customers</span>
              </div>
              <div>⭐⭐⭐⭐⭐ 4.8/5 Stars</div>
            </div>
          </div>
          
          {/* Right side - Product Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image 
                src="/assets/images/Dr-RR-leftside-product-image-1.svg"
                alt="Dr. RestRight Mouth Tape Package"
                width={400}
                height={500}
                className="w-full max-w-md mx-auto"
                priority
              />
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-blue-200 rounded-full blur-3xl opacity-30 -z-10 transform scale-150"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
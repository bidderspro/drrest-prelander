import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="w-full px-4 py-4 bg-white">
      <div className="max-w-xl mx-auto">
        <div className="section-card">
          <h1 className="text-xl font-bold text-[#333] leading-tight mb-2">
            2023's Best Mouth Tape For Better Sleep? My Tried The Top Dr. Only One Passed Every Test...
          </h1>
          
          <div className="flex items-center text-xs text-gray-500 mb-4">
            <span className="mr-1">By</span>
            <span className="font-medium mr-2">Sarah Johnson</span>
            <span>Last updated: Sept 12, 2023</span>
          </div>
          
          <div className="relative mb-4">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src="/images/hero-product.svg"
                alt="Person sleeping with mouth tape"
                fill
                style={{objectFit: 'cover'}}
                priority
                className="rounded-md"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-red-500 rounded-full opacity-70 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-2"></div>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 bg-white rounded p-1.5 shadow-md max-w-[80%]">
                <span className="text-xs font-medium">Having your mouth shut is the right nasal passage drainage...</span>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-gray-800 mb-4">
            "Having been troubled with a dry throat and right nasal passage drainage, which led to
            morning coughing, I decided to try RestRight strips. I was skeptical at first but they've made
            a huge difference to my sleep quality."
          </p>
          
          <p className="text-xs text-gray-800 mb-4">
            For those of us who struggle to get a good night's sleep, it can impact every aspect of our day.
            From fatigue and poor concentration to irritability and health problems, the effects are far-reaching.
            I've tried countless solutions over the years, but nothing seemed to work consistently...
          </p>
          
          <div className="bg-[#dbeafe] p-3 rounded-md mb-4">
            <button className="cta-button">
              CHECK AVAILABILITY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

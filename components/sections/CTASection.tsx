import PrimaryButton from '../ui/buttons/PrimaryButton';
import Image from 'next/image';

export default function CTASection() {
  return (
    <section id="cta" className="w-full py-16 md:py-28 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Image 
              src="/icons/guarantee-badge.svg" 
              alt="90-Day Money Back Guarantee" 
              width={120} 
              height={120}
              className="w-32 h-32 animate-pulse"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            Sleep Better or Your Money Back
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            Try Dr. RestRight risk-free with our 90-day satisfaction guarantee. 
            If you don't experience better sleep, we'll refund your purchase - no questions asked.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
            <PrimaryButton className="text-center px-14 py-6 text-xl font-semibold">
              Get Dr. RestRight Today
            </PrimaryButton>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-base text-gray-600">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">90-Day Money Back</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

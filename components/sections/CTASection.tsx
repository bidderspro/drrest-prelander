import Image from 'next/image';
import PrimaryButton from '../ui/buttons/PrimaryButton';

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-600 to-green-600 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Sleep?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands who've already discovered the life-changing benefits of 
            Dr. RestRight mouth tape. Better sleep is just one night away.
          </p>
        </div>
        
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6">What You Get:</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Image 
                    src="/assets/images/verified.svg" 
                    alt="Check" 
                    width={24} 
                    height={24} 
                    className="mr-4 filter brightness-0 invert" 
                  />
                  <span className="text-lg">30 premium mouth tape strips</span>
                </div>
                <div className="flex items-center">
                  <Image 
                    src="/assets/images/verified.svg" 
                    alt="Check" 
                    width={24} 
                    height={24} 
                    className="mr-4 filter brightness-0 invert" 
                  />
                  <span className="text-lg">Detailed usage instructions</span>
                </div>
                <div className="flex items-center">
                  <Image 
                    src="/assets/images/verified.svg" 
                    alt="Check" 
                    width={24} 
                    height={24} 
                    className="mr-4 filter brightness-0 invert" 
                  />
                  <span className="text-lg">Sleep improvement guide</span>
                </div>
                <div className="flex items-center">
                  <Image 
                    src="/assets/images/verified.svg" 
                    alt="Check" 
                    width={24} 
                    height={24} 
                    className="mr-4 filter brightness-0 invert" 
                  />
                  <span className="text-lg">30-day money-back guarantee</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-6 mb-6">
                <div className="text-sm text-blue-100 mb-2">Special Launch Price</div>
                <div className="text-5xl font-bold mb-2">$29.99</div>
                <div className="text-blue-100 line-through text-xl mb-4">$59.99</div>
                <div className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold">
                  Save 50% Today Only!
                </div>
              </div>
              
              <PrimaryButton className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold text-xl px-12 py-4 mb-4">
                Order Now - Risk Free
              </PrimaryButton>
              
              <p className="text-sm text-blue-100">
                Free shipping • 30-day guarantee • Secure checkout
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-blue-100">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3">
              <span className="text-green-900 text-sm">✓</span>
            </div>
            <span>10,000+ satisfied customers</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3">
              <span className="text-green-900 text-sm">✓</span>
            </div>
            <span>Doctor recommended</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3">
              <span className="text-green-900 text-sm">✓</span>
            </div>
            <span>Made in USA</span>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-blue-200 max-w-2xl mx-auto">
            * Results may vary. This product is not intended to diagnose, treat, cure, or prevent any disease. 
            Please consult your healthcare provider before use if you have any medical conditions.
          </p>
        </div>
      </div>
    </section>
  );
}
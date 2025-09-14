import Image from 'next/image';

const steps = [
  {
    number: '1',
    title: 'Clean & Prepare',
    description: 'Gently clean your lips and ensure they are dry before application.',
    icon: '🧼'
  },
  {
    number: '2',
    title: 'Apply Gently',
    description: 'Place the tape vertically over your lips, ensuring comfortable coverage.',
    icon: '📏'
  },
  {
    number: '3',
    title: 'Sleep Better',
    description: 'Enjoy deeper, more restful sleep with natural nasal breathing.',
    icon: '😴'
  },
  {
    number: '4',
    title: 'Wake Refreshed',
    description: 'Remove gently in the morning and feel the difference in your energy.',
    icon: '🌅'
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple to use, powerful results. Follow these easy steps to start your journey 
            to better sleep and improved breathing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Safe & Comfortable Design
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Image 
                    src="/assets/images/verified.svg" 
                    alt="Check" 
                    width={20} 
                    height={20} 
                    className="mr-3"
                  />
                  <span className="text-gray-700">Medical-grade adhesive</span>
                </div>
                <div className="flex items-center">
                  <Image 
                    src="/assets/images/verified.svg" 
                    alt="Check" 
                    width={20} 
                    height={20} 
                    className="mr-3"
                  />
                  <span className="text-gray-700">Breathable material</span>
                </div>
                <div className="flex items-center">
                  <Image 
                    src="/assets/images/verified.svg" 
                    alt="Check" 
                    width={20} 
                    height={20} 
                    className="mr-3"
                  />
                  <span className="text-gray-700">Easy removal without irritation</span>
                </div>
                <div className="flex items-center">
                  <Image 
                    src="/assets/images/verified.svg" 
                    alt="Check" 
                    width={20} 
                    height={20} 
                    className="mr-3"
                  />
                  <span className="text-gray-700">Hypoallergenic for sensitive skin</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="/assets/images/Dr-RR-mouth-tape-2.svg"
                alt="Mouth tape demonstration"
                width={300}
                height={200}
                className="w-full max-w-sm mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
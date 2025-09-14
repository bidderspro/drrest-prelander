import Image from 'next/image';

const benefits = [
  {
    icon: '😴',
    title: 'Better Sleep Quality',
    description: 'Experience deeper, more restful sleep by promoting natural nasal breathing throughout the night.'
  },
  {
    icon: '🔇',
    title: 'Reduce Snoring',
    description: 'Help eliminate snoring caused by mouth breathing, leading to quieter nights for you and your partner.'
  },
  {
    icon: '💨',
    title: 'Improved Breathing',
    description: 'Encourage healthy nasal breathing patterns that filter and humidify air more effectively.'
  },
  {
    icon: '⚡',
    title: 'More Energy',
    description: 'Wake up feeling refreshed and energized with better oxygen flow and improved sleep cycles.'
  },
  {
    icon: '🧘',
    title: 'Stress Reduction',
    description: 'Nasal breathing activates the parasympathetic nervous system, promoting relaxation and calm.'
  },
  {
    icon: '💪',
    title: 'Athletic Performance',
    description: 'Improved breathing efficiency can enhance your daytime energy and physical performance.'
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Dr. RestRight Mouth Tape?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your sleep and health with our scientifically-designed mouth tape. 
            Experience the benefits that thousands of customers already enjoy every night.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-medium">
            <Image 
              src="/assets/images/verified.svg" 
              alt="Verified" 
              width={24} 
              height={24} 
              className="mr-3" 
            />
            Backed by Sleep Science Research
          </div>
        </div>
      </div>
    </section>
  );
}
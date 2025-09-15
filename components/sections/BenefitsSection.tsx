import Image from 'next/image';

interface BenefitProps {
  icon: string;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
        <Image src={icon} alt={title} width={32} height={32} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-secondary">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function BenefitsSection() {
  const benefits = [
    {
      icon: '/icons/clock.svg',
      title: 'Fall Asleep Faster',
      description: 'Reduce the time it takes to fall asleep by up to 55% with our clinically proven formula.'
    },
    {
      icon: '/icons/moon.svg',
      title: 'Stay Asleep Longer',
      description: 'Experience deeper, uninterrupted sleep cycles without waking up throughout the night.'
    },
    {
      icon: '/icons/energy.svg',
      title: 'Wake Up Refreshed',
      description: 'Feel energized and ready for the day with no grogginess or sleep inertia.'
    },
    {
      icon: '/icons/brain.svg',
      title: 'Improve Mental Clarity',
      description: 'Enhance focus, memory and cognitive function with quality sleep.'
    },
  ];

  return (
    <section id="benefits" className="w-full py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-lg mb-2 inline-block">KEY BENEFITS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            How Dr. RestRight Transforms Your Sleep
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our scientifically formulated solution addresses all aspects of sleep health
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}

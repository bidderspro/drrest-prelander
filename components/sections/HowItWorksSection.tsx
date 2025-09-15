import Image from 'next/image';

interface StepProps {
  number: number;
  title: string;
  description: string;
  image: string;
}

function Step({ number, title, description, image }: StepProps) {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center">
      <div className={`w-full md:w-1/2 ${number % 2 === 0 ? 'order-2' : 'order-2 md:order-1'} md:pr-6`}>
        <div className="flex items-center mb-6">
          <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
            {number}
          </div>
          <h3 className="text-2xl font-semibold text-secondary">{title}</h3>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
      </div>
      <div className={`w-full md:w-1/2 ${number % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}`}>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <Image 
            src={image} 
            alt={title} 
            width={500} 
            height={375} 
            className="w-full h-auto rounded" 
          />
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Take the Sleep Assessment",
      description: "Answer a few questions about your sleep habits and challenges to help us understand your unique needs.",
      image: "/images/step-1.svg"
    },
    {
      number: 2,
      title: "Receive Your Personalized Plan",
      description: "Get a customized sleep improvement plan tailored to your specific sleep profile and health goals.",
      image: "/images/step-2.svg"
    },
    {
      number: 3,
      title: "Follow the Dr. RestRight Protocol",
      description: "Use our scientifically formulated solution as directed in your personalized plan.",
      image: "/images/step-3.svg"
    },
    {
      number: 4,
      title: "Experience Better Sleep",
      description: "Enjoy improved sleep quality, fall asleep faster, and wake up feeling refreshed and energized.",
      image: "/images/step-4.svg"
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-16 md:py-28 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-lg mb-2 inline-block">THE PROCESS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            How Dr. RestRight Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple 4-step process to transform your sleep
          </p>
        </div>
        
        <div className="space-y-24">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

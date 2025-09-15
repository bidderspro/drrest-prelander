import Image from 'next/image';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image: string;
  rating: number;
}

function TestimonialCard({ quote, name, title, image, rating }: TestimonialProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="flex mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg 
            key={i} 
            className={`w-6 h-6 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-600 mb-8 italic text-lg leading-relaxed">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-primary">
          <Image src={image} alt={name} width={56} height={56} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-semibold text-secondary text-lg">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "After years of struggling with insomnia, Dr. RestRight has completely changed my life. I'm finally getting 8 hours of quality sleep and wake up feeling refreshed every morning!",
      name: "Sarah Johnson",
      title: "Verified Customer",
      image: "/images/testimonial-1.svg",
      rating: 5
    },
    {
      quote: "I was skeptical at first, but after just one week I noticed a huge difference in my sleep quality and daytime energy levels. My productivity has doubled!",
      name: "Michael Chen",
      title: "Verified Customer",
      image: "/images/testimonial-2.svg",
      rating: 5
    },
    {
      quote: "As someone who travels frequently for work, Dr. RestRight has been a game-changer for managing jet lag and sleep disruptions. I recommend it to all my colleagues.",
      name: "Jennifer Martinez",
      title: "Verified Customer",
      image: "/images/testimonial-3.svg",
      rating: 4
    },
  ];

  return (
    <section id="testimonials" className="w-full py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-lg mb-2 inline-block">SUCCESS STORIES</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thousands of people have transformed their sleep with Dr. RestRight
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    age: '32',
    location: 'California',
    rating: 5,
    text: "I've been using Dr. RestRight mouth tape for 3 months and my sleep quality has dramatically improved. My husband says I don't snore anymore!",
    image: '/assets/images/profile-image.svg'
  },
  {
    name: 'Michael Chen',
    age: '45',
    location: 'New York',
    rating: 5,
    text: "As a dentist, I was skeptical at first. But after trying it myself, I now recommend Dr. RestRight to all my patients who struggle with mouth breathing.",
    image: '/assets/images/profile-image.svg'
  },
  {
    name: 'Lisa Rodriguez',
    age: '28',
    location: 'Texas',
    rating: 5,
    text: "Game changer! I wake up feeling so much more refreshed. The tape is comfortable and doesn't leave any residue. Highly recommend!",
    image: '/assets/images/profile-image.svg'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their sleep 
            with Dr. RestRight mouth tape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Image 
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.age} • {testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="mt-4 flex items-center text-sm text-green-600">
                <Image 
                  src="/assets/images/verified.svg" 
                  alt="Verified" 
                  width={16} 
                  height={16} 
                  className="mr-2" 
                />
                Verified Purchase
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-green-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-green-100">Sleep Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30-Day</div>
              <div className="text-green-100">Money Back Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
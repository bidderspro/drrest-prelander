import React from 'react';
import Image from 'next/image';

export default function TestimonialsWithNumberedSections() {
  return (
    <section className="w-full px-4 py-4 bg-white">
      <div className="max-w-xl mx-auto">
        {/* First Testimonial Section */}
        <div className="section-card">
          <div className="bg-[#dcfce7] p-3 rounded-md mb-4">
            <h3 className="font-bold text-xs mb-3">1. RestRight Mouth Tape: The only tape combining real comfort with proven results</h3>
            
            <div className="mb-3">
              <Image
                src="/images/testimonial-1.svg"
                alt="Testimonial photos"
                width={400}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>
            
            <p className="text-[11px] italic text-gray-700 mb-3">
              "I've struggled with snoring for years, and my partner was at her wit's end. 
              RestRight tapes were our last resort before considering separate bedrooms. 
              After just one week, she says my snoring has reduced by at least 80%."
            </p>
            
            <p className="text-[11px] text-gray-700 mb-3">
              - Michael T., 47, verified purchase
            </p>
            
            <button className="cta-button">
              CLAIM MY DISCOUNT
            </button>
          </div>
          
          {/* Numbered Section 2 */}
          <div className="mb-5">
            <div className="flex items-start mb-2">
              <div className="bg-[#22c55e] text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                2
              </div>
              <h3 className="font-bold text-xs">
                Breathe right! RNA Tape Strips - comfortable on the skin + can't be bothered by movement
              </h3>
            </div>
            
            <p className="text-[11px] text-gray-800 mb-3 leading-snug">
              One of the most common complaints about mouth tapes is that they either feel restrictive or 
              they fall off during the night. RestRight solved both problems with their unique design that allows 
              for proper airflow through the nose while maintaining a secure but gentle adhesive...
            </p>
            
            <div className="text-xs font-medium text-[#22c55e] mb-2">
              Key findings from our testing:
            </div>
            
            <ul className="text-[11px] space-y-2 mb-3">
              <li className="highlight-bullet">
                <svg className="w-3 h-3 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Specially designed adhesive that's strong enough to stay in place but gentle on sensitive skin</span>
              </li>
              <li className="highlight-bullet">
                <svg className="w-3 h-3 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Works for all sleeping positions - even restless sleepers reported the tape staying in place all night</span>
              </li>
            </ul>
            
            <button className="text-xs bg-[#22c55e] text-white px-3 py-1 rounded-full">
              Learn More
            </button>
          </div>
          
          {/* Numbered Section 3 */}
          <div className="mb-5">
            <div className="flex items-start mb-2">
              <div className="bg-[#22c55e] text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                3
              </div>
              <h3 className="font-bold text-xs">
                Easy-to-use design helps, but at the cost of comfort and skin health
              </h3>
            </div>
            
            <p className="text-[11px] text-gray-800 mb-3 leading-snug">
              Comfort is crucial when it comes to any sleep aid. A product may be effective, but if it's 
              uncomfortable, you simply won't use it consistently. RestRight has managed to create a mouth tape 
              that not only stays in place but feels almost unnoticeable after a few minutes...
            </p>
            
            <div className="text-xs font-medium text-[#22c55e] mb-2">
              Benefits we confirmed:
            </div>
            
            <ul className="text-[11px] space-y-2 mb-3">
              <li className="highlight-bullet">
                <svg className="w-3 h-3 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Hypoallergenic medical-grade adhesive that doesn't cause irritation or leave residue</span>
              </li>
              <li className="highlight-bullet">
                <svg className="w-3 h-3 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Breathable material that prevents moisture buildup around the mouth</span>
              </li>
            </ul>
            
            <button className="cta-button mb-4">
              CLAIM 50% DISCOUNT
            </button>
          </div>
          
          {/* Real User Reviews Section */}
          <div className="mb-5">
            <div className="w-full aspect-video relative rounded-md overflow-hidden mb-3">
              <Image
                src="/images/testimonial-1.svg"
                alt="Real user photos"
                fill
                style={{objectFit: 'cover'}}
                className="rounded-md"
              />
            </div>
            
            <p className="text-[11px] italic text-gray-700 mb-3">
              "We were skeptical at first, but my husband's snoring was affecting both our sleep quality.
              After using RestRight, there was a noticeable difference from the first night. Now we both
              wake up feeling refreshed."
            </p>
            
            <p className="text-[11px] text-gray-700 mb-3">
              - Jennifer & Robert, verified customers
            </p>
          </div>
          
          {/* Conclusion Section */}
          <div className="bg-[#dcfce7] p-3 rounded-md">
            <h3 className="font-bold text-center text-sm mb-3">Conclusion</h3>
            
            <div className="flex items-center justify-center mb-3">
              <Image
                src="/icons/guarantee-badge.svg"
                alt="90-Day Guarantee"
                width={60}
                height={60}
                className="h-auto"
              />
            </div>
            
            <p className="text-[11px] text-gray-800 mb-3 leading-snug">
              After extensive testing of the top 10 mouth tapes on the market, RestRight clearly stands out 
              as the superior choice. Its combination of comfort, effectiveness, and quality materials makes 
              it our top recommendation for anyone looking to improve their sleep quality through nasal breathing.
            </p>
            
            <ul className="text-[11px] space-y-2 mb-3">
              <li className="highlight-bullet">
                <svg className="w-3 h-3 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>90-day money-back guarantee</span>
              </li>
              <li className="highlight-bullet">
                <svg className="w-3 h-3 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Noticeable improvement in sleep quality from first use</span>
              </li>
              <li className="highlight-bullet">
                <svg className="w-3 h-3 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Currently offering a 50% discount for new customers</span>
              </li>
            </ul>
            
            <button className="cta-button">
              GET 50% OFF TODAY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

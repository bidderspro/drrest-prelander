import React from 'react';
import Image from 'next/image';

export default function ResultsSection() {
  return (
    <section className="w-full px-4 py-4 bg-white">
      <div className="max-w-xl mx-auto">
        <div className="section-card">
          <h2 className="section-title">The Results: Our Top 3 Picks</h2>
          
          {/* #1 Best Overall */}
          <div className="mb-5">
            <div className="bg-[#22c55e] text-white p-2 rounded-t-md">
              <div className="flex items-center text-sm">
                <span className="font-bold mr-2">#1 Best Overall:</span>
                <span>RestRight Mouth Tape</span>
              </div>
            </div>
            
            <div className="product-card flex flex-col">
              <div className="w-full flex justify-center mb-3">
                <Image
                  src="/images/hero-product.svg"
                  alt="RestRight Mouth Tape"
                  width={120}
                  height={120}
                  className="h-auto"
                />
              </div>
              
              <div className="w-full">
                <div className="font-medium text-xs mb-2">Highlights</div>
                <ul className="text-[11px] space-y-1 mb-3">
                  <li>• Stays on all night without irritating skin</li>
                  <li>• Comfortable and easy to breathe with</li>
                  <li>• Noticeable improvement in sleep quality from first use</li>
                  <li>• Hypoallergenic medical-grade adhesive</li>
                </ul>
                
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] ml-1">(4.9/5)</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-base font-bold">$29.95</div>
                  <button className="bg-[#2563eb] text-white text-xs font-medium px-3 py-1.5 rounded">
                    CHECK AVAILABILITY
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* #2 Runner Up */}
          <div className="mb-5">
            <div className="bg-gray-600 text-white p-2 rounded-t-md">
              <div className="flex items-center text-sm">
                <span className="font-bold mr-2">#2 Runner Up:</span>
                <span>SleepRight Strips</span>
              </div>
            </div>
            
            <div className="product-card flex flex-col">
              <div className="w-full flex justify-center mb-3">
                <Image
                  src="/images/hero-product.svg"
                  alt="SleepRight Strips"
                  width={100}
                  height={100}
                  className="h-auto"
                />
              </div>
              
              <div className="w-full">
                <ul className="text-[11px] space-y-1 mb-3">
                  <li>• Good adhesion but can leave residue</li>
                  <li>• Comfortable for side sleepers</li>
                </ul>
                
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[1, 2, 3, 4].map((star) => (
                      <svg key={star} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="w-3 h-3 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="text-[10px] ml-1">(4.1/5)</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-base font-bold">$34.99</div>
                  <button className="bg-[#2563eb] text-white text-xs font-medium px-3 py-1.5 rounded">
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* #3 Third Place */}
          <div className="mb-5">
            <div className="bg-gray-600 text-white p-2 rounded-t-md">
              <div className="flex items-center text-sm">
                <span className="font-bold mr-2">#3 Third Place:</span>
                <span>ZzzTape</span>
              </div>
            </div>
            
            <div className="product-card flex flex-col">
              <div className="w-full flex justify-center mb-3">
                <Image
                  src="/images/hero-product.svg"
                  alt="ZzzTape"
                  width={100}
                  height={100}
                  className="h-auto"
                />
              </div>
              
              <div className="w-full">
                <ul className="text-[11px] space-y-1 mb-3">
                  <li>• Economical option but adhesive is weak</li>
                  <li>• May need to be replaced during the night</li>
                </ul>
                
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[1, 2, 3].map((star) => (
                      <svg key={star} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    {[1, 2].map((star) => (
                      <svg key={star} className="w-3 h-3 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] ml-1">(3.2/5)</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-base font-bold">$19.99</div>
                  <button className="bg-[#2563eb] text-white text-xs font-medium px-3 py-1.5 rounded">
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#dcfce7] p-3 rounded-md mb-4">
            <h3 className="font-bold mb-2 text-xs">1. RestRight Mouth Tape: The Consistent Winner with Proven Results</h3>
            <p className="text-[11px] text-gray-800 mb-4 leading-snug">
              After rigorous testing with consistent results, RestRight stood out from the competition in every category we tested. What made it truly special was not just the comfort and adhesion, but the noticeable difference in how I felt the next morning...
            </p>
            <button className="cta-button">
              GET 50% OFF TODAY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import productDrRR from "@images/Dr-RR-leftside-product-image-1.svg";

export default function ConclusionSection() {
  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <h2 className="text-zinc-800 text-2xl sm:text-3xl font-semibold font-['Poppins'] leading-[48px]">
          Conclusion
        </h2>

        {/* Mobile card – improved layout */}
        <div className="lg:hidden">
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-md" role="group" aria-label="Best Overall Mouth Tape">
            {/* Custom background shape with shadow */}
            <div className="absolute inset-0">
              <svg width="100%" height="100%" viewBox="0 0 909 391" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_101_529)">
                  <path d="M865 20C878.255 20 889 30.7452 889 44V347C889 360.255 878.255 371 865 371H44C30.7452 371 20 360.255 20 347V125.627C20 114.58 31.9527 107 43 107V107H278C307.823 107 332 82.8234 332 53C332 52.0233 331.974 51.0527 331.923 50.0887C331.217 36.8145 340.047 20 353.34 20H865Z" fill="white"/>
                </g>
                <defs>
                  <filter id="filter0_d_101_529" x="0" y="0" width="909" height="391" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.784314 0 0 0 0 0.560784 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_529"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_529" result="shape"/>
                  </filter>
                </defs>
              </svg>
            </div>
            
            {/* Top Pick Badge */}
            <div className="absolute top-0 left-0 z-10">
              <div className="flex px-4 py-2 justify-center items-center gap-2 rounded-br-2xl bg-[#00C88F]">
                <span className="text-white text-xs sm:text-sm font-semibold font-['Poppins'] whitespace-nowrap">
                  Best Overall Mouth Tape
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-5 pt-10 pb-2 p-6 relative z-10">
              <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                <Image
                  src={productDrRR}
                  alt="Dr. RestRight Mouth Tape"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain"
                  sizes="(max-width: 640px) 128px, 160px"
                  priority
                />
              </div>

              <div className="w-full flex flex-col gap-4">
                <div className="flex items-center gap-2 justify-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="#FACC15" aria-hidden="true">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-neutral-800 text-xs font-medium font-['Poppins']">4.9 Ratings</span>
                </div>

                <div className="text-center">
                  <h3 className="text-zinc-800 text-sm sm:text-base font-bold font-['Poppins'] mb-2">
                    Dr. RestRight Mouth Tape
                  </h3>
                  <p className="text-zinc-800 text-xs sm:text-sm font-normal font-['Poppins'] leading-relaxed">
                    Dr. RestRight isn't just another sleep tape — it's the only one proven to silence snoring, stop dry mouth, and still let you breathe easy if congestion strikes. That balance of comfort, safety, and doctor-formulated design is why it outperformed every other brand we tested.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-4 pt-3">
                  <button 
                    type="button" 
                    className="w-full sm:w-auto sm:flex-1 h-10 px-4 bg-blue-700 rounded-xl text-white text-xs sm:text-sm font-medium font-['Poppins'] whitespace-nowrap hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Check availability
                  </button>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-800 text-sm sm:text-base font-bold font-['Poppins']">$23.99</span>
                    <span className="text-zinc-800 text-xs font-medium font-['Poppins'] line-through">$29.99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop/large screens card – improved layout */}
        <div className="hidden lg:block">
          <div className="relative bg-white rounded-2xl overflow-hidden">
            {/* Custom background shape with shadow */}
            <div className="absolute inset-0">
              <svg width="100%" height="100%" viewBox="0 0 909 391" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_101_529)">
                  <path d="M865 20C878.255 20 889 30.7452 889 44V347C889 360.255 878.255 371 865 371H44C30.7452 371 20 360.255 20 347V125.627C20 114.58 31.9527 107 43 107V107H278C307.823 107 332 82.8234 332 53C332 52.0233 331.974 51.0527 331.923 50.0887C331.217 36.8145 340.047 20 353.34 20H865Z" fill="white"/>
                </g>
                <defs>
                  <filter id="filter0_d_101_529" x="0" y="0" width="909" height="391" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.784314 0 0 0 0 0.560784 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_529"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_529" result="shape"/>
                  </filter>
                </defs>
              </svg>
            </div>
            
            <div className="flex relative z-10">
              {/* Left side with badge */}
              <div className="relative">
                <div className="absolute top-6 left-6 z-10">
                  <div className="px-6 py-3 bg-emerald-500 rounded-[32px] inline-flex justify-center items-center">
                    <span className="text-white text-base font-semibold font-['Poppins']">
                      Best Overall Mouth Tape
                    </span>
                  </div>
                </div>
                
                <div className="pt-20 pb-8 px-8 flex items-center justify-center">
                  <div className="w-48 h-48 flex items-center justify-center">
                    <Image
                      src={productDrRR}
                      alt="Dr. RestRight Mouth Tape"
                      width={195}
                      height={195}
                      className="w-full h-full object-contain"
                      sizes="192px"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Right side with content */}
              <div className="flex-1 p-8">
                <div className="flex flex-col h-full justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5" viewBox="0 0 24 24" fill="#FACC15" aria-hidden="true">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-zinc-800 text-sm font-medium font-['Poppins']">4.9 Ratings</span>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold font-['Poppins'] text-zinc-800">
                        Dr. RestRight Mouth Tape
                      </h3>
                      <p className="text-zinc-800 text-base font-normal font-['Poppins'] leading-relaxed">
                        Dr. RestRight isn't just another sleep tape — it's
                        the only one proven to silence snoring, stop dry
                        mouth, and still let you breathe easy if
                        congestion strikes. That balance of comfort,
                        safety, and doctor-formulated design is why it
                        outperformed every other brand we tested — and why
                        men and women over 45 choose Dr. RestRight for
                        real, reliable rest.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button 
                      type="button" 
                      className="w-48 h-12 px-4 bg-blue-700 rounded-xl text-white text-base font-medium font-['Poppins'] hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Check availability
                    </button>
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-800 text-lg font-bold font-['Poppins']">
                        $23.99
                      </span>
                      <span className="text-zinc-800 text-base font-medium font-['Poppins'] line-through">
                        $29.99
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-zinc-800 text-base sm:text-lg font-normal font-['Poppins'] leading-relaxed space-y-4">
          <p>
            After weeks of testing the top brands, Dr. RestRight emerged
            as the only tape that truly delivered on every promise.
            Where others forced a trade-off — comfort without staying
            power, or strength that punished the skin — Dr. RestRight
            offered both in one design. Its doctor-formulated adhesive
            kept a secure seal all night, yet lifted cleanly in the
            morning without redness or residue. For adults over 45, who
            often struggle with sensitive or aging skin, that balance
            made all the difference.
          </p>

          <p>
            Even more, it's the world's first mouth tape infused with
            calming aromatherapy features, lavender and
            chamomile-lavender options that helped testers relax before
            bed and drift into deeper rest. What began as a "tape test"
            quickly became a nightly ritual our testers looked forward
            to.
          </p>

          <p>
            REM Tape Strips offered softness and ease of use, but its
            weak adhesion made results inconsistent. A tape that doesn't
            stay on through the night simply can't solve snoring or
            mouth breathing. ZZZ Tape, on the other hand, proved
            unbreakable in its hold — but at the cost of comfort.
            Testers reported irritation, stiffness, and a harsher feel,
            making it difficult to use night after night on sensitive or
            aging skin.
          </p>

          <p>
            In the end, Dr. RestRight didn't just outperform the
            competition, it redefined what mouth taping could be. For
            men and women 45+ who are serious about sleeping better,
            breathing easier, and finally moving beyond CPAP machines or
            restless nights, there is only one choice that checks every
            box: Dr. RestRight.
          </p>
        </div>
      </div>
    </section>
  );
}

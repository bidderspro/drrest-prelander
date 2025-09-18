import Image from 'next/image';
import ZZZTAPE from "@images/zzz-tape-3.svg";

export default function ZZZTapeSection() {
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-4 sm:space-y-5 md:space-y-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold font-['Poppins'] leading-tight sm:leading-snug md:leading-[48px] text-zinc-800">
          3. ZZZ Tape
          <br />
          <span className="text-lg sm:text-xl md:text-2xl">
            Locks down tight, but at the cost of comfort and skin health
          </span>
        </h2>

        <div className="relative overflow-hidden rounded-2xl">
          {/* Custom background shape with shadow */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Desktop/tablet background */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 909 391"
              preserveAspectRatio="none"
              fill="none"
              className="hidden md:block"
            >
              <g filter="url(#filter0_d_101_529)">
                <path
                  d="M865 20C878.255 20 889 30.7452 889 44V347C889 360.255 878.255 371 865 371H44C30.7452 371 20 360.255 20 347V125.627C20 114.58 31.9527 107 43 107V107H278C307.823 107 332 82.8234 332 53C332 52.0233 331.974 51.0527 331.923 50.0887C331.217 36.8145 340.047 20 353.34 20H865Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_101_529"
                  x="0"
                  y="0"
                  width="909"
                  height="391"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.803922 0 0 0 0 0.498039 0 0 0 0 0.196078 0 0 0 0.4 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_101_529"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_101_529"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            {/* Mobile background */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="100%" 
              height="100%" 
              viewBox="0 0 370 580" 
              preserveAspectRatio="none" 
              fill="none"
              className="block md:hidden"
            >
              <g filter="url(#filter0_d_101_235)">
                <path d="M344 10C352.837 10 360 17.1634 360 26V554C360 562.837 352.837 570 344 570H26C17.1634 570 10 562.837 10 554V82.473C10 75.0299 18.5569 70 26 70H157C174.673 70 189 55.6731 189 38V27C189 19.2088 194.246 10 202.037 10H344Z" fill="white"/>
              </g>
              <defs>
                <filter id="filter0_d_101_235" x="0" y="0" width="370" height="580" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="5"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.803922 0 0 0 0 0.498039 0 0 0 0 0.196078 0 0 0 0.4 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_235"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_235" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>

          {/* Badge */}
          <div className="absolute top-2 xs:top-3 sm:top-4 md:top-5 lg:top-6 left-2 xs:left-3 sm:left-4 md:left-5 lg:left-6 z-10">
            <div className="flex justify-center items-center w-[140px] xs:w-[160px] sm:w-[180px] md:w-[220px] lg:w-[270px] h-[36px] xs:h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 py-1 xs:py-1.5 sm:py-2 md:py-2.5 lg:py-3 bg-amber-600 rounded-[20px] xs:rounded-[24px] sm:rounded-[28px] md:rounded-[32px]">
              <span className="text-white text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-semibold font-['Poppins'] whitespace-nowrap">
                Another Good Option
              </span>
            </div>
          </div>

          <div className="relative z-10 p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 pt-12 xs:pt-14 sm:pt-16 md:pt-18 lg:pt-20">
            <div className="w-auto flex flex-col lg:flex-row justify-center items-center gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
              {/* Image - now first in mobile view */}
              <div className="flex-shrink-0 self-center lg:self-center mt-0 mb-4 xs:mb-5 sm:mb-6 lg:mb-0 order-first lg:order-none">
                <Image
                  src={ZZZTAPE}
                  alt="ZZZ Tape"
                  width={195}
                  height={195}
                  className="object-contain w-28 h-28 xs:w-30 xs:h-30 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48 mx-auto lg:mx-0"
                  sizes="(max-width: 480px) 7rem, (max-width: 640px) 8rem, (max-width: 768px) 9rem, (max-width: 1024px) 10rem, (max-width: 1280px) 11rem, 12rem"
                />
              </div>

              <div className="flex-1 space-y-3 xs:space-y-4 sm:space-y-5 lg:space-y-6 max-w-full sm:max-w-[400px] md:max-w-[450px]">
                <div className="space-y-2 xs:space-y-3 sm:space-y-4 lg:space-y-5">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold font-['Poppins'] text-zinc-800">
                    ZZZ Tape
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base md:text-lg font-normal font-['Poppins'] text-zinc-800 leading-relaxed">
                    ZZZ Tape&apos;s hold is undeniably strong — but that strength comes at a cost. The tape feels stiff, abrasive, 
                    and often leaves skin red or irritated by morning. For adults over 45 with more delicate skin, what starts 
                    as a solution quickly feels more punishing than helpful.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full">
                  <button 
                    type="button"
                    className="w-full sm:w-auto md:w-40 lg:w-44 h-9 xs:h-10 sm:h-11 md:h-12 lg:h-14 px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 bg-blue-700 rounded-lg sm:rounded-xl flex justify-center items-center text-white text-xs sm:text-sm md:text-base font-medium font-['Poppins'] hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label="Check product availability"
                  >
                    <span className="whitespace-nowrap">Check availability</span>
                  </button>
                  <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
                    <span className="text-zinc-800 text-base xs:text-lg sm:text-xl md:text-2xl font-bold font-['Poppins']">
                      $30.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-zinc-800 text-xs xs:text-sm sm:text-base md:text-lg font-normal font-['Poppins'] space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 mt-4 xs:mt-5 sm:mt-6 md:mt-8 lg:mt-10">
        <p>
          ZZZ Tape deserves credit as one of the early pioneers in mouth taping. It helped introduce the idea to the mainstream 
          and built its reputation on one defining feature: an adhesive so strong it almost never comes loose. For sleepers who&apos;ve 
          struggled with tapes peeling off, that reliability can feel reassuring.
        </p>
        <p>
          But strength alone doesn&apos;t tell the whole story. Our testers found that while the seal was dependable, the overall 
          experience wasn&apos;t always as comfortable as newer designs. The adhesive, though effective, could feel aggressive — 
          leaving some users with redness, residue, or a sense that the tape was simply &quot;too much&quot; for nightly use, especially 
          on sensitive or aging skin.
        </p>
        <p>
          A few long-time customers also mentioned that recent batches felt slightly stiffer compared to earlier versions, 
          suggesting the formula may have shifted as the brand scaled. None of this makes ZZZ Tape a bad product — it remains 
          a solid choice for those who prioritize sticking power above all else.
        </p>
        <p>
          Where ZZZ Tape falls short, however, is in offering balance. It locks down tight, but without the gentleness or 
          calming touches that make mouth taping something you actually look forward to. It will definitely keep your mouth 
          shut but with less comfort.
        </p>
      </div>
    </section>
  );
}

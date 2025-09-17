import Image from 'next/image';
import ZZZTAPE from "@images/zzz-tape-3.svg";

export default function ZZZTapeSection() {
  return (
    <section className="py-8 lg:py-12">
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold font-['Poppins'] leading-[48px] text-zinc-800">
          3. ZZZ Tape
          <br />
          <span className="text-xl sm:text-2xl">
            Locks down tight, but at the cost of comfort and skin health
          </span>
        </h2>

        <div className="rounded-2xl relative overflow-hidden sm:h-[600px] md:h-[450px] lg:h-[400px]">
          {/* Custom background shape with shadow */}
          <div className="absolute inset-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:block"
              width="100%"
              viewBox="0 0 909 391"
              preserveAspectRatio="none"
              fill="none"
            >
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="block md:hidden"
              width="100%"
              height="100%"
              viewBox="0 0 370 650"
              preserveAspectRatio="none"
              fill="none"
            >
              <g filter="url(#filter0_d_101_235)">
                <path d="M344 10C352.837 10 360 17.1634 360 26V624C360 632.837 352.837 640 344 640H26C17.1634 640 10 632.837 10 624V82.473C10 75.0299 18.5569 70 26 70V70H157C174.673 70 189 55.6731 189 38V27V27C189 19.2088 194.246 10 202.037 10H344Z" fill="white"/>
              </g>
              <defs>
                <filter id="filter0_d_101_235" x="0" y="0" width="370" height="650" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
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
          <div className="absolute top-6 left-6 z-10">
            <div className="px-6 py-3 bg-amber-600 rounded-[32px] inline-flex justify-center items-center">
              <span className="text-white text-base font-semibold font-['Poppins']">
                Another Good Option
              </span>
            </div>
          </div>

          <div className="relative z-10 p-6 lg:p-14 pt-20 lg:pt-20">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 items-start">
              <div className="flex-shrink-0">
                <Image
                  src={ZZZTAPE}
                  alt="ZZZ Tape"
                  width={195}
                  height={195}
                  className="w-48 h-48 mx-auto lg:mx-0 object-contain"
                  sizes="(max-width: 1024px) 12rem, 195px"
                />
              </div>

              <div className="flex-1 space-y-6 max-w-[482px]">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold font-['Poppins'] text-zinc-800">
                    ZZZ Tape
                  </h3>
                  <p className="text-base font-normal font-['Poppins'] text-zinc-800">
                    ZZZ Tape&apos;s hold is undeniably strong — but that strength comes at a cost. The tape feels stiff, abrasive, 
                    and often leaves skin red or irritated by morning. For adults over 45 with more delicate skin, what starts 
                    as a solution quickly feels more punishing than helpful.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 lg:gap-36">
                  <button 
                    type="button"
                    className="w-full sm:w-48 h-14 px-3 bg-blue-700 rounded-xl flex justify-center items-center text-white text-base font-medium font-['Poppins'] hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label="Check product availability"
                  >
                    Check availability
                  </button>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-800 text-xl font-bold font-['Poppins']">
                      $30.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="self-stretch text-zinc-800 text-base md:text-lg font-normal font-['Poppins'] space-y-4">
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

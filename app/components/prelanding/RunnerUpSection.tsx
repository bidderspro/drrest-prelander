import Image from 'next/image';
import REMTAPE from "@images/REM-Tape-Strips.svg";

export default function RunnerUpSection() {
  return (
    <section className="py-8 lg:py-12">
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold font-['Poppins'] leading-[48px] text-zinc-800">
          2. Runner-Up: REM Tape Strips <br className="hidden md:inline" />
          <span className="text-xl sm:text-2xl">
            Comfortable on the skin — but can&apos;t be trusted to stay on all night
          </span>
        </h2>

        <div className="bg-white rounded-2xl relative overflow-hidden">
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

          {/* Badge */}
          <div className="absolute top-6 left-6 z-10">
            <div className="px-6 py-3 bg-teal-300 rounded-[32px] inline-flex justify-center items-center">
              <span className="text-white text-base font-semibold font-['Poppins']">
                Runner Up
              </span>
            </div>
          </div>

          <div className="relative z-10 p-6 lg:p-14 pt-20 lg:pt-20">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 items-start">
              <div className="flex-shrink-0">
                <Image
                  src={REMTAPE}
                  alt="REM Tape Strips"
                  width={195}
                  height={195}
                  className="w-48 h-48 mx-auto lg:mx-0 object-contain"
                  sizes="(max-width: 1024px) 12rem, 195px"
                />
              </div>

              <div className="flex-1 space-y-6 max-w-[482px]">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold font-['Poppins'] text-zinc-800">
                    REM Tape Strips
                  </h3>
                  <p className="text-base font-normal font-['Poppins'] text-zinc-800">
                    REM Tape Strips is gentle and comfortable, which makes it appealing at first glance. 
                    But when tested overnight, its biggest weakness showed up fast: the seal simply doesn&apos;t last. 
                    For anyone serious about reducing snoring or mouth breathing, comfort without reliability makes it a risky choice.
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
                      $17.99
                    </span>
                    <span className="text-zinc-800 text-lg font-medium font-['Poppins'] line-through">
                      $25.99
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
          REM Tape Strips earned their spot as a comfortable, budget-friendly option — but not without compromises. 
          Testers appreciated the soft, lightweight feel and hypoallergenic material, which made them gentle on sensitive skin. 
          For first-timers nervous about irritation, REM seemed like a safe entry point.
        </p>
        <p>
          But when put to the all-night challenge, adhesion was their downfall. Several testers woke up to find the strips 
          curled or fallen off entirely, especially if they shifted positions or perspired lightly. For anyone hoping to stop 
          snoring or mouth breathing, this inconsistency made the results unreliable.
        </p>
        <p>
          Quality control also raised questions. A handful of users reported dye transfer onto pillows in cases of drooling — 
          a minor issue, but one that chipped away at trust in the brand&apos;s overall quality.
        </p>
        <p>
          In the end, REM Tape Strips delivered comfort but lacked consistency. They might work for newcomers or casual use, 
          but they fell short when it came to nightly reliability. For adults over 45 who need proven results every single night, 
          REM left too much to chance compared to our top pick.
        </p>
      </div>
    </section>
  );
}

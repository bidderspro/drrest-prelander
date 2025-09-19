/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import REMTAPE from "@images/REM-Tape-Strips.svg";

export default function RunnerUpSection() {
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 px-4 sm:px-6 md:px-8 lg:px-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold font-['Poppins'] leading-tight md:leading-[48px] text-zinc-800">
          2. Runner-Up: REM Tape Strips <br className="hidden md:inline" /> 
          <span className="text-lg sm:text-xl md:text-2xl">
            Comfortable on the skin — but can't be trusted to stay on all
            night
          </span>
        </h2>

        <div className="rounded-2xl relative overflow-hidden">
          {/* Custom background shape with shadow */}
          <div className="absolute inset-0">
            {/* Desktop background */}
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
                    values="0 0 0 0 0 0 0 0 0 0.784314 0 0 0 0 0.560784 0 0 0 0.25 0"
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
              viewBox="0 0 370 670" 
              preserveAspectRatio="none" 
              fill="none"
              className="block md:hidden"
            >
              <g filter="url(#filter0_d_101_181)">
                <path d="M344 10C352.837 10 360 17.1634 360 26V644C360 652.837 352.837 660 344 660H26C17.1634 660 10 652.837 10 644V83.8892C10 76.4461 18.5568 71.417 26 71.417V71.417H187C204.673 71.417 219 57.0899 219 39.417V24.7598V24.7598C219 17.774 223.752 10 230.738 10H344Z" fill="white"/>
              </g>
              <defs>
                <filter id="filter0_d_101_181" x="0" y="0" width="370" height="670" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="5"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.784314 0 0 0 0 0.560784 0 0 0 0.4 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_181"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_181" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>

          {/* Badge */}
          <div className="absolute top-1 left-2 xs:top-3 xs:left-3 sm:top-4 sm:left-4 md:top-6 md:left-2 lg:top-6 lg:left-2 xl:top-8 xl:left-2 2xl:top-10 2xl:left-0 z-10">
            <div className="flex justify-center items-center bg-[#5ECBE4] rounded-[32px] w-[190px] xs:w-[210px] sm:w-[230px] md:w-[250px] lg:w-[270px] xl:w-[270px] 2xl:w-[280px] h-8 xs:h-9 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-18 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-9 py-1 xs:py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3.5 2xl:py-4">
              <span className="text-white text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl font-semibold font-['Poppins'] whitespace-nowrap">
                Runner Up
              </span>
            </div>
          </div>

          <div className="relative z-10 p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-14 pt-14 xs:pt-16 sm:pt-18 md:pt-20 lg:pt-22 xl:pt-24">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-7 md:gap-8 lg:gap-12 xl:gap-16 items-center justify-between">
              <div className="flex-shrink-0 flex items-center justify-center mt-2 xs:mt-3 sm:mt-4 md:mt-5 lg:mt-6">
                <div className="flex items-end justify-center w-[100px] h-[100px] xs:w-[120px] xs:h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] xl:w-[190px] xl:h-[190px] mt-4 sm:mt-6 lg:mt-8 xl:mt-10">
                  <Image
                    src={REMTAPE}
                    alt="REM Tape Strips"
                    className="object-contain w-full h-full mx-auto top-2 justify-center lg:mx-0"
                    sizes="(max-width: 480px) 100px, (max-width: 640px) 120px, (max-width: 768px) 140px, (max-width: 1024px) 160px, (max-width: 1280px) 180px, 190px"
                    priority
                  />
                </div>
              </div>

              <div className="flex-1 space-y-3 xs:space-y-4 sm:space-y-5 lg:space-y-6 max-w-full xs:max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[482px] px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-['Poppins'] text-zinc-800">
                    REM Tape Strips
                  </h3>
                  <p className="w-full text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-normal font-['Poppins'] text-zinc-800 leading-relaxed">
                    REM Tape Strips is gentle and comfortable, which makes it
                    appealing at first glance. But when tested overnight, its
                    biggest weakness showed up fast: the seal simply
                    doesn't last. For anyone serious about reducing snoring
                    or mouth breathing, comfort without reliability makes it a
                    risky choice.
                  </p>
                </div>

                <div className="w-full flex flex-row justify-between items-center gap-2 xs:gap-3 sm:gap-4 md:gap-5">
                  <button
                    type="button"
                    className="w-full xs:w-32 sm:w-36 md:w-40 lg:w-48 h-8 xs:h-9 sm:h-10 md:h-12 lg:h-14 px-1 xs:px-2 sm:px-3 md:px-4 bg-[#2163C2] rounded-md xs:rounded-lg sm:rounded-xl flex justify-center items-center text-white hover:bg-[#1a50a0] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2163C2] focus:ring-offset-2"
                    aria-label="Check product availability"
                  >
                    <span className="text-white text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium font-['Poppins'] whitespace-nowrap">Check availability</span>
                  </button>
                  <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
                    <span className="text-zinc-800 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold font-['Poppins']">
                      $17.99
                    </span>
                    <span className="text-zinc-800 text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium font-['Poppins'] line-through">
                      $25.99
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6">
          <div className="text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-normal font-['Poppins'] text-zinc-800 space-y-2 xs:space-y-3 sm:space-y-4">
            <p className="leading-relaxed">
              REM Tape Strips earned their spot as a comfortable, budget-friendly
              option — but not without compromises. Testers appreciated the soft,
              lightweight feel and hypoallergenic material, which made them gentle
              on sensitive skin. For first-timers nervous about irritation, REM
              seemed like a safe entry point.
            </p>

            <p className="leading-relaxed">
              But when put to the all-night challenge, adhesion was their downfall.
              Several testers woke up to find the strips curled or fallen off
              entirely, especially if they shifted positions or perspired lightly.
              For anyone hoping to stop snoring or mouth breathing, this
              inconsistency made the results unreliable.
            </p>

            <p className="leading-relaxed">
              Quality control also raised questions. A handful of users reported dye
              transfer onto pillows in cases of drooling — a minor issue, but one
              that chipped away at trust in the brand's overall quality.
            </p>

            <p className="leading-relaxed">
              In the end, REM Tape Strips delivered comfort but lacked consistency.
              They might work for newcomers or casual use, but they fell short when
              it came to nightly reliability. For adults over 45 who need proven
              results every single night, REM left too much to chance compared to
              our top pick.
            </p>
          </div>

          <button
            type="button"
            className="w-full h-8 xs:h-9 sm:h-10 md:h-12 lg:h-14 px-3 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3 bg-[#2163C2] rounded-md xs:rounded-lg sm:rounded-xl flex justify-center items-center text-white text-xs xs:text-sm sm:text-base md:text-lg font-medium font-['Poppins'] hover:bg-[#1a50a0] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2163C2] focus:ring-offset-2"
            aria-label="Check product availability"
          >
            <span>Check availability</span>
          </button>
        </div>
      </div>
    </section>
  );
}

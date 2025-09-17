import Image from "next/image";
import REMTAPE from "@images/REM-Tape-Strips.svg";

export default function RunnerUpSection() {
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold font-['Poppins'] leading-tight md:leading-[48px] text-zinc-800">
          2. Runner-Up: REM Tape Strips <br className="hidden md:inline" /> 
          <span className="text-lg sm:text-xl md:text-2xl">
            Comfortable on the skin — but can&apos;t be trusted to stay on all
            night
          </span>
        </h2>

        <div className="rounded-2xl relative overflow-hidden min-h-[500px] sm:min-h-[450px] md:min-h-[400px]">
          {/* Custom background shape with shadow */}
          <div className="absolute inset-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:block"
              width="100%"
              height="100%"
              viewBox="0 0 909 391"
              preserveAspectRatio="none"
              fill="none"
            >
              <g filter="url(#filter0_d_101_578)">
                <path
                  d="M865 20C878.255 20 889 30.7452 889 44V347C889 360.255 878.255 371 865 371H44C30.7452 371 20 360.255 20 347V125.627C20 114.58 31.9527 107 43 107V107H232C261.823 107 286 82.8234 286 53C286 52.0233 285.974 51.0527 285.923 50.0887C285.217 36.8145 294.047 20 307.34 20H865Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_101_578"
                  x="0"
                  y="0"
                  width="909"
                  height="391"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="10"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.784314 0 0 0 0 0.560784 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_578"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_578" result="shape"/>
                </filter>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="block md:hidden"
              width="100%"
              height="100%"
              viewBox="0 0 370 580"
              preserveAspectRatio="none"
              fill="none"
            >
              <g filter="url(#filter0_d_101_235)">
                <path
                  d="M344 10C352.837 10 360 17.1634 360 26V554C360 562.837 352.837 570 344 570H26C17.1634 570 10 562.837 10 554V82.473C10 75.0299 18.5569 70 26 70V70H157C174.673 70 189 55.6731 189 38V27V27C189 19.2088 194.246 10 202.037 10H344Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_101_235"
                  x="0"
                  y="0"
                  width="370"
                  height="580"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
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
          <div className="absolute top-2 left-0 sm:top-0 sm:left-2 md:top-0 md:left- 2 lg:top-6 lg:left-0 z-10">
            <div className="flex justify-center items-center w-[165px] h-[45px] sm:w-[200px] sm:h-[55px] md:w-[224px] md:h-[65px] px-[23px] py-[13px] gap-[10px] rounded-[32px] bg-[#5ECBE4]">
              <span className="text-white text-xs sm:text-sm md:text-base font-semibold font-['Poppins'] whitespace-nowrap">
                Runner Up
              </span>
            </div>
          </div>

          <div className="relative z-10 p-4 sm:p-6 md:p-10 lg:p-14 pt-20 sm:pt-22 md:pt-24 lg:pt-24 overflow-y-auto h-full">
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-8 items-center lg:items-start">
              <div className="flex justify-center items-center mt-4 sm:mt-2">
                <Image
                  src={REMTAPE}
                  alt="REM Tape Strips"
                  width={195}
                  height={195}
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48 mx-auto lg:mx-0 object-contain mt-4 sm:mt-2 md:mt-3 lg:mt-4"
                  sizes="(max-width: 640px) 7rem, (max-width: 768px) 8rem, (max-width: 1024px) 9rem, 12rem"
                />
              </div>

              <div className="flex-1 space-y-3 sm:space-y-4 lg:space-y-5 sm:max-w-[380px] md:max-w-[420px] lg:max-w-[482px]">
                <div className="space-y-1 sm:space-y-2 md:space-y-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold font-['Poppins'] text-zinc-800">
                    REM Tape Strips
                  </h3>
                  <p className="w-full text-xs sm:text-sm md:text-base font-normal font-['Poppins'] text-zinc-800 leading-relaxed line-clamp-4 sm:line-clamp-none">
                    REM Tape Strips is gentle and comfortable, which makes it
                    appealing at first glance. But when tested overnight, its
                    biggest weakness showed up fast: the seal simply
                    doesn&apos;t last. For anyone serious about reducing snoring
                    or mouth breathing, comfort without reliability makes it a
                    risky choice.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 md:gap-8 lg:gap-36">
                  <button
                    type="button"
                    className="w-full sm:w-36 md:w-40 lg:w-48 h-10 sm:h-12 md:h-14 px-4 sm:px-5 md:px-6 bg-blue-700 rounded-lg sm:rounded-xl flex justify-center items-center text-white text-xs sm:text-sm md:text-base font-medium font-['Poppins'] hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label="Check product availability"
                  >
                    <span className="whitespace-nowrap">Check availability</span>
                  </button>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <span className="text-zinc-800 text-base sm:text-lg md:text-xl font-bold font-['Poppins']">
                      $17.99
                    </span>
                    <span className="text-zinc-800 text-xs sm:text-sm md:text-base font-medium font-['Poppins'] line-through">
                      $25.99
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch mt-6 sm:mt-8 md:mt-10 text-zinc-800 text-xs sm:text-sm md:text-base font-normal font-['Poppins'] space-y-3 sm:space-y-4">
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
          that chipped away at trust in the brand&apos;s overall quality.
        </p>
        <p className="leading-relaxed">
          In the end, REM Tape Strips delivered comfort but lacked consistency.
          They might work for newcomers or casual use, but they fell short when
          it came to nightly reliability. For adults over 45 who need proven
          results every single night, REM left too much to chance compared to
          our top pick.
        </p>
      </div>
    </section>
  );
}

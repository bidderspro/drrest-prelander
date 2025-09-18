import Image from "next/image";
import REMTAPE from "@images/REM-Tape-Strips.svg";

export default function RunnerUpSection() {
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold font-['Poppins'] leading-tight md:leading-[48px] text-zinc-800">
          2. Runner-Up: REM Tape Strips <br className="hidden md:inline" /> 
          <span className="text-lg sm:text-xl md:text-2xl">
            Comfortable on the skin — but can&apos;t be trusted to stay on all
            night
          </span>
        </h2>

        <div className="relative overflow-hidden rounded-2xl">
          {/* Custom background shape with shadow */}
          <div className="absolute inset-0 pointer-events-none">
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
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
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
                  colorInterpolationFilters="sRGB"
                >
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
          <div className="absolute top-1 left-1 xs:top-2 xs:left-2 sm:top-3 sm:left-4 md:top-4 md:left-5 lg:top-5 lg:left-6 xl:top-6 xl:left-8 2xl:top-8 2xl:left-10 z-10">
            <div className="flex justify-center items-center w-[140px] h-[36px] xs:w-[150px] xs:h-[40px] sm:w-[165px] sm:h-[45px] md:w-[200px] md:h-[50px] lg:w-[210px] lg:h-[55px] xl:w-[220px] xl:h-[60px] 2xl:w-[230px] 2xl:h-[65px] px-2 py-1 xs:px-3 xs:py-1.5 sm:px-[23px] sm:py-[13px] md:px-4 md:py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 2xl:px-7 2xl:py-3.5 gap-1 xs:gap-2 sm:gap-[10px] rounded-[32px] bg-[#5ECBE4]">
              <span className="text-white text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold font-['Poppins'] whitespace-nowrap">
                Runner Up
              </span>
            </div>
          </div>

          <div className="relative z-10 p-6 sm:p-6 md:p-8 lg:p-14 xl:p-14 2xl:p-14 pt-16 lg:pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr] items-center gap-6 sm:gap-8 lg:gap-20">
              <div className="flex-shrink-0 justify-self-center lg:justify-self-start">
                <Image
                  src={REMTAPE}
                  alt="REM Tape Strips"
                  width={195}
                  height={195}
                  className="object-contain w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-56 xl:h-56 2xl:w-60 2xl:h-60 mx-auto lg:mx-0"
                  sizes="(max-width: 640px) 8rem, (max-width: 768px) 10rem, (max-width: 1024px) 12rem, (max-width: 1280px) 14rem, (max-width: 1536px) 15rem, 16rem"
                  priority
                />
              </div>

              <div className="flex flex-col space-y-4 max-w-4xl lg:max-w-[520px] xl:max-w-[580px] 2xl:max-w-[640px]">
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold font-['Poppins'] text-zinc-800">
                    REM Tape Strips
                  </h3>
                  <p className="w-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-normal font-['Poppins'] text-zinc-800 leading-relaxed line-clamp-4 sm:line-clamp-none">
                    REM Tape Strips is gentle and comfortable, which makes it
                    appealing at first glance. But when tested overnight, its
                    biggest weakness showed up fast: the seal simply
                    doesn&apos;t last. For anyone serious about reducing snoring
                    or mouth breathing, comfort without reliability makes it a
                    risky choice.
                  </p>
                </div>

                <div className="flex flex-row sm:flex-row justify-between items-center sm:items-center gap-4 sm:gap-6 md:gap-8 lg:gap-36">
                  <button
                    type="button"
                    className="w-full md:w-40 lg:w-48 xl:w-52 2xl:w-56 h-10 sm:h-12 md:h-14 px-4 sm:px-2 md:px-6 bg-blue-700 rounded-lg sm:rounded-xl flex justify-center items-center text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium font-['Poppins'] hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label="Check product availability"
                  >
                    <span className="whitespace-nowrap">Check availability</span>
                  </button>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <span className="text-zinc-800 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold font-['Poppins']">
                      $17.99
                    </span>
                    <span className="text-zinc-800 text-xs sm:text-sm md:text-base lg:text-lg font-medium font-['Poppins'] line-through">
                      $25.99
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto self-stretch mt-6 sm:mt-8 md:mt-10 text-zinc-800 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-['Poppins'] space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 px-4 sm:px-6 md:px-8 lg:px-0">
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

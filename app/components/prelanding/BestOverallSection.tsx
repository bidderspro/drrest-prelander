/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import productDrRR from "@images/Dr-RR-leftside-product-image-1.svg";
import comparisonImg from "@images/mouth-tape-comparision.svg";

export default function BestOverallSection() {
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 px-4 sm:px-6 md:px-8 lg:px-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold font-['Poppins'] leading-tight md:leading-[48px] text-zinc-800">
          1. Best Overall: Dr. RestRight Mouth Tape
          <br />
          <span className="text-lg sm:text-xl md:text-2xl">
            The only tape combining real comfort with proven results.
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
          <div className="absolute top-1 left-2 xs:top-3 xs:left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 lg:top-6 lg:left-6 xl:top-8 xl:left-8 2xl:top-10 2xl:left-10 z-10 p-1 xs:p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-3.5 2xl:p-4">
            <div className="flex justify-center items-center bg-[#00C88F] rounded-full px-2.5 xs:px-3.5 sm:px-4.5 md:px-5.5 lg:px-6 xl:px-7 2xl:px-8 py-1 xs:py-1.5 sm:py-2 md:py-2.5 lg:py-2.5 xl:py-3 2xl:py-3.5 h-8 xs:h-9 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-18">
              <span className="text-white text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold font-['Poppins'] whitespace-nowrap">
                Best Overall Mouth Tape
              </span>
            </div>
          </div>

          <div className="relative z-10 p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-14 pt-14 xs:pt-16 sm:pt-18 md:pt-20 lg:pt-22 xl:pt-24">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-7 md:gap-8 lg:gap-12 xl:gap-16 items-center justify-between">
              <div className="flex-shrink-0 flex items-center justify-center mt-2 xs:mt-3 sm:mt-4 md:mt-5 lg:mt-6">
                <div className="flex items-end justify-center w-[100px] h-[100px] xs:w-[120px] xs:h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] xl:w-[190px] xl:h-[190px] mt-4 sm:mt-6 lg:mt-8 xl:mt-10">
                  <Image
                    src={productDrRR}
                    alt="Dr. RestRight Mouth Tape"
                    className="object-contain w-full h-full mx-auto top-2 justify-center lg:mx-0"
                    sizes="(max-width: 480px) 100px, (max-width: 640px) 120px, (max-width: 768px) 140px, (max-width: 1024px) 160px, (max-width: 1280px) 180px, 190px"
                    priority
                  />
                </div>
              </div>

              <div className="flex-1 space-y-3 xs:space-y-4 sm:space-y-5 lg:space-y-6 max-w-full xs:max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[482px] px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-['Poppins'] text-zinc-800">
                    Dr. RestRight Mouth Tape
                  </h3>
                  <p className="w-full text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-normal font-['Poppins'] text-zinc-800 leading-relaxed">
                    Dr. RestRight isn't just another sleep tape — it's the only
                    one proven to silence snoring, stop dry mouth, and still let
                    you breathe easy if congestion strikes. That balance of
                    comfort, safety, and doctor-formulated design is why it
                    outperformed every other brand we tested — and why men and
                    women over 45 choose Dr. RestRight for real, reliable rest.
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
                      $23.99
                    </span>
                    <span className="text-zinc-800 text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium font-['Poppins'] line-through">
                      $29.99
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Image
            src={comparisonImg}
            alt="Tape comparison"
            width={922}
            height={443}
            className="w-full h-auto rounded-md xs:rounded-lg sm:rounded-xl md:rounded-2xl"
            sizes="(max-width: 480px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 922px"
          />
        </div>

        <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6">
          <div className="text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-normal font-['Poppins'] text-zinc-800 space-y-2 xs:space-y-3 sm:space-y-4">
            <p className="leading-relaxed">
              From the very first night, Dr. RestRight stood out. It combines
              medical-grade reliability with comfort designed for everyday use —
              something no other tape we tested could deliver.
            </p>

            <p className="leading-relaxed">
              Our testers aged 45 and above, told us Dr. RestRight not only
              reduced snoring and dry mouth, but also brought a sense of calm
              before bed thanks to its doctor-formulated aromatherapy options
              (lavender, chamomile-lavender, or unscented). For many, it became
              more than tape — it turned into a nightly ritual that finally made
              sleep feel effortless again.
            </p>

            <p className="leading-relaxed">
              It's worth noting that Dr. RestRight is the world's first mouth
              tape infused with calming aromatherapy essential oils. Where other
              brands stop at "functional," Dr. RestRight transforms the
              experience of mouth taping into a nightly ritual that relaxes both
              body and mind, helping sleepers drift off easier and stay asleep
              longer.
            </p>

            <p className="leading-relaxed">
              The adhesive hit the sweet spot: strong enough to stay put through
              tossing, turning, and even light sweating, but gentle enough to
              peel off in the morning without irritation or sticky residue. For
              aging or sensitive skin, that's crucial. Where others punished the
              skin, Dr. RestRight protected it.
            </p>

            <p className="leading-relaxed">
              The design is breathable and flexible, allowing for micro airflow
              if congestion strikes — giving users peace of mind that they
              wouldn't feel trapped. Over multiple nights, it held up
              flawlessly, proving both safe and reliable.
            </p>

            <p className="leading-relaxed">
              By the end of testing, Dr. RestRight wasn't just the highest-rated
              tape, it was the only one testers wanted to keep using night after
              night. For adults over 45, tired of clunky devices and desperate
              to finally wake up refreshed, it proved to be the clear winner.
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

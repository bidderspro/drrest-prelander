/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import productDrRR from "@images/Dr-RR-leftside-product-image-1.svg";

export default function ConclusionSection() {
  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-4xl flex flex-col gap-6">
        <h2 className="text-zinc-800 text-2xl sm:text-3xl font-semibold font-['Poppins'] leading-[48px]">
          Conclusion
        </h2>

        {/* Mobile card – matches reference layout */}
        <div className="lg:hidden">
          <div className="relative rounded-2xl overflow-hidden p-5">
            {/* Responsive mobile SVG background */}
            <div className="absolute inset-0 w-full h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 370 670"
                fill="none"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <g filter="url(#filter0_d_12_233)">
                  <path d="M344 10C352.837 10 360 17.1634 360 26V644C360 652.837 352.837 660 344 660H26C17.1634 660 10 652.837 10 644V83.8892C10 76.4461 18.5568 71.417 26 71.417H187C204.673 71.417 219 57.0899 219 39.417V24.7598C219 17.774 223.752 10 230.738 10H344Z" fill="white" />
                </g>
                <defs>
                  <filter id="filter0_d_12_233" x="0" y="0" width="370" height="670" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.784314 0 0 0 0 0.560784 0 0 0 0.4 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12_233" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12_233" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>

            <div className="absolute top-0 left-0">
              <div className="flex w-[195px] h-[45px] py-[13px] px-[23px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[32px] bg-[#00C88F]">
                <span className="text-white text-xs sm:text-sm font-semibold font-['Poppins'] whitespace-nowrap">
                  Best Overall Mouth Tape
                </span>
              </div>
            </div>

            

            <div className="relative z-10 flex flex-col items-center gap-5 pt-16 pb-2">
              <Image
                src={productDrRR}
                alt="Dr. RestRight Mouth Tape"
                width={195}
                height={195}
                className="w-32 h-auto sm:w-36 sm:h-auto md:w-40 md:h-auto lg:w-48 lg:h-auto"
              />

              <div className="w-full flex flex-col gap-4">
                <div className="flex items-center gap-2 justify-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="#FACC15" aria-hidden="true">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-neutral-800 text-[10px] font-medium font-['Poppins']">4.9 Ratings</span>
                </div>

                <div className="text-zinc-800 text-sm font-bold font-['Poppins']">
                  Dr. RestRight Mouth Tape
                </div>
                <p className="text-zinc-800 text-xs font-normal font-['Poppins'] leading-relaxed">
                  Dr. RestRight isn't just another sleep tape — it's the only one proven to silence snoring, stop dry mouth, and still let you breathe easy if congestion strikes. That balance of comfort, safety, and doctor-formulated design is why it outperformed every other brand we tested — and why it's the clear choice for 45+ sleepers who refuse to gamble with their rest.
                </p>

                <div className="flex w-full items-center justify-between pt-3">
                  <button className="w-40 h-10 px-4 bg-blue-700 rounded-xl text-white text-xs font-medium font-['Poppins'] whitespace-nowrap">
                    Check availability
                  </button>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-800 text-sm font-bold font-['Poppins']">$23.99</span>
                    <span className="text-zinc-800 text-xs font-medium font-['Poppins'] line-through">$29.99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop/large screens card – preserve original overlay design */}
        <div className="hidden lg:block">
          <div className="relative">
            <div
              className="relative w-full max-w-[869px] h-[351px] overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 909 391"
                  fill="none"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <g filter="url(#filter0_d_12_524)">
                    <path d="M865 20C878.255 20 889 30.7452 889 44V347C889 360.255 878.255 371 865 371H44C30.7452 371 20 360.255 20 347V125.627C20 114.58 31.9527 107 43 107H278C307.823 107 332 82.8234 332 53C332 52.0233 331.974 51.0527 331.923 50.0887C331.217 36.8145 340.047 20 353.34 20H865Z" fill="white" />
                  </g>
                  <defs>
                    <filter id="filter0_d_12_524" x="0" y="0" width="909" height="391" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="10" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.784314 0 0 0 0 0.560784 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12_524" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12_524" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>

              <div className="absolute left-6 top-6 z-20">
                <div className="px-6 py-3 bg-emerald-500 rounded-[32px] inline-flex justify.center items-center">
                  <span className="text-white text-base font-semibold font-['Poppins']">
                    Best Overall Mouth Tape
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 z-10 px-14 py-9 flex items.end overflow-hidden">
                <div className="flex items-end gap-16 w-full max-w-full">
                  <div className="flex-shrink-0">
                    <Image
                      src={productDrRR}
                      alt="Dr. RestRight Mouth Tape"
                      width={195}
                      height={195}
                      className="w-[195px] h-[195px]"
                      style={{ aspectRatio: "1/1" }}
                    />
                  </div>

                  <div
                    className="flex flex-col items-start gap-6"
                    style={{ width: "482px", height: "286px" }}
                  >
                    <div className="flex flex-col gap-2">
                      <h3
                        className="text-zinc-800 font-bold font-['Poppins'] truncate"
                        style={{ fontSize: "18px" }}
                      >
                        Dr. RestRight Mouth Tape
                      </h3>
                      <p
                        className="text-zinc-800 font-normal font-['Poppins'] leading-relaxed"
                        style={{ fontSize: "16px" }}
                      >
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

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <button className="w-44 h-12 px-3 py-2 bg-blue-700 rounded-xl flex justify-center items-center flex-shrink-0">
                        <span className="text-white text-sm font-medium font-['Poppins']">
                          Check availability
                        </span>
                      </button>
                      <div className="flex items-center gap-2 flex-shrink-0">
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



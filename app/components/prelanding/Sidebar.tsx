import Image from "next/image";
import productDrRR from "@images/Dr-RR-leftside-product-image-1.svg";

export default function Sidebar() {
  return (
    <aside className="w-full sm:w-72 md:w-80 lg:w-96 xl:w-[26rem] flex-shrink-0">
      <div className="sticky top-8 sm:top-8 lg:top-12">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="auto"
            viewBox="0 0 394 559"
            fill="none"
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
            focusable="false"
          >
            <g filter="url(#filter0_d_12_669)">
              <path
                d="M368 10C376.837 10 384 17.1634 384 26V533C384 541.837 376.837 549 368 549H26C17.1634 549 10 541.837 10 533V90.7274C10 83.6674 17.8961 78.871 24.9561 78.8711H173.956C191.629 78.8711 205.956 64.5441 205.956 46.8711V28.8711C205.956 20.4859 211.6 10 219.985 10H368Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_12_669"
                x="0"
                y="0"
                width="394"
                height="559"
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
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0.784314 0 0 0 0 0.560784 0 0 0 0.4 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_12_669"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_12_669"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <div className="absolute left-2.5 top-2.5 z-10 flex justify-center items-center px-3 py-1.5 sm:px-4 sm:py-2 md:px-[23px] md:py-[13px] gap-[10px] bg-[#00C88F] rounded-[32px]">
            <div className="flex items-center gap-2">
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.79222 14.4396C12.1738 14.4396 15.0641 14.952 15.0641 16.9989C15.0641 19.0458 12.1931 19.5729 8.79222 19.5729C5.40972 19.5729 2.52039 19.0651 2.52039 17.0172C2.52039 14.9694 5.39047 14.4396 8.79222 14.4396Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.79223 11.5182C6.57206 11.5182 4.77173 9.71874 4.77173 7.49857C4.77173 5.27841 6.57206 3.47899 8.79223 3.47899C11.0115 3.47899 12.8118 5.27841 12.8118 7.49857C12.8201 9.71049 11.0326 11.5099 8.82065 11.5182H8.79223Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.1095 10.4748C16.5771 10.2686 17.7073 9.00905 17.7101 7.48464C17.7101 5.98222 16.6147 4.73555 15.1782 4.49997"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.0458 14.0045C18.4675 14.2163 19.4603 14.7149 19.4603 15.7416C19.4603 16.4484 18.9928 16.9067 18.2374 17.1936"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white text-xs sm:text-sm font-semibold font-['Poppins'] whitespace-nowrap">
                Top Pick
              </span>
            </div>
          </div>

          <div className="absolute inset-0 p-4 sm:p-6 flex flex-col z-10">
            <div className="flex-1 flex flex-col pt-12 sm:pt-14">
              <div className="flex-1 flex flex-col justify-center items-center">
                <div className="flex justify-center items-center mb-6">
                  <Image
                    src={productDrRR}
                    alt="Dr. RestRight Mouth Tape"
                    width={120}
                    height={120}
                    className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
                    sizes="(max-width: 640px) 7rem, 8rem"
                    priority
                  />
                </div>
              </div>
              
              <div className="mt-2">
                <h3 className="text-sm sm:text-base font-bold font-['Poppins'] text-zinc-800 mb-3">
                  Dr. RestRight Mouth Tape
                </h3>
                <p className="text-xs sm:text-sm font-normal font-['Poppins'] text-zinc-800 leading-relaxed mb-6">
                  After comparing nearly a dozen brands, this was the
                  one that actually worked — safe, effective, and
                  comfortable every night.
                </p>
                
                <button 
                  type="button" 
                  className="w-full h-12 px-3 py-2 bg-blue-700 rounded-xl text-white text-xs sm:text-sm font-medium font-['Poppins'] hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  GET 20% OFF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
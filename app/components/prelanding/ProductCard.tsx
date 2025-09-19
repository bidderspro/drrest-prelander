import Image, { StaticImageData } from "next/image";

type ProductCardProps = {
  image: StaticImageData;
  alt: string;
  title: string;
  shortDescription: string;
  descriptionLines: string[];
  ratingLabel: string; // e.g., "4.9 Ratings"
  price: string; // e.g., "$23.99"
  oldPrice?: string; // optional, e.g., "$29.99"
  ctaLabel: string; // e.g., "GET 20% OFF" or "Check Availability"
  isBestOverall?: boolean;
};

export default function ProductCard(props: ProductCardProps) {
  const {
    image,
    alt,
    title,
    shortDescription,
    descriptionLines,
    ratingLabel,
    price,
    oldPrice,
    ctaLabel,
    isBestOverall,
  } = props;

  const isFirstCard = title === "Dr. RestRight Mouth Tape";

  return (
    <div className="space-y-4 w-full">
      {/* Mobile and tablet variant (up to lg breakpoint) */}
      <div className="lg:hidden">
         <div 
           className="w-full bg-white rounded-2xl shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] relative overflow-hidden"
           >
          {isBestOverall && (
            <div className="w-full bg-[#00C88F] flex justify-center items-center gap-2.5 h-10 xs:h-12 sm:h-[58px] px-3 xs:px-4 sm:px-6 z-10 shadow-md rounded-t-2xl">
              <p className="text-white text-[10px] xs:text-xs sm:text-sm font-semibold font-['Poppins'] whitespace-nowrap">Best Overall</p>
            </div>
          )}

          <div className="w-full flex flex-col gap-3 xs:gap-4 px-2 xs:px-3 sm:px-4 md:px-6 pt-4 xs:pt-5 sm:pt-6 pb-4 xs:pb-5 sm:pb-6">
            <div className="flex justify-center items-center h-28 xs:h-32 sm:h-36 md:h-40">
              <Image 
                src={image} 
                alt={alt} 
                width={160} 
                height={160} 
                className="w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain" 
                sizes="(max-width: 480px) 7rem, (max-width: 640px) 8rem, (max-width: 768px) 9rem, 10rem"
                priority 
              />
            </div>

            <div className="flex items-center gap-1 xs:gap-2 justify-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="#FACC15" aria-hidden="true">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-zinc-800 text-[10px] xs:text-xs sm:text-sm font-medium font-['Poppins']">{ratingLabel}</span>
            </div>

            <div className="space-y-1.5 xs:space-y-2">
              <h3 className="text-sm xs:text-base sm:text-lg font-semibold font-['Poppins'] text-[#0F172A]">{title}</h3>
              {isFirstCard && (
                <p className="text-[#333] text-[10px] xs:text-xs sm:text-sm font-normal font-['Poppins']">Dr. RestRight was the clear winner across every category.</p>
              )}
              
              <div className="space-y-1">
                <h4 className="text-xs xs:text-sm sm:text-base font-medium font-['Poppins'] text-[#0F172A]">Description:</h4>
                <ul className="text-[10px] xs:text-xs sm:text-sm font-normal font-['Poppins'] text-[#333333] space-y-1.5 xs:space-y-2 list-disc pl-3 xs:pl-4 break-words">
                  {descriptionLines.map((line, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {idx === 0 ? <span className="text-[#333] font-medium">{line}</span> : line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col xs:flex-row justify-between items-center gap-2 xs:gap-3 mt-auto pt-2 xs:pt-3">
              <button 
                type="button" 
                className="w-full xs:w-auto sm:w-44 md:w-48 h-10 xs:h-11 sm:h-12 px-2 xs:px-3 sm:px-4 bg-blue-600 rounded-lg flex justify-center items-center whitespace-nowrap hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="text-white text-xs xs:text-sm sm:text-base font-medium font-['Poppins'] uppercase">{ctaLabel}</span>
              </button>
              <div className="w-full xs:w-auto flex justify-center xs:justify-end items-center gap-1.5 xs:gap-2 mt-2 xs:mt-0">
                <span className="text-zinc-800 text-sm xs:text-base sm:text-lg font-bold font-['Poppins']">{price}</span>
                {oldPrice && (
                  <span className="text-zinc-500 text-xs xs:text-sm sm:text-base font-normal font-['Poppins'] line-through">{oldPrice}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop variant (lg and above) */}
      <div className="hidden lg:block">
        <div 
          className={`bg-white rounded-2xl shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] flex items-stretch ${isBestOverall ? "overflow-hidden" : "p-5 xl:p-6 2xl:p-8"}`}
          >
          {isBestOverall && (
            <div className="w-12 xl:w-14 h-auto self-stretch bg-[#00C88F] rounded-tl-2xl rounded-bl-2xl flex items-center justify-center flex-shrink-0">
              <div className="flex items-center justify-center">
                <p className="text-white text-sm xl:text-base font-semibold font-['Poppins'] whitespace-nowrap origin-center -rotate-90">Best Overall</p>
              </div>
            </div>
          )}

          <div className={`flex-1 ${isBestOverall ? "p-5 xl:p-6 2xl:p-8" : ""}`}>
            <div className="flex flex-col lg:flex-row gap-4 xl:gap-6 2xl:gap-8 h-full justify-center items-center">
              <div className="flex-shrink-0 lg:w-44 xl:w-48 2xl:w-56 flex flex-col items-center">
                <div className="lg:w-40 lg:h-40 xl:w-44 xl:h-44 2xl:w-48 2xl:h-48 flex items-center justify-center mb-3 xl:mb-4">
                  <Image 
                    src={image} 
                    alt={alt} 
                    width={180} 
                    height={180} 
                    className="w-full h-auto object-contain" 
                    sizes="(min-width: 1536px) 12rem, (min-width: 1280px) 11rem, 10rem"
                    priority 
                  />
                </div>
                <div className="flex items-center gap-1.5 xl:gap-2 justify-center lg:justify-start">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 xl:w-5 h-4 xl:h-5" viewBox="0 0 24 24" fill="#FACC15" aria-hidden="true">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-zinc-800 text-xs xl:text-sm font-medium font-['Poppins']">{ratingLabel}</span>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between gap-3 xl:gap-4">
                <div className="space-y-1.5 xl:space-y-2">
                  <h3 className="text-lg xl:text-xl font-semibold font-['Poppins'] text-[#0F172A]">{title}</h3>
                  {isFirstCard && (
                    <p className="text-[#333] text-xs xl:text-sm font-normal font-['Poppins']">Dr. RestRight was the clear winner across every category.</p>
                  )}
                  
                  <div className="space-y-1">
                    <h4 className="text-sm xl:text-base font-medium font-['Poppins'] text-[#0F172A]">Description:</h4>
                    <ul className="text-xs xl:text-sm font-normal font-['Poppins'] text-[#333333] space-y-1.5 xl:space-y-2 list-disc pl-4 xl:pl-5 break-words">
                      {descriptionLines.map((line, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {idx === 0 ? <span className="text-[#333] font-medium">{line}</span> : line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 xl:gap-4 mt-auto pt-2 xl:pt-3">
                  <button 
                    type="button" 
                    className="w-full sm:w-44 xl:w-48 2xl:w-52 h-10 xl:h-12 px-4 xl:px-6 bg-blue-600 rounded-lg flex justify-center items-center whitespace-nowrap hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <span className="text-white text-sm xl:text-base font-medium font-['Poppins'] uppercase">{ctaLabel}</span>
                  </button>
                  <div className="flex items-center gap-2 xl:gap-3">
                    <span className="text-zinc-800 text-base xl:text-lg font-bold font-['Poppins']">{price}</span>
                    {oldPrice && (
                      <span className="text-zinc-500 text-sm xl:text-base font-normal font-['Poppins'] line-through">{oldPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
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

  return (
    <div className="space-y-6">
      {/* Mobile variant */}
      <div className="lg:hidden">
        <div className="w-full bg-white rounded-2xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] flex flex-col items-stretch">
          {isBestOverall && (
            <div className="w-full h-14 px-4 bg-emerald-500 rounded-tl-2xl rounded-tr-2xl inline-flex justify-center items-center">
              <div className="text-white text-sm font-semibold font-['Poppins']">Best Overall</div>
            </div>
          )}

          <div className="w-full flex flex-col gap-6 px-4 pt-6 pb-6">
            <div className="flex justify-center">
              <Image 
                src={image} 
                alt={alt} 
                width={259} 
                height={259} 
                className="w-40 sm:w-56 md:w-64 h-auto object-contain" 
                sizes="(max-width: 640px) 10rem, (max-width: 768px) 14rem, (max-width: 1024px) 16rem, 259px"
                priority 
              />
            </div>

            <div className="self-stretch flex flex-col gap-6">
              <div className="self-stretch flex flex-col gap-4">
                <div className="self-stretch flex flex-col items-center gap-3">
                  <div className="w-36 h-5 inline-flex justify-start items-center gap-2">
                    <div className="flex justify-start items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="#FACC15" aria-hidden="true">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-neutral-800 text-xs font-medium font-['Poppins']">{ratingLabel}</div>
                  </div>
                  <div className="self-stretch flex flex-col gap-2 text-center">
                    <h3 className="text-zinc-800 text-sm sm:text-base font-bold font-['Poppins']">{title}</h3>
                    <p className="text-neutral-500 text-xs sm:text-sm font-normal font-['Poppins']">{shortDescription}</p>
                  </div>
                </div>

                <div className="self-stretch mt-2">
                  <h4 className="text-zinc-800 text-xs sm:text-sm font-semibold font-['Poppins'] mb-1">Description:</h4>
                  <div className="text-zinc-800 text-xs sm:text-sm font-normal font-['Poppins'] space-y-1">
                    {descriptionLines.map((line, idx) => (
                      <p key={idx} className="leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="self-stretch flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-2">
                <button 
                  type="button" 
                  className="w-full sm:w-44 h-12 px-4 bg-blue-700 rounded-xl flex justify-center items-center whitespace-nowrap hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <span className="text-white text-xs sm:text-sm font-medium font-['Poppins']">{ctaLabel}</span>
                </button>
                <div className="w-full sm:w-auto flex justify-end sm:justify-start items-center gap-2">
                  <span className="text-zinc-800 text-sm sm:text-base font-bold font-['Poppins']">{price}</span>
                  {oldPrice && (
                    <span className="text-zinc-800 text-xs sm:text-sm font-medium font-['Poppins'] line-through">{oldPrice}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop variant */}
      <div className="hidden lg:block">
        <div className={`bg-white rounded-2xl shadow-md min-h-[420px] ${isBestOverall ? "overflow-hidden" : "p-6 lg:p-8"}`}>
          <div className="flex">
            {isBestOverall && (
              <div className="w-14 bg-emerald-500 rounded-tl-2xl rounded-bl-2xl flex items-center justify-center">
                <div className="transform -rotate-90 text-white text-base font-semibold font-['Poppins'] whitespace-nowrap">Best Overall</div>
              </div>
            )}

            <div className={`flex-1 ${isBestOverall ? "p-6 lg:p-8" : ""}`}>
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 h-full">
                <div className="flex-shrink-0 lg:w-56 flex flex-col items-center lg:items-start">
                  <div className="w-56 h-56 flex items-center justify-center mb-4">
                    <Image 
                      src={image} 
                      alt={alt} 
                      width={224} 
                      height={224} 
                      className="w-full h-auto object-contain" 
                      sizes="224px"
                      priority 
                    />
                  </div>
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" viewBox="0 0 24 24" fill="#FACC15" aria-hidden="true">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-zinc-800 text-sm font-medium font-['Poppins']">{ratingLabel}</span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    {isBestOverall ? (
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold font-['Poppins'] text-zinc-800">{title}</h3>
                        <p className="text-neutral-500 text-sm font-normal font-['Poppins']">{shortDescription}</p>
                      </div>
                    ) : (
                      <h3 className="text-xl font-semibold font-['Poppins'] text-zinc-800">{title}</h3>
                    )}
                    <div className="space-y-2">
                      <h4 className="text-base font-semibold font-['Poppins'] text-zinc-800">Description:</h4>
                      <div className="text-base font-normal font-['Poppins'] text-zinc-800 space-y-2">
                        {descriptionLines.map((line, idx) => (
                          <p key={idx} className="leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <button 
                      type="button" 
                      className="w-full sm:w-52 h-14 px-6 bg-blue-700 rounded-xl text-white text-base font-medium font-['Poppins'] hover:bg-blue-800 transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      {ctaLabel}
                    </button>
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-800 text-lg font-bold font-['Poppins']">{price}</span>
                      {oldPrice && (
                        <span className="text-zinc-800 text-base font-normal font-['Poppins'] line-through">{oldPrice}</span>
                      )}
                    </div>
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



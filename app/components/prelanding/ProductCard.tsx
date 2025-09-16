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
    // shortDescription is not used directly
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
         <div 
            className="w-full bg-white rounded-2xl shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] relative"
            style={{ 
              minHeight: '360px',
              maxWidth: '100%',
              width: '450px',
              margin: '0 auto'
            }}>
          {isBestOverall && (
            <div className="w-full bg-[#00C88F] flex justify-center items-center gap-2.5  h-[58px] px-[132px] py-[18px] z-10 shadow-md rounded-t-2xl">
              <p className="text-white text-[10px] sm:text-xs font-semibold font-['Poppins'] whitespace-nowrap">Best Overall</p>
            </div>
          )}

          <div className="w-full flex flex-col gap-4 px-3 sm:px-4 pt-7 sm:pt-8 pb-5 sm:pb-6">
            <div className="flex justify-center items-center h-36">
              <Image 
                src={image} 
                alt={alt} 
                width={160} 
                height={160} 
                className="w-36 h-36 object-contain" 
                sizes="(max-width: 640px) 9rem, 10rem"
                priority 
              />
            </div>

            <div className="flex items-center gap-2 justify-center ">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="#FACC15" aria-hidden="true">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-zinc-800 text-xs font-medium font-['Poppins']">{ratingLabel}</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-semibold font-['Poppins'] text-[#0F172A]">{title}</h3>
              
              <div className="space-y-1">
                <h4 className="text-sm font-medium font-['Poppins'] text-[#0F172A]">Description:</h4>
                <ul className="text-xs font-normal font-['Poppins'] text-[#333333] space-y-2 list-disc pl-4">
                  {descriptionLines.map((line, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {idx === 0 ? <span className="text-emerald-600 font-medium">{line}</span> : line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-auto">
              <button 
                type="button" 
                className="w-full sm:w-44 h-12 px-4 bg-blue-600 rounded-lg flex justify-center items-center whitespace-nowrap hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="text-white text-sm font-medium font-['Poppins'] uppercase">{ctaLabel}</span>
              </button>
              <div className="w-full sm:w-auto flex justify-end sm:justify-start items-center gap-2">
                <span className="text-zinc-800 text-base font-bold font-['Poppins']">{price}</span>
                {oldPrice && (
                  <span className="text-zinc-500 text-sm font-normal font-['Poppins'] line-through">{oldPrice}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop variant */}
      <div className="hidden lg:block">
        <div 
          className={`bg-white rounded-2xl shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] ${isBestOverall ? "overflow-hidden" : "p-6 lg:p-8"}`}
          style={{ 
            display: 'flex',
            width: '100%',
            maxWidth: '800px',
            height: 'auto',
            minHeight: '340px',
            alignItems: 'center',
            gap: '0',
            margin: '0 auto'
          }}>
          {isBestOverall && (
            <div className="w-14 h-[470px] bg-[#00C88F] rounded-tl-2xl rounded-bl-2xl flex items-center justify-center  flex-shrink-0">
              <div className=" flex items-center justify-center">
                <p className="text-white text-base font-semibold font-['Poppins'] whitespace-nowrap origin-center -rotate-90">Best Overall</p>
              </div>
            </div>
          )}

          <div className={`flex-1 ${isBestOverall ? "p-6 lg:p-8" : ""}`}>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 h-full justify-center items-center">
              <div className="flex-shrink-0 lg:w-56 flex flex-col items-center lg:items-center">
                <div className="w-48 h-48 flex items-center justify-center mb-4">
                  <Image 
                    src={image} 
                    alt={alt} 
                    width={180} 
                    height={180} 
                    className="w-full h-auto object-contain" 
                    sizes="180px"
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

              <div className="flex-1 flex flex-col justify-between gap-3">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold font-['Poppins'] text-[#0F172A]">{title}</h3>
                  
                  <div className="space-y-1">
                    <h4 className="text-base font-medium font-['Poppins'] text-[#0F172A]">Description:</h4>
                    <ul className="text-sm font-normal font-['Poppins'] text-[#333333] space-y-2 list-disc pl-5">
                      {descriptionLines.map((line, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {idx === 0 ? <span className="text-emerald-600 font-medium">{line}</span> : line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-auto">
                  <button 
                    type="button" 
                    className="w-full sm:w-52 h-12 px-6 bg-blue-600 rounded-lg flex justify-center items-center whitespace-nowrap hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <span className="text-white text-base font-medium font-['Poppins'] uppercase">{ctaLabel}</span>
                  </button>
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-800 text-lg font-bold font-['Poppins']">{price}</span>
                    {oldPrice && (
                      <span className="text-zinc-500 text-base font-normal font-['Poppins'] line-through">{oldPrice}</span>
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
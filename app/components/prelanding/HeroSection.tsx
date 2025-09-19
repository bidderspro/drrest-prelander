/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import stephenProfile from "@images/Stephen-Taylor.svg";
import heroImage from "@images/heroImage.svg";

export default function HeroSection() {
  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-4xl mx-auto">
      <div className="flex flex-col gap-8 lg:gap-10">
        <div className="flex flex-col gap-6 lg:gap-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Poppins'] text-[#333333] leading-tight">
            2025's Best Mouth Tape For Better Sleep? We Tried The Top
            10, Only One Passed Every Test.
          </h1>
          <div className="flex items-center gap-[9px] self-stretch flex-wrap">
            <div className="flex-shrink-0">
              <Image
                src={stephenProfile}
                alt="Author"
                width={64}
                height={64}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover shadow-sm"
                sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
                priority
              />
            </div>
            <div className="text-[#333333] text-base sm:text-md font-semibold font-['Poppins']">
              By Stephen Taylor
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 10 10"
                fill="none"
                className="w-1.5 h-1.5 mx-1 sm:mx-2 flex-shrink-0"
              >
                <circle cx="5" cy="5" r="5" fill="#333333" />
              </svg>
              <div className="text-[#333] text-sm sm:text-sm font-normal font-['Inter'] leading-[150%] whitespace-nowrap">
                Updated on Sept 11, 2025
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={heroImage}
              alt="Hero"
              width={922}
              height={561}
              className="w-full h-auto"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 922px, (max-width: 1536px) 922px, 922px"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mt-8 lg:mt-12 flex flex-col gap-4 sm:gap-6">
        <h2 className="text-xl sm:text-2xl font-semibold font-['Poppins'] leading-[150%] text-[#333]">
          Taping your mouth shut at night might sound strange… even a
          little extreme.
        </h2>
        <div className="text-base sm:text-lg font-normal font-['Poppins'] leading-[170%] text-[#333] space-y-4">
          <p>
            But for thousands of men and women aged 45 and older, it has
            become the simplest, most natural way to sleep deeper, snore
            less, and finally wake up refreshed — without being chained to
            a CPAP machine.
          </p>
          
          <p>
            Recently, our team of sleep researchers — led by a doctor who
            once struggled with CPAP himself — decided to put mouth taping
            to the ultimate test.
          </p>
          
          <p>
            We ordered, tested, and compared 10 of the most popular mouth
            tapes on the market today.
          </p>
          
          <p>
            The goal? To find out which one actually works, and which ones
            fall apart under real-world conditions.
          </p>
          
          <p>
            What we discovered shocked us.
          </p>
          
          <p>
            Only one tape consistently helped sleepers aged 45+ breathe
            easily, stay comfortable all night, and wake up without the
            grogginess and dry mouth that had plagued them for years.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}


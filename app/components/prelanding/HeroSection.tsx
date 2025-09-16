/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import authorProfile from "@images/profile-image.svg";
import heroImage from "@images/heroImage.svg";

export default function HeroSection() {
  return (
    <section className="py-8 lg:py-12">
      <div className="flex flex-col gap-8 lg:gap-10">
        <div className="flex flex-col gap-6 lg:gap-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Poppins'] text-[#333333] leading-tight">
            2025's Best Mouth Tape For Better Sleep? We Tried The Top
            10, Only One Passed Every Test.
          </h1>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex-shrink-0">
              <Image
                src={authorProfile}
                alt="Author"
                width={64}
                height={64}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
                sizes="(max-width: 640px) 56px, 64px"
              />
            </div>
            <div className="text-[#333333] text-base sm:text-lg font-bold font-['Poppins']">
              By Dr. Stephen T
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 10 10"
                fill="none"
                className="w-1.5 h-1.5 mx-1 sm:mx-2"
              >
                <circle cx="5" cy="5" r="5" fill="#333333" />
              </svg>
              <div className="text-[#333] text-base sm:text-lg font-normal font-['Inter'] leading-[150%]">
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
              sizes="(max-width: 1024px) 100vw, 922px"
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
    </section>
  );
}


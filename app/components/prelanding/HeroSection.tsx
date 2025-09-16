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
          <div className="flex flex-wrap items-center gap-4">
            <Image
              src={authorProfile}
              alt="Author"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full"
              sizes="64px"
            />
            <div className="text-[#333333] text-lg font-bold font-['Poppins']">
              By Dr. Stephen T
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 10 10"
              fill="none"
              className="w-1.5 h-1.5"
            >
              <circle cx="5" cy="5" r="5" fill="#333333" />
            </svg>
            <div className="text-[#333] text-lg font-normal font-['Inter'] leading-[150%] tracking-[-0.352px]">
              Updated on Sept 11, 2025
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            src={heroImage}
            alt="Hero"
            width={922}
            height={561}
            className="w-full h-auto rounded-2xl"
            sizes="(max-width: 1024px) 100vw, 922px"
            priority
          />
        </div>
      </div>

      <div className="mt-8 lg:mt-12 flex flex-col gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold font-['Poppins'] leading-[150%] text-[#333]">
          Taping your mouth shut at night might sound strange… even a
          little extreme.
        </h2>
        <div className="text-base sm:text-lg font-normal font-['Poppins'] leading-[170%] text-[#333]">
          But for thousands of men and women aged 45 and older, it has
          become the simplest, most natural way to sleep deeper, snore
          less, and finally wake up refreshed — without being chained to
          a CPAP machine.
          <br />
          <br />
          Recently, our team of sleep researchers — led by a doctor who
          once struggled with CPAP himself — decided to put mouth taping
          to the ultimate test.
          <br />
          <br />
          We ordered, tested, and compared 10 of the most popular mouth
          tapes on the market today.
          <br />
          <br />
          The goal? To find out which one actually works, and which ones
          fall apart under real-world conditions.
          <br />
          <br />
          What we discovered shocked us.
          <br />
          Only one tape consistently helped sleepers aged 45+ breathe
          easily, stay comfortable all night, and wake up without the
          grogginess and dry mouth that had plagued them for years.
        </div>
      </div>
    </section>
  );
}



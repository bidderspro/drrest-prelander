/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import verifiedIcon from "@images/verified.svg";

export default function HowWeTestedSection() {
  return (
    <section className="py-8 lg:py-12">
      <div className="space-y-8 lg:space-y-10">
        <h2 className="text-2xl sm:text-3xl font-semibold font-['Poppins'] leading-[150%] text-[#333]">
          How We Tested the Top 10 Mouth Tapes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <div className="bg-blue-100 rounded-2xl p-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 p-3 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={verifiedIcon}
                  alt="verified"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold font-['Poppins'] text-zinc-800">
                  Adhesive Strength (The All-Night Challenge)
                </h3>
              </div>
            </div>
            <p className="text-sm font-normal font-['Poppins'] text-zinc-600">
              We tested each tape over multiple nights — side sleepers,
              restless movers, even sweaty conditions. If it peeled off
              or curled by 2am, it failed. Because if a tape can't last
              till morning, it can't solve the problem.
            </p>
          </div>

          <div className="bg-blue-100 rounded-2xl p-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 p-3 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={verifiedIcon}
                  alt="verified"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold font-['Poppins'] text-zinc-800">
                  Comfort & Removal (Morning After Test)
                </h3>
              </div>
            </div>
            <p className="text-sm font-normal font-['Poppins'] text-zinc-600">
              No one wants a sore, red mark where tape used to be. We
              checked for irritation and residue, especially on 45+
              skin. If a tape punishes you in the morning, it doesn't
              matter how well it worked overnight.
            </p>
          </div>

          <div className="bg-blue-100 rounded-2xl p-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 p-3 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={verifiedIcon}
                  alt="verified"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold font-['Poppins'] text-zinc-800">
                  Safety & Peace of Mind (Emergency Readiness)
                </h3>
              </div>
            </div>
            <p className="text-sm font-normal font-['Poppins'] text-zinc-600">
              We mimicked "real-life moments" coughing, sneezing,
              sipping water. The best tapes stayed put when needed, but
              peeled off instantly if something went wrong. If you can't
              remove it half-asleep, it's not safe.
            </p>
          </div>

          <div className="bg-blue-100 rounded-2xl p-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 p-3 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={verifiedIcon}
                  alt="verified"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold font-['Poppins'] text-zinc-800">
                  Sleep Results (The Real Measure)
                </h3>
              </div>
            </div>
            <p className="text-sm font-normal font-['Poppins'] text-zinc-600">
              The ultimate test: did people feel better? We tracked
              snoring, interruptions, and oxygen with apps and
              wearables. Then we asked the only question that matters:
              did mornings feel better? If you wake up groggy, the tape
              has failed its mission.
            </p>
          </div>
        </div>

        <div className="text-base sm:text-lg font-normal font-['Poppins'] text-zinc-800 space-y-4">
          <p>
            After weeks of nightly testing and hundreds of hours of
            data, three brands consistently outperformed the rest.
          </p>
          <p>
            But when it came to comfort, safety, and actual sleep
            improvements, only one stood above them all: Dr. RestRight.
          </p>
        </div>
      </div>
    </section>
  );
}



/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import stephenProfile from "@images/Stephen-Taylor.svg";

export default function AuthorBioSection() {
  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-4xl flex flex-col mx-auto bg-blue-100 rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="flex flex-col w-full max-w-[805px] mx-auto gap-4 items-start">
          
          {/* Profile Image + Name */}
          <div className="flex flex-row gap-2 items-center w-full">
            <Image
              src={stephenProfile}
              alt="Stephen Taylor"
              width={84}
              height={84}
              className="rounded-xl object-cover shadow-sm"
              priority
            />
            <h3 className="text-zinc-800 text-xl font-semibold leading-relaxed">
              Stephen Taylor
            </h3>
          </div>

          {/* Content */}
          <div className="w-full space-y-4 text-base text-zinc-800 leading-relaxed">
            <p>
              <span className="font-bold">Verified Buyers Guide exists for one purpose: to make sure you never waste another dollar on hype.</span> <br />
            </p>
            <p>
              Founded by Stephen Taylor, a former investigative journalist who spent a decade unmasking scams and exposing corporate spin, the site was born from his own hard lesson: the internet is flooded with fake reviews and pay-to-play endorsements designed to trick everyday buyers.
            </p>
            <p>
              That betrayal of trust became Stephen's obsession. He built Verified Buyers Guide as the antidote—a platform where every recommendation must survive three filters: real ownership, real testing, and real results. No affiliate tricks. No bought stars. No scripted "influencer" gush. Just the raw truth about what's worth your money and what isn't. </p>
            
            <p>
              From wellness tools to household essentials to the latest sleep aids, the promise never changes: if it hasn't been verified, it doesn't belong here. Because in a world where anyone can manufacture five stars, Verified Buyers Guide is the one place that still earns them. </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}

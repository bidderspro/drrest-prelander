/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import leoProfile from "@images/Leo-B.svg";

export default function AuthorBioSection() {
  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-4xl mx-auto bg-blue-100 rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="flex-shrink-0">
            <Image
              src={leoProfile}
              alt="Leo B."
              width={84}
              height={84}
              className="w-20 h-20 rounded-xl object-cover shadow-sm"
              sizes="80px"
              priority
            />
          </div>
          <div className="flex-1 space-y-4">
            <h3 className="text-zinc-800 text-xl font-semibold font-['Poppins'] leading-relaxed">
              Leo B.
            </h3>
            <div className="text-base font-normal font-['Poppins'] leading-relaxed text-zinc-800">
              <p>
                The <span className="font-bold">Verified Buyers Guide</span> is a trusted resource for practical, no-nonsense sleep
                advice, founded by Dr. Stephen Taylor — a 52 year old
                physician who personally battled years of snoring, CPAP
                frustration, and restless nights.
              </p>
              <p className="mt-3">
                After seeing how poor sleep was stealing energy and health from both his
                patients and himself, Dr. Taylor made it his mission to
                find solutions that actually work for people over 45.
                Today, Verified Buyers Guide brings together hands-on
                testing, medical insight, and real-world experience to
                help readers breathe easier, sleep deeper, and wake up
                with energy they thought they'd lost for good.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



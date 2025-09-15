/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import productDrRR from "@images/Dr-RR-leftside-product-image-1.svg";
import comparisonImg from "@images/Dr-RR-Tape-comparison.svg";

export default function BestOverallSection() {
  return (
    <section className="py-8 lg:py-12">
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold font-['Poppins'] leading-[48px] text-zinc-800">
          1. Best Overall: Dr. RestRight Mouth Tape
          <br />
          <span className="text-xl sm:text-2xl">
            The only tape combining real comfort with proven results.
          </span>
        </h2>

        <div className="bg-white rounded-2xl p-6 lg:p-8 relative overflow-hidden">
          <div className="absolute top-6 left-6 bg-emerald-500 rounded-full px-6 py-3">
            <span className="text-white text-base font-semibold font-['Poppins']">
              Best Overall Mouth Tape
            </span>
          </div>

          <div className="pt-16 lg:pt-20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              <div className="flex-shrink-0">
                <Image
                  src={productDrRR}
                  alt="Dr. RestRight Mouth Tape"
                  width={195}
                  height={195}
                  className="w-48 h-48 mx-auto lg:mx-0"
                />
              </div>

              <div className="flex-1 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold font-['Poppins'] text-zinc-800">
                    Dr. RestRight Mouth Tape
                  </h3>
                  <p className="text-base font-normal font-['Poppins'] text-zinc-800">
                    Dr. RestRight isn't just another sleep tape — it's
                    the only one proven to silence snoring, stop dry
                    mouth, and still let you breathe easy if congestion
                    strikes. That balance of comfort, safety, and
                    doctor-formulated design is why it outperformed
                    every other brand we tested — and why men and women
                    over 45 choose Dr. RestRight for real, reliable
                    rest.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <button className="w-full sm:w-52 h-14 px-6 py-3 bg-blue-700 rounded-xl text-white text-base font-medium font-['Poppins'] hover:bg-blue-800 transition-colors">
                    Check availability
                  </button>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-800 text-xl font-bold font-['Poppins']">
                      $23.99
                    </span>
                    <span className="text-zinc-800 text-lg font-medium font-['Poppins'] line-through">
                      $29.99
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="w-full">
          <Image
            src={comparisonImg}
            alt="Tape comparison"
            width={922}
            height={443}
            className="w-full h-auto rounded-2xl"
          />
        </div>

        <div className="space-y-6">
          <div className="text-base sm:text-lg font-normal font-['Poppins'] text-zinc-800 space-y-4">
            <p>
              From the very first night, Dr. RestRight stood out. It
              combines medical-grade reliability with comfort designed
              for everyday use — something no other tape we tested could
              deliver.
            </p>

            <p>
              Our testers aged 45 and above, told us Dr. RestRight not
              only reduced snoring and dry mouth, but also brought a
              sense of calm before bed thanks to its doctor-formulated
              aromatherapy options (lavender, chamomile-lavender, or
              unscented). For many, it became more than tape — it turned
              into a nightly ritual that finally made sleep feel
              effortless again.
            </p>

            <p>
              It's worth noting that Dr. RestRight is the world's first
              mouth tape infused with calming aromatherapy essential
              oils. Where other brands stop at "functional," Dr.
              RestRight transforms the experience of mouth taping into a
              nightly ritual that relaxes both body and mind, helping
              sleepers drift off easier and stay asleep longer.
            </p>

            <p>
              The adhesive hit the sweet spot: strong enough to stay put
              through tossing, turning, and even light sweating, but
              gentle enough to peel off in the morning without
              irritation or sticky residue. For aging or sensitive skin,
              that's crucial. Where others punished the skin, Dr.
              RestRight protected it.
            </p>

            <p>
              The design is breathable and flexible, allowing for micro
              airflow if congestion strikes — giving users peace of mind
              that they wouldn't feel trapped. Over multiple nights, it
              held up flawlessly, proving both safe and reliable.
            </p>

            <p>
              By the end of testing, Dr. RestRight wasn't just the
              highest-rated tape, it was the only one testers wanted to
              keep using night after night. For adults over 45, tired of
              clunky devices and desperate to finally wake up refreshed,
              it proved to be the clear winner.
            </p>
          </div>

          <button className="w-full h-14 px-6 py-3 bg-blue-700 rounded-xl text-white text-base font-medium font-['Poppins'] hover:bg-blue-800 transition-colors">
            Check availability
          </button>
        </div>
      </div>
    </section>
  );
}



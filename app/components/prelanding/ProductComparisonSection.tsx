//
import productDrRR from "@images/Dr-RR-leftside-product-image-1.svg";
import productREM from "@images/REM-Tape-Strips.svg";
import productZZZ from "@images/zzz-tape-3.svg";
import ProductCard from "./ProductCard";

export default function ProductComparisonSection() {
  return (
    <section className="py-8 lg:py-12 px-4 sm:px-6 md:px-8 xl:px-10 2xl:px-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-['Poppins'] leading-snug sm:leading-[44px] lg:leading-[48px] text-zinc-800 mb-4 sm:mb-8 lg:mb-10">
        The Results: Our Top 3 Picks
      </h2>

      <div className="space-y-8 sm:space-y-10 lg:space-y-12 w-full max-w-[1200px] xl:max-w-[1200px] 2xl:max-w-[1200px] mx-auto">
        <ProductCard
          image={productDrRR}
          alt="Dr. RestRight Mouth Tape"
          title="Dr. RestRight Mouth Tape"
          shortDescription="Dr. RestRight was the clear winner across every category."
          descriptionLines={[
            "Dr. RestRight was the clear winner across every category.",
            "Held securely all night, but peeled off gently in the morning.",
            "Hypoallergenic adhesive worked even for sensitive skin.",
            "Unique doctor-formulated aromatherapy options (lavender or chamomile-lavender) calmed the nervous system before sleep.",
            "Breathable design allowed safe airflow in case of nasal congestion."
          ]}
          ratingLabel="4.9 Ratings"
          price="$23.99"
          oldPrice="$29.99"
          ctaLabel="GET 20% OFF"
          isBestOverall
        />

        <ProductCard
          image={productREM}
          alt="REM Tape Strips"
          title="REM Tape Strips"
          shortDescription="Gentle on skin, comfortable to wear."
          descriptionLines={[
            "Gentle on skin, comfortable to wear.",
            "But lacked strong adhesion — several testers found it peeled off during the night.",
            "A good starter option, but not reliable for consistent results.",
          ]}
          ratingLabel="4.5 Ratings"
          price="$17.99"
          oldPrice="$25.00"
          ctaLabel="Check Availability"
        />

        <ProductCard
          image={productZZZ}
          alt="ZZZ Tape"
          title="ZZZ Tape"
          shortDescription="Very strong adhesive that stays put all night."
          descriptionLines={[
            "Very strong adhesive that stays put all night.",
            "But \"too strong\" for some — several testers experienced irritation and sticky residue.",
            "Not ideal for sensitive or aging skin.",
          ]}
          ratingLabel="4.3 Ratings"
          price="$30.00"
          ctaLabel="Check Availability"
        />
      </div>
    </section>
  );
}



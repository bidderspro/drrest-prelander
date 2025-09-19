import productDrRR from "@images/Dr-RR-leftside-product-image-1.svg";
import productREM from "@images/REM-Tape-Strips.svg";
import productZZZ from "@images/zzz-tape-3.svg";
import ProductCard from "./ProductCard";

export default function ProductComparisonSection() {
  return (
    <section>
      <div className="max-w-[922px] mx-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-['Poppins'] leading-snug sm:leading-[44px] lg:leading-[48px] text-zinc-800 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          The Results: Our Top 3 Picks
        </h2>

        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          <ProductCard
            image={productDrRR}
            alt="Dr. RestRight Mouth Tape"
            title="Dr. RestRight Mouth Tape"
            shortDescription="Dr. RestRight was the clear winner across every category."
            descriptionLines={[
              "Held securely all night, but peeled off gently in the morning.",
              "Hypoallergenic adhesive worked even for sensitive skin.",
              "Unique doctor-formulated aromatherapy options (lavender or chamomile-lavender) calmed the nervous system before sleep.",
              "Breathable design allowed safe airflow in case of nasal congestion."
            ]}
            ratingLabel="4.9 Ratings"
            rating={4.9}
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
            rating={4.5}
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
            rating={4.3}
            price="$30.00"
            ctaLabel="Check Availability"
          />
        </div>
      </div>
    </section>
  );
}

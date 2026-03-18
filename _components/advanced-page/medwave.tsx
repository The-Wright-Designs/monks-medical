import AdvancedItem from "@/_components/advanced-page/advanced-item";
import Button from "@/_components/button";
import Image from "next/image";

const Medwave = () => {
  return (
    <div className="flex flex-col gap-15">
      <h2 className="text-left text-[32px] hyphens-auto phone:text-heading">
        MedWave Photo&shy;bio&shy;modulation & Vibration Therapy
      </h2>
      <div className="grid tablet:grid-cols-2 gap-10">
        <div className="flex flex-col gap-15">
          <div className="flex flex-col gap-5">
            <p>
              Our integrated approach uses two powerful, non-invasive
              technologies — MedWave red-light photobiomodulation and whole body
              vibration therapy — to optimise healing, reduce inflammation,
              accelerate recovery, and improve overall performance.
            </p>
            <Button
              link="/assets/brochures/MedWave_Client_Brochure.pdf"
              target="_blank"
              ariaLabel="View Medwave brochure"
              cssClasses="desktop:self-start"
            >
              View Brochure
            </Button>
          </div>
        </div>
        <div className="order-first relative aspect-[16/6] tablet:aspect-auto tablet:order-last desktop:aspect-[16/6]">
          <Image
            src="/assets/images/advanced-page/medwave/_MG_0876.jpg"
            alt="Medwave"
            fill
          />
        </div>
      </div>
      <AdvancedItem
        title="Why This Therapy Works"
        imageUrl="/assets/images/advanced-page/medwave/_MG_0891.jpg"
        cssClasses="flex flex-col gap-5"
      >
        <ul className="list-disc pl-4">
          <li>
            <strong>Reduces inflammation:</strong> Calms inflammatory pathways
            and promotes cellular repair.
          </li>
          <li>
            <strong>Boosts energy production:</strong> PBM increases
            mitochondrial ATP — your cells&apos; fuel source.
          </li>
          <li>
            <strong>Improves circulation:</strong> Vibration enhances blood flow
            and oxygen delivery.
          </li>
          <li>
            <strong>Enhances lymphatic drainage:</strong> Helps your body move
            fluid and detoxify.
          </li>
          <li>
            <strong>Accelerates recovery:</strong> Ideal for active individuals
            and athletes.
          </li>
          <li>
            <strong>Supports performance:</strong> Improves mobility, muscle
            activation, and recovery.
          </li>
        </ul>
      </AdvancedItem>
      <AdvancedItem
        title="How It Works"
        imageUrl="/assets/images/advanced-page/medwave/_MG_0881.jpg"
        cssClasses="flex flex-col gap-5"
        reverse
      >
        <p>
          <strong>Step 1: Vibration Plate Warm-Up (5–12 Hz)</strong>
          <br />
          Gently activates muscles, warms soft tissues, and improves
          circulation.
        </p>
        <p>
          <strong>Step 2: MedWave Red-Light Therapy</strong>
          <br />
          The 635 nm wavelength penetrates deeply into muscle and connective
          tissue, stimulating cellular healing and reducing inflammation.
        </p>
        <p>
          <strong>Step 3: Vibration Plate Recovery (12–20 Hz)</strong>
          <br />
          Promotes lymphatic drainage, reduces stiffness, and enhances metabolic
          clearance.
        </p>
      </AdvancedItem>
      <article className="grid gap-10 tablet:grid-cols-2">
        <div className="flex flex-col gap-5">
          <h3 className="text-left">What to Expect</h3>
          <div className="flex flex-col gap-5 desktop:items-start">
            <div className="flex flex-col gap-5">
              <div>
                <p>Who can benefit:</p>
                <ul className="list-disc pl-4">
                  <li>Athletes in training or competition</li>
                  <li>Muscle tightness or chronic tension</li>
                  <li>Post-injury swelling or inflammation</li>
                  <li>Office workers with stiffness</li>
                  <li>Fluid retention or lymphatic congestion</li>
                  <li>Anyone seeking improved recovery or performance</li>
                </ul>
              </div>
              <div>
                <p>During a session:</p>
                <ul className="list-disc pl-4">
                  <li>A calm, non-invasive therapy experience</li>
                  <li>Mild warmth from red light panels</li>
                  <li>Light movement on the vibration plate</li>
                  <li>No needles, no downtime, completely safe</li>
                  <li>Sessions last 20–35 minutes depending on your goals</li>
                </ul>
              </div>
            </div>
            <Button
              link="/?bookWith=Halina%20Olivier%20-%20Medwave%20Therapist#contact-form"
              backgroundColor="light brown"
              ariaLabel="Book a consultation"
            >
              Book A Consultation
            </Button>
          </div>
        </div>
        <div className="grid gap-10 order-first desktop:grid-cols-2">
          <div className="relative aspect-square tablet:aspect-auto">
            <Image
              src="/assets/images/advanced-page/medwave/_MG_0889.jpg"
              alt="What to expect"
              fill
            />
          </div>
          <div className="relative hidden aspect-auto desktop:block">
            <Image
              src="/assets/images/advanced-page/medwave/_MG_0884.jpg"
              alt="What to expect"
              fill
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Medwave;

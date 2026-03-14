import AdvancedFaqsComponent from "@/_components/advanced-page/advanced-faqs-component";
import AdvancedItem from "@/_components/advanced-page/advanced-item";
import Button from "@/_components/button";
import generalData from "@/_data/general-data.json";

const IvNutrientTherapy = () => {
  return (
    <div className="flex flex-col gap-15">
      <h2 className="text-left">IV Nutrient Therapy</h2>
      <div className="flex flex-col gap-15 tablet:gap-10">
        <p>
          Intravenous (IV) nutrient therapy delivers carefully selected
          vitamins, minerals and antioxidants directly into the bloodstream
          under medical supervision. This allows for precise dosing and enhanced
          bioavailability compared to oral supplementation.At Monks Medical, IV
          therapy is offered within a structured medical framework following
          individual consultation and assessment. Treatments are tailored to
          specific clinical needs and integrated into your broader health plan.
        </p>
        <AdvancedItem
          title="Medical & Preventative IV Therapy"
          imageUrl="/assets/images/advanced-page/iv-nutrient-therapy/monks-medical-17.jpg"
          cssClasses="flex flex-col gap-5"
        >
          <div>
            <p>
              These formulations are used within a clinical context and may
              support:
            </p>
            <ul className="list-disc pl-4">
              <li>Fatigue and burnout</li>
              <li>Immune support and recovery</li>
              <li>Nutrient deficiencies</li>
              <li>Post-illness recovery</li>
              <li>Metabolic health optimisation</li>
            </ul>
          </div>
          <p>
            All medical IV therapies are prescribed following assessment and
            administered by trained healthcare professionals in a controlled
            environment.
          </p>
        </AdvancedItem>
        <AdvancedItem
          title="Wellness & Performance IV Therapy"
          imageUrl="/assets/images/advanced-page/iv-nutrient-therapy/monks-medical-38.jpg"
          cssClasses="flex flex-col gap-5"
          reverse
          flipImage
        >
          <div>
            <p>Wellness-focused IV formulations may be considered for:</p>
            <ul className="list-disc pl-4">
              <li>Recovery after intense physical exertion</li>
              <li>General wellbeing support</li>
              <li>Travel recovery</li>
              <li>Periods of increased physiological demand</li>
            </ul>
          </div>
          <p>
            These treatments are never positioned as a replacement for proper
            medical care, nutrition or lifestyle foundations, but may complement
            a structured preventative health plan.
          </p>
        </AdvancedItem>
        <AdvancedItem
          title="What to Expect"
          imageUrl="/assets/images/advanced-page/iv-nutrient-therapy/monks-medical-22.jpg"
          cssClasses="flex flex-col gap-5 desktop:items-start"
        >
          <ul className="list-disc pl-4">
            <li>Medical consultation prior to treatment</li>
            <li>Review of medical history and suitability</li>
            <li>Individualised formulation</li>
            <li>Supervised administration</li>
            <li>Post-treatment guidance where indicated</li>
          </ul>
          <Button
            link="/?bookWith=Dr.%20Kyle%20Rorke%20-%20GP#contact-form"
            backgroundColor="light brown"
            ariaLabel="Book a consultation"
          >
            Book A Consultation
          </Button>
        </AdvancedItem>
        <AdvancedItem
          title="What to Expect"
          imageUrl="/assets/images/advanced-page/iv-nutrient-therapy/monks-medical-30.jpg"
          cssClasses="flex flex-col gap-5 desktop:items-start"
          reverse
          stretchImage
        >
          <AdvancedFaqsComponent
            items={generalData.advancedPage.ivNutrientTherapy.faqs}
            clinicalNote={
              generalData.advancedPage.ivNutrientTherapy.clinicalNote
            }
          />
        </AdvancedItem>
      </div>
    </div>
  );
};

export default IvNutrientTherapy;

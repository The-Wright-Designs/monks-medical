import AdvancedFaqsComponent from "@/_components/advanced-page/advanced-faqs-component";
import AdvancedItem from "@/_components/advanced-page/advanced-item";
import Button from "@/_components/button";
import generalData from "@/_data/general-data.json";

const PersonalisedPeptideProtocols = () => {
  return (
    <div className="flex flex-col gap-15">
      <h2 className="text-left">Personalised Peptide Protocols</h2>
      <div className="flex flex-col gap-15 tablet:gap-10">
        <p>
          Peptides are short chains of amino acids that function as signalling
          molecules within the body. Certain therapeutic peptides are being
          studied and used in medical settings for their potential role in
          tissue repair, metabolic regulation, recovery and physiological
          optimisation. At Monks Medical, peptide therapy is prescribed only
          following comprehensive medical evaluation. Protocols are
          individualised, monitored and integrated within a broader healthcare
          strategy.
        </p>
        <AdvancedItem
          title="Clinical Applications May Include"
          imageUrl="/assets/images/advanced-page/personalised-peptide-protocols/peptides-1.jpg"
          cssClasses="flex flex-col gap-5"
        >
          <div>
            <p>
              Depending on individual assessment, peptide protocols may support:
            </p>
            <ul className="list-disc pl-4">
              <li>Injury recovery and tissue repair</li>
              <li>Musculoskeletal rehabilitation</li>
              <li>Metabolic optimisation</li>
              <li>Recovery enhancement</li>
              <li>General health and longevity strategies</li>
            </ul>
          </div>
          <p>
            All prescribing is undertaken within a structured medical framework
            with appropriate monitoring.
          </p>
        </AdvancedItem>
        <AdvancedItem
          title="Our Approach to Peptide Therapy"
          imageUrl="/assets/images/advanced-page/personalised-peptide-protocols/peptides-2.jpg"
          cssClasses="flex flex-col gap-5 desktop:items-start"
          reverse
          flipImage
        >
          <div>
            <ul className="list-disc pl-4">
              <li>Comprehensive medical consultation</li>
              <li>Clear indication-based prescribing</li>
              <li>Defined treatment duration</li>
              <li>Ongoing review and monitoring</li>
              <li>
                Integration with physiotherapy and rehabilitation where
                appropriate
              </li>
            </ul>
          </div>
          <p>
            Peptides are never used as a substitute for conventional treatment
            but may be considered as an adjunct where clinically appropriate.
          </p>
          <Button
            link="/?bookWith=Dr.%20Kyle%20Rorke%20-%20GP#contact-form"
            backgroundColor="light brown"
            ariaLabel="Book a consultation"
          >
            Book A Consultation
          </Button>
        </AdvancedItem>
        <AdvancedItem
          title="Frequently Asked Questions (Peptides)"
          imageUrl=""
          cssClasses="flex flex-col gap-5"
          reverse
          stretchImage
        >
          <AdvancedFaqsComponent
            items={generalData.advancedPage.peptides.faqs}
            clinicalNote={generalData.advancedPage.peptides.clinicalNote}
          />
        </AdvancedItem>
      </div>
    </div>
  );
};

export default PersonalisedPeptideProtocols;

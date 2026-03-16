import IvNutrientTherapy from "@/_components/advanced-page/iv-nutrient-therapy";
import Medwave from "@/_components/advanced-page/medwave";
import PersonalisedPeptideProtocols from "@/_components/advanced-page/personalised-peptide-protocols";

const AdvancedPage = () => {
  return (
    <div className="flex flex-col gap-15 max-w-[1100px] pt-15 mx-7 min-[1156px]:mx-auto">
      <div id="iv-nutrient-therapy" className="scroll-mt-32">
        <IvNutrientTherapy />
      </div>
      <hr className="text-black/25" />
      <div id="personalised-peptide-protocols" className="scroll-mt-32">
        <PersonalisedPeptideProtocols />
      </div>
      <div id="medwave" className="scroll-mt-32">
        <Medwave />
      </div>
    </div>
  );
};

export default AdvancedPage;

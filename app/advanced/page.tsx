import IvNutrientTherapy from "@/_components/advanced-page/iv-nutrient-therapy";
import PersonalisedPeptideProtocols from "@/_components/advanced-page/personalised-peptide-protocols";

const AdvancedPage = () => {
  return (
    <div className="flex flex-col gap-15 max-w-[1100px] pt-15 mx-7 min-[1156px]:mx-auto">
      <IvNutrientTherapy />
      <hr className="text-black/25" />
      <PersonalisedPeptideProtocols />
    </div>
  );
};

export default AdvancedPage;

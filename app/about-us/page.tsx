import AboutUsComponent from "@/_components/about-page/about-us-component";
import MeetTheTeamComponent from "@/_components/about-page/meet-the-team-component";

const AboutUsPage = () => {
  return (
    <div className="flex flex-col gap-15 max-w-[1100px] pt-15 mx-7 min-[1156px]:mx-auto">
      <AboutUsComponent />
      <hr className="text-black/25" />
      <MeetTheTeamComponent />
    </div>
  );
};

export default AboutUsPage;

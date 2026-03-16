import { Fragment } from "react";

import data from "@/_data/general-data.json";
import MeetTheTeamItem from "@/_components/about-page/meet-the-team-item";

const MeetTheTeamComponent = () => {
  const {
    aboutPage: { team },
  } = data;

  return (
    <section className="flex flex-col gap-15 scroll-mt-32" id="meet-the-team">
      <h2>Meet The Team</h2>
      <div className="grid gap-10 tablet:grid-cols-2 desktop:grid-cols-1">
        {team.map((member, index) => (
          <Fragment key={member.name}>
            <MeetTheTeamItem
              name={member.name}
              jobTitle={member.jobTitle}
              bookWithValue={member.bookWithValue}
              bio={member.bio}
              imageUrl={member.imageUrl}
              id={member.name
                .toLowerCase()
                .replace(/\./g, "")
                .replace(/\s+/g, "-")}
              imageLeft={index % 2 !== 0}
            />
            {index < team.length - 1 && (
              <hr className="border-t border-black/20 tablet:hidden desktop:block" />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeamComponent;

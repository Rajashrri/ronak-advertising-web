import React, { useEffect } from 'react'
import team from "../assets/imgs/breadcrumb/team.webp"
import Breadcrumb from '../component/reuse/BreadCrumb'
import LeadershipTeam from '../component/team/LeadershipTeam'
import CoreTeam from '../component/team/CoreTeam'
import TeamCulture from '../component/about/TeamCulture'
import ExpertiseAchievements from '../component/team/ExpertiseAchievements'
import AboutCTA from '../component/about/AboutCTA'
const Team = () => {
    useEffect(() => {
      document.title = "Team | Ronak Advertising";
    }, []);
  return (
    <>
           <Breadcrumb
  title="Team"
  items={[
    { label: "Home", link: "/" },
    { label: "Team" },
  ]}
  bgimg={team}
/>
<LeadershipTeam/>
<CoreTeam/>
<TeamCulture/>
<ExpertiseAchievements/>
<AboutCTA/>
    </>
  )
}

export default Team
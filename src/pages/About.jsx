import React from 'react'
import Breadcrumb from '../component/reuse/BreadCrumb'
import CompanyOverview from '../component/about/CompanyOverview'
import TimelineSlider from '../component/about/TimelineSlider'
import VissionMission from '../component/about/VissionMission'
import WhyChooseUs from '../component/about/WhyChooseUs'
import Achievements from '../component/about/Achievements'
import AboutCTA from '../component/about/AboutCTA'
import aboutimg from "../assets/imgs/breadcrumb/breadcrumb.png"

const About = () => {
  return (
    <>
      <Breadcrumb
  title="About Us"
  items={[
    { label: "Home", link: "/" },
    { label: "About Us" },
  ]}
  bgimg={aboutimg}
/>
      <CompanyOverview/>
      <TimelineSlider/>
      <VissionMission/>
      <WhyChooseUs/>
      <Achievements/>
      <AboutCTA/>
    </>
  )
}

export default About
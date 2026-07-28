import React from 'react'
import Hero from '../component/home/Hero'
import WhyRonakAdvertising from '../component/home/WhyRonakAdvertising'
import AtGlance from '../component/home/AtGlance'
import HomeAbout from '../component/home/HomeAbout'
import WatchSomeVideo from '../component/home/WatchSomeVideo'
import TestimonialSlider from '../component/home/TestimonialSlider'
import HomeVideo from '../component/home/HomeVideo'
import HomeBlog from '../component/home/HomeBlog'
import Social from '../component/home/Social'
import ClientSlider from '../component/home/ClientSlider'
import LocationSlider from '../component/home/LocationSlider'

const Home = () => {
  return (
    <>
    <div className="container">
      <Hero/>
    </div>
    <WhyRonakAdvertising/>
    <AtGlance/>
    <HomeAbout/>
    <WatchSomeVideo/>
    <LocationSlider/>
    <TestimonialSlider/>
    <ClientSlider/>
    <HomeVideo/>
    <HomeBlog/>
    <Social/>
    </>
  )
}

export default Home
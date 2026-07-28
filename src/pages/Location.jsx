import React from 'react'
import Breadcrumb from '../component/reuse/BreadCrumb'
import locationimg from "../assets/imgs/breadcrumb/location.jpg"
import WhyVashi from '../component/location/WhyVashi'
import LocationListing from '../component/location/LocationListing'

const Location = () => {
  return (
    <>
         <Breadcrumb
  title="Location"
  items={[
    { label: "Home", link: "/" },
    { label: "Location" },
  ]}
  bgimg={locationimg}
/>
<WhyVashi/>
<LocationListing/>
    
    </>
  )
}

export default Location
import React, { useEffect } from 'react'
import Breadcrumb from '../component/reuse/BreadCrumb'
import locationimg from "../assets/imgs/breadcrumb/location.jpg"
import WhyVashi from '../component/location/WhyVashi'
import LocationListing from '../component/location/LocationListing'

const Location = () => {
    useEffect(() => {
      document.title = "Location | Ronak Advertising";
    }, []);
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
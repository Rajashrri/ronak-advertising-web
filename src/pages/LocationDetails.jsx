import React from 'react'
import locationdimg from "../assets/imgs/breadcrumb/location-details.png"
import Breadcrumb from '../component/reuse/BreadCrumb'
import LocationData from '../component/location/LocationData'
import InquiryForm from '../component/location/InquiryForm'
import RelatedLocations from '../component/location/RelatedLocations'

const LocationDetails = () => {
  return (
    <div className='loca-details-page'>
             <Breadcrumb
  title="Vashi Toll Naka Fcg Vashi (Middle)"
  items={[
    { label: "Home", link: "/" },
    { label: "Location", link: "/" },
    { label: "Vashi Toll Naka Fcg Vashi (Middle)" },
  ]}
  bgimg={locationdimg}
/>
<LocationData/>
<InquiryForm/>
<RelatedLocations/>
    </div>
  )
}

export default LocationDetails
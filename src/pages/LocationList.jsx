import React, { useEffect } from 'react'
import Breadcrumb from '../component/reuse/BreadCrumb'
import locationimg from "../assets/imgs/breadcrumb/location.jpg"
import LocationListing from '../component/location/LocationListing';
import LocationFilter from '../component/location/LocationFilter';

const LocationList = () => {
        useEffect(() => {
          document.title = "Location | Ronak Advertising";
        }, []);
  return (
    <div>
          <Breadcrumb
  title="Location"
  items={[
    { label: "Home", link: "/" },
    { label: "Location" },
  ]}
  bgimg={locationimg}
/>
<LocationFilter/>
    </div>
  )
}

export default LocationList
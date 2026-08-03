import { useEffect, useState } from "react";
import locationdimg from "../assets/imgs/breadcrumb/location-details.png";
import Breadcrumb from "../component/reuse/BreadCrumb";
import LocationData from "../component/location/LocationData";
import InquiryForm from "../component/location/InquiryForm";
import RelatedLocations from "../component/location/RelatedLocations";
import { getLocationDetailApi } from "../utils/frontApi";
import { useParams } from "react-router-dom";

const LocationDetails = () => {
  const { slug } = useParams();

  const [location, setLocation] = useState(null);
  const [relatedLocations, setRelatedLocations] = useState([]);

  useEffect(() => {
    fetchLocation();
  }, [slug]);

  const fetchLocation = async () => {
    try {
      const res = await getLocationDetailApi(slug);

      if (res.data.success) {
        setLocation(res.data.data);
        setRelatedLocations(res.data.relatedLocations);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (!location) return null;
  return (
    <div className="loca-details-page">
      <Breadcrumb
        title="Vashi Toll Naka Fcg Vashi (Middle)"
        items={[
          { label: "Home", link: "/" },
 {
      label: location.locationId?.locationName,
      link: `/location/${location.locationId?.slug}`,
    },          { label: location.siteName },
        ]}
        bgimg={locationdimg}
      />
      <LocationData />
      <InquiryForm />
     <RelatedLocations locations={relatedLocations} />
    </div>
  );
};

export default LocationDetails;

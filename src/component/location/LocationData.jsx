import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLocationDetailApi } from "../../utils/frontApi";
import Heading from "../reuse/Heading";
import video from "../../assets/imgs/location/location-video.png";
import gallery1 from "../../assets/imgs/location/gallery1.png";
import gallery2 from "../../assets/imgs/location/gallery2.png";
import gallery3 from "../../assets/imgs/location/gallery3.png";
import { Helmet } from "react-helmet-async";
const LocationData = () => {
  const { slug } = useParams();

    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    fetchDetail();
  }, [slug]);

  const [location, setLocation] = useState(null);
  const [relatedLocations, setRelatedLocations] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDetail();
  }, [slug]);

 const fetchDetail = async () => {
    try {
      setLoading(true);

      const res = await getLocationDetailApi(slug);

      if (res.data.success) {
        setLocation(res.data.data);
        setRelatedLocations(res.data.relatedLocations || []);
      }
    } catch (error) {
      console.error("Failed to fetch location detail:", error);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // Loader
  // =========================
  if (loading) {
    return (
      <div className="case-study-loader">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!location) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>
          {location.metaTitle ||
            `${location.siteName} | ${location.locationId.locationName} | Ronak Advertising`}
        </title>

        <meta
          name="description"
          content={
            location.metaDescription ||
            `${location.siteName} at ${location.locationId.locationName}. Outdoor advertising location by Ronak Advertising.`
          }
        />

        <meta
          name="keywords"
          content={
            location.metaKeywords ||
            `${location.siteName}, ${location.locationId.locationName}, Outdoor Advertising`
          }
        />

        <link
          rel="canonical"
          href={`${window.location.origin}/location-details/${location.slug}`}
        />
      </Helmet>
      <div className="p-70">
        {location.ytVideoLink && (
          <>
            <div className="custom-container">
              <Heading title="Drone Video Showcase" titleclass="text-black" />
            </div>

            <div className="container detail-cideo">
              <iframe
                width="100%"
                height="500"
                src={location.ytVideoLink.replace("watch?v=", "embed/")}
                title="Drone Video"
                allowFullScreen
              />

              <h4 data-gsap>
                “Experience the real visibility and impact of this advertising
                location.”
              </h4>
            </div>
          </>
        )}
        <div className="p-70">
          <div className="custom-container">
            <Heading
              title="Media Gallery"
              // subtitle="Socials"
              titleclass="text-black"
            />
            <div className="mediaimg">
              {location.mediaGallery.map((img, index) => (
                <figure key={index}>
                  <img src={img} alt="" />
                </figure>
              ))}
            </div>
          </div>
          <div className="custom-container">
            <div className="detail-box">
              <Heading
                title="Site Information"
                // subtitle="Socials"
                titleclass="text-black"
              />
              <div className="row">
                <div className="col-lg-2" data-gsap>
                  <div className="redbox">
                    <p>Media</p>
                    <h3>{location.media || "-"}</h3>
                  </div>
                </div>
                <div className="col-lg-2" data-gsap>
                  <div className="boxw">
                    <p>Type</p>
                    <h3>{location.type || "-"}</h3>
                  </div>
                </div>
                <div className="col-lg-2" data-gsap>
                  <div className="boxw">
                    <p>Site Code</p>
                    <h3>{location.siteCode || "-"}</h3>
                  </div>
                </div>
                <div className="col-lg-3" data-gsap>
                  <div className="boxw">
                    <p>Latitude</p>
                    <h3>{location.latitude || "-"}</h3>
                  </div>
                </div>
                <div className="col-lg-3" data-gsap>
                  <div className="boxw">
                    <p>Longitude</p>
                    <h3>{location.longitude || "-"}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-container mt-3">
            <div className="detail-box datalocation">
              <div
                dangerouslySetInnerHTML={{
                  __html: location.detail,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationData;

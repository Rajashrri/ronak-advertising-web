import React, { useEffect, useState } from "react";
 import { useParams } from "react-router-dom";
 import { getLocationBySlugApi } from "../../utils/frontApi";
 import billboard from "../../assets/imgs/location/billboard.png";
import shop from "../../assets/imgs/location/shop.png";
import Heading from "../reuse/Heading";

const WhyVashi = () => {


  const { slug } = useParams(); 
  const [location, setLocation] = useState(null); 
  useEffect(() =>
     { 
      if (slug) {
         fetchLocation(); 
        } 
      }, [slug]);
       const fetchLocation = async () => 
        {
           try 
           { const res = await getLocationBySlugApi(slug);
             if (res.data.success) { setLocation(res.data.location);
              
             } } 
             catch (error) { console.error("Location fetch error:", error); 

             } 
            }; 
            if (!location) { return null; }
  return (
    <div className="container mt-5 wvsection">
    <div className="why-vashi">
      <div className="container">
         <Heading
                               title={`Why ${location.locationName}`}
                                // subtitle="Socials"
                                titleclass="text-black"
                            />

        <div className="why-grid">

          {/* Left Image */}
          <div className="why-image " data-gsap>
            <img src={location.image || billboard} alt="Billboard" />
          </div>

          {/* Right Cards */}


            <div className="stat-card white-card card-1" data-gsap>
              <h3>{location.audience_reach || 0}+</h3>
              <p>Daily Audience Reach</p>
            </div>

            <div className="stat-card traffic-card card-2" data-gsap>
             <h3>{location.media_sites || 0}+</h3>
              <p>Ronak Media Sites:</p>
            </div>

         

          {/* Bottom Left */}
          <div className="traffic-card card-3" data-gsap>
            <div className="traffic-icon"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M12 18H24M3.879 25.089C3.31635 24.5265 3.00017 23.7636 3 22.968V13.032C3.00017 12.2364 3.31635 11.4735 3.879 10.911L10.911 3.879C11.4735 3.31635 12.2364 3.00017 13.032 3H22.968C23.7636 3.00017 24.5265 3.31635 25.089 3.879L32.121 10.911C32.6836 11.4735 32.9998 12.2364 33 13.032V22.968C32.9998 23.7636 32.6836 24.5265 32.121 25.089L25.089 32.121C24.5265 32.6836 23.7636 32.9998 22.968 33H13.032C12.2364 32.9998 11.4735 32.6836 10.911 32.121L3.879 25.089Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
            <p>HIGH TRAFFIC ZONE</p>
          </div>

          {/* Bottom Middle */}
          <div className="shop-card card-4" data-gsap>
            <div className="shop-content">
              <h3>
                Creative Campaigns Tailored To Your Brand's Voice
              </h3>
            </div>

            <div className="shop-image" data-gsap>
              <img src={shop} alt="Shop" />
            </div>
          </div>

          {/* Bottom Right */}
          <div className="stat-card white-card card-5" data-gsap>
            <h3>{location.ideal || "-"}</h3>
            <p>Creative Campaigns Tailored To Your Brand's Voice</p>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default WhyVashi;
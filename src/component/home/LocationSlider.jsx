import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { getLocationsApi } from "../../utils/frontApi";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../assets/imgs/location/1.png";
import img2 from "../../assets/imgs/location/2.png";
import img3 from "../../assets/imgs/location/3.png";
import img4 from "../../assets/imgs/location/4.png";
import img5 from "../../assets/imgs/location/1.png";
import img6 from "../../assets/imgs/location/2.png";
import img7 from "../../assets/imgs/location/3.png";
import img8 from "../../assets/imgs/location/4.png";

export default function LocationSlider() {
  const [locations, setLocations] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    fetchLocations();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchLocations = async () => {
    try {
      const res = await getLocationsApi();

      if (res.data.success) {
        setLocations(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Group by 4 for desktop
  const desktopSlides = [];
  for (let i = 0; i < locations.length; i += 4) {
    desktopSlides.push(locations.slice(i, i + 4));
  }

  return (
    <div className="locationslider p-70">
      <div className="container" data-gsap>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="location-slider"
        >
          {isMobile
            ? locations.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="location-grid">
                    <div className="location-card">
                      <div className="locadeta">
                        <div className="locacrad">
                          <h4>70+</h4>
                          <p>billboards</p>
                        </div>
                        <div className="locacrad">
                          <h4>10+</h4>
                          <p>Brands in Last Year</p>
                        </div>
                        <div className="locacrad">
                          <h4>5Lakh+</h4>
                          <p>Total eye balls in a day</p>
                        </div>
                      </div>

                      <img src={item.image} alt={item.locationName} />
                      <div className="overlay"></div>
                      <h3>{item.locationName}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            : desktopSlides.map((group, index) => (
                <SwiperSlide key={index}>
                  <div className="location-grid">
                    {group.map((item, i) => (
                      <div className="location-card" key={i}>
                        <div className="locadeta">
                          <div className="locacrad">
                            <h4>70+</h4>
                            <p>billboards</p>
                          </div>
                          <div className="locacrad">
                            <h4>10+</h4>
                            <p>Brands in Last Year</p>
                          </div>
                          <div className="locacrad">
                            <h4>5Lakh+</h4>
                            <p>Total eye balls in a day</p>
                          </div>
                        </div>
                        <img src={item.image} alt={item.locationName} />
                        <div className="overlay"></div>
                        <h3>{item.locationName}</h3>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
}

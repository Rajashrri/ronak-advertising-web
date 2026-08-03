import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import React, { useEffect, useState } from "react";
import { getClientsApi } from "../../utils/frontApi";

import "swiper/css";



const sliderSettings = (reverse = false) => ({
  modules: [Autoplay],
  loop: true,
  speed: 5000,
  spaceBetween: 40,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: reverse,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 8,
      spaceBetween: 35,
    },
    1200: {
      slidesPerView: 8,
      spaceBetween: 40,
    },
  },
});

export default function ClientSlider() {
   const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const res = await getClientsApi();

      if (res.data.success) {
        setClients(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (clients.length === 0) return null;

  return (
    <section className="client-section p-70 pb-0" data-gsap>
        <p>Trusted by brands across real estate, healthcare, <br /> retail, education and more.</p>

      {/* Left → Right */}
      <Swiper {...sliderSettings(true)}>
               {clients.map((item) => (

          <SwiperSlide key={item._id}>
            <div className="logo-box">
              <img
                src={item.clientLogo}
                alt={item.clientName}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right → Left */}
      <Swiper {...sliderSettings(false)} className="secondslider">
       {clients.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="logo-box">
              <img
                src={item.clientLogo}
                alt={item.clientName}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
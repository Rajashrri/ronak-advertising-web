import React from "react";
import Heading from "../reuse/Heading";
import LocationCard from "../reuse/cards/LocationCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const RelatedLocations = ({ locations = [] }) => {
  if (!locations.length) return null;

  return (
    <div className="p-70">
      <div className="custom-container">
        <Heading
          title="Related Locations"
          titleclass="text-black"
        />

        <div className="related-location-slider-wrapper">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={2}
            spaceBetween={30}
            speed={1000}
            loop={locations.length > 2}
            navigation={{
              nextEl: ".related-location-next",
              prevEl: ".related-location-prev",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              576: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="related-location-slider"
          >
            {locations.map((item) => (
              <SwiperSlide key={item.id}>
                <div data-gsap>
                  <LocationCard item={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className="related-location-navigation">
            <button
              type="button"
              className="related-location-prev"
              aria-label="Previous location"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#FA0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className="related-location-next"
              aria-label="Next location"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#FA0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedLocations;
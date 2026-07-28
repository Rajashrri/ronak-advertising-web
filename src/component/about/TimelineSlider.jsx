import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";

import img1 from "../../assets/imgs/about/slide1.png";
import img2 from "../../assets/imgs/about/slide2.jpg";
import img3 from "../../assets/imgs/about/slide3.jpg";
import img4 from "../../assets/imgs/about/slide1.png";
import img5 from "../../assets/imgs/about/slide2.jpg";

const slides = [
  {
    year: "2019",
    title: "Company Started",
    image: img1,
  },
  {
    year: "2020",
    title: "New Office",
    image: img2,
  },
  {
    year: "2021",
    title: "A Milestone Achieved",
    image: img3,
  },
  {
    year: "2022",
    title: "Expansion",
    image: img4,
  },
  {
    year: "2023",
    title: "Global Presence",
    image: img5,
  },
];

export default function TimelineSlider() {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(2);

  return (
    <div className="container">

   
    <div className="timeline" data-gsap>
      <h2>JOURNEY TIMELINE</h2>

      <div className="timeline-years">
        {slides.map((item, index) => (
          <button
            key={index}
            className={active === index ? "active" : ""}
            onClick={() => swiperRef.current?.slideToLoop(index)}
          >
            {item.year}
          </button>
        ))}
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
        initialSlide={2}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActive(swiper.realIndex)}
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
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 1.8,
            spaceBetween: 30,
          },
        }}
        className="timelineslidermail"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="timeline-card">
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
     </div>
  );
}
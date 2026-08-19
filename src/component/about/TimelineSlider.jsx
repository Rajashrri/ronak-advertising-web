import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";

import img1 from "../../assets/imgs/about/01.png";
import img2 from "../../assets/imgs/about/02.png";
import img3 from "../../assets/imgs/about/03.jpg";
import img4 from "../../assets/imgs/about/04.jpg";
import img5 from "../../assets/imgs/about/05.jpg";

const slides = [
  {
    year: "2019",
    title: "The Inception",
    image: img1,
    disc: "Founded over 33 years ago by Amardeep Singh Vig as a humble venture focused on cable TV ads and short films."
  },
  {
    year: "2020",
    title: "Pioneering OOH in Navi Mumbai",
    image: img2,
    disc: "Identified early potential in suburban infrastructure and built the foundation for Out-of-Home media network coverage across Navi Mumbai and Thane district."
  },
  {
    year: "2021",
    title: "INS Accreditation",
    image: img3,
    disc: "Became the first advertising agency in Navi Mumbai to earn official accreditation from the Indian Newspaper Society (INS)."
  },
  {
    year: "2022",
    title: "360-Degree Expansion",
    image: img4,
    disc: "Evolved into a multi-channel agency providing Print, Radio, TV, Below-the-Line (BTL) activations, Transit Media, and Digital OOH solutions alongside nationwide branch expansion."
  },
  {
    year: "2022",
    title: "Next-Gen Leadership",
    image: img5,
    disc: "Expanded executive leadership with COO Ronak Singh Vig (Cass Business School, London alumnus) driving modern operational practices and digital media growth."
  }
];

export default function TimelineSlider() {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(2);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="container">
      <div className="timeline" data-gsap>
        <h2>JOURNEY TIMELINE</h2>

     

        <Swiper
          modules={[Navigation, Autoplay]}
          centeredSlides={false}
          slidesPerView={2}
          spaceBetween={30}
          initialSlide={2}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActive(swiper.realIndex);
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
              slidesPerView: 1,
              spaceBetween: 25,
            },
            1200: {
              slidesPerView: 2,
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
                <p>{item.disc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

           {/* Custom Navigation Buttons */}
        <div className="timeline-navigation">
          <button
            type="button"
            className="timeline-prev"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15 18L9 12L15 6" stroke="#FA0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </button>

          <button
            type="button"
            className="timeline-next"
            onClick={handleNext}
            aria-label="Next slide"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9 18L15 12L9 6" stroke="#FA0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </button>
        </div>
      </div>
    </div>
  );
}
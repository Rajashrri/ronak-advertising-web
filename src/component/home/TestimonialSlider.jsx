import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// import { FaQuoteRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import { getTestimonialsApi } from "../../utils/frontApi";

import profile from "../../assets/imgs/profile.svg";

export default function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await getTestimonialsApi();

      if (res.data.success) {
        setTestimonials(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (testimonials.length === 0) return null;

  return (
    <section className="testimonial-section p-70">
      <div className="custom-container" data-gsap>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          speed={800}
          className="textmonialslider"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-card">
                <div className="quote-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="106"
                    viewBox="0 0 100 106"
                    fill="none"
                  >
                    <path
                      d="M57.6646 60.3678H79.1364C78.7378 65.7705 76.6182 70.8028 73.1958 74.4718C69.7734 78.1408 65.2967 80.1802 60.6489 80.1875C60.2345 80.1875 59.8371 80.3796 59.5441 80.7215C59.251 81.0634 59.0864 81.527 59.0864 82.0105V93.7434C59.0864 94.2269 59.251 94.6906 59.5441 95.0325C59.8371 95.3744 60.2345 95.5664 60.6489 95.5664C78.1489 95.5664 92.3833 78.9588 92.3833 58.5448V19.8606C92.3833 19.3771 92.2187 18.9134 91.9257 18.5715C91.6326 18.2297 91.2352 18.0376 90.8208 18.0376H57.6646C57.2501 18.0376 56.8527 18.2297 56.5597 18.5715C56.2667 18.9134 56.1021 19.3771 56.1021 19.8606V58.5448C56.1021 59.0283 56.2667 59.492 56.5597 59.8339C56.8527 60.1757 57.2501 60.3678 57.6646 60.3678ZM59.2271 21.6836H89.2583V58.5448C89.2583 76.3373 77.2645 90.9214 62.2114 91.8694V83.7679C73.4395 82.8309 82.327 71.8746 82.327 58.5448C82.327 58.0613 82.1624 57.5976 81.8694 57.2557C81.5764 56.9139 81.1789 56.7218 80.7645 56.7218H59.2271V21.6836ZM10.8052 60.3678H32.2802C31.8822 65.7708 29.7628 70.8036 26.3403 74.4727C22.9177 78.1419 18.4407 80.181 13.7927 80.1875C13.3783 80.1875 12.9808 80.3796 12.6878 80.7215C12.3948 81.0634 12.2302 81.527 12.2302 82.0105V93.7434C12.2302 94.2269 12.3948 94.6906 12.6878 95.0325C12.9808 95.3744 13.3783 95.5664 13.7927 95.5664C31.2927 95.5664 45.5271 78.9588 45.5271 58.5448V19.8606C45.5271 19.3771 45.3624 18.9134 45.0694 18.5715C44.7764 18.2297 44.379 18.0376 43.9646 18.0376H10.8052C10.3908 18.0376 9.99335 18.2297 9.70032 18.5715C9.4073 18.9134 9.24268 19.3771 9.24268 19.8606V58.5448C9.24268 59.0283 9.4073 59.492 9.70032 59.8339C9.99335 60.1757 10.3908 60.3678 10.8052 60.3678ZM12.3677 21.6836H42.4021V58.5448C42.4021 76.3373 30.4052 90.9214 15.3552 91.8694V83.7679C26.5833 82.8309 35.4677 71.8746 35.4677 58.5448C35.4677 58.0613 35.3031 57.5976 35.01 57.2557C34.717 56.9139 34.3196 56.7218 33.9052 56.7218H12.3677V21.6836Z"
                      fill="#CCCCCC"
                    />
                  </svg>
                </div>

                <div className="user-info">
                  <img
                   src={item.image || profile}
                    alt={item.name}
                  />
                

                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.designation}</span>
                  </div>
                </div>

                <p className="review1">{item.briefIntro}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

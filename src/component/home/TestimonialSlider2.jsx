import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { getCaseStudyTestimonialsApi } from "../../utils/frontApi";
import profile from "../../assets/imgs/profile.png";

export default function TestimonialSlider2() {
  const { slug } = useParams();

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, [slug]);

  const fetchTestimonials = async () => {
    try {
      const res = await getCaseStudyTestimonialsApi(slug);

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
      <div className="custom-container">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          speed={800}
          className="textmonialslider"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="testimonial-card">
                <div className="user-info">
                  {/* <img
                    src={item.image || profile}
                    alt={item.name}
                  /> */}

                  <div>
                    <svg width="120" height="127" viewBox="0 0 120 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60 0.5C92.8356 0.5 119.5 28.6166 119.5 63.3584C119.5 98.1002 92.8356 126.217 60 126.217C27.1644 126.217 0.5 98.1002 0.5 63.3584C0.500064 28.6166 27.1644 0.5 60 0.5Z" fill="#D9D9D9" stroke="#EBD163"/>
                    <path d="M60 65C65.5228 65 70 60.5228 70 55C70 49.4772 65.5228 45 60 45C54.4772 45 50 49.4772 50 55C50 60.5228 54.4772 65 60 65ZM60 65C64.2435 65 68.3131 66.6857 71.3137 69.6863C74.3143 72.6869 76 76.7565 76 81M60 65C55.7565 65 51.6869 66.6857 48.6863 69.6863C45.6857 72.6869 44 76.7565 44 81" stroke="#898989" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                  </div>

                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.designation}</span>
                  </div>
                </div>

                <p className="review1">
                  {item.briefIntro}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
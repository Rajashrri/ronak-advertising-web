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
                  <img
                    src={item.image || profile}
                    alt={item.name}
                  />

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
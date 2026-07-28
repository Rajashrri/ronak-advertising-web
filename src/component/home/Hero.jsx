import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  const heroRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Step 1: Whole Hero Section
      tl.from(heroRef.current, {
        y: -1000,
        // minHeight:0,
        opacity: 0,
        duration: 3,
        ease: "linear",
      });

      // Step 2: Heading from Left
      tl.from(
        ".herohead",
        {
          x: 120,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "+=0.2"
      );

      // Step 3: Bill Content from Right
      tl.from(
        ".billcont",
        {
          x: -120,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );

      // Step 4: Slider from Left
      tl.from(
        ".hero-slider",
        {
          x: 120,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (<div className="heroheight">
    <div className="hero" ref={heroRef}>
      <div className="herocontainer">
        <div className="herohead">
          <h1>
            Unlock Now the Business <span>Billboard</span> Brilliance
          </h1>
        </div>

        <div className="row g-0">
          <div className="col-lg-4">
            <div className="billcont">
              <h3>500+</h3>
              <p>
                Billboard advertising is a powerful marketing tool that helps
                businesses gain visibility.
              </p>

              <a href="#!" className="btn1">
                Read More
                <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9766 5.96094L7.60156 10.3359C7.4375 10.5 7.21875 10.582 7 10.582C6.75391 10.582 6.53516 10.5 6.37109 10.3359C6.01562 10.0078 6.01562 9.43359 6.37109 9.10547L9.24219 6.20703H0.875C0.382812 6.20703 0 5.82422 0 5.33203C0 4.86719 0.382812 4.45703 0.875 4.45703H9.24219L6.37109 1.58594C6.01562 1.25781 6.01562 0.683594 6.37109 0.355469C6.69922 0 7.27344 0 7.60156 0.355469L11.9766 4.73047C12.332 5.05859 12.332 5.63281 11.9766 5.96094Z" fill="#1A1A1A"></path></svg>
              </a>
            </div>
          </div>

          <div className="col-lg-8">
            {/* <div className="hero-slider"> */}
              <HeroSlider />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapAos() {
  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.getAll().forEach((t) => t.kill());

      const elements = gsap.utils.toArray("[data-gsap]");
      document.querySelectorAll("[data-gsap]").length

      console.log(elements);

      elements.forEach((el) => {
        gsap.from(el, {
         opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        });
      });

      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, []);
}
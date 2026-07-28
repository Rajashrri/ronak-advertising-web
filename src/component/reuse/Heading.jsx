import React from "react";

const Heading = ({ title, subtitle, className = "" , titleclass = ""}) => {
  return (
    <div className={`headingbox ${className}`} data-gsap>
      {
        subtitle &&
      <p className="subheding" data-gsap>{subtitle}</p>
      }
      <h2 data-gsap
        className={`heading ${titleclass}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
};

export default Heading;
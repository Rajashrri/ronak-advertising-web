import React, { useState } from "react";
import media from "../assets/imgs/breadcrumb/media.jpg";
import Breadcrumb from "../component/reuse/BreadCrumb";
import Casedata from "../component/case-study/Casedata";

const CaseStudydetails = () => {
  const [caseName, setCaseName] = useState("");

  return (
    <div className="casedet1">
      <Breadcrumb
        title={caseName || "Case Study Detail"}
        items={[
          { label: "Home", link: "/" },
          { label: "Case Study", link: "/case-study" },
          { label: caseName || "Case Study Detail" },
        ]}
        bgimg={media}
      />

      <Casedata setCaseName={setCaseName} />
    </div>
  );
};

export default CaseStudydetails;

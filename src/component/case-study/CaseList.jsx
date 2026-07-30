import React, { useEffect, useState } from "react";
import { getCaseStudiesApi } from "../../utils/frontApi";
import CaseStudyCard from "../reuse/CaseStudyCard";
import { Helmet } from "react-helmet-async";
const CaseList = () => {
    const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const res = await getCaseStudiesApi();

      if (res.data.success) {
        setCaseStudies(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>

    <Helmet>
    <title>Case Study | Ronak Advertising</title>

    <meta
      name="description"
      content="Explore our latest case studies and success stories from Ronak Advertising."
    />

    <meta
      property="og:title"
      content="Case Study | Ronak Advertising"
    />

    <meta
      property="og:description"
      content="Explore our latest case studies and success stories from Ronak Advertising."
    />
  </Helmet>
    <div className='p-70'>
        <div className="custom-container">
             <div className="row mt-4 casestudylistrow ">
    {caseStudies.map((item) => (
            <div className="col-lg-6" key={item._id} data-gsap>
              <CaseStudyCard
                data={{
                  id: item._id,
                  image: item.featuredImage,
                  title: item.name,
                  discription: item.briefIntro,
                  comments: item.industry,
                  slug: item.slug,
                  date: new Date(item.createdAt).toLocaleDateString(),
                  button: "Read More",
                }}
              />
            </div>
          ))}
                </div>
        </div>
    </div>
     </>
  )
}

export default CaseList
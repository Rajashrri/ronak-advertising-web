import React from 'react'

import blog1 from "../../assets/imgs/blog/case.png"
import CaseStudyCard from '../reuse/CaseStudyCard';

const CaseList = () => {
     const blogs = [
            {
              id: 1,
              image: blog1,
              date: "May 19, 2023",
              discription:"Web designing in a powerful way of just n professions, however, in  passion for a our Company. We hatendency to believe the idea that sm Technology is a broad category encompassing all aspects ",
              author: "Mesbah",
              comments: 'Industry',
              title: "Optimizing Mobile Interaction Design for Better Usability",
              button: "Read More",
            },
            {
              id: 2,
              image: blog1,
              discription:"Web designing in a powerful way of just n professions, however, in  passion for a our Company. We hatendency to believe the idea that sm Technology is a broad category encompassing all aspects ",
              date: "May 19, 2023",
              author: "Mesbah",
              comments: "Industry",
              title: "Optimizing Mobile Interaction Design for Better Usability",
              button: "Read More",
            },
              {
              id: 1,
              image: blog1,
              discription:"Web designing in a powerful way of just n professions, however, in  passion for a our Company. We hatendency to believe the idea that sm Technology is a broad category encompassing all aspects ",
              date: "May 19, 2023",
              author: "Mesbah",
              comments: 'Industry',
              title: "Optimizing Mobile Interaction Design for Better Usability",
              button: "Read More",
            },
            {
              id: 2,
              image: blog1,
              discription:"Web designing in a powerful way of just n professions, however, in  passion for a our Company. We hatendency to believe the idea that sm Technology is a broad category encompassing all aspects ",
              date: "May 19, 2023",
              author: "Mesbah",
              comments: "Industry",
              title: "Optimizing Mobile Interaction Design for Better Usability",
              button: "Read More",
            },
          ];
  return (
    <div className='p-70'>
        <div className="custom-container">
             <div className="row mt-4 casestudylistrow ">

                   {blogs.map((item, index) => {
                        return (
                            <div className="col-lg-6" data-gsap key={index}>
                            <CaseStudyCard data={item} />
                            </div>
                        );
                        })}
                </div>
        </div>
    </div>
  )
}

export default CaseList
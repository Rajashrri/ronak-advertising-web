import React from 'react'
import Heading from '../reuse/Heading'
import img1 from "./../../assets/imgs/about/ab1.png"
import img2 from "./../../assets/imgs/about/ab2.png"

const CompanyOverview = () => {
  return (
    <div className='p-70 companyoverview'>
        <div className="custom-container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="overfloae">
                         <Heading
                                title="Company Overview"
                                subtitle="Overview"
                                titleclass="text-black"
                            />
                            <p data-gsap>Web designing in a powerful way of just n professions, however, in  passion for a our Company. We hatendency to believe the idea that sm Technology is a broad category encompassing all aspects Web designing in a powerful = Web designing in a powerful way of just n professions, however, in  passion for a our Company. We hatendency to believe the idea that sm Technology is a broad category encompassing all aspects Web designing in a powerful =</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="aboutcover" data-gsap>
                        <figure data-gsap className='ab1'>
                            <img src={img1} alt="" />
                        </figure>
                        <figure className='ab2'>
                            <img src={img2} alt="" />
                        </figure>
                    </div>
                </div>
            </div>


        </div>

    </div>
  )
}

export default CompanyOverview
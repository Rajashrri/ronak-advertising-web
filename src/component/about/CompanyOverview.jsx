import React from 'react'
import Heading from '../reuse/Heading'
import img1 from "./../../assets/imgs/about/ab1.png"
import img2 from "./../../assets/imgs/about/ab2.png"

const CompanyOverview = () => {
  return (
    <div className='p-70 companyoverview'>
        <div className="why-container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="overfloae">
                         <Heading
                                title="More Than Media Owners. Partners In Visibility."
                                subtitle="Overview"
                                titleclass="text-black"
                            />
                            <div className="abdisk">

                            <p data-gsap>Ronak Advertising was founded with a simple belief — visibility creates opportunity.</p>
                            <p data-gsap>What began as a focused outdoor media company has evolved into one of Navi Mumbai's most established advertising partners, helping brands connect with audiences through high-impact outdoor campaigns and integrated media solutions.</p>
                            <p data-gsap>Our understanding of the city, its movement patterns and its growth corridors allows us to place brands where attention naturally exists.</p>
                            <p data-gsap>Today, Ronak continues to work with businesses across industries including real estate, healthcare, retail, education, finance and infrastructure.</p>
                            </div>
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
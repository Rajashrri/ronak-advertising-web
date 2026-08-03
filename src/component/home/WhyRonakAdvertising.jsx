import React from 'react'
import Heading from '../reuse/Heading'
import billboard1 from "./../../assets/imgs/billboard/billboard1.png"
import billboard2 from "./../../assets/imgs/billboard/billboard2.png"
// import billboard3 from "./../assets/imgs/billboard/billboard3.png"
import billboard3 from "./../../assets/imgs/billboard/billboard3.png"
const WhyRonakAdvertising = () => {
  return (
    <div className='p-70 avertising'>
        <Heading
        title="BUILD A BIGGER PRESENCE <br/>ACROSS THE CITY"
        subtitle="Why Outdoor with Ronak"
        className="text-center"
        />

        <div className="custom-container mt-40">
            <div className="row">
                <div className="col-lg-4">
                    <div className="billboard" data-gsap>
                        <figure>
                            <img src={billboard1} alt="" />
                        </figure>
                        <h3>PRIME LOCATIONS THAT MATTER</h3>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="billboard" data-gsap>
                        <figure>
                            <img src={billboard2} alt="" />
                        </figure>
                        <h3>MEDIA BUILT TO COMMAND ATTENTION</h3>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="billboard" data-gsap>
                        <figure>
                            <img src={billboard3} alt="" />
                        </figure>
                        <h3>PLANNING BACKED BY LOCAL INTELLIGENCE</h3>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default WhyRonakAdvertising
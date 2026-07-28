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
        title="Supercharge Your Business with </br> Billboards"
        subtitle="Why Ronak Advertising"
        className="text-center"
        />

        <div className="custom-container mt-40">
            <div className="row">
                <div className="col-lg-4">
                    <div className="billboard" data-gsap>
                        <figure>
                            <img src={billboard1} alt="" />
                        </figure>
                        <h3>Illuminate Your Business with Billboard </h3>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="billboard" data-gsap>
                        <figure>
                            <img src={billboard2} alt="" />
                        </figure>
                        <h3>Unleash the Power  of  Advertising</h3>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="billboard" data-gsap>
                        <figure>
                            <img src={billboard3} alt="" />
                        </figure>
                        <h3>Unlock the Potential of Outdoor Marketing </h3>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default WhyRonakAdvertising
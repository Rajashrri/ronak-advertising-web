import React from 'react'
import Heading from '../reuse/Heading'

const AtGlance = () => {
  return (
    <div className='p-70'>
        <div className="custom-container">
            <div className="row">
                <div className="col-lg-6">
                     <Heading
                    title="OUTDOOR ADVERTISING THAT DELIVERS"
                    subtitle="RONAK AT A GLANCE"
                    titleclass="text-black"
                    // className="text-left"
                    />
                </div>
                <div className="col-lg-6">
                    <div className="row atroe">
                        <div className="col-lg-6 col-md-6">
                            <div className="atbox" data-gsap>
                                <h2>200+</h2>
                                <p>Prime Media Sites</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="atbox" data-gsap>
                                <h2>12m+</h2>
                                <p>Monthly Audience Exposure</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="atbox" data-gsap>
                                <h2>200k+</h2>
                                <p>Daily Commuter Reach</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="atbox" data-gsap>
                                <h2>500+</h2>
                                <p>Campaigns Delivered</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AtGlance
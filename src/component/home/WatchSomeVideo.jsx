import React from 'react'
import map from "../../assets/imgs/map.png"
import Heading from '../reuse/Heading'
const WatchSomeVideo = () => {
  return (
    <div className='p-70 watchsection'>
        <div className="custom-container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="mapbox" data-gsap>
                        <figure>
                            <img src={map} alt="" />
                        </figure>
                     
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="blogcontent wtachccntainer">
                             <Heading
                    title="WE PIONEERED OOH ADVERTISING IN NAVI MUMBAI"
                    subtitle="WHERE IT ALL BEGAN"
                    titleclass="text-black"
                    />
                    <p className='mb-0' data-gsap>As Navi Mumbai grew, Ronak helped shape its outdoor media landscape. Today, our network connects brands with audiences across the city’s most important commercial, residential and transit corridors.</p>
                      
                      <div className="input whatcv" data-gsap>
                        <input type="text" placeholder='Search by area or location' />
                        <button>
                            Explore
                        </button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WatchSomeVideo
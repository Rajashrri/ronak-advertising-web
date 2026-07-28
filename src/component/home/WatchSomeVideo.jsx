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
                    title="We Pioneered OOH Advertising in Mumbai"
                    subtitle="Watch Some Video"
                    titleclass="text-black"
                    />
                    <p className='mb-0' data-gsap>Billboard advertising is a powerful marketing tool that he businesses gain visibility and reach their target audience</p>
                      
                      <div className="input" data-gsap>
                        <input type="text" placeholder='street address or zip/postal code' />
                        <button>
                            Go
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
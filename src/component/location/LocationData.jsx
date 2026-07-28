import React from 'react'
import Heading from '../reuse/Heading'
import video from "../../assets/imgs/location/location-video.png"
import gallery1 from "../../assets/imgs/location/gallery1.png"
import gallery2 from "../../assets/imgs/location/gallery2.png"
import gallery3 from "../../assets/imgs/location/gallery3.png"

const LocationData = () => {
  return (
    <div className='p-70'>
        <div className="custom-container">
               <Heading
                                title="Drone Video Showcase"
                                // subtitle="Socials"
                                titleclass="text-black"
                            />
        </div>
        <div className="container detail-cideo">
            <figure data-gsap>
                <img src={video} alt="" />
            </figure>
            <h4 data-gsap>“Experience the real visibility and impact of this advertising location.”</h4>
        </div>
        <div className="p-70">
            <div className="custom-container">
                <Heading
                    title="Media Gallery"
                    // subtitle="Socials"
                    titleclass="text-black"
                />
                <div className="mediaimg">
                    <figure data-gsap>
                        <img src={gallery1} alt="" />
                    </figure>
                    <figure data-gsap>
                        <img src={gallery2} alt="" />
                    </figure>
                    <figure data-gsap>
                        <img src={gallery3} alt="" />
                    </figure>
                </div>
            </div>
                <div className="custom-container">
                    <div className="detail-box">
                            <Heading
                                title="Site Information"
                                // subtitle="Socials"
                                titleclass="text-black"
                            />
                        <div className="row">
                            <div className="col-lg-2" data-gsap>
                                <div className="redbox">
                                    <p>Media</p>
                                    <h3>Hoarding</h3>
                                </div>
                            </div>
                            <div className="col-lg-2" data-gsap>
                                <div className="boxw">
                                    <p>Type</p>
                                    <h3>LED</h3>
                                </div>
                            </div>
                            <div className="col-lg-2" data-gsap>
                                <div className="boxw">
                                    <p>Site Code</p>
                                    <h3>RV-VT-002</h3>
                                </div>
                            </div>
                            <div className="col-lg-3" data-gsap>
                                <div className="boxw">
                                    <p>Latitude</p>
                                    <h3>19.064157″N</h3>
                                </div>
                            </div>
                            <div className="col-lg-3" data-gsap>
                                <div className="boxw">
                                    <p>Longitude</p>
                                    <h3>72.979840″E</h3>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
             <div className="custom-container mt-3">
                    <div className="detail-box datalocation">
                           <h2>Detailed Information</h2>
                            <p>Located on busy Main Street near the Central Library and Innovation Park, our advertising agency's hoarding spot offers excellent traffic visibility. This strategic location attracts tech enthusiasts, entrepreneurs, and creatives, ensuring your message reaches a diverse and engaged audience. Surrounded by vibrant landmarks and easy to access, this site maximizes exposure and drives impactful results for your brand.Located on busy Main Street near the Central Library and Innovation Park, our advertising agency's hoarding spot offers excellent traffic visibility. This strategic location attracts tech enthusiasts, entrepreneurs, and creatives, ensuring your message reaches a diverse and engaged audience. Surrounded by vibrant landmarks and easy to access, this site maximizes exposure and drives impactful results for your brand.</p>
                            <p>Located on busy Main Street near the Central Library and Innovation Park, our advertising agency's hoarding spot offers excellent traffic visibility. This strategic location attracts tech enthusiasts, entrepreneurs, and creatives, ensuring your message reaches a diverse and engaged audience. Surrounded by vibrant landmarks and easy to access, this site maximizes exposure and drives impactful results for your brand.Located on busy Main Street near the Central Library and Innovation Park, our advertising agency's hoarding spot offers excellent traffic visibility. This strategic location attracts tech enthusiasts, entrepreneurs, and creatives, ensuring your message reaches a diverse and engaged audience. Surrounded by vibrant landmarks and easy to access, this site maximizes exposure and drives impactful results for your brand.</p>
                      
                </div>
            </div>
        </div>
    </div>
  )
}

export default LocationData
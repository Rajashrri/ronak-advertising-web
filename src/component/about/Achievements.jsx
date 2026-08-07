import React from 'react'
import Heading from '../reuse/Heading'
import why1 from "../../assets/imgs/about/why1.png"
import why2 from "../../assets/imgs/about/why2.png"
import why3 from "../../assets/imgs/about/why3.png"
import why4 from "../../assets/imgs/about/why4.png"

const Achievements = () => {
    return (
        <div className='p-70'>
            <div className="achievements-container">
                <Heading
                    title="Achievements"
                    // subtitle="Latest Blog"
                    titleclass="text-black text-center"
                />
                <div className="row">
                    <div className="col-lg-7 col-md-6" data-gsap>
                        <div className="achievements-box hoverimg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 17V21M8 21H16M11 13C10.4501 12.9997 9.9108 12.8483 9.44112 12.5622C8.97144 12.2762 8.58942 11.8665 8.33681 11.3781C8.0842 10.8896 7.97072 10.3411 8.00876 9.79245C8.04681 9.24384 8.23492 8.71624 8.55254 8.26731C8.87016 7.81837 9.30506 7.46538 9.80973 7.24691C10.3144 7.02843 10.8694 6.95288 11.4141 7.0285C11.9588 7.10413 12.4723 7.32802 12.8983 7.67571C13.3244 8.0234 13.6467 8.48152 13.83 9H14C14.5304 9 15.0391 9.21071 15.4142 9.58579C15.7893 9.96086 16 10.4696 16 11C16 11.5304 15.7893 12.0391 15.4142 12.4142C15.0391 12.7893 14.5304 13 14 13H11ZM4 3H20C21.1046 3 22 3.89543 22 5V15C22 16.1046 21.1046 17 20 17H4C2.89543 17 2 16.1046 2 15V5C2 3.89543 2.89543 3 4 3Z" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h3> Years of Industry Experience</h3>
                            </div>
                            <h2>32+</h2>
                            <figure>
                                <img src={why1} alt="" />
                            </figure>

                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6" data-gsap>
                        <div className="achievements-box hoverimg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M13 17V9M18 17V5M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21M8 17V14" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h3> Premium Media Locations</h3>
                            </div>
                            <h2>200+</h2>
                               <figure>
                                <img src={why1} alt="" />
                            </figure>

                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6" data-gsap>
                        <div className="achievements-box hoverimg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 22C9.34784 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 2.94821 19.0711 4.63604C20.9464 6.32387 22 8.61305 22 11C22 12.3261 21.4732 13.5979 20.5355 14.5355C19.5979 15.4732 18.3261 16 17 16H14.75C14.425 16 14.1064 16.0905 13.83 16.2614C13.5535 16.4322 13.3301 16.6767 13.1848 16.9674C13.0394 17.2581 12.9779 17.5835 13.0071 17.9072C13.0363 18.2308 13.155 18.54 13.35 18.8L13.65 19.2C13.845 19.46 13.9637 19.7692 13.9929 20.0928C14.0221 20.4165 13.9606 20.7419 13.8152 21.0326C13.6699 21.3233 13.4465 21.5678 13.17 21.7386C12.8936 21.9095 12.575 22 12.25 22H12Z" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.5 7C13.7761 7 14 6.77614 14 6.5C14 6.22386 13.7761 6 13.5 6C13.2239 6 13 6.22386 13 6.5C13 6.77614 13.2239 7 13.5 7Z" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17.5 11C17.7761 11 18 10.7761 18 10.5C18 10.2239 17.7761 10 17.5 10C17.2239 10 17 10.2239 17 10.5C17 10.7761 17.2239 11 17.5 11Z" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.5 13C6.77614 13 7 12.7761 7 12.5C7 12.2239 6.77614 12 6.5 12C6.22386 12 6 12.2239 6 12.5C6 12.7761 6.22386 13 6.5 13Z" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.5 8C8.77614 8 9 7.77614 9 7.5C9 7.22386 8.77614 7 8.5 7C8.22386 7 8 7.22386 8 7.5C8 7.77614 8.22386 8 8.5 8Z" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h3>Successful Campaigns Delivered</h3>
                            </div>
                            <h2>500+</h2>
                               <figure>
                                <img src={why1} alt="" />
                            </figure>

                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6" data-gsap>
                        <div className="achievements-box hoverimg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 21C18 18.8783 17.1571 16.8434 15.6569 15.3431C14.1566 13.8429 12.1217 13 10 13M10 13C7.87827 13 5.84344 13.8429 4.34315 15.3431C2.84285 16.8434 2 18.8783 2 21M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13ZM22 20C22 16.63 20 13.5 18 12C18.6574 11.5068 19.1831 10.8591 19.5306 10.1143C19.878 9.36945 20.0365 8.55047 19.992 7.7298C19.9475 6.90913 19.7014 6.11209 19.2755 5.4092C18.8495 4.70631 18.2569 4.11926 17.55 3.7" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h3> Brands Served Across Industries</h3>
                            </div>
                            <h2>100+</h2>
                               <figure>
                                <img src={why1} alt="" />
                            </figure>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievements
import React from 'react'
import Heading from '../reuse/Heading'
import why1 from "../../assets/imgs/about/why1.png"
const ExpertiseAchievements = () => {
    return (
        <div className='p-70'>
            <div className="achievements-container">
                <Heading
                    title="Expertise & Achievements"
                    // subtitle="Latest Blog"
                    titleclass="text-black text-center"
                />
                <div className="row">
                    <div className="col-lg-7">
                        <div className="achievements-box hoverimg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 17V21M8 21H16M11 13C10.4501 12.9997 9.9108 12.8483 9.44112 12.5622C8.97144 12.2762 8.58942 11.8665 8.33681 11.3781C8.0842 10.8896 7.97072 10.3411 8.00876 9.79245C8.04681 9.24384 8.23492 8.71624 8.55254 8.26731C8.87016 7.81837 9.30506 7.46538 9.80973 7.24691C10.3144 7.02843 10.8694 6.95288 11.4141 7.0285C11.9588 7.10413 12.4723 7.32802 12.8983 7.67571C13.3244 8.0234 13.6467 8.48152 13.83 9H14C14.5304 9 15.0391 9.21071 15.4142 9.58579C15.7893 9.96086 16 10.4696 16 11C16 11.5304 15.7893 12.0391 15.4142 12.4142C15.0391 12.7893 14.5304 13 14 13H11ZM4 3H20C21.1046 3 22 3.89543 22 5V15C22 16.1046 21.1046 17 20 17H4C2.89543 17 2 16.1046 2 15V5C2 3.89543 2.89543 3 4 3Z" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h3>Campaigns Managed</h3>
                            </div>
                            <h2>200+</h2>
                             <figure>
                                                            <img src={why1} alt="" />
                                                        </figure>

                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="achievements-box hoverimg">
                            <div>
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M5 22H19M5 2H19M17 22V17.828C16.9999 17.2976 16.7891 16.789 16.414 16.414L12 12M12 12L7.586 16.414C7.2109 16.789 7.00011 17.2976 7 17.828V22M12 12L7.586 7.586C7.2109 7.21101 7.00011 6.70239 7 6.172V2M12 12L16.414 7.586C16.7891 7.21101 16.9999 6.70239 17 6.172V2" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                                <h3>Years Experience</h3>
                            </div>
                            <h2>15+</h2>
                             <figure>
                                                            <img src={why1} alt="" />
                                                        </figure>

                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="achievements-box hoverimg">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.601 21.799C14.461 20.193 20 14.993 20 10C20 7.87827 19.1571 5.84344 17.6569 4.34315C16.1566 2.84285 14.1217 2 12 2C9.87827 2 7.84344 2.84285 6.34315 4.34315C4.84285 5.84344 4 7.87827 4 10C4 14.993 9.539 20.193 11.399 21.799C11.5723 21.9293 11.7832 21.9998 12 21.9998C12.2168 21.9998 12.4277 21.9293 12.601 21.799Z" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                                <h3>Premium Locations</h3>
                            </div>
                            <h2>100+</h2>
                             <figure>
                                                            <img src={why1} alt="" />
                                                        </figure>

                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="achievements-box hoverimg">
                            <div>
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_9316_319)">
                                            <path d="M12.6393 21.7716C12.8189 21.6225 12.9406 21.4153 12.9834 21.186C13.3283 19.1355 14.3037 17.2436 15.7739 15.7734C17.2441 14.3032 19.136 13.3278 21.1864 12.983C21.4158 12.9401 21.623 12.8184 21.7721 12.6389C21.9212 12.4593 22.0028 12.2333 22.0028 12C22.0028 11.7666 21.9212 11.5406 21.7721 11.3611C21.623 11.1815 21.4158 11.0598 21.1864 11.017C19.136 10.6721 17.2441 9.69673 15.7739 8.22651C14.3037 6.75629 13.3283 4.86436 12.9834 2.81395C12.9406 2.58456 12.8189 2.37737 12.6393 2.22827C12.4598 2.07917 12.2338 1.99756 12.0004 1.99756C11.7671 1.99756 11.5411 2.07917 11.3615 2.22827C11.182 2.37737 11.0603 2.58456 11.0174 2.81395C10.6726 4.86436 9.69722 6.75629 8.227 8.22651C6.75678 9.69673 4.86485 10.6721 2.81444 11.017C2.58504 11.0598 2.37786 11.1815 2.22876 11.3611C2.07966 11.5406 1.99805 11.7666 1.99805 12C1.99805 12.2333 2.07966 12.4593 2.22876 12.6389C2.37786 12.8184 2.58504 12.9401 2.81444 12.983C4.86485 13.3278 6.75678 14.3032 8.227 15.7734C9.69722 17.2436 10.6726 19.1355 11.0174 21.186C11.0603 21.4153 11.182 21.6225 11.3615 21.7716C11.5411 21.9207 11.7671 22.0023 12.0004 22.0023C12.2338 22.0023 12.4598 21.9207 12.6393 21.7716Z" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_9316_319">
                                            <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                        </svg>
                                <h3>Successful Brand Promotions</h3>
                            </div>
                            <h2>1000+</h2>
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

export default ExpertiseAchievements
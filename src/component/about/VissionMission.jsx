import React from 'react'
import vission from "../../assets/imgs/about/vission.png"
import mission from "../../assets/imgs/about/mission.png"

const VissionMission = () => {
  return (
    <div className='vission p-70'>
        <div className="custom-container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="visson-cotent" data-gsap>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <path d="M3.09181 17.4781C2.96679 17.8148 2.96679 18.1853 3.09181 18.5221C4.30936 21.4743 6.37608 23.9985 9.02996 25.7747C11.6838 27.5509 14.8054 28.4991 17.9988 28.4991C21.1922 28.4991 24.3138 27.5509 26.9676 25.7747C29.6215 23.9985 31.6883 21.4743 32.9058 18.5221C33.0308 18.1853 33.0308 17.8148 32.9058 17.4781C31.6883 14.5258 29.6215 12.0016 26.9676 10.2254C24.3138 8.44919 21.1922 7.50098 17.9988 7.50098C14.8054 7.50098 11.6838 8.44919 9.02996 10.2254C6.37608 12.0016 4.30936 14.5258 3.09181 17.4781Z" stroke="#2C2C2C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.9988 22.5001C20.4841 22.5001 22.4988 20.4853 22.4988 18.0001C22.4988 15.5148 20.4841 13.5001 17.9988 13.5001C15.5135 13.5001 13.4988 15.5148 13.4988 18.0001C13.4988 20.4853 15.5135 22.5001 17.9988 22.5001Z" stroke="#2C2C2C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h2>Vision</h2>
                        <p>Billboard advertising is a powerful marketing tool  businesses gain an visibility and reach their target audience  advertising is a powerful a marketing tool that he business</p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="vissonimg" data-gsap>
                        <img src={vission} alt="" />
                    </div>
                </div>
                   <div className="col-lg-7">
                    <div className="vissonimg" data-gsap>
                        <img src={mission} alt="" />
                    </div>
                </div>
                  <div className="col-lg-5">
                    <div className="visson-cotent" data-gsap>
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z" stroke="#2C2C2C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18 27C22.9706 27 27 22.9706 27 18C27 13.0294 22.9706 9 18 9C13.0294 9 9 13.0294 9 18C9 22.9706 13.0294 27 18 27Z" stroke="#2C2C2C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z" stroke="#2C2C2C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h2>Mission</h2>
                        <p>Billboard advertising is a powerful marketing tool  businesses gain an visibility and reach their target audience  advertising is a powerful a marketing tool that he business</p>
                    </div>
                </div>
             
            </div>
        </div>
    </div>
  )
}

export default VissionMission
import React from 'react'
import Heading from '../reuse/Heading'
import culture1 from "../../assets/imgs/team/culture1.webp"
import culture2 from "../../assets/imgs/team/culture2.webp"
import culture3 from "../../assets/imgs/team/culture3.webp"

const TeamCulture = () => {
  return (
    <div className='teamculture p-70'>
        <div className="custom-container">
            <div className="teanhead">
                   <Heading
                    title="Team Culture"
                    // subtitle="Latest Blog"
                    titleclass="text-black text-center"
                    />
                    <p>“A strong work culture turns individual efforts into collective success and inspires everyone to grow together.”</p>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <figure>
                        <img src={culture1} alt="" />
                    </figure>
                </div>
                <div className="col-lg-6">
                    <figure>
                        <img src={culture2} alt="" />
                    </figure>
                </div>
                <div className="col-lg-6">
                    <figure>
                        <img src={culture3} alt="" />
                    </figure>
                </div>
            </div>

        </div>
    </div>
  )
}

export default TeamCulture
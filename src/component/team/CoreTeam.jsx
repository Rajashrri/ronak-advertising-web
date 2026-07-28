import React from "react";
// import "./CoreTeam.css";

import img1 from "../../assets/imgs/team/core1.png";
import img2 from "../../assets/imgs/team/core2.png";
import img3 from "../../assets/imgs/team/core3.png";
import Heading from "../reuse/Heading";

const team = [
  {
    id: 1,
    name: "JHONE DOE",
    role: "BRAND DESIGNER",
    image: img1,
  },
  {
    id: 2,
    name: "EMILY CLARK",
    role: "ART DIRECTOR",
    image: img2,
  },
  {
    id: 3,
    name: "MICHAEL BENNETT",
    role: "PROJECT MANAGER",
    image: img3,
  },
  {
    id: 4,
    name: "JHONE DOE",
    role: "BRAND DESIGNER",
    image: img1,
  },
  {
    id: 5,
    name: "EMILY CLARK",
    role: "ART DIRECTOR",
    image: img2,
  },
  {
    id: 6,
    name: "MICHAEL BENNETT",
    role: "PROJECT MANAGER",
    image: img3,
  },
];

const CoreTeam = () => {
  return (
    <section className="core-team">
      <div className="custom-container">

           <Heading
                    title="Core Team"
                    // subtitle="Latest Blog"
                    titleclass="text-black text-center"
                    />

        <div className="core-grid">
          {team.map((item) => (
            <div className="core-card" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="core-info">

                <div className="core-content">
                <div className="triangle"></div>
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreTeam;
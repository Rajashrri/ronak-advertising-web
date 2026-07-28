import React, { useState } from "react";
import img1 from "../../assets/imgs/location/locationlist.png";
import LocationCard from "../reuse/cards/LocationCard";

const locations = [
  {
    id: 1,
    category: "Hoarding",
    title: "VASHI TOLL NAKA FCG VASHI (MIDDLE)",
    media: "Palm Media",
    siteCode: "VNM001",
    image: img1,
  },
  {
    id: 2,
    category: "Bill Board",
    title: "VASHI TOLL NAKA FCG VASHI (MIDDLE)",
    media: "Palm Media",
    siteCode: "VNM002",
    image: img1,
  },
  {
    id: 3,
    category: "Digital Screen",
    title: "VASHI TOLL NAKA FCG VASHI (MIDDLE)",
    media: "Palm Media",
    siteCode: "VNM003",
    image: img1,
  },
  {
    id: 4,
    category: "Hoarding",
    title: "VASHI TOLL NAKA FCG VASHI (MIDDLE)",
    media: "Palm Media",
    siteCode: "VNM004",
    image: img1,
  },
  {
    id: 5,
    category: "Bill Board",
    title: "VASHI TOLL NAKA FCG VASHI (MIDDLE)",
    media: "Palm Media",
    siteCode: "VNM005",
    image: img1,
  },
  {
    id: 6,
    category: "Digital Screen",
    title: "VASHI TOLL NAKA FCG VASHI (MIDDLE)",
    media: "Palm Media",
    siteCode: "VNM006",
    image: img1,
  },
];

const filters = ["All", "Hoarding", "Bill Board", "Digital Screen"];

const LocationListing = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredLocations =
    activeFilter === "All"
      ? locations
      : locations.filter((item) => item.category === activeFilter);

  return (
    <section className="location-section">
      <div className="custom-container">
        {/* Filter */}
        <div className="location-filter">
          {filters.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "active" : ""}
              onClick={() => setActiveFilter(filter)}
              data-gsap
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="row">
          {filteredLocations.map((item) => (
            <div className="col-lg-6" key={item.id} data-gsap>
             <LocationCard item={item}/>
            </div>
          ))}

          {filteredLocations.length === 0 && (
            <div className="col-12 text-center">
              <h3>No locations found.</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LocationListing;
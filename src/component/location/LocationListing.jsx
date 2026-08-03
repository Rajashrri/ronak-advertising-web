import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getLocationBySlugApi } from "../../utils/frontApi";
import LocationCard from "../reuse/cards/LocationCard";

const LocationListing = () => {
  const { slug } = useParams();

  const [locations, setLocations] = useState([]);
  const [filters, setFilters] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  useEffect(() => {
    fetchLocation();
  }, [slug]);

  const fetchLocation = async () => {
    const res = await getLocationBySlugApi(slug);

    if (res.data.success) {
      setLocations(res.data.data);
      setFilters(["All", ...res.data.filters]);
    }
  };

  const filteredLocations =
    activeFilter === "All"
      ? locations
      : locations.filter((item) => item.mediaType === activeFilter);
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
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="row">
          {filteredLocations.map((item) => (
            <div className="col-lg-6" key={item.id} data-gsap>
              <LocationCard item={item} />
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

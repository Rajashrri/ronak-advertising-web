import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getLocationBySlugApi } from "../../utils/frontApi";
import LocationCard from "../reuse/cards/LocationCard";

const LocationListing = () => {
  const { slug } = useParams();

  const [locations, setLocations] = useState([]);
  const [filters, setFilters] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLocation();
  }, [slug]);

  const fetchLocation = async () => {
    try {
      setLoading(true);

      const res = await getLocationBySlugApi(slug);

      if (res.data.success) {
        setLocations(res.data.data);
        setFilters(["All", ...res.data.filters]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const locationName =
    locations.length > 0
      ? locations[0]?.locationId?.locationName
      : "";

  const filteredLocations =
    activeFilter === "All"
      ? locations
      : locations.filter((item) => item.mediaType === activeFilter);

  return (
    <>
      <Helmet>
        <title>
          {locationName
            ? `Location | ${locationName} | Ronak Advertising`
            : "Location | Ronak Advertising"}
        </title>

        <meta
          name="description"
          content={`Explore advertising locations in ${locationName}.`}
        />
      </Helmet>

      <section className="location-section">
        <div className="custom-container">

          {/* Loader */}
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <>
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
                    <h3>No data found.</h3>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default LocationListing;
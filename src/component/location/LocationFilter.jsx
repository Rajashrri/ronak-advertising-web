import React, { useEffect, useMemo, useState } from "react";
import {
  getLocationFiltersApi,
  getLocationSitesApi,
} from "../../utils/frontApi";
import LocationCard from "../reuse/cards/LocationCard";

import locationImg from "../../assets/imgs/location/locationlist.png";

// ==========================================
// DUMMY LOCATION DATA
// ==========================================

// ==========================================
// LOCATION FILTER COMPONENT
// ==========================================

const LocationFilter = () => {
  const [locations, setLocations] = useState([]);
  const [mediaTypes, setMediaTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedMediaType, setSelectedMediaType] = useState("all");
  const [locationCards, setLocationCards] = useState([]);
  // ==========================================
  // GET UNIQUE LOCATIONS
  // ==========================================

  // ==========================================
  // FILTER LOCATIONS
  // ==========================================
  const filteredLocations = useMemo(() => {
    return locationCards.filter((item) => {
      const locationMatch =
        selectedLocation === "all" || item.locationId?._id === selectedLocation;

      const mediaTypeMatch =
        selectedMediaType === "all" || item.mediaType === selectedMediaType;

      return locationMatch && mediaTypeMatch;
    });
  }, [locationCards, selectedLocation, selectedMediaType]);

  useEffect(() => {
    getFilters();
    getLocationCards();
  }, []);
  const getLocationCards = async () => {
    try {
      setLoading(true);

      const res = await getLocationSitesApi();

      if (res.data.success) {
        setLocationCards(res.data.data || []);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getFilters();
  }, []);

  const getFilters = async () => {
    try {
      const res = await getLocationFiltersApi();

      if (res.data.success) {
        setLocations(res.data.locations || []);
        setMediaTypes(res.data.mediaTypes || []);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="location-section pt-3">
      <div className="custom-container">
        {/* ==========================================
            FILTERS
        ========================================== */}

        <div className="location-filter">
          {/* LOCATION */}
          <div className="custom-select">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="all">All Locations</option>

              {locations.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.locationName}
                </option>
              ))}
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="#F5F5F5"
                stroke-width="1.5"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>{" "}
          </div>

          {/* MEDIA TYPE */}
          <div className="custom-select">
            {/* Media Type */}
            <select
              value={selectedMediaType}
              onChange={(e) => setSelectedMediaType(e.target.value)}
            >
              <option value="all">All Media Types</option>

              {mediaTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="#F5F5F5"
                stroke-width="1.5"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* ==========================================
            LOCATION CARDS
        ========================================== */}

        <div className="row">
          {loading ? (
            <div className="location-page-loader">
              <div className="spinner-border" role="status"></div>
            </div>
          ) : (
            <>
              {filteredLocations.map((item) => (
                <div
                  className="col-lg-6 col-md-6 col-12 mb-4"
                  key={item._id}
                  data-gsap
                >
                  <LocationCard
                    item={{
                      title: item.siteName,
                      location: item.locationId?.locationName,
                      mediaType: item.mediaType,
                      siteCode: item.siteCode,
                      image: item.image,
                      slug: item.slug,
                    }}
                  />
                </div>
              ))}

              {filteredLocations.length === 0 && (
                <div className="col-12 text-center">
                  <h3>No data found.</h3>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LocationFilter;

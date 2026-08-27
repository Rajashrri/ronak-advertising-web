import React, { useMemo, useState } from "react";
import LocationCard from "../reuse/cards/LocationCard";

import locationImg from "../../assets/imgs/location/locationlist.png";

// ==========================================
// DUMMY LOCATION DATA
// ==========================================

const locationsData = [
  {
    id: 1,
    title: "VASHI TOLL NAKA FCG VASHI (MIDDLE)",
    location: "Vashi",
    mediaType: "Media",
    siteCode: "RV-VT-002",
    image: locationImg,
  },
  {
    id: 2,
    title: "VASHI TOLL NAKA FCG VASHI (LEFT)",
    location: "Vashi",
    mediaType: "Media",
    siteCode: "RV-VT-003",
    image: locationImg,
  },
  {
    id: 3,
    title: "VASHI TOLL NAKA FCG VASHI (RIGHT)",
    location: "Vashi",
    mediaType: "Hoarding",
    siteCode: "RV-VT-004",
    image: locationImg,
  },
  {
    id: 4,
    title: "ANDHERI WEST LINK ROAD",
    location: "Andheri",
    mediaType: "Media",
    siteCode: "RV-AW-001",
    image: locationImg,
  },
  {
    id: 5,
    title: "ANDHERI EAST METRO JUNCTION",
    location: "Andheri",
    mediaType: "Digital",
    siteCode: "RV-AE-002",
    image: locationImg,
  },
  {
    id: 6,
    title: "BANDRA KURLA COMPLEX MAIN ROAD",
    location: "Bandra",
    mediaType: "Hoarding",
    siteCode: "RV-BKC-001",
    image: locationImg,
  },
  {
    id: 7,
    title: "BANDRA WEST LINKING ROAD",
    location: "Bandra",
    mediaType: "Media",
    siteCode: "RV-BW-003",
    image: locationImg,
  },
  {
    id: 8,
    title: "LOWER PAREL SENAPATI BAPAT MARG",
    location: "Lower Parel",
    mediaType: "Digital",
    siteCode: "RV-LP-001",
    image: locationImg,
  },
  {
    id: 9,
    title: "LOWER PAREL STATION ROAD",
    location: "Lower Parel",
    mediaType: "Media",
    siteCode: "RV-LP-002",
    image: locationImg,
  },
  {
    id: 10,
    title: "MALAD WEST LINK ROAD",
    location: "Malad",
    mediaType: "Hoarding",
    siteCode: "RV-MW-001",
    image: locationImg,
  },
  {
    id: 11,
    title: "GOREGAON WEST SV ROAD",
    location: "Goregaon",
    mediaType: "Media",
    siteCode: "RV-GW-002",
    image: locationImg,
  },
  {
    id: 12,
    title: "POWAI HIRANANDANI GARDENS",
    location: "Powai",
    mediaType: "Digital",
    siteCode: "RV-PW-001",
    image: locationImg,
  },
];

// ==========================================
// LOCATION FILTER COMPONENT
// ==========================================

const LocationFilter = () => {
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedMediaType, setSelectedMediaType] = useState("all");

  // ==========================================
  // GET UNIQUE LOCATIONS
  // ==========================================

  const locations = useMemo(() => {
    return [...new Set(locationsData.map((item) => item.location))];
  }, []);

  // ==========================================
  // GET UNIQUE MEDIA TYPES
  // ==========================================

  const mediaTypes = useMemo(() => {
    return [...new Set(locationsData.map((item) => item.mediaType))];
  }, []);

  // ==========================================
  // FILTER LOCATIONS
  // ==========================================

  const filteredLocations = useMemo(() => {
    return locationsData.filter((item) => {
      const locationMatch =
        selectedLocation === "all" ||
        item.location === selectedLocation;

      const mediaTypeMatch =
        selectedMediaType === "all" ||
        item.mediaType === selectedMediaType;

      return locationMatch && mediaTypeMatch;
    });
  }, [selectedLocation, selectedMediaType]);

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

            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 9L12 15L18 9" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
</svg> </div>

          {/* MEDIA TYPE */}
              <div className="custom-select">

          <select
            value={selectedMediaType}
            onChange={(e) => setSelectedMediaType(e.target.value)}
          >
            <option value="all">All Media Types</option>

            {mediaTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 9L12 15L18 9" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
</svg>
          </div>

        </div>

        {/* ==========================================
            LOCATION CARDS
        ========================================== */}

        <div className="row">

          {filteredLocations.map((item) => (
            <div
              className="col-lg-6 col-md-6 col-12 mb-4"
              key={item.id}
              data-gsap
            >
              <LocationCard item={item} />
            </div>
          ))}

          {/* ==========================================
              NO DATA
          ========================================== */}

          {filteredLocations.length === 0 && (
            <div className="col-12 text-center">
              <h3>No data found.</h3>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default LocationFilter;
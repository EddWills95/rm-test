import React from "react";
import PropertyCard from "../PropertyCard";
import "./PropertyListing.scss";

import useSWR from "swr";

const API_URL = "http://localhost:3000/api/properties";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const PropertyListing = () => {
  const { data, error } = useSWR(API_URL, fetcher);

  if (error) return <h1>Sorry, there has been an error fetching properties</h1>;
  if (!data) return <h1>Loading...</h1>;

  // Could really do with some pagination for performance

  return (
    <div className="PropertyListing">
      {data.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}
    </div>
  );
};

export default PropertyListing;

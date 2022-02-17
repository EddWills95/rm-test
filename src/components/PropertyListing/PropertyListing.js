import React, { useEffect, useState } from "react";
import PropertyCard from "../PropertyCard";
import "./PropertyListing.scss";

const API_URL = "http://localhost:3000/api/properties";

const PropertyListing = () => {
  const [properties, setProperties] = useState(undefined);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch(API_URL);
      const results = await response.json();
      setProperties(results);
    };
    fetchProperties();
  }, []);

  if (!properties) return null;

  return (
    <div className="PropertyListing">
      {properties.map((property, index) => (
        <div className="something" key={index}>
          <PropertyCard data-testid="property-card" key={index} {...property} />
        </div>
      ))}
    </div>
  );
};

export default PropertyListing;

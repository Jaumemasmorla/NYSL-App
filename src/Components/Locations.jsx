import React from 'react';
import { useParams } from 'react-router-dom';
import { useData } from '../firebase';

const LocationDetails = ({ location }) => {
  return (
    <div className="location-details">
      <h2>{location.full_name}</h2>
      <p>Address: {location.address}</p>
      <iframe
        title="Location Map"
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        src={location.map_url}
      ></iframe>
    </div>
  );
};

export const Locations = () => {
  const { location } = useParams();
  const [locations, loading, error] = useData('locations');
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const locationData = locations[location];

  return (
    <div>
      <h2>{location}</h2>
      {locationData && <LocationDetails location={locationData} />}
    </div>
  );
};
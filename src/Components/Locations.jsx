import React from 'react';
import { useParams } from 'react-router-dom';
import { useData } from '../firebase';

const LocationDetails = ({ location }) => {
  return (
    <div className="additional-info-container">
      <h2 className="additional-info-heading">{location.full_name}</h2>
      <p className="additional-game-info">Address: {location.address}</p>
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
      {locationData && <LocationDetails location={locationData} />}
    </div>
  );
};

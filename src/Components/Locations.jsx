import React from "react";
import { useLocation, useParams } from 'react-router-dom'
import { useData } from '../firebase';
import { Link } from "react-router-dom";

export const Locations=()=> {
  
  const {location} = useParams();
  
  
  const [data, loading, error] = useData(`/games/${location}`);
  
 
  
  if (loading) return <h1>Loading the schedule...</h1>
  if (error) return <h1>{error}</h1>;

    
      return (
        <table id="game-locations">
          <caption>Game Locations:</caption>
          <tbody>
            <tr>
              <th id="game-locations-header">Game Locations:</th>
              <th></th>
            </tr>
            {Object.keys(data).map((locationKey) => {
              const loc = data[locationKey];
              return (
                <div key={locationKey}>
                  <tr className="location-description-row">
                    <td className="game-locations-name">

                    <Link to={`/games/${loc.location}`}>{loc.full_name}</Link>
                    </td>
                    <td className="game-locations-description">{loc.address}</td>
                  </tr>
                  <tr className="map-row">
                    <td colSpan="2">
                      <iframe
                        src={loc.map_url}
                        width="600"
                        height="450"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen
                        title={`${loc.full_name} Map`}
                      ></iframe>
                    </td>
                  </tr>
                </div>
              );
            })}
          </tbody>
        </table>
      );
    };
  
  
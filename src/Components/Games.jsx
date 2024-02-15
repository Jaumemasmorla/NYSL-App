import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { useData } from "../firebase";



const GameList = ({ games }) => {

  const gamesArray = Object.values(games);

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Teams</th>
          <th>Location</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {gamesArray.map((game, index) => (
          <tr key={index}>
            <td>{game.date}</td>
            <td>{game.teams}</td>
            <td>
            <Link to={`/location/${game.location}`}>{game.location}</Link>
            </td>
            <td>{game.time}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
};



  export const Games = () => {
    
    const [games, loading, error] = useData("/games");
    
   
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error.message}</h1>;
  
    return (
      <div>
        <h2>Games</h2>
        <GameList games={games} />
      </div>
    );
  };




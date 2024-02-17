import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "../firebase";

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};


export const Games = () => {
  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 620);
  const [games, loading, error] = useData("/games");
  const [locations, locationLoading, locationError] = useData("/locations");

  useEffect(() => {
   
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 620);
    };

    
    window.addEventListener("resize", handleResize);

    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderEvents = () => {
    if (loading || locationLoading) return <div>Loading...</div>;
    if (error || locationError) return <div>Error: {error || locationError.message}</div>;

    return Object.keys(games).map((gameKey) => {
      const game = games[gameKey];
      const location = locations[game.location];
      return (
        <div key={gameKey} className="game-card">
          <h2>{game.date}</h2>
          <p>Teams: {game.teams}</p>
          <p>
            Location:{" "}
            <Link to={`/location/${game.location}`}>
              {capitalize(game.location)}
            </Link>
          </p>
         
        </div>
      );
    });
  };

  return (
    <div className="games-container">
      {renderEvents()}
    </div>
  );
};


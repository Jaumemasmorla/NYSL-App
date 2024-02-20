import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Chat } from "./Chat";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0)', boxShadow: 'none' }}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" style={{ padding: '15px' }}>
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'black', backgroundColor: 'white', fontSize: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: '2px solid black', padding: '10px', borderRadius: '5px' }}>
                Home
              </Link>
            </li>
            <li className="nav-item" style={{ padding: '15px' }}>
              <Link className="nav-link" to="/games" style={{ color: 'black', backgroundColor: 'white', fontSize: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: '2px solid black', padding: '10px', borderRadius: '5px' }}>
                Games
              </Link>
            </li>

            <li className="nav-item" style={{ padding: '15px' }}>
              <Link className="nav-link" to="/info" style={{ color: 'black', backgroundColor: 'white', fontSize: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: '2px solid black', padding: '10px', borderRadius: '5px' }}>
                Additional Information
              </Link>
            </li>
            <li className="nav-item" style={{ padding: '15px' }}>
              <Link className="nav-link" to="/info" style={{ color: 'black', backgroundColor: 'white', fontSize: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: '2px solid black', padding: '10px', borderRadius: '5px' }}>
                <Chat />
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex">
          <Button />
        </div>
      </div>
    </nav>
  );
};



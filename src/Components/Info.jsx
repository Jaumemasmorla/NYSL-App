import React from "react";

export const Info = () => {
  return (
    <div className="additional-info-container">
      <h2 className="additional-info-heading">Additional Information</h2>
      <p className="additional-game-info">
        <span className="additional-info-introductions">Facility Type:</span>{" "}
        Outdoor
      </p>
      <p className="additional-game-info">
        <span className="additional-info-introductions">
          Additional Information:
        </span>{" "}
        If deemed necessary by NYSL, games may be shortened or cancelled due to
        extreme weather conditions.
      </p>
      <p className="additional-game-info">
        <span className="additional-info-introductions">
          Please direct all questions to:
        </span>{" "}
        Michael Randall, League Coordinator
      </p>
      <div id="contactInfo" className="additional-game-info">
        <div id="phone">
          <span className="additional-info-introductions">Phone:</span> (630)
          690-8132
        </div>
        <div id="email">
          <span className="additional-info-introductions">Email:</span>{" "}
          <a href="mailto:michael.randall@chisoccer.org">
            michael.randall@chisoccer.org
          </a>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { SlUserFemale, SlUser } from "react-icons/sl";

function Team({ name, position, gender }) {
  return (
    <li className="store-container team-card">
      {gender === "M" ? (
        <SlUser size="140px" className="team-card-icon" />
      ) : (
        <SlUserFemale size="140px" className="team-card-icon" />
      )}

      <h4>{name}</h4>
      <p>{position.toUpperCase()}</p>
    </li>
  );
}

export default Team;

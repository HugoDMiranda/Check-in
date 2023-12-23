import React from "react";
import { SlUserFemale, SlUser } from "react-icons/sl";

function Team() {
  return (
    <li className="store-container team-card">
      <SlUser size="140px" className="team-card-icon" />
      <h4>Nombre del trabajador</h4>
      <p>Piloto</p>
    </li>
  );
}

export default Team;

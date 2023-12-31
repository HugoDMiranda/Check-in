import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import TeamCard from "../components/TeamCard";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [listOfTeam, setListOfTeam] = useState([]);

  useEffect(() => {
    axios
      .get("https://server-check-in.onrender.com/api/team")
      .then((response) => {
        setListOfTeam(response.data);
      });
  }, [listOfTeam]);

  return (
    <main>
      <div className="home-container">
        <div className="home-container-info summary">
          <h1>Check_in App</h1>
          <img src="img/check_in.png" alt="logo-plane" className="logo-plane" />

          <p>
            From the party <strong>to the beach</strong>
          </p>
          <p>
            A non-stop flight to make that{" "}
            <strong>long-awaited reunion possible</strong>
          </p>
        </div>
        <div className="home-container-info flights">
          <Link to="/flights">Find the flight you want</Link>
        </div>
        <div className="home-container-info team">
          <h3>Our Team</h3>
          <div className="team-cards">
            <TeamCard listOfTeam={listOfTeam} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;

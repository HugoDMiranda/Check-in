import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

function Home() {
  return (
    <main>
      <Navbar />
      <div className="home-container">
        <div className="home-container-info summary">
          <img className="name" src="img/check_text.png" alt="check_text" />
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
          <a href="/flights">Find the flight you want</a>
        </div>
        <div className="home-container-info team">Nuestro equipo</div>
      </div>
    </main>
  );
}

export default Home;

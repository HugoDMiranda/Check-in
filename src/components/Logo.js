import React from "react";
import "../styles/styles-components/Logo.css";

function Logo() {
  return (
    <div className="logo-container">
      <h1 className="name">Check_in App</h1>
      <img src="img/check_in.png" alt="logo-plane" className="logo-plane" />
    </div>
  );
}

export default Logo;

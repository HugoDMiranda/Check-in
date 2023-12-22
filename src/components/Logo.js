import React from "react";
import "../styles/styles-components/Logo.css";
import { Link } from "react-router-dom";

function Logo({ logoLoading }) {
  return (
    <div className="logo-container">
      <Link to="/">
        <img
          src="img/airplane.png"
          alt="logo-plane"
          className={logoLoading ? logoLoading : `logo-plane`}
        />
      </Link>
    </div>
  );
}

export default Logo;

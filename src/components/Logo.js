import React from "react";
import "../styles/styles-components/Logo.css";

function Logo({ logoLoading }) {
  return (
    <div className="logo-container">
      <img
        src="img/airplane.png"
        alt="logo-plane"
        className={logoLoading ? logoLoading : `logo-plane`}
      />
    </div>
  );
}

export default Logo;

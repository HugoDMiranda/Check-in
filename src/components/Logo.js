import React from "react";
import "../styles/styles-components/Logo.css";

function Logo({ logoLoading }) {
  return (
    <div className="logo-container">
      <img className="name" src="img/check_text.png" alt="check_text" />
      <img
        src="img/check_in.png"
        alt="logo-plane"
        className={logoLoading ? logoLoading : `logo-plane`}
      />
    </div>
  );
}

export default Logo;

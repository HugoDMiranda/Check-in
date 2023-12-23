import React from "react";
import "../styles/styles-components/TeamCard.css";
import Team from "./Team";

function TeamCard() {
  return (
    <div
      className="uk-slider-container-offset slider-stores"
      uk-slider=" index: 4; autoplay: true; autoplay-interval: 3000 "
    >
      <div
        className="uk-position-relative uk-visible-toggle uk-light uk-slider-container-offset"
        tabindex="-1"
      >
        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid">
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
        </ul>
      </div>
    </div>
  );
}

export default TeamCard;

import React from "react";
import "../styles/styles-components/TeamCard.css";
import { SlUserFemale, SlUser } from "react-icons/sl";

function TeamCard() {
  return (
    <div
      class="uk-slider-container-offset slider-stores"
      uk-slider=" index: 4; autoplay: true; autoplay-interval: 3000 "
    >
      <div
        class="uk-position-relative uk-visible-toggle uk-light uk-slider-container-offset"
        tabindex="-1"
      >
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid">
          <li className="store-container">
            <img
              src="img/airplane.png"
              width="1800"
              height="1200"
              alt="QR"
              className="store-container-link-img"
            />
          </li>
          <li className="store-container">
            <img
              src="img/QR.png"
              width="1800"
              height="1200"
              alt="QR"
              className="store-container-link-img"
            />
          </li>
          <li className="store-container">
            <img
              src="img/QR.png"
              width="1800"
              height="1200"
              alt="QR"
              className="store-container-link-img"
            />
          </li>{" "}
          <li className="store-container">
            <img
              src="img/QR.png"
              width="1800"
              height="1200"
              alt="QR"
              className="store-container-link-img"
            />
          </li>{" "}
          <li className="store-container">
            <img
              src="img/QR.png"
              width="1800"
              height="1200"
              alt="QR"
              className="store-container-link-img"
            />
          </li>{" "}
          <li className="store-container">
            <img
              src="img/airplane.png"
              width="1800"
              height="1200"
              alt="QR"
              className="store-container-link-img"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TeamCard;

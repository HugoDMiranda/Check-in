import React from "react";
import "../styles/styles-components/FlightsCard.css";
import { Link } from "react-router-dom";

function FlightsCard({
  img,
  origin,
  destination,
  course,
  departure,
  shipment,
  number,
}) {
  return (
    <Link className="card-container" to={`/checkin/${number}`}>
      <div className="card-container-img">
        <img src={img} alt="destino" />
      </div>
      <div className="card-container-info">
        <h3 className="card-container-info-number">{number}</h3>
        <div className="card-container-info-destination">
          <h3>{origin}</h3>
          <p>-</p>
          <h3>{destination}</h3>
        </div>
        <div className="card-container-info-time">
          <p>
            Course <strong>{course}</strong>
          </p>
          <p>
            Board at <strong>{departure}</strong>
          </p>
          <p>
            Ends at <strong>{shipment}</strong>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default FlightsCard;

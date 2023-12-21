import React from "react";
import "../styles/styles-components/FlightsCard.css";

function FlightsCard() {
  return (
    <div className="card-container">
      <div className="card-container-img">
        <img src="img/canada.jpg" alt="destino" />
      </div>
      <div className="card-container-info">
        <div className="card-container-info-destination">
          <h3>Colombia</h3>
          <p>-</p>
          <h3>Canada</h3>
        </div>
        <div className="card-container-info-time">
          <p>15 horas</p>
          <p>Embarque a las XX:XX</p>
          <p>Finaliza a las XX:XX</p>
        </div>
      </div>
    </div>
  );
}

export default FlightsCard;

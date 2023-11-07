import React from "react";
import "../styles/styles-components/CheckInfo.css";

function CheckInfo() {
  return (
    <div className="check-container-info">
      <div className="check-container-info-fly">
        <h3>Vuelo XXX</h3>
        <p>Bogota a Medellin</p>
        <p>1 hora aprox</p>
        <p>Puerta de embarque a las XX:XX</p>
        <p>Finaliza a las XX:XX</p>
      </div>
      <div className="check-container-info-team">
        <h4>Our team</h4>
        <h3>Piloto X</h3>
        <div className="check-container-info-team-help">
          <p>Asafatas</p>
          <p>Asafatas</p>
          <p>Asafatas</p>
        </div>
      </div>
    </div>
  );
}

export default CheckInfo;

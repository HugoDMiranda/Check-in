import React from "react";
import "../styles/styles-components/CheckInfo.css";
import { SlUserFemale, SlUser } from "react-icons/sl";

function CheckInfo() {
  return (
    <div className="check-container-info">
      <div className="check-container-info-fly">
        <h3>Vuelo XXX</h3>
        <div className="check-container-info-fly-general">
          <div>
            <p>Bogota a Medellin</p>
            <p>1 hora aprox</p>
          </div>
          <div>
            <img src="img/QR.png" alt="QR" />
          </div>
        </div>
        <div className="check-container-info-fly-times">
          <p>Embarque a las XX:XX</p>
          <p>Finaliza a las XX:XX</p>
        </div>
      </div>
      <div className="check-container-info-team">
        <h4>Our team</h4>
        <h3>
          <SlUser />
        </h3>
        <div className="check-container-info-team-help">
          <p>
            <SlUserFemale />
          </p>
          <p>
            <SlUserFemale />
          </p>
          <p>
            <SlUserFemale />
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckInfo;

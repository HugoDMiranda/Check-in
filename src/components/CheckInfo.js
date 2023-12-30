import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/styles-components/CheckInfo.css";
import { SlUserFemale, SlUser } from "react-icons/sl";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

function CheckInfo() {
  const [listOfTeam, setListOfTeam] = useState([]);

  useEffect(() => {
    axios
      .get("https://server-check-in.onrender.com/api/team")
      .then((response) => {
        setListOfTeam(response.data);
      });
  }, [listOfTeam]);

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
        <SlUser
          className="team pilot"
          size="120px"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Pilot"
        />
        <Tooltip
          id="my-tooltip"
          style={{ backgroundColor: "#0e73c6", color: "white" }}
        />
        <div className="check-container-info-team-help">
          <SlUserFemale
            size="55px"
            className="team"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Stewardesses"
          />
          <SlUserFemale
            size="55px"
            className="team"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Stewardesses"
          />
          <SlUserFemale
            size="55px"
            className="team"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Stewardesses"
          />
        </div>
      </div>
    </div>
  );
}

export default CheckInfo;

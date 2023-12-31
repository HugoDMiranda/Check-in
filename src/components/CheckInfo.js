import "../styles/styles-components/CheckInfo.css";
import { SlUserFemale, SlUser } from "react-icons/sl";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

function CheckInfo({ response }) {
  return (
    <div className="check-container-info">
      <div className="check-container-info-fly">
        <h3>Flight {response.number}</h3>
        <div className="check-container-info-fly-general">
          <div>
            <p>
              {response.origin} to {response.destination}
            </p>
            <p>{response.course} aprox</p>
          </div>
          <div>{response ? <img src="img/QR.png" alt="QR" /> : null}</div>
        </div>
        <div className="check-container-info-fly-times">
          <p>Board at {response.shipment}</p>
          <p>Ends at {response.departure}</p>
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

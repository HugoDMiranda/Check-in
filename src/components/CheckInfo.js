import "../styles/styles-components/CheckInfo.css";
import { SlUserFemale, SlUser } from "react-icons/sl";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

function CheckInfo({ response, pilot, stewardesses }) {
  return (
    <div className="check-container-info">
      <div className="check-container-info-fly">
        <h3>Flight #{response.number}</h3>
        <div className="check-container-info-fly-general">
          <div className="check-container-info-fly-general-destination">
            <h4>{response?.origin?.toUpperCase()}</h4> <p>to</p>
            <h4>{response?.destination?.toUpperCase()}</h4>
          </div>
          <p>
            <strong>{response.course}</strong> aprox
          </p>
        </div>
        <div className="check-container-info-fly-times">
          <p>
            Board at <strong>{response.shipment}</strong>
          </p>
          <p>
            Ends at <strong>{response.departure}</strong>
          </p>
        </div>
      </div>
      <div className="check-container-info-team">
        <h4>Our team</h4>
        <Tooltip
          id="my-tooltip"
          style={{ backgroundColor: "#0e73c6", color: "white" }}
        />
        <h5>Pilots</h5>
        <div className="check-container-info-team-pilots">
          {pilot?.map((pilot) => {
            return (
              <SlUser
                className="team pilot"
                size="120px"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={pilot}
                key={pilot}
              />
            );
          })}
        </div>
        <h6>Stewardesses</h6>
        <div className="check-container-info-team-help">
          {stewardesses?.map((stewardesses) => {
            return (
              <SlUserFemale
                size="55px"
                className="team"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={stewardesses}
                key={stewardesses}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CheckInfo;

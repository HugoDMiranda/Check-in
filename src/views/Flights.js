import FlightsCard from "../components/FlightsCard";
import Navbar from "../components/Navbar";
import "../styles/Flights.css";

function Flights() {
  return (
    <section>
      <Navbar />
      <div className="flights-container">
        <details name="flights" className="flights-container-info domestic">
          <summary>Domestic Flights</summary>
          <div className="flights-container-info-card">
            <FlightsCard />
            <FlightsCard />
            <FlightsCard />
          </div>
        </details>
        <details
          name="flights"
          className="flights-container-info international"
        >
          <summary>International flights</summary>
          <div className="flights-container-info-card">
            <FlightsCard />
            <FlightsCard />
            <FlightsCard />
          </div>
        </details>
      </div>
    </section>
  );
}

export default Flights;

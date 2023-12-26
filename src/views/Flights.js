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
            <FlightsCard img="img/domestic.jpg" />
            <FlightsCard img="img/domestic.jpg" />
            <FlightsCard img="img/domestic.jpg" />
          </div>
        </details>
        <details
          name="flights"
          className="flights-container-info international"
        >
          <summary>International flights</summary>
          <div className="flights-container-info-card">
            <FlightsCard img="img/international.jpeg" />
            <FlightsCard img="img/international.jpeg" />
            <FlightsCard img="img/international.jpeg" />
          </div>
        </details>
      </div>
    </section>
  );
}

export default Flights;

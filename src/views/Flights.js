import React, { useEffect, useState } from "react";
import FlightsCard from "../components/FlightsCard";
import Navbar from "../components/Navbar";
import "../styles/Flights.css";
import axios from "axios";

function Flights() {
  const [listOfFlights, setListOfFlights] = useState([]);

  useEffect(() => {
    axios
      .get("https://server-check-in.onrender.com/api/flights")
      .then((response) => {
        setListOfFlights(response.data);
      });
    console.log(listOfFlights);
  }, [listOfFlights]);

  return (
    <section>
      <Navbar />
      <div className="flights-container">
        <details name="flights" className="flights-container-info domestic">
          <summary>Domestic Flights</summary>
          <div className="flights-container-info-card">
            {listOfFlights.map((flight) => {
              return flight.class === "domestic" ? (
                <FlightsCard
                  img="img/domestic.jpg"
                  origin={flight.origin}
                  destination={flight.destination}
                  course={flight.course}
                  departure={flight.departure}
                  shipment={flight.shipment}
                  number={flight.number}
                />
              ) : null;
            })}
          </div>
        </details>
        <details
          name="flights"
          className="flights-container-info international"
        >
          <summary>International flights</summary>
          <div className="flights-container-info-card">
            {listOfFlights.map((flight) => {
              return flight.class === "international" ? (
                <FlightsCard
                  img="img/international.jpeg"
                  origin={flight.origin}
                  destination={flight.destination}
                  course={flight.course}
                  departure={flight.departure}
                  shipment={flight.shipment}
                  number={flight.number}
                />
              ) : null;
            })}
          </div>
        </details>
      </div>
    </section>
  );
}

export default Flights;

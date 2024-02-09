import React, { Suspense, useEffect, useState } from "react";
import FlightsCard from "../components/FlightsCard";
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
  }, [listOfFlights]);

  return (
    <section>
      <div className="flights-container">
        <details name="flights" className="flights-container-info domestic">
          <summary>Domestic Flights</summary>
          <div className="flights-container-info-card">
            {listOfFlights.map((flight) => {
              return flight.class === "domestic" ? (
                <Suspense fallback={<p>Loading...</p>}>
                  <FlightsCard
                    img="img/domestic.jpg"
                    origin={flight.origin}
                    destination={flight.destination}
                    course={flight.course}
                    departure={flight.departure}
                    shipment={flight.shipment}
                    number={flight.number}
                    key={flight._id}
                  />
                </Suspense>
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
                <Suspense fallback={<p>Loading...</p>}>
                  <FlightsCard
                    img="img/international.jpeg"
                    origin={flight.origin}
                    destination={flight.destination}
                    course={flight.course}
                    departure={flight.departure}
                    shipment={flight.shipment}
                    number={flight.number}
                    key={flight._id}
                  />
                </Suspense>
              ) : null;
            })}
          </div>
        </details>
      </div>
    </section>
  );
}

export default Flights;

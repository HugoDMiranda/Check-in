import Navbar from "../components/Navbar";
import "../styles/Flights.css";

function Flights() {
  return (
    <section>
      <Navbar />
      <div className="flights-container">
        <details name="flights" className="flights-container-info domestic">
          <summary>Domestic Flights</summary>
          <p>
            Pencilgon desvela su meticuloso plan para derrotar a Wezermon, pero,
            antes, Sunraku y Katsuo deberán entrenarse para subir de nivel.
          </p>
        </details>
        <details
          name="flights"
          className="flights-container-info international"
        >
          <summary>International flights</summary>
          <p>
            Pencilgon desvela su meticuloso plan para derrotar a Wezermon, pero,
            antes, Sunraku y Katsuo deberán entrenarse para subir de nivel.
          </p>
        </details>
      </div>
    </section>
  );
}

export default Flights;

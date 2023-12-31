import "../styles/Checkin.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Buttons from "../components/Buttons";
import List from "../components/List";
import Modalcheck from "../components/Modalcheck";
import Modalbooking from "../components/Modalbooking";
import axios from "axios";
import CheckInfo from "../components/CheckInfo";
import Navbar from "../components/Navbar";

function Checkin() {
  let { number } = useParams();
  const [openModalcheck, setOpenModalcheck] = useState(false);
  const [openModalbooking, setOpenModalbooking] = useState(false);
  const [response, setResponse] = useState([]);
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://server-check-in.onrender.com/api/flights/${number}`)
      .then((response) => {
        setResponse(response.data[0]);
        setPassengers(response?.data[0].passengersFound);
      });
  }, [passengers, number]);

  return (
    <>
      <Navbar />
      {openModalcheck && (
        <Modalcheck
          closeModalcheck={setOpenModalcheck}
          listOfPassengers={passengers}
          number={number}
        />
      )}
      {openModalbooking && (
        <Modalbooking
          closeModalbooking={setOpenModalbooking}
          listOfPassengers={passengers}
        />
      )}
      <section className="check-container">
        <CheckInfo response={response} />
        <div className="check-container-booking">
          <Buttons
            setOpenModalcheck={setOpenModalcheck}
            setOpenModalbooking={setOpenModalbooking}
          />
          <List listOfPassengers={passengers} />
        </div>
      </section>
    </>
  );
}

export default Checkin;

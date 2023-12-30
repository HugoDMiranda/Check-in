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
  const [listOfPassengers, setListOfPassengers] = useState([]);
  const [openModalcheck, setOpenModalcheck] = useState(false);
  const [openModalbooking, setOpenModalbooking] = useState(false);
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    axios
      .get("https://server-check-in.onrender.com/api/passengers")
      .then((response) => {
        setListOfPassengers(response.data);
      });

    axios
      .get(`https://server-check-in.onrender.com/api/flights/${number}`)
      .then((response) => {
        setPassengers(response.data);
      });
  }, [listOfPassengers, passengers, number]);

  return (
    <>
      <Navbar />
      {openModalcheck && (
        <Modalcheck
          closeModalcheck={setOpenModalcheck}
          setListOfPassengers={setPassengers}
          listOfPassengers={passengers}
        />
      )}
      {openModalbooking && (
        <Modalbooking
          closeModalbooking={setOpenModalbooking}
          listOfPassengers={passengers}
        />
      )}
      <section className="check-container">
        <CheckInfo passengers={passengers[0]?.passengersFound} />
        <div className="check-container-booking">
          <Buttons
            setOpenModalcheck={setOpenModalcheck}
            setOpenModalbooking={setOpenModalbooking}
          />
          <List listOfPassengers={listOfPassengers} />
        </div>
      </section>
    </>
  );
}

export default Checkin;

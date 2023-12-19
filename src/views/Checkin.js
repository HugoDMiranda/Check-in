import "../styles/Checkin.css";
import { useState, useEffect } from "react";
import Buttons from "../components/Buttons";
import List from "../components/List";
import Modalcheck from "../components/Modalcheck";
import Modalbooking from "../components/Modalbooking";
import axios from "axios";
import CheckInfo from "../components/CheckInfo";
import Navbar from "../components/Navbar";

function Checkin() {
  const [listOfPassengers, setListOfPassengers] = useState([]);
  const [openModalcheck, setOpenModalcheck] = useState(false);
  const [openModalbooking, setOpenModalbooking] = useState(false);

  useEffect(() => {
    axios
      .get("https://server-check-in.onrender.com/api/passengers")
      .then((response) => {
        setListOfPassengers(response.data);
      });
    // console.log(listOfPassengers);
  }, [listOfPassengers]);

  return (
    <>
      <Navbar />
      {openModalcheck && (
        <Modalcheck
          closeModalcheck={setOpenModalcheck}
          setListOfPassengers={setListOfPassengers}
          listOfPassengers={listOfPassengers}
        />
      )}
      {openModalbooking && (
        <Modalbooking
          closeModalbooking={setOpenModalbooking}
          listOfPassengers={listOfPassengers}
        />
      )}
      <section className="check-container">
        <CheckInfo />
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

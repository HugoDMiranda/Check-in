import "./styles/App.css";
import { useState, useEffect } from "react";
import Buttons from "./components/Buttons";
import List from "./components/List";
import Logo from "./components/Logo";
import Modalcheck from "./components/Modalcheck";
import Modalbooking from "./components/Modalbooking";
import axios from "axios";
import Loading from "./components/Loading";
import CheckInfo from "./components/CheckInfo";

function App() {
  const [listOfPassengers, setListOfPassengers] = useState([]);
  const [openModalcheck, setOpenModalcheck] = useState(false);
  const [openModalbooking, setOpenModalbooking] = useState(false);

  useEffect(() => {
    axios
      .get("https://server-check-in.onrender.com/passengers")
      .then((response) => {
        setListOfPassengers(response.data);
      });
    console.log(listOfPassengers);
  }, [listOfPassengers]);

  return (
    <div className="App">
      {listOfPassengers[1] ? (
        <>
          <Logo />
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
          <main className="check-container">
            <CheckInfo />
            <div className="check-container-booking">
              <Buttons
                setOpenModalcheck={setOpenModalcheck}
                setOpenModalbooking={setOpenModalbooking}
              />
              <List listOfPassengers={listOfPassengers} />
            </div>
          </main>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;

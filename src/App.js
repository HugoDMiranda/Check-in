import "./styles/App.css";
import { useState, useEffect } from "react";
import Buttons from "./components/Buttons";
import List from "./components/List";
import Logo from "./components/Logo";
import Modalcheck from "./components/Modalcheck";
import Modalbooking from "./components/Modalbooking";
import axios from "axios";

function App() {
  const [listOfPassengers, setListOfPassengers] = useState([]);
  const [openModalcheck, setOpenModalcheck] = useState(false);
  const [openModalbooking, setOpenModalbooking] = useState(false);

  useEffect(() => {
    axios
      .get("https://blue-tense-bighorn-sheep.cyclic.app/passengers")
      .then((response) => {
        setListOfPassengers(response.data);
      });
  }, [listOfPassengers]);

  return (
    <div className="App">
      <Logo />
      <Buttons
        setOpenModalcheck={setOpenModalcheck}
        setOpenModalbooking={setOpenModalbooking}
      />
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
      <List listOfPassengers={listOfPassengers} />
    </div>
  );
}

export default App;

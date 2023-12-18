import "./styles/App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import Checkin from "./views/Checkin";
import { motion } from "framer-motion";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes.js";

function App() {
  const [listOfPassengers, setListOfPassengers] = useState([]);

  useEffect(() => {
    axios
      .get("https://server-check-in.onrender.com/api/passengers")
      .then((response) => {
        setListOfPassengers(response.data);
      });
    // console.log(listOfPassengers);
  }, [listOfPassengers]);

  return (
    <Router>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "tween", duration: 1 }}
      >
        <div className="App">
          {listOfPassengers[1] ? <AnimatedRoutes /> : <Loading />}
          <Footer />
        </div>
      </motion.div>
    </Router>

    // <div className="App">
    //   {listOfPassengers[1] ? <Checkin /> : <Loading />}
    //   <Footer />
    // </div>
  );
}

export default App;

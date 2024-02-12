import "./styles/App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes.js";
import Navbar from "./components/Navbar.js";

function App() {
  const [listOfPassengers, setListOfPassengers] = useState([]);

  useEffect(() => {
    axios
      .get("https://server-check-in.onrender.com/api/passengers")
      .then((response) => {
        setListOfPassengers(response.data);
      });
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
          {listOfPassengers[1] ? (
            <>
              <Navbar />
              <AnimatedRoutes />
            </>
          ) : (
            <Loading />
          )}
          <Footer />
        </div>
      </motion.div>
    </Router>
  );
}

export default App;

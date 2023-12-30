import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../views/Home";
import Checkin from "../views/Checkin";
import Flights from "../views/Flights";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/Flights" element={<Flights />} />
        <Route path="/Checkin/:number" element={<Checkin />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;

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
        {/* <Route path="/Checkin/:id" element={<Checkin />} /> */}
        <Route path="/Checkin" element={<Checkin />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
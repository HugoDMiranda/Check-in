import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../views/Home";
import Checkin from "../views/Checkin";
import Flights from "../views/Flights";
// import { lazy } from "react";

// const Home = lazy(() => import("../views/Home"));
// const Checkin = lazy(() => import("../views/Checkin"));
// const Flights = lazy(() => import("../views/Flights"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/flights" element={<Flights />} />
        <Route path="/checkin/:number" element={<Checkin />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Room from "./pages/Room";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/room" element={<Room />} />
      <Route path="/*" element={<Notfound />} />
    </Routes>
  );
};

export default App;

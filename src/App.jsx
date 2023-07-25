import React from "react";
import { Routes, Route } from "react-router-dom";
import 'normalize.css';
import Registration from "./pages/Registration";
import Team from "./pages/Team";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="cart" element={<Cart />} />
      <Route path="team" element={<Team />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
};

export default App;

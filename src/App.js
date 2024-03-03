import React from "react";
import { Route, Routes } from "react-router-dom";
import ChessNavbar from "./components/navbar";
import Home from "./pages/home/home";
import Game from "./pages/game/game";
import AboutUs from "./pages/aboutus/aboutus";
import "./App.css";
import Categories from "./pages/categories/categories";

const App = () => {

  return (
    <div className="screen">
      <ChessNavbar />
      <div className="excludenav">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Game />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
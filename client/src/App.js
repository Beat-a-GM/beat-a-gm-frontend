import React from "react";
import { Route, Routes } from "react-router-dom";
import ChessNavbar from "./components/navbar";
import Home from "./components/home";
import Game from "./components/game";
import AboutUs from "./components/aboutus";

const App = () => {

  return (
    <div>
      <ChessNavbar/>
      <Routes>
       <Route path="/" element={<Home />}/>
        <Route path="/play" element={<Game />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
      </Routes>
    </div>
      

  );
 };
  export default App;
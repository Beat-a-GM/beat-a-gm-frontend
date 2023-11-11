import React from "react";
import { Route, Routes } from "react-router-dom";
import ChessNavbar from "./components/navbar";
import Game from "./components/game";

const App = () => {

  return (
    <div>
      <ChessNavbar/>
      <Routes>
        <Route path="/" element={<Game />}/>
      </Routes>
    </div>
      

  );
 };
  export default App;
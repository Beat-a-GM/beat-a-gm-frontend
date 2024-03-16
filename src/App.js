import React from "react";
import { Route, Routes } from "react-router-dom";
import ChessNavbar from "./components/navbar";
import Home from "./pages/home/home";
import Game from "./pages/game/game";
import AboutUs from "./pages/aboutus/aboutus";
import "./App.css";
import Categories from "./pages/categories/categories";
import react from "react";
import { useEffect } from "react";

const App = () => {

  const [puzzles, setPuzzles] = react.useState([]);
  const [loading, setLoading] = react.useState(true);

  useEffect(() => {
    fetch('https://beat-a-gm-backend.vercel.app/puzzles')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Puzzles fetched:', data);
        setPuzzles(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching puzzles:', error);
        setLoading(false);
      });
  }, []);


  return (
    <div className="screen">
      <ChessNavbar />
      <div className="excludenav">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play/:id" element={<Game/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/categories" element={<Categories games = {puzzles}/>} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
import React from "react";
import { Route, Routes } from "react-router-dom";
import ChessNavbar from "./components/navbar";
import Home from "./components/home";
import Game from "./components/game";
import AboutUs from "./components/aboutus";
import pos from "./positions.json"



const App = () => {
  const positions = [
    {
      "GMMove": "Ne4",
      "Position": "r1b2rk1/1p1nqpb1/p2p1np1/2pP2Bp/P1N4P/2N3P1/1P1QPPB1/R3K2R w KQ - 2 16",
      "StockfishMove": "c3e4"
    },
    {
      "GMMove": "Kh2",
      "Position": "3rr1k1/ppqn1ppn/2p5/2b1pPP1/4P3/5N2/PPP1Q1B1/R1BR2K1 w - - 1 20",
      "StockfishMove": "g1h1"
    },
    {
      "GMMove": "Rac1",
      "Position": "r3r1k1/3n1ppp/bpp5/p1q5/3NPP2/6PP/PQ4B1/R2R2K1 w - - 1 25",
      "StockfishMove": "e4e5"
    },
    {
      "GMMove": "Qd3",
      "Position": "rq1r2k1/3nppbp/3p1np1/1pP5/pP1P3N/B3P3/4BPPP/1R1Q1RK1 w - - 3 16",
      "StockfishMove": "c5c6"
    },
    {
      "GMMove": "Rad1",
      "Position": "2rr3k/ppqnbppp/4p2n/2p1P3/2P1N1P1/1P3N1P/PB2QP2/R4RK1 w - - 3 18",
      "StockfishMove": "a1d1"
    },
    {
      "GMMove": "a3",
      "Position": "r2q1rk1/pp2bbpp/2p5/2NnBp2/3P4/3B1Q1P/PPP3P1/1K1R3R w - - 2 19",
      "StockfishMove": "d3f5"
    },
    {
      "GMMove": "Nd2",
      "Position": "r2r2k1/2q2pbp/1pb3p1/p1p1Pp2/P4P2/1P1P1N2/1BP3PP/R2Q1RK1 w - - 1 18",
      "StockfishMove": "d1e1"
    },
    {
      "GMMove": "a3",
      "Position": "r1bq1rkb/pp5p/1n1p1pnP/2pPpNp1/2P1P1P1/2N1BP2/PP1Q4/R3KB1R w KQ - 3 16",
      "StockfishMove": "b2b4"
    },
    {
      "GMMove": "h4",
      "Position": "r3rbk1/pbqn1ppp/2p5/2p1pPP1/3pP3/1P1P1NNP/P1P5/R1BQ1RK1 w - - 1 16",
      "StockfishMove": "h3h4"
    }
  ]

  const randomPosition = positions[Math.floor(Math.random() * positions.length)]
  const inputFEN = randomPosition.Position;
  const bestMove = randomPosition.StockfishMove;
  const GMmove = randomPosition.GMMove;
 
  return (
    <div>
      <ChessNavbar/>
      <Routes>
       <Route path="/" element={<Home />}/>
        <Route path="/play" element={<Game inputFEN={inputFEN} bestMove={bestMove} GMmove={GMmove} />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
      </Routes>
    </div>
      

  );
 };
  export default App;
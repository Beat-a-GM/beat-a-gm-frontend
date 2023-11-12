import { useState, useMemo, useCallback, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import CustomDialog from "./customdialog";
import Sidebar from "./game-sidebar";
import "./game.css";

function parseFEN(fen) {
  return fen.split(' ')[0].split('/').map(row => row.replace(/\d/g, num => '.'.repeat(num)));
}

function compareFEN(fen1, fen2) {
  const board1 = parseFEN(fen1);
  const board2 = parseFEN(fen2);
  let from = '', to = '', piece = '';

  for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
          if (board1[i][j] !== board2[i][j]) {
              if (board1[i][j] !== '.') {
                  from = String.fromCharCode(97 + j) + (8 - i);
                  piece = board1[i][j];
              } else {
                  to = String.fromCharCode(97 + j) + (8 - i);
              }
          }
      }
  }

  return piece + from + to;
}




export default function Game({  }) {
  const chess = useMemo(() => new Chess(), []); 
  const [fen, setFen] = useState(chess.fen()); 
  const [over, setOver] = useState("");
  let userMoveFEN = "";
  const [userMove, setUserMove] = useState("");

  // makeAMove function
  let originalFEN = chess.fen();
  const makeAMove = useCallback(
    (move) => { 
      try {
        const result = chess.move(move); // update Chess instance

        setFen(chess.fen()); // update fen state to trigger a re-render
        userMoveFEN = chess.fen();
        setUserMove(compareFEN(originalFEN, userMoveFEN));
        
  
        console.log("over, checkmate", chess.isGameOver(), chess.isCheckmate());
  
        if (chess.isGameOver()) { // check if move led to "game over"
          if (chess.isCheckmate()) { // if reason for game over is a checkmate
            // Set message to checkmate. 
            setOver(
              `Checkmate! ${chess.turn() === "w" ? "black" : "white"} wins!`
            ); 
            // The winner is determined by checking which side made the last move
          } else if (chess.isDraw()) { // if it is a draw
            setOver("Draw"); // set message to "Draw"
          } else {
            setOver("Game over");
          }
        }
  
        return result;
      } catch (e) {
        return null;
      } // null if the move was illegal, the move object if the move was legal
    },
    [chess]
  );
   // onDrop function
   function onDrop(sourceSquare, targetSquare) {
    const moveData = {
      from: sourceSquare,
      to: targetSquare,
      color: chess.turn(),
      // promotion: "q",
    };

    const move = makeAMove(moveData);

    // illegal move
    if (move === null) return false;

    return true;
  }
  
  // Game component returned jsx
  return (
    <>
    <div className = "gamecontainer">
      <div className="board">
        <Chessboard position={fen} onPieceDrop={onDrop} boardWidth={650}/>  
      </div>
      <Sidebar
        whitePlayer="White Player"
        blackPlayer="Black Player"
        userMove={userMove}
      />
    </div>
      <CustomDialog 
        open={Boolean(over)}
        title={over}
        contentText={over}
        handleContinue={() => {
          setOver("");
        }}
      />
    </>
  );
}

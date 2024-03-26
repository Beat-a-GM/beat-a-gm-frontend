import { useState, useMemo, useCallback } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import CustomDialog from "../../components/customdialog";
import Sidebar from "../../components/game-sidebar";
import { compareFEN } from "../../utils/fen";
import "./game.css";

export default function Game( { inputFEN, whitePlayer, blackPlayer, bestMoves, GMmove, toMove } ) {
  console.log('toMove:', toMove); // Debugging line
  // Chess instance
  const chess = useMemo(() => new Chess(inputFEN), [inputFEN]);
  const [fen, setFen] = useState(chess.fen());
  const [over, setOver] = useState("");
  const [userMove, setUserMove] = useState("");

  const makeAMove = useCallback(
    (move) => {
      try {
        const result = chess.move(move); // update Chess instance

        setFen(chess.fen()); // update fen state to trigger a re-render
        setUserMove(compareFEN(inputFEN, chess.fen()));
        return result;
      } catch (e) {
        return null;
      } // null if the move was illegal, the move object if the move was legal
    },
    [chess, inputFEN]
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
      <div className="gamecontainer">
        <div className="board">
          <Chessboard 
          position={fen} 
          onPieceDrop={onDrop} 
          boardWidth={650}
          boardOrientation={toMove?"white":"black"}
          customLightSquareStyle={{backgroundColor: "#f0d9b5"}}
          customDarkSquareStyle={{backgroundColor: "#b58863"}}
          />
        </div>
          <Sidebar
            whitePlayer={whitePlayer}
            blackPlayer={blackPlayer}
            userMove={userMove}
            stockFishMoves={bestMoves}
            gmMove={GMmove}
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
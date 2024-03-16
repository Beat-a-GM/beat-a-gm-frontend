import { useState, useMemo, useEffect, useCallback } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import CustomDialog from "../../components/customdialog";
import Sidebar from "../../components/game-sidebar";
import "./game.css";
import { useParams } from 'react-router'

function parseFEN(fen) {
  return fen.split(' ')[0].split('/').map(row => row.replace(/\d/g, num => '.'.repeat(num)));
}

function compareFEN(fen1, fen2) {
  const board1 = parseFEN(fen1);
  const board2 = parseFEN(fen2);
  let to = '', piece = '';

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board1[i][j] !== board2[i][j]) {
        if (board1[i][j] !== '.') {

          piece = board1[i][j];
        } else {
          console.log("else " + board2[i][j])
          to = String.fromCharCode(97 + j) + (8 - i);
        }
      }
    }
  }
  if (piece === 'P') return to;
  console.log(piece + " " + to);
  return piece + to;
}

export default function Game() {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [inputFEN, setInputFEN] = useState("");
  const [whitePlayer, setWhitePlayer] = useState("");
  const [blackPlayer, setBlackPlayer] = useState("");
  const [bestMoves, setBestMoves] = useState([]);
  const [GMmove, setGMmove] = useState("");

  useEffect(() => {
    fetch('https://beat-a-gm-backend.vercel.app/puzzles/get/' + id)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Game fetched:', data);

        setInputFEN(data.fen);
        setWhitePlayer(data.white_username);
        setBlackPlayer(data.black_username);
        setBestMoves(data.best_moves);
        setGMmove(data.gm_move);

        setIsLoading(false); // Set loading to false after fetching
      })
      .catch(error => {
        console.error('Error fetching Game:', error);
      });
  }, [id]);


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
  if (isLoading) return <div>Loading...</div>;
  // Game component returned jsx
  return (
    <>
      <div className="gamecontainer">
        <div className="board">
          <Chessboard position={fen} onPieceDrop={onDrop} boardWidth={650} />
        </div>
        <aside className="gamesidebar">
          <Sidebar
            whitePlayer={whitePlayer}
            blackPlayer={blackPlayer}
            userMove={userMove}
            stockFishMoves={bestMoves}
            gmMove={GMmove}
          />
        </aside>
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
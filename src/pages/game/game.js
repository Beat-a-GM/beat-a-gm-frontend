import { useState, useMemo, useEffect, useCallback } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import CustomDialog from "../../components/customdialog";
import Sidebar from "../../components/game-sidebar";
import "./game.css";

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

  const [blackPlayer, setBlackPlayer] = useState("Black");
  const [whitePlayer, setWhitePlayer] = useState("White");
  const [difficulty, setDifficulty] = useState("default");
  const [gameLink, setGameLink] = useState("");
  const [whiteMove, setWhiteMove] = useState(""); // to_move from the API true if white's move
  const [inputFEN, setInputFEN] = useState("r1b2rk1/1p1nqpb1/p2p1np1/2pP2Bp/P1N4P/2N3P1/1P1QPPB1/R3K2R w KQ - 2 16");
  const [bestMoves, setBestMoves] = useState([{"eval": 1.5, "san": "Nc3", "uci": "b1c3"}]);
  const [GMmove, setGMmove] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorRaised, setErrorRaised] = useState(null);


  useEffect( () => {
    async function fetchData() {
      await fetch("https://beat-a-gm-backend.vercel.app/puzzles")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((data) => {
          setBlackPlayer(data.black_username);
          setWhitePlayer(data.white_username);
          setDifficulty(data.difficulty);
          setGameLink(data.game_link);
          setWhiteMove(data.to_move);
          setInputFEN(data.starting_pos);
          setBestMoves(data.top_five);
          setGMmove(data.gm_move);
          setLoading(false);
        })
        .catch((error) => {
          setErrorRaised(error);
        });

    }
    fetchData();
  }, []);


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
  if (loading) return <div>Loading...</div>;
  if (errorRaised) return <div>Error: {errorRaised.message}</div>;
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
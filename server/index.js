const express = require('express')
const app = express();
const port = 3000;

const mysql = require('mysql2');
const axios = require('axios');

//create mysql connection
const pool = mysql.createPool({
host: "127.0.0.1",
user: "root",
password: "MaisyDoge13",
database: "chessdb"
}).promise();

async function getPuzzle() {
  const result = pool.query("SELECT * from Positions ORDER BY RAND() LIMIT 1;");
  return result;
}

const username = 'magnuscarlsen';
const year = 2023;
const month = 10;

const apiUrl = 
`https://api.chess.com/pub/player/${username}/games/${year}/${month}/pgn`;

const inputString = "1. Nf3 {[%clk 0:03:00]} 1... Nf6 {[%clk 0:03:00]} 2. e3 {[%clk 0:02:56.7]} 2... g6 {[%clk 0:02:58.8]} 3. b3 {[%clk 0:02:56.6]} 3... Bg7 {[%clk 0:02:58.3]} 4. d4 {[%clk 0:02:56.2]} 4... O-O {[%clk 0:02:58.2]} 5. Bb2 {[%clk 0:02:55.1]} 5... b6 {[%clk 0:02:58.1]} 6. c4 {[%clk 0:02:53.1]} 6... Bb7 {[%clk 0:02:57.2]} 7. Qc2 {[%clk 0:02:52.1]} 7... d6 {[%clk 0:02:55.3]} 8. Be2 {[%clk 0:02:51.3]} 8... Ne4 {[%clk 0:02:54.1]} 9. O-O {[%clk 0:02:50]} 9... Nd7 {[%clk 0:02:53.6]} 10. Rd1 {[%clk 0:02:49.1]} 10... Qe8 {[%clk 0:02:53]} 11. Nc3 {[%clk 0:02:47.7]} 11... Nxc3 {[%clk 0:02:51.7]} 12. Bxc3 {[%clk 0:02:47.6]} 12... e5 {[%clk 0:02:51.4]} 13. dxe5 {[%clk 0:02:47]} 13... Nxe5 {[%clk 0:02:49.5]} 14. Nd4 {[%clk 0:02:46.2]} 14... Qe7 {[%clk 0:02:45.7]} 15. Bf1 {[%clk 0:02:40.4]} 15... Kh8 {[%clk 0:02:43.3]} 16. Ne2 {[%clk 0:02:39.2]} 16... f5 {[%clk 0:02:35.8]} 17. Nf4 {[%clk 0:02:37.2]} 17... Rae8 {[%clk 0:02:28.7]} 18. Rac1 {[%clk 0:02:34.4]} 18... Qg5 {[%clk 0:02:23.7]} 19. Kh1 {[%clk 0:02:15.7]} 19... a5 {[%clk 0:02:20.8]} 20. Nd5 {[%clk 0:02:06.6]} 20... Bxd5 {[%clk 0:02:08]} 21. Rxd5 {[%clk 0:01:59.6]} 21... Ng4 {[%clk 0:02:03.7]} 22. Bxg7+ {[%clk 0:01:55.9]} 22... Kxg7 {[%clk 0:02:03.6]} 23. h3 {[%clk 0:01:55.2]} 23... Qh4 {[%clk 0:01:53.8]} 24. Kg1 {[%clk 0:01:52.2]} 24... Nf6 {[%clk 0:01:49.8]} 25. Rd4 {[%clk 0:01:49.3]} 25... Re4 {[%clk 0:01:48.3]} 26. Rcd1 {[%clk 0:01:46.5]} 26... Rfe8 {[%clk 0:01:45.8]} 27. g3 {[%clk 0:01:45.6]} 27... Qg5 {[%clk 0:01:42.3]} 28. Bg2 {[%clk 0:01:44.8]} 28... Rxd4 {[%clk 0:01:41]} 29. Rxd4 {[%clk 0:01:44.7]} 29... Nd7 {[%clk 0:01:38.7]} 30. a3 {[%clk 0:01:43.2]} 30... Qf6 {[%clk 0:01:34.8]} 31. b4 {[%clk 0:01:42]} 31... axb4 {[%clk 0:01:34.7]} 32. axb4 {[%clk 0:01:41.9]} 32... Ne5 {[%clk 0:01:34.4]} 33. c5 {[%clk 0:01:40.5]} 33... bxc5 {[%clk 0:01:31.8]} 34. bxc5 {[%clk 0:01:40.4]} 34... dxc5 {[%clk 0:01:23.9]} 35. Qxc5 {[%clk 0:01:40.3]} 35... Re7 {[%clk 0:01:23.7]} 36. Ra4 {[%clk 0:01:33]} 36... Qd6 {[%clk 0:01:18.6]} 37. Qc2 {[%clk 0:01:26]} 37... Rd7 {[%clk 0:01:16.4]} 38. Ra1 {[%clk 0:01:20.9]} 38... Qd2 {[%clk 0:01:11]} 39. Qxd2 {[%clk 0:01:15]} 39... Rxd2 {[%clk 0:01:09.4]} 40. Rc1 {[%clk 0:01:14.7]} 40... Rd7 {[%clk 0:01:06.8]} 41. Bf1 {[%clk 0:01:12]} 41... Nf3+ {[%clk 0:01:04.4]} 42. Kg2 {[%clk 0:01:11.1]} 42... Ng5 {[%clk 0:01:04.2]} 43. Bb5 {[%clk 0:01:09]} 43... Re7 {[%clk 0:01:03.5]} 44. Bc4 {[%clk 0:01:07.2]} 44... Ne4 {[%clk 0:01:02.5]} 45. Bd5 {[%clk 0:01:06.2]} 45... Nd6 {[%clk 0:01:02.4]} 46. Ra1 {[%clk 0:01:05]} 46... h6 {[%clk 0:01:01.3]} 47. h4 {[%clk 0:01:03.8]} 47... g5 {[%clk 0:01:00.7]} 48. h5 {[%clk 0:01:03]} 48... Kf6 {[%clk 0:00:59.7]} 49. Ra6 {[%clk 0:01:01.5]} 49... Kg7 {[%clk 0:00:58.5]} 50. Kf1 {[%clk 0:00:58.6]} 50... Re5 {[%clk 0:00:57.8]} 51. Ba2 {[%clk 0:00:57.4]} 51... Rc5 {[%clk 0:00:57]} 52. Bb3 {[%clk 0:00:48.6]} 52... Kf6 {[%clk 0:00:56]} 53. Ra8 {[%clk 0:00:47.3]} 53... g4 {[%clk 0:00:54.9]} 54. Rg8 {[%clk 0:00:46.2]} 54... Rc3 {[%clk 0:00:47.2]} 55. Rg6+ {[%clk 0:00:45.4]} 55... Ke7 {[%clk 0:00:46.8]} 56. Bd5 {[%clk 0:00:43.6]} 56... Rd3 {[%clk 0:00:45.1]} 57. Bc6 {[%clk 0:00:41.9]} 57... Rc3 {[%clk 0:00:44.4]} 58. Bd5 {[%clk 0:00:41.4]} 58... Rd3 {[%clk 0:00:43.7]} 59. Bg2 {[%clk 0:00:39.9]} 59... Ra3 {[%clk 0:00:40.6]} 60. Rg7+ {[%clk 0:00:36.3]} 60... Kf6 {[%clk 0:00:39.1]} 61. Rg6+ {[%clk 0:00:32]} 61... Ke5 {[%clk 0:00:38.2]} 62. Bc6 {[%clk 0:00:30.1]} 62... Ra1+ {[%clk 0:00:38.1]} 63. Kg2 {[%clk 0:00:29.4]} 63... Rc1 {[%clk 0:00:35.7]} 64. Bd7 {[%clk 0:00:29]} 64... Ne4 {[%clk 0:00:32.5]} 65. Bc6 {[%clk 0:00:27.2]} 65... Nd2 {[%clk 0:00:29.9]} 66. Rxh6 {[%clk 0:00:25.5]} 66... Rc2 {[%clk 0:00:26]} 67. Rg6 {[%clk 0:00:24.8]} 67... Nc4 {[%clk 0:00:25.3]} 68. Kg1 {[%clk 0:00:24]} 68... Rc1+ {[%clk 0:00:24.7]} 69. Kg2 {[%clk 0:00:22]} 69... Rc2 {[%clk 0:00:24.6]} 70. h6 {[%clk 0:00:20.4]} 70... Nxe3+ {[%clk 0:00:23.5]} 71. Kg1 {[%clk 0:00:20]} 71... Rc1+ {[%clk 0:00:22.4]} 72. Kh2 {[%clk 0:00:19.6]} 72... Rc2 {[%clk 0:00:16.9]} 73. Bb5 {[%clk 0:00:19]} 73... Rxf2+ {[%clk 0:00:15.9]} 74. Kh1 {[%clk 0:00:18.6]} 74... Nf1 {[%clk 0:00:12.7]} 75. Bxf1 {[%clk 0:00:15.8]} 75... Rxf1+ {[%clk 0:00:12.6]} 76. Kg2 {[%clk 0:00:15.5]} 76... Ra1 {[%clk 0:00:11.7]} 77. h7 {[%clk 0:00:15]} 77... Ra2+ {[%clk 0:00:11.6]} 78. Kg1 {[%clk 0:00:14.4]} 78... Ra1+ {[%clk 0:00:11.5]} 79. Kh2 {[%clk 0:00:13.8]} 79... Ra2+ {[%clk 0:00:11.4]} 80. Kg1 {[%clk 0:00:13.5]} 80... Ra1+ {[%clk 0:00:11.1]} 81. Kf2 {[%clk 0:00:13.4]} 81... Ra2+ {[%clk 0:00:11]} 82. Ke3 {[%clk 0:00:12.6]} 82... Ra1 {[%clk 0:00:10.9]} 83. Rg7 {[%clk 0:00:12.4]} 83... Ra3+ {[%clk 0:00:09.8]} 84. Kf2 {[%clk 0:00:11.1]} 84... Ke4 {[%clk 0:00:09.7]} 85. Re7+ {[%clk 0:00:10.1]} 85... Kd4 {[%clk 0:00:08.6]} 86. h8=Q+ {[%clk 0:00:10]} 1-0";
const { filterMoves } = require('./filterMoves');
/*console.log(filterMovesBlack(inputString));
console.log(filterMovesWhite(inputString));*/

app.get('/fill-db', async (req, res) => {
  try {
    const apiResponse = await axios.get(apiUrl);
    const regex = /\[Event[^\]]*]([\s\S]*?0-1)[\s\S]*?(?=\[Event|$)/g;
    const matches = apiResponse.data.match(regex).slice(0, 50);
    //console.log("matches?", matches);

    for (let match of matches) {
      const moveOrderWhite = filterMoves(match, true);
      const moveOrderBlack = filterMoves(match, false);
      //console.log(moveOrderWhite, moveOrderBlack);

      const res = await axios.post('http://127.0.0.1:5000/construct', { whiteMoves: moveOrderWhite, blackMoves: moveOrderBlack });
      console.log(res.data)
    }

    res.send('Data processed successfully');
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('An error occurred');
  }
});

app.get('/puzzles', async (req, res) => {
  const result = await getPuzzle();
  console.log(result);
  var pos = result[0][0];
  res.send({
    "position": {
      "Id": pos.PositionID,
      "FEN": pos.FEN,
      "Eval": pos.Eval,
      "Moves": pos.Moves,
      "WhiteName": pos.WhiteName,
      "BlackName": pos.BlackName,
      "MovePlayed": pos.MovePlayed,
      "GameDescription": pos.GameDescription
    }
  });
});

app.get('/test-stockfish', async (req, res) => {
  const result = await getPuzzle();
  console.log(result);
  var pos = result[0][0];
  res.send({
    "position": {
      "Id": pos.PositionID,
      "FEN": pos.FEN,
      "Eval": pos.Eval,
      "Moves": pos.Moves,
      "WhiteName": pos.WhiteName,
      "BlackName": pos.BlackName,
      "MovePlayed": pos.MovePlayed,
      "GameDescription": pos.GameDescription
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

const Position = {
  FEN: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
  Eval: 0.5,
  WhiteName: 'Magnus Carlsen',
  BlackName: 'Fabiano Caruana',
  Moves: '{"e4": ["Stockfish line 1", "Stockfish line 2"], "c5": ["Stockfish line 3"]}',
  MovePlayed: 'e4',
  GameDescription: 'Sample game description',
};
const insertPosition = require("./insertPosition")

import express from 'express'
const app = express();
const port = 3000;

import mysql from 'mysql2'
import chesswebapi from 'chess-web-api'

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

import ChessWebAPI from 'chess-web-api';

var chessAPI = new ChessWebAPI();
chessAPI.getPlayer('GMHikaruOnTwitch')
    .then(function(response) {
        console.log('Player Profile', response.body);
    }, function(err) {
        console.error(err);
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
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
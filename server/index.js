import express from 'express'
const app = express();
const port = 3000;
import mysql from 'mysql2'

const pool = mysql.createPool({
host: "127.0.0.1",
user: "root",
password: "MaisyDoge13",
database: "chessdb"
}).promise();
const result = await pool.query("SELECT * FROM Positions");
console.log(result);
app.get('/puzzles', (req, res) => {
  res.send({
    "positions": ["Hello World!"]
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})
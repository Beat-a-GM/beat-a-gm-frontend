-- schema.sql
--CREATE DATABASE chessdb;
USE chessdb;
-- Create the Positions table
CREATE TABLE Positions (
    -- Unique identifier for each position (you may want to adjust the data type based on your needs)
    PositionID INT PRIMARY KEY AUTO_INCREMENT,

    -- String representation of the FEN (Forsyth-Edwards Notation)
    FEN VARCHAR(255) NOT NULL,

    -- Evaluation score as a Double
    Eval DOUBLE NOT NULL,

    -- White player's name
    WhiteName VARCHAR(100) NOT NULL,

    -- Black player's name
    BlackName VARCHAR(100) NOT NULL,

    /*Moves is a JSON serializible list of move names to a 
    list of the resulting Stockfish lines*/
    Moves TEXT,

    -- The move that Magnus, Hikaru, or Fabiano played.
    MovePlayed VARCHAR(10) NOT NULL DEFAULT '',

    GameDescription TEXT
);

INSERT INTO Positions (FEN, Eval, WhiteName, BlackName, Moves)
VALUES 
("ALKJDSL:GKJ", 1.5, "Magnus Carlsen", "Hikaru Nakamura", 
'{"Nc4": {eval:1.0,line:["e5", "e6", "Nxf6", "Ke4", "Qe2"]},"e6": {eval:1.5,line:["e5", "e6", "Nxf6", "Ke4", "Qe2"]}}'
);

INSERT INTO Positions (FEN, Eval, WhiteName, BlackName, Moves)
VALUES 
("ALKJDSL:GKJ", 1.0, "Magnus Carlsen", "Hikaru Nakamura", 
'{"Nc4": {eval:1.0,line:["e5", "e6", "Nxf6", "Ke4", "Qe2"]},"e6": {eval:1.5,line:["e5", "e6", "Nxf6", "Ke4", "Qe2"]}}'
);

INSERT INTO Positions (FEN, Eval, WhiteName, BlackName, Moves)
VALUES 
("ALKJDSL:GKJ", 0.5, "Magnus Carlsen", "Hikaru Nakamura", 
'{"Nc4": {eval:1.0,line:["e5", "e6", "Nxf6", "Ke4", "Qe2"]},"e6": {eval:1.5,line:["e5", "e6", "Nxf6", "Ke4", "Qe2"]}}'
);
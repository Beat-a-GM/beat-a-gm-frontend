module.exports = function insertPosition(connection, Position) {
    
    // SQL query with placeholders for values
    const sql = `
      INSERT INTO Positions 
      (FEN, Eval, WhiteName, BlackName, Moves, MovePlayed, GameDescription) 
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
  
    // Values to be inserted
    const values = [
      Position.FEN,
      Position.Eval,
      Position.WhiteName,
      Position.BlackName,
      Position.Moves,
      Position.MovePlayed,
      Position.GameDescription,
    ];
  
    // Execute the query with the specified values
    connection.query(sql, values, (err, results) => {
      if (err) {
        console.error('Error inserting chess position:', err);
        return;
      }
  
      console.log('Chess position successfully inserted');
      console.log('New position inserted row ID:', results.insertId);
  
    });
  }
  
  
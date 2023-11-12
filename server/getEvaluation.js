const { exec } = require('child_process');

module.exports = function evaluatePosition(moves) {
  return new Promise((resolve, reject) => {
    // Create a child process for Stockfish UCI.
    const childProcess = exec('stockfish', { stdio: ['pipe', 'pipe', 'pipe'] });

    let output = '';

    childProcess.stdout.on('data', (chunk) => {
      output += chunk;
    });

    childProcess.on('exit', () => resolve(output));
    childProcess.on('error', reject);

    // Send the Stockfish UCI engine the following commands.
    childProcess.stdin.write('uci\n');
    childProcess.stdin.write('isready\n');
    childProcess.stdin.write(`position startpos moves ${moves}\n`);
    childProcess.stdin.write('go depth 20\n');
    childProcess.stdin.end(); // Ensure you close the stdin stream
  });
};
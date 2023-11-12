function filterMoves(inputString, isWhite) {
    const moveOrderRegex = isWhite ? /\d+\.\s(\S+)(?:\s\S+)?/g : /\d+\.\.\.\s(\S+)/g;
    const moves = [];
    const moveMatches = inputString.match(moveOrderRegex);

    if (moveMatches) {
        for (const match of moveMatches) {
            const move = match.split(' ')[1];
            moves.push(move);
        }
    }

    return moves;
}

module.exports = { filterMoves };
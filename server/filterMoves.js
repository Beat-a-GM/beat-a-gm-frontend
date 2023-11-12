function filterMovesWhite(inputString) {
    const moveOrderRegex = /\d+\.\s(\S+)(?:\s\S+)?/g;
    const moves = [];

    let match;
    while ((match = moveOrderRegex.exec(inputString)) !== null) {
        moves.push(match[1]);
    }

    return moves;
}
function filterMovesBlack(inputString) {
    const moveOrderRegexBlack = /\d+\.\.\.\s(\S+)/g;
    const moves = [];

    let match;
    while ((match = moveOrderRegexBlack.exec(inputString)) !== null) {
        moves.push(match[1]);
    }

    return moves;
}
module.exports = {filterMovesWhite, filterMovesBlack}
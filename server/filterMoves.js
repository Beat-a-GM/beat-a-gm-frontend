function filterMovesWhite(inputString) {
    const moveOrderRegex = /\d+\.\s(?:\S+\s?){1,2}(?=\{)/g;
    const moveOrderRegexBlack = /\d+\.\.\.\s(?:\S+\s?){1,2}(?=\{)/g;
// Extract move orders from the input string
const moveOrders = inputString.match(moveOrderRegex);

// Remove the times from each move order
const moveOrdersWithoutTimes = moveOrders.map(moveOrder => moveOrder.replace(/\{\[%clk[^}]*\]\}/g, '').trim());
return moveOrdersWithoutTimes
}
function filterMovesBlack(inputString) {
    moveOrderRegexBlack = /\d+\.\.\.\s(?:\S+\s?){1,2}(?=\{)/g;
    const moveOrdersBlack = inputString.match(moveOrderRegexBlack);
    const moveOrdersWithoutTimes = moveOrdersBlack.map(moveOrder => moveOrder.replace(/\{\[%clk[^}]*\]\}/g, '').trim());
    return moveOrdersWithoutTimes;
}
module.exports = {filterMovesWhite, filterMovesBlack}
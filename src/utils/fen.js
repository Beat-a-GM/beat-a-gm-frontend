
export function parseFEN(fen) {
    return fen.split(' ')[0].split('/').map(row => row.replace(/\d/g, num => '.'.repeat(num)));
}

export function compareFEN(fen1, fen2) {
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
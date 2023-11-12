from flask import Flask, request, jsonify
from stockfish import Stockfish
import chess

app = Flask(__name__)

# Initialize Stockfish
stockfish = Stockfish('/opt/homebrew/bin/stockfish')

@app.route('/home', methods=["GET"])
def home():
    fen = "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R"
    stockfish.set_fen_position(fen)
    evaluation = stockfish.get_evaluation()
    print(evaluation)
    return jsonify(evaluation)

@app.route('/evaluate', methods=['POST'])
def evaluate_position():
    data = request.json
    fen = data.get('fen')
    stockfish.set_fen_position(fen)
    stockfish.set_depth(10)
    
    analysis = {'White': [], 'Black': []}


    return jsonify(analysis)

#constructs a Position object based off inputted moves, if possible
@app.route('/construct', methods=['POST'])
def construct_position():
    data = request.json
    whiteMoves = data.get('whiteMoves', [])
    blackMoves = data.get('blackMoves', [])

    board = chess.Board()

    print(whiteMoves)
    print(blackMoves)
    ilglcnt=0
    for whiteMove, blackMove in zip(whiteMoves, blackMoves):
        try:
            # Make white move if available
            print("moves " + whiteMove + " " + blackMove)
            if whiteMove:
                board.push_san(whiteMove)
                print(f"After {whiteMove}: {board.fen()}")

            # Make black move if available
            if whiteMove and blackMove:
                board.push_san(blackMove)
                print(f"After {blackMove}: {board.fen()}")

        except chess.IllegalMoveError as e:
            print("Illegal Move ")
            return "illegal move"
        except chess.AmbiguousMoveError as e:
            print("Ambigious Move ")
            ilglcnt+=1
            return "ambigious move"

    return "Position constructed"
    

if __name__ == '__main__':
    app.run(debug=True)
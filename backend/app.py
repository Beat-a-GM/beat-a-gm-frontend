from flask import Flask, request, jsonify, make_response
from stockfish import Stockfish
import chess
import requests

app = Flask(__name__)

# Initialize Stockfish
stockfish = Stockfish('/opt/homebrew/bin/stockfish')

def get_chess_game(username, year, month):
    print(f"https://api.chess.com/pub/player/{username}/games/{year}/{month}/pgn")
    data = requests.get(f"https://api.chess.com/pub/player/{username}/games/{year}/{month}/pgn")
    print(data.text)
    return data.text

@app.route('/home', methods=["GET"])
def home():
    print("Hello World")
    data = get_chess_game("magnuscarlsen", 2023, 10)
    return jsonify({"hello": data})

@app.route('/evaluate', methods=['POST'])
def evaluate_position():
    data = request.json
    fen = data.get('fen')
    stockfish.set_fen_position(fen)
    stockfish.set_depth(10)
    
    analysis = {'White': [], 'Black': []}
    return jsonify(analysis)

@app.route('/construct', methods=['POST'])
def construct_position():
    data = request.json
    whiteMoves = data.get('whiteMoves', [])
    blackMoves = data.get('blackMoves', [])

    board = chess.Board()
    
    print(whiteMoves)
    print(blackMoves)
    moveno=1
    for whiteMove, blackMove in zip(whiteMoves, blackMoves):
        try:
            # Make white move if available

            stockfish.set_fen_position(board.fen())
            top_moves_white = stockfish.get_top_moves(2)
            
            if ( moveno>15 and
                top_moves_white[0].get('Centipawn')>100 and top_moves_white[0].get('Centipawn')<500 and
            top_moves_white[1].get('Centipawn')>100 and top_moves_white[1].get('Centipawn')<500
                ):
                print(board.fen())
                return {"Position": board.fen(), "StockfishMove": top_moves_white[0].get("Move"), "GMMove": whiteMove}


            if whiteMove:
                board.push_san(whiteMove)
            
            

            stockfish.set_fen_position(board.fen())
            top_moves_black = stockfish.get_top_moves(2)
            #print(f"Top 3 black moves after {board.fen()}: {top_moves_black}")

            #print("actual move: " + blackMove)
            # Make black move if available


            if ( moveno>15 and
                top_moves_black[0].get('Centipawn')<-100 and top_moves_black[0].get('Centipawn')>-500 and
            top_moves_black[1].get('Centipawn')<-100 and top_moves_black[1].get('Centipawn')>-500
                ):
                print(board.fen())
                return {"Position": board.fen(), "StockfishMove": top_moves_white[0].get("Move"), "GMMove": whiteMove}


            if blackMove:
                board.push_san(blackMove)
            

            moveno += 1
            if (moveno == 30):
                return "no good positions after 30 moves"

        except chess.IllegalMoveError as e:
            print("Illegal Move")
            return "illegal move"
        except chess.AmbiguousMoveError as e:
            print("Ambiguous Move")
            return "ambiguous move"

    return "Position constructed"

if __name__ == '__main__':
    app.run(debug=True)
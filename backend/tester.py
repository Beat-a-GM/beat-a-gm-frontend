top3_moves = [{'Move': 'b1a2', 'Centipawn': 144, 'Mate': None}, {'Move': 'c4b3', 'Centipawn': 141, 'Mate': None}, {'Move': 'd1d3', 'Centipawn': 130, 'Mate': None}]
i=146
white_pos_good = ((int(i/3)%2==0) and (top3_moves[0]['Centipawn']>=100 and top3_moves[0]['Centipawn']<=500) and
                    top3_moves[1]['Centipawn']>=100 and top3_moves[1]['Centipawn']<=500 and
                    top3_moves[2]['Centipawn']>=100 and top3_moves[2]['Centipawn']<=500)
mod = (i/3)
print(int(mod)%2)
print(white_pos_good)
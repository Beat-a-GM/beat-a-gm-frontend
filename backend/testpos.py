def testpos(i, top3_moves, board, best_move, move_uci):
    #print (str(top3_moves) + " " + str(len(board.piece_map())))
    return (len(top3_moves) == 3 and top3_moves[0]['Centipawn']!=None and top3_moves[1]['Centipawn']!=None and top3_moves[2]['Centipawn']!= None and \
                    best_move != move_uci and len(board.piece_map().values())>=15 and \
                    (((int(i/3)%2==0) and top3_moves[0]['Centipawn']>=100 and \
                                         top3_moves[0]['Centipawn']<=500 and \
                    top3_moves[1]['Centipawn']>=90 and top3_moves[1]['Centipawn']<=500 and \
                    top3_moves[2]['Centipawn']>=75 and top3_moves[2]['Centipawn']<=500) or \
                    ((int(i/3)%2==1) and top3_moves[0]['Centipawn']>=-500 and top3_moves[0]['Centipawn']<=-100 and \
                    top3_moves[1]['Centipawn']>=-500 and top3_moves[1]['Centipawn']<=-90 and \
                    top3_moves[2]['Centipawn']>=-500 and top3_moves[2]['Centipawn']<=-75)))
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Game from "./game";

export default function GamePage() {
    let { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [inputFEN, setInputFEN] = useState("");
    const [whitePlayer, setWhitePlayer] = useState("");
    const [blackPlayer, setBlackPlayer] = useState("");
    const [bestMoves, setBestMoves] = useState([]);
    const [GMmove, setGMmove] = useState("");



    useEffect(() => {
        fetch('https://beat-a-gm-backend.vercel.app/puzzles/get/' + id)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Game fetched:', data);

                setInputFEN(data.starting_pos);
                setWhitePlayer(data.white_username);
                setBlackPlayer(data.black_username);
                setBestMoves(data.top_five);
                setGMmove(data.gm_move);

                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching Game:', error);
            });
    }, [id]);


    if (loading) {
        return <div>Loading...</div>
    }
    return (

        <Game inputFEN={inputFEN} whitePlayer={whitePlayer} blackPlayer={blackPlayer} bestMoves={bestMoves} GMmove={GMmove} />

    );
}
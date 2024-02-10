import React, { useState, useEffect } from "react";
import getImage from "./getImage.js"
import Stack from '@mui/joy/Stack';
import Sheet from '@mui/joy/Sheet';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { styled } from '@mui/joy/styles';
import Point from "./point.js";
import "./game-sidebar.css";

const Sidebar = ({ whitePlayer, blackPlayer, userMove, stockFishMove, gmMove }) => {
    const Item = styled(Sheet)(({ theme }) => ({
        ...theme.typography['body-sm'],
        textAlign: 'center',
        fontWeight: theme.fontWeight.md,
        color: theme.vars.palette.text.secondary,
        border: '1px solid',
        borderColor: theme.palette.divider,
        padding: theme.spacing(1),
        borderRadius: theme.radius.md,
    }));
    const [submitEnabled, setSubmitEnabled] = useState(false);
    const [showMoves, setShowMoves] = useState(false);
    let point = new Point(0);


    useEffect(() => {
        if (!!userMove) {
            setSubmitEnabled(true);
        }
    }, [userMove]);

    const handleSubmit = () => {
        setSubmitEnabled(false);
        setShowMoves(true);
        point.compareMoves(userMove, gmMove, stockFishMove);
        console.log(point.displayPoints());
    }
    return (
        <div className="sidebar">
            <Stack spacing={1}>
                <Item><h3>Current Points</h3>
                    <div className="printer">{point.points}</div></Item>
                <Item>
                    <img src={getImage(blackPlayer)} alt="black player" width="100px" />
                    <p>Black: {blackPlayer}</p>
                    <p>vs</p>
                    <img src={getImage(whitePlayer)} alt="white player" width="100px" />
                    <p>White: {whitePlayer}</p>
                </Item>
                <Item><h3>Your Move</h3>
                    {
                        userMove ? (
                            <p className="printer">{userMove}</p>
                        ) : (
                            <p className="printer">-</p>
                        )
                    }
                </Item>

                <ButtonGroup aria-label="Button Area">
                    <Button variant="dark" onClick={handleSubmit} disabled={!(submitEnabled)}>Submit</Button>
                </ButtonGroup>
                {showMoves ? (
                    <div className="bestmoves">
                        <Item><h3>GM's Move</h3>

                            <p className="printer">{gmMove}</p></Item>
                        <Item><h3>StockFish's Move</h3>
                            <p className="printer">{stockFishMove}</p></Item>

                    </div>
                ) : (
                    <div className="bestmoves">
                        <Item><h3>GM's Move</h3>

                            <p className="printer">-</p></Item>
                        <Item><h3>StockFish's Move</h3>
                            <p className="printer">-</p></Item>

                    </div>
                )
                }
            </Stack>

        </div>
    );
};

export default Sidebar;

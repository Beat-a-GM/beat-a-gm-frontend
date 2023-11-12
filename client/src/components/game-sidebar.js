import React, { useState, useEffect } from "react";
import getImage from "./getImage.js"
import Stack from '@mui/joy/Stack';
import Sheet from '@mui/joy/Sheet';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { styled } from '@mui/joy/styles';
import "./game-sidebar.css";

const Sidebar = ({ whitePlayer, blackPlayer,userMove,stockFishMove, gmMove }) => {
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

    let points = 0;

    useEffect(() => {
        if (!!userMove) {
            setSubmitEnabled(true);
        }
    }, [userMove]);

    const handleSubmit = () => {
        setSubmitEnabled(false);
        setShowMoves(true);
        points += (userMove === gmMove ? 50 : 0);
        points += (userMove === stockFishMove ? 50 : 0);

        }
    return (
        <div className="sidebar">
            <Stack spacing={1}>
                <Item><h2>Current Points</h2>
                    <div className="printer">{points}</div></Item>
                <Item>
                    <img src={getImage(blackPlayer)} alt="black player" width="100px" />
                    <p>Black: {blackPlayer}</p>
                    <p>vs</p>
                    <img src={getImage(whitePlayer)} alt="white player" width="100px" />
                    <p>White: {whitePlayer}</p>
                </Item>
                <Item><h2>Your Move</h2>

                    <p className="printer">{userMove}</p></Item>

                <ButtonGroup aria-label="Button Area">  
                <Button variant="dark" onClick={handleSubmit} disabled={!(submitEnabled)}>Submit</Button>
                </ButtonGroup>
                {showMoves && (
                    <>
                        <Item><h2>GM's Move</h2>

                            <p className="printer">{gmMove}</p></Item>
                        <Item><h2>StockFish's Move</h2>
                            <p className="printer">{stockFishMove}</p></Item>

                    </>
                )}
            </Stack>

        </div>
    );
};

export default Sidebar;

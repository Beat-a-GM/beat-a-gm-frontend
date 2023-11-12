import React, { useState, useEffect } from "react";
import getImage from "./getImage.js"
import Stack from '@mui/joy/Stack';
import Sheet from '@mui/joy/Sheet';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { styled } from '@mui/joy/styles';

const Sidebar = ({ whitePlayer, blackPlayer, userMove }) => {
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
    const [gmMove, setGmMove] = useState('');
    const [stockFishMove, setStockFishMove] = useState('');

    useEffect(() => {
        if (!!userMove) {
            setSubmitEnabled(true);
        }
    }, [userMove]);

    const handleSubmit = () => {
        setSubmitEnabled(false);
        setShowMoves(true);

            //placeholders for api integration to verify
            // the submit button is working as intended
            const newGmMove = Math.floor(Math.random() * 100) + 1;
            const newStockFishMove = Math.floor(Math.random() * 100) + 1;
            setGmMove(newGmMove); 
            setStockFishMove(newStockFishMove);

        }

    return (
        <div className="sidebar">
            <Stack spacing={1}>
                <Item><h2>Current Points</h2>
                    <p>{0}</p></Item>
                <Item>
                    <img src={getImage(blackPlayer)} alt="black player" width="100px" />
                    <p>Black: {blackPlayer}</p>
                    <p>vs</p>
                    <img src={getImage(whitePlayer)} alt="white player" width="100px" />
                    <p>White: {whitePlayer}</p>
                </Item>
                <Item><h2>Your Move</h2>
                    <p>{userMove}</p></Item>
                <ButtonGroup aria-label="Button Area">  
                <Button variant="dark" onClick={handleSubmit} disabled={!(submitEnabled)}>Submit</Button>
                </ButtonGroup>
                {showMoves && (
                    <>
                        <Item><h2>GM's Move</h2>
                            <p>{gmMove}</p></Item>
                        <Item><h2>StockFish's Move</h2>
                            <p>{stockFishMove}</p></Item>
                    </>
                )}
            </Stack>

        </div>
    );
};

export default Sidebar;

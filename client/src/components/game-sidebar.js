import React from "react";
import getImage from "./getImage.js"
import Stack from '@mui/joy/Stack';
import Sheet from '@mui/joy/Sheet';
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

    return (

        <div className="sidebar">
            <Stack spacing={2}>
                <Item>
                    <p>Black: {blackPlayer}</p>
                    <img src={getImage(blackPlayer)} alt="black player" width = "100px"/>
                    <p>White: {whitePlayer}</p>
                    <img src={getImage(whitePlayer)} alt="white player" width="100px"/>
                    
                </Item>
                <Item><h2>User's Move</h2>
                    <p>{userMove}</p></Item>
                <Item><h2>Current Points</h2>
                    <p>{0}</p></Item>
            </Stack>

        </div>
    );
};

export default Sidebar;

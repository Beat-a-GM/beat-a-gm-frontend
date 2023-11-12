import React from "react";
import getImage from "./getImage.js"
import Stack from '@mui/joy/Stack';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
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
                <Item><h2>GM's Move</h2>
                    <p>E4</p></Item>
                <Item><h2>StockFish's Move</h2>
                    <p>D4</p></Item>
                <Item>
                    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                        <Grid xs={4}>
                            <button>Submit</button>
                        </Grid>
                        <Grid xs={4}>
                            <button>Skip</button>
                        </Grid>
                        <Grid xs={4}>
                            <button>Next</button>
                        </Grid>

                    </Grid>
                </Item>


            </Stack>

        </div>
    );
};

export default Sidebar;

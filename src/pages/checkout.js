import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import Header from '../components/shared/header';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const items = [
    { img: '', name: '', price: '10000', quantiy: 1 },
    { img: '', name: '', price: '10000', quantiy: 1 },
    { img: '', name: '', price: '10000', quantiy: 1 },
]

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1em',
        marginBottom: '3em'
    }
}));


export default function CheckOut() {
    const classes = useStyles();
    const [listitems, setlistitems] = useState(items);
    return (
        <Box>
            <Header />
            <Box style={{ marginTop: '8em' }}>
                <center>
                    <Typography variant="h6">CARRITO DE COMPRA</Typography>
                </center>
                <Container>
                    <Grid container style={{marginTop:'2em'}} >
                        <Grid item xs={3}>
                            <Typography> Imagen </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography> Producto </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography> Precio </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography> Cantidad </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
import React, { useState, useEffect, useContext } from 'react';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import Header from '../../components/shared/header';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Enviroment from '../../enviroment';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { CartContext } from '../../contexts/cartContext';

const URL = Enviroment.urlApi + '/epayco';

const items = [
    { img: 'img/kit.jpg', name: 'Kit', price: '10000', quantiy: 1 },
    { img: 'img/kit.jpg', name: 'Medio Ovalado', price: '10000', quantiy: 1 },
    { img: 'img/kit.jpg', name: 'Pequeño Ovalado', price: '10000', quantiy: 1 },
]


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1em',
        marginBottom: '3em'
    },
    box_message: {
        [theme.breakpoints.only('xs')]: {
            marginTop: '6em',
            marginBottom: '12em'
        },
        [theme.breakpoints.only('sm')]: {
            marginTop: '6em',
            marginBottom: '12em'
        },
        [theme.breakpoints.only('md')]: {
            marginTop: '6em',
            marginBottom: '12em'
        },
        [theme.breakpoints.only('lg')]: {
            paddingTop: '4em',
            marginBottom: '13em'
        },
        [theme.breakpoints.up('xl')]: {
            paddingTop: '8em',
            marginBottom: '20em'
        },
    }
}));

export default function ConfirmationPayment() {
    const classes = useStyles();
    const { clearCart } = useContext(CartContext);

    useEffect(() => {
        // clearCart();
    }, []);

    return (
        <Box>
            <Header />
            <Box className={classes.box_message}>
                <Container style={{ marginTop: '10em' }}>
                    <Grid container>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <center>
                                        <Typography variant="h5">Pago Rechazado</Typography>
                                    </center>
                                </Grid>
                                <Grid item xs={12} style={{ marginTop: '1em' }}>
                                    <center>
                                        <img src="img/icons/sad_128.png" />
                                        <Typography variant="body2">Lo sentimos pero tu pago ha sido rechazado, intenta con otro medio pago. Gracias por elegirnos.</Typography>
                                    </center>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </Container>
            </Box>
        </Box >
    );
}
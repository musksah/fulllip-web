import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import Header from '../../components/shared/header';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Enviroment from '../../enviroment';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
}));

export default function ConfirmationPayment() {
    const classes = useStyles();

    useEffect(() => {
        // checkPayment();
    }, []);

    const checkPayment = () => {
        axios.get(`${URL}/confirmation-payment`).then(
            res => {
                console.log(res);
            },
            err => {
                console.log(err);
            }
        )
    }

    return (
        <Box>
            <Header />
            <Box style={{ marginTop: '6em', marginBottom: '4em' }}>
                <Container style={{ marginTop: '10em' }}>
                    <Grid container>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <center>
                                        <Typography variant="h5">Pago Aceptado</Typography>
                                    </center>
                                </Grid>
                                <Grid item xs={12} style={{marginTop:'1em'}}>
                                    <center>
                                        <img src="img/icons/check_128.png" />
                                        <Typography variant="body2">Tú pago ha sido aceptado, estaremos haciendo llegar tu producto en los próximos 5 días.</Typography>
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
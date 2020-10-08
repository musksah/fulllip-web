import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import Header from '../../components/shared/header';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import { NavLink } from "react-router-dom";

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

// const cardPayment = (

// );

export default function ConfirmationPayment() {
    const classes = useStyles();

    useEffect(() => {
    }, []);

    return (
        <Box>
            <Header />
            <Box style={{ marginTop: '1.8em' }}>
            </Box>
        </Box >
    );
}
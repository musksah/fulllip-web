import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import { Container, Typography, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    subtitle: {
        fontSize: 20
    }
}));

export default function Information() {
    const classes = useStyles();

    useEffect(() => {
        console.log(localStorage.getItem("name"));
    }, []);
    return (
        <Grid container style={{ marginBlockEnd: '3rem' }} spacing={2}>
            <Grid item md={12} style={{ marginBottom: '1rem' }}>
                <InputLabel ><Typography variant="body1" color="secondary" component="p" className={classes.subtitle}>Información de Envío</Typography></InputLabel>
            </Grid>
            <Grid item md={12} style={{ marginBottom: '1rem' }}>

            </Grid>
            <Grid item md={12}>
                <InputLabel ><Typography variant="body1" color="secondary" component="p" className={classes.subtitle}>Envío</Typography></InputLabel>
            </Grid>
        </Grid>

    );
}

import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Header from '../components/shared/header';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Switch, Route, NavLink, useHistory } from "react-router-dom";
import { Alert, AlertTitle } from '@material-ui/lab';
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '10em',
        marginBottom: '11em'
    },
}));


export default function ErrorConfirmation() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Box>
            <Header />
            <Container className={classes.root}>
                <Alert severity="error">
                    <AlertTitle>Correo no validado</AlertTitle>
                Para seguir con tu compra debes validar tu correo electrónico — <strong>Revisalo!</strong>
                </Alert>
                <Box style={{ marginTop: '2em' }}>
                    <center>
                        <Button variant="contained" color="primary">Reenviar Validación a tu correo <EmailIcon style={{marginLeft:'0.3em'}} /></Button>
                    </center>
                </Box>
            </Container>
        </Box>
    );
}
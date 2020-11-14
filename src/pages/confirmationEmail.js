import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from '../components/shared/header';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Switch, Route, NavLink, useHistory, useParams } from "react-router-dom";
import { Alert, AlertTitle } from '@material-ui/lab';
import axios from 'axios';
import Enviroment from '../enviroment';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '10em',
        marginBottom: '11em'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
}));

const URL = `${Enviroment.urlApi}/user/confirmation`;

export default function ConfirmationEmail() {
    const classes = useStyles();
    const history = useHistory();
    const [openProgress, setOpenProgress] = React.useState(false);

    let { token } = useParams();

    useEffect(() => {
        setOpenProgress(true);
        console.log(`token: ${token}`);
        axios.post(`${URL}/${token}`).then(res => {
            console.log(res);
            setOpenProgress(false);
            localStorage.clear();
            history.push("/Ingresar");
        }, error => {
            console.log("Errosito " + error);
        })
    }, []);

    return (
        <Box style={{ marginBottom: '30em' }}>
            <Header />
            <Backdrop className={classes.backdrop} open={openProgress}>
                <CircularProgress color="inherit" variant="indeterminate" disableShrink style={{ width: 80, height: 80 }} />
            </Backdrop>
        </Box>
    );
}
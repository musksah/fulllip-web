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
import SessionToken from '../util/sessions';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import Snackbar from '@material-ui/core/Snackbar';
import Enviroment from '../enviroment';

const URL = `${Enviroment.urlApi}/email`;

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '10em',
        marginBottom: '11em'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1000,
        color: '#fff',
    },
}));


export default function ErrorConfirmation() {
    const classes = useStyles();
    const history = useHistory();
    const [openProgress, setOpenProgress] = useState(false);
    const [message2, setMessage2] = useState("");
    const [message, setMessage] = useState("");
    const [open2, setOpen2] = useState(false);
    const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState(false);

    const openMessage = (message) => {
        setMessage(message);
        handleClick();
    }
    const openMessage2 = (message) => {
        setMessage2(message);
        handleClick2();
    }
    const handleClick2 = () => {
        setOpen2(true);
    };

    const handleClose2 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    }

    const handleClick = () => {
        setOpen(true);
    };

    const sendEmailConfirmation = (e) => {
        setOpenProgress(true);
        e.preventDefault();
        let sessionToken = new SessionToken();
        let token = sessionToken.getToken();
        axios.post(URL + "/send-confirmation/"+token).then(res => {
            setOpenProgress(false);
            if (res.status === 200) {
                setVisible(false);
                openMessage2(res.data.message);
            }
            else {
                openMessage(res.data.message);
            }
        })
    }

    return (
        <Box>
            <Header />
            <Snackbar open={open2} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={handleClose2}>
                <Alert onClose={handleClose2} severity="success">
                    {message2}
                </Alert>
            </Snackbar>
            <Backdrop className={classes.backdrop} open={openProgress}>
                <CircularProgress color="inherit" variant="indeterminate" disableShrink style={{ width: 80, height: 80 }} />
            </Backdrop>
            <Container className={classes.root}>
                <Alert severity="error">
                    <AlertTitle>Correo no validado</AlertTitle>
                Para seguir con tu compra debes validar tu correo electrónico — <strong>Revisalo!</strong>
                </Alert>
                <Box style={{ marginTop: '2em' }}>
                    <center>
                        <Button variant="contained" color="primary" onClick={sendEmailConfirmation} >Reenviar Validación a tu correo <EmailIcon style={{ marginLeft: '0.3em' }} /></Button>
                    </center>
                </Box>
            </Container>
        </Box>
    );
}
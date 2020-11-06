import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { Box, Button, TextField, Card, CardContent, Snackbar } from '@material-ui/core';
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
    inputtext: {
        padding: 14
    },
    root: {
        marginTop: '10em',
        marginBottom: '20em'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
}));

const URL = `${Enviroment.urlApi}/user`;

export default function ConfirmationEmail() {
    const classes = useStyles();
    const history = useHistory();
    const [openProgress, setOpenProgress] = useState(false);
    const [errorToken, setErrorToken] = useState(false);
    const [errorSession, setErrorSession] = useState(false);
    const [passwordUpdate, setpasswordUpdate] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordC, setPasswordC] = useState("");
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const { token } = useParams();

    useEffect(() => {
        if (localStorage.getItem("h_tiov") !== null) {
            setErrorSession(true);
        } else {
            findUser();
        }

    }, []);

    const findUser = () => {
        setOpenProgress(true);
        axios.get(`${URL}/confirmation-email/${token}`).then(res => {
            setOpenProgress(false);
            if (res.status === 200) {
                setEmail(res.data);
            }
            else {
                setErrorToken(true);
            }
        });
    }

    const changePassword = (e) => {
        const { value } = e.target;
        setPassword(value.trim());
    }

    const changePasswordC = (e) => {
        const { value } = e.target;
        setPasswordC(value.trim());
    }

    const saveData = (e) => {
        e.preventDefault();
        if (password === passwordC) {
            setOpenProgress(true);
            axios.put(URL + "/password/" + email, { email, password }).then(res => {
                setOpenProgress(false);
                setEmail("");
                setPassword("");
                setPasswordC("");
                setpasswordUpdate(true);
            });
        } else {
            openMessage("Contraseñas Distintas");
        }
    }

    const goProfile = () => {
        history.push("/Perfil");
    }

    const openMessage = (message) => {
        setMessage(message);
        handleClick();
    }

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Box className={classes.root}>
            <Header />
            <Backdrop className={classes.backdrop} open={openProgress}>
                <CircularProgress color="inherit" variant="indeterminate" disableShrink style={{ width: 80, height: 80 }} />
            </Backdrop>
            <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {message}
                </Alert>
            </Snackbar>
            {errorSession &&
                <Container style={{ marginBottom: '30em' }}>
                    <Alert severity="error">
                        <AlertTitle>Enlace Expirado</AlertTitle>
                        Este enlace de cambio de contraseña no funciona, si quieres cambiar tu contraseña deberias ir al perfil.
                    </Alert>
                    <Box style={{ marginTop: '2em' }}>
                        <center>
                            <Button variant="contained" color="primary" onClick={goProfile}>Ir al perfil</Button>
                        </center>
                    </Box>
                </Container>
            }
            {errorToken &&
                <Container style={{ marginBottom: '30em' }}>
                    <Alert severity="error">
                        <AlertTitle>Enlace Expirado</AlertTitle>
                        Lo sentimos, pero este enlace para cambiar la contraseña no es válido.
                    </Alert>
                </Container>
            }
            {passwordUpdate &&
                <Container style={{ marginBottom: '30em' }}>
                    <Alert severity="success">
                        <AlertTitle>Contraseña Actualizada</AlertTitle>
                        Su contraseña fue actualizada correctamente.
                    </Alert>
                </Container>
            }
            {email &&
                <center>
                    <Container style={{ marginBottom: '20em' }}>
                        <Grid item xs={12} style={{ marginBottom: '1em' }}>
                            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Cambiar Contraseña</Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card style={{ paddingTop: '1em' }}>
                                <CardContent>
                                    <form onSubmit={saveData}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} md={12} >
                                                <TextField
                                                    autoComplete="off"
                                                    name="email"
                                                    variant="outlined"
                                                    fullWidth
                                                    required
                                                    id="email"
                                                    disabled={true}
                                                    inputProps={{ className: classes.inputtext, readOnly: true }}
                                                    value={email}
                                                />
                                            </Grid>

                                            <Grid item xs={12} md={12} >
                                                <TextField
                                                    autoComplete="off"
                                                    name="password"
                                                    variant="outlined"
                                                    fullWidth
                                                    required
                                                    type="password"
                                                    id="password"
                                                    label="Contraseña nueva"
                                                    placeholder='Contraseña nueva'
                                                    inputProps={{ className: classes.inputtext }}
                                                    value={password}
                                                    onChange={changePassword}
                                                />
                                            </Grid>

                                            <Grid item xs={12} md={12}>
                                                <TextField
                                                    autoComplete="off"
                                                    name="password2"
                                                    variant="outlined"
                                                    fullWidth
                                                    required
                                                    type="password"
                                                    id="password2"
                                                    label="Confirmar contraseña nueva"
                                                    placeholder='Confirmar contraseña nueva'
                                                    inputProps={{ className: classes.inputtext }}
                                                    value={passwordC}
                                                    onChange={changePasswordC}
                                                />
                                            </Grid>

                                            <Grid item xs={12} md={12} >
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color='primary'
                                                    fullWidth
                                                    className={classes.submit}
                                                >
                                                    Guardar
                                        </Button>
                                            </Grid>

                                        </Grid>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Container>
                </center>
            }

        </Box >
    );
}
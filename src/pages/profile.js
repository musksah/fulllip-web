import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Enviroment from '../enviroment';
import { CollectionsOutlined } from '@material-ui/icons';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const url = "http://localhost:3006/api/customer";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    centered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1em',
        marginBottom: '3em'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    }
}));


export default function Perfil() {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [dni, setDni] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [birthdate, setBirthdate] = useState(new Date());
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");

    useEffect(() => {
        findCustomer();
    }, []);

    const findCustomer = () => {
        axios.post(url, { session: localStorage.getItem("sessionid") }).then(res => {
            const datos = res.data;
            console.log(res);
            setName(datos.name);
            setLastname(datos.lastname);
            setDni(datos.dni_id);
            setAddress(datos.address);
            setPhone(datos.phone);
            // setBirthdate();
            // setCountry();
            setCity(datos.city);
            setEmail(datos.user.email);
        });
    }

    const changeAddress = (e) => {
        const { value } = e.target;
        setAddress(value);
    }

    const changeDni = (e) => {
        const { value } = e.target;
        setDni(value);
    }

    const changeName = (e) => {
        const { value } = e.target;
        setName(value);
    }

    const changeLastname = (e) => {
        const { value } = e.target;
        setLastname(value);
    }

    const changePhone = (e) => {
        const { value } = e.target;
        console.log(value);
        setPhone(value);
    }

    const changeEmail = (e) => {
        const { value } = e.target;
        setEmail(value);
    }

    const changeBirthdate = (date) => {
        setBirthdate(date);
    }

    const changeCountry = (e) => {
        const { value } = e.target;
        setCountry(value);
    }

    const changeCity = (e) => {
        const { value } = e.target;
        setCity(value);
    }

    // const changePassword = (e) => {
    //     const { value } = e.target;
    //     console.log(value);
    //     setPassword(value);
    // }

    const updateUser = (e) => {
        e.preventDefault();
        if (isNaN(dni)) {
            openMessage("el campo cédula debe ser un número")
        } else {

            axios.post(url, { name, lastname, phone, dni }).then(res => {

            });
        }
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
        <Container component="main" style={{ marginTop: '9rem', marginBottom: '9rem' }}>
            <CssBaseline />
            <h5>DATOS PERSONALES</h5>
            <hr />
            <form className={classes.form} onSubmit={updateUser}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <InputLabel htmlFor="standard-adornment-amount">Nombre</InputLabel>
                        <TextField
                            autoComplete="off"
                            name="firstName"
                            variant="outlined"
                            fullWidth
                            required
                            id="firstName"
                            autoFocus
                            value={name}
                            onChange={changeName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel htmlFor="standard-adornment-amount">Apellido</InputLabel>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="lastName"
                            name="lastName"
                            required
                            autoComplete="off"
                            value={lastname}
                            onChange={changeLastname}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor="standard-adornment-amount">Cédula</InputLabel>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="dni_id"
                            name="dni_id"
                            required
                            autoComplete="off"
                            value={dni}
                            onChange={changeDni}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor="standard-adornment-amount">Dirección</InputLabel>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="address"
                            name="address"
                            autoComplete="off"
                            value={address}
                            onChange={changeAddress}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <InputLabel htmlFor="standard-adornment-amount">Teléfono</InputLabel>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="phone"
                            name="phone"
                            autoComplete="off"
                            value={phone}
                            onChange={changePhone}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor="standard-adornment-amount">Fecha Nacimiento</InputLabel>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                variant="outlined"
                                fullWidth
                                required
                                id="date-picker-dialog"
                                format="MM/dd/yyyy"
                                value={birthdate}
                                onChange={changeBirthdate}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor="standard-adornment-amount">País</InputLabel>
                        <TextField
                            variant="outlined"
                            fullWidth
                            name="country"
                            type="text"
                            id="country"
                            autoComplete="off"
                            value={country}
                            onChange={changeCountry}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor="standard-adornment-amount">Ciudad</InputLabel>
                        <TextField
                            variant="outlined"
                            fullWidth
                            name="city"
                            type="text"
                            id="city"
                            autoComplete="off"
                            value={city}
                            onChange={changeCity}
                        />
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                    >
                        Actualizar Perfil
          </Button>
                </Grid>
            </form>
            <form className={classes.form} >
                <Grid container spacing={2}>
                    <Grid item xs={12} style={{ marginTop: '2em' }}>
                        <h5>CREDENCIALES</h5>
                        <hr />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor="standard-adornment-amount">Contraseña Anterior</InputLabel>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="password"
                            type="password"
                            id="password"
                            autoComplete="off"
                            placeholder="Ingresa contraseña anterior"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor="standard-adornment-amount">Nueva contraseña</InputLabel>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="password2"
                            type="password"
                            id="password2"
                            autoComplete="off"
                            placeholder="Ingresa nueva contraseña"
                        />
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                    >
                        Actualizar contraseña
          </Button>
                </Grid>
            </form>
            <form className={classes.form} >
                <Grid container spacing={2}>
                    <Grid item xs={12} style={{ marginTop: '2em' }}>
                        <h5>CORREO ELECTRÓNICO</h5>
                        <hr />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor="standard-adornment-amount">Correo Anterior</InputLabel>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="email"
                            type="email"
                            id="email"
                            autoComplete="off"
                            placeholder="Ingresa correo anterior"
                            aria-readonly
                            value={email}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor="standard-adornment-amount">Nuevo correo</InputLabel>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="password2"
                            type="password"
                            id="password2"
                            autoComplete="off"
                            placeholder="Ingresa nueva correo"
                        />
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                    >
                        Actualizar correo
          </Button>
                </Grid>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {message}
                </Alert>
            </Snackbar>

        </Container>
    );
}


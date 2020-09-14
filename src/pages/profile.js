import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

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
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
}));


export default function Perfil() {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [customer, setCustomer] = useState(0);
    const [lastname, setLastname] = useState("");
    const [dni_id, setDni] = useState("");
    const [gender, setGender] = useState(0);
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [birthdate, setBirthdate] = useState(new Date());
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [open2, setOpen2] = React.useState(false);
    const [message2, setMessage2] = React.useState("");
    const [openProgress, setOpenProgress] = React.useState(false);

    useEffect(() => {
        findCustomer();
    }, []);

    const findCustomer = () => {
        setOpenProgress(true);
        axios.post(url, { session: localStorage.getItem("sessionid") }).then(res => {
            const datos = res.data;
            setCustomer(datos.id_customer);
            setName(datos.name);
            setLastname(datos.lastname);
            setDni(datos.dni_id);
            setAddress(datos.address);
            setPhone(datos.phone);
            setCountry(datos.country);
            setCity(datos.city);
            setEmail(datos.user.email);
            setGender(datos.gender);
            if (datos.birthdate !== null) {
                setBirthdate(datos.birthdate);
            }
            setOpenProgress(false);
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
    const changeGender = (e) => {
        const { value } = e.target;
        setGender(value);
    }

    // const changePassword = (e) => {
    //     const { value } = e.target;
    //     console.log(value);
    //     setPassword(value);
    // }

    const updateUser = (e) => {
        e.preventDefault();
        if (isNaN(dni_id)) {
            openMessage("el campo cédula debe ser un número")
        } else {
            setOpenProgress(true);
            axios.put(url + "/" + customer, { name, lastname, phone, dni_id, address, birthdate, gender, country, city }).then(res => {
                setOpenProgress(false);
                openMessage2("Los datos personales fueron actualizados.")
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

        setOpen2(false);
    };
    return (
        <Container component="main" style={{ marginTop: '9rem', marginBottom: '9rem' }}>
            <Backdrop className={classes.backdrop} open={openProgress}>
                <CircularProgress color="inherit" style={{ width: 100, height: 100 }} />
            </Backdrop>
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
                            autoComplete="off"
                            value={dni_id}
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
                                fullWidth
                                variant="outlined"
                                // required
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
                    <Grid item xs={6}>
                        <InputLabel htmlFor="standard-adornment-amount">Genero</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={gender}
                            onChange={changeGender}
                            fullWidth
                            variant="outlined"
                        >
                            <MenuItem value={0}>Seleccione</MenuItem>
                            <MenuItem value={1}>Hombre</MenuItem>
                            <MenuItem value={2}>Mujer</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            Actualizar Perfil
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <form className={classes.form}>
                <Grid container spacing={2}>
                    <Grid item xs={12} style={{ marginTop: '2em' }}>
                        <h5>CREDENCIALES</h5>
                        <hr />
                    </Grid>
                    <Grid item xs={12} >
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
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor="standard-adornment-amount">Nueva Contraseña</InputLabel>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="password2"
                            type="password"
                            id="password2"
                            autoComplete="off"
                            placeholder="Ingresa contraseña anterior"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor="standard-adornment-amount">Confirmar Nueva contraseña</InputLabel>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="password3"
                            type="password"
                            id="password3"
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
            <form className={classes.form}>
                <Grid container spacing={2}>
                    <Grid item xs={12} style={{ marginTop: '2em' }}>
                        <h5>CORREO ELECTRÓNICO</h5>
                        <hr />
                    </Grid>
                    <Grid item xs={12} >
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
                                readonly
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor="standard-adornment-amount">Nuevo Correo</InputLabel>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="email2"
                            type="email"
                            id="email2"
                            autoComplete="off"
                            placeholder="Ingresa nuevo anterior"
                            aria-readonly
                            readonly
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor="standard-adornment-amount">Confirmar Nuevo Correo</InputLabel>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="email3"
                            type="email"
                            id="email3"
                            autoComplete="off"
                            placeholder="Ingresa confirmación nueva correo"
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
            <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
                <Alert onClose={handleClose2} severity="success">
                    {message2}
                </Alert>
            </Snackbar>

        </Container>
    );
}


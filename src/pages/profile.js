import React, { useState } from 'react';
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
    const [passwordRe, setPasswordRe] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const changeName = (e) => {
        const { value } = e.target;
        setName(value);
    }

    const changeLastname = (e) => {
        const { value } = e.target;
        setLastname(value);
    }

    const changePasswordRe = (e) => {
        const { value } = e.target;
        console.log(value);
        setPasswordRe(value);
    }

    const changeEmail = (e) => {
        const { value } = e.target;
        setEmail(value);
    }

    const changePassword = (e) => {
        const { value } = e.target;
        console.log(value);
        setPassword(value);
    }

    const updateUser = (e) => {
        e.preventDefault();
    }
    return (
        <Container component="main" style={{ marginTop: '9rem', marginBottom: '9rem' }}>
            <CssBaseline />
            <h5>DATOS PERSONALES</h5>
            <hr />
            <form className={classes.form} onSubmit={updateUser}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="dni_id"
                            label="Cédula"
                            name="dni_id"
                            autoComplete="off"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="address"
                            label="Dirección"
                            name="address"
                            autoComplete="off"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="off"
                            name="firstName"
                            variant="outlined"
                            fullWidth
                            id="firstName"
                            label="Nombre"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="lastName"
                            label="Apellido"
                            name="lastName"
                            autoComplete="off"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="phone"
                            label="Teléfono"
                            name="phone"
                            autoComplete="off"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="birthdate"
                            label="Fecha de nacimiento"
                            name="birthdate"
                            autoComplete="off"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            name="country"
                            label="País"
                            type="text"
                            id="country"
                            autoComplete="off"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            name="city"
                            label="Ciudad"
                            type="text"
                            id="city"
                            autoComplete="off"
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
            <form className={classes.form} onSubmit={updateUser}>
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
            <form className={classes.form} onSubmit={updateUser}>
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
                        name="password"
                        type="password"
                        id="password"
                        autoComplete="off"
                        placeholder="Ingresa correo anterior"
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


        </Container>
    );
}


import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
        <Container component="main" maxWidth="sm" style={{ marginTop: '9rem', marginBottom: '9rem' }}>
            <Card>
                <CardContent>
                    <CssBaseline />
                    <div className={classes.centered}>
                        <Avatar src="/broken-image.jpg" className={classes.large} />
                    </div>
                    <form className={classes.form} onSubmit={updateUser}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="off"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Nombre"
                                    autoFocus
                                    onChange={changeName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Apellido"
                                    name="lastName"
                                    autoComplete="off"
                                    onChange={changeLastname}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Correo Electrónico"
                                    name="email"
                                    autoComplete="off"
                                    onChange={changeEmail}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Contraseña"
                                    type="password"
                                    id="password"
                                    autoComplete="off"
                                    onChange={changePassword}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password2"
                                    label="Confirmar Contraseña"
                                    type="password"
                                    id="password2"
                                    autoComplete="off"
                                    onChange={changePasswordRe}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            Editar Perfil
          </Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
}


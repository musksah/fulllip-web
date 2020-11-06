import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../components/shared/header';
import ReviewSale from '../components/shooping_cart/reviewSale';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { Container, Typography, Button, Link } from '@material-ui/core';
import { FaBackward } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#FFEAEA',
    },
    container_card: {
        background: '#FFFFFF',
        marginBottom: '3em'
    },
    inputtext: {
        padding: 14
    },
    subtitle: {
        fontSize: 20
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        padding: '20px 20px',
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
    submit2: {
        margin: theme.spacing(3, 0, 2),
        padding: '20px 20px',
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    space: {
        display: 'none',
        [theme.breakpoints.only('sm')]: {
            display: 'block',
        },
    }


}));

export default function Sending() {
    const classes = useStyles();
    const history = useHistory();
    const [name, setName] = useState("");
    const [adicional, SetAdicional] = useState("");
    const [lastname, setLastname] = useState("");
    const [dni_id, setDni] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");

    const saveData = (e) => {
        e.preventDefault();
        const information = {
            name, lastname, adicional, dni_id, address, phone, city
        }
        localStorage.setItem("h_tinformation", JSON.stringify(information));
        history.push('/payment');
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

    const changeAdicional = (e) => {
        const { value } = e.target;
        SetAdicional(value);
    }

    const changeCity = (e) => {
        const { value } = e.target;
        setCity(value);
    }

    const submitForm = () => {
        document.getElementById('buttonSubmit').click();
    }

    return (
        <Grid>
            <Header />
            <Container component="main" style={{ marginTop: '9rem', marginBottom: '9rem' }}>
                <Grid container>
                    <Grid item xs={12} sm={1}></Grid>
                    <Grid item xs={12} sm={10} md={5} style={{ marginBottom: '2em' }}>
                        <form id="sendingform" onSubmit={saveData}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={11}>
                                    <InputLabel><Typography variant="body1" color="secondary" component="p" className={classes.subtitle}>Información para el Envío</Typography></InputLabel>
                                </Grid>
                                <Grid item xs={12} md={11} >
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="off"
                                                name="name"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                id="name"
                                                placeholder='Nombre'
                                                inputProps={{ className: classes.inputtext }}
                                                autoFocus
                                                value={name}
                                                onChange={changeName}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} >
                                            <TextField
                                                autoComplete="off"
                                                name="lastname"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                id="lastname"
                                                placeholder='Apellido'
                                                inputProps={{ className: classes.inputtext }}
                                                autoFocus
                                                value={lastname}
                                                onChange={changeLastname}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} md={11} >
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="off"
                                                name="dni_id"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                id="dni_id"
                                                placeholder='Numero de Documento'
                                                inputProps={{ className: classes.inputtext }}
                                                autoFocus
                                                value={dni_id}
                                                onChange={changeDni}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="off"
                                                name="phone"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                id="phone"
                                                placeholder='Celular'
                                                inputProps={{ className: classes.inputtext }}
                                                autoFocus
                                                value={phone}
                                                onChange={changePhone}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} md={11} >
                                    <Grid item xs={12}>
                                        <TextField
                                            autoComplete="off"
                                            name="address"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            id="address"
                                            placeholder='Dirección'
                                            inputProps={{ className: classes.inputtext }}
                                            autoFocus
                                            value={address}
                                            onChange={changeAddress}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={11} >
                                    <Grid item xs={12}>
                                        <TextField
                                            autoComplete="off"
                                            name="adicional"
                                            variant="outlined"
                                            fullWidth
                                            id="adicional"
                                            placeholder='Información Adicional'
                                            inputProps={{ className: classes.inputtext }}
                                            autoFocus
                                            value={adicional}
                                            onChange={changeAdicional}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={11} >
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="off"
                                                name="country"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                id="country"
                                                placeholder='País'
                                                disabled="true"
                                                inputProps={{ className: classes.inputtext, readOnly: true }}
                                                autoFocus
                                                value="Colombia"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="off"
                                                name="city"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                id="city"
                                                placeholder='Ciudad'
                                                inputProps={{ className: classes.inputtext }}
                                                autoFocus
                                                value={city}
                                                onChange={changeCity}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} md={11} >
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color='primary'
                                        id='buttonSubmit'
                                        className={classes.submit}
                                        style={{ float: 'right', padding: '10' }}
                                    >
                                        Continuar Compra
                                </Button>
                                </Grid>

                            </Grid>
                        </form>
                    </Grid>
                    <Grid item sm={1}></Grid>
                    <Grid item sm={1} className={classes.space}></Grid>
                    <Grid item xs={12} sm={10} md={5} style={{ background: '#FFF2F2' }}>
                        <Grid container >
                            {/* <Grid item xs={1}></Grid> */}
                            <Grid item xs={12}>
                                <ReviewSale />
                            </Grid>
                            {/* <Grid item xs={1}></Grid> */}
                        </Grid>
                    </Grid>
                    <Grid item sm={1}></Grid>
                    <Grid item xs={12} sm={11} >
                        <Button
                            variant="contained"
                            type="button"
                            color='primary'
                            onClick={submitForm}
                            className={classes.submit2}
                            style={{ float: 'right', padding: '10' }}

                        >
                            Continuar Compra
                                </Button>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
}

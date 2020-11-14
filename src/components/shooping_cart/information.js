import React, { useEffect, useState, useContext } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import { Container, Typography, Button, Grid, Card, CardContent, CardHeader } from '@material-ui/core';
import { parseJSON } from 'date-fns';
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { CartContext } from '../../contexts/cartContext';
import Enviroment from '../../enviroment';

const useStyles = makeStyles((theme) => ({
    inputtext: {
        padding: 14
    },
    subtitle: {
        fontSize: 20
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        padding: '15px 15px',
    },

}));

export default function Information() {
    const classes = useStyles();
    const history = useHistory();
    const [flat, setFlat] = useState(true);
    const [name, setName] = useState("");
    const [adicional, SetAdicional] = useState("");
    const [lastname, setLastname] = useState("");
    const [dni_id, setDni] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const { cartItems, total, increase, decrease, removeProduct } = useContext(CartContext);

    useEffect(() => {
        if (localStorage.getItem("h_tinformation") !== null) {
            const information = JSON.parse(localStorage.getItem("h_tinformation"));
            setName(information.name);
            SetAdicional(information.adicional);
            setLastname(information.lastname);
            setDni(information.dni_id);
            setAddress(information.address);
            setPhone(information.phone);
            setCity(information.city);
        } else {
            history.push('/sending');
        }
    }, []);

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

    const change = () => {
        setFlat(false);
    }

    const saveChange = () => {
        const information = {
            name, lastname, adicional, dni_id, address, phone, city
        }
        localStorage.setItem("h_tinformation", JSON.stringify(information));
        regenerateButton();
        setFlat(true);
    }

    const regenerateButton = () => {
        let date = new Date();
        let strInformation = localStorage.getItem("h_tinformation");
        let customerId = localStorage.getItem("customer_id");
        let curtomerInfo = JSON.stringify({ customer_id: customerId });
        let products = localStorage.getItem("products");
        let infoCustomer = JSON.parse(strInformation);
        // Creación del botón de epayco
        const script = document.createElement("script");
        script.src = "https://checkout.epayco.co/checkout.js";
        script.className = "epayco-button"
        script.setAttribute("data-epayco-key", Enviroment.epayco.apiKey);
        script.setAttribute("data-epayco-amount", total);
        // script.setAttribute("data-epayco-amount", '5000');
        script.setAttribute("data-epayco-name", "Compra producto Fullips");
        script.setAttribute("data-epayco-description", `Compra de producto Fullips`);
        script.setAttribute("data-epayco-invoice", `FC-${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`);
        script.setAttribute("data-epayco-currency", Enviroment.epayco.currency);
        script.setAttribute("data-epayco-country", Enviroment.epayco.country);
        script.setAttribute("data-epayco-test", "true");
        script.setAttribute("data-epayco-external", "false");
        script.setAttribute("data-epayco-acepted", Enviroment.epayco.acceptedPage);
        script.setAttribute("data-epayco-rejected", Enviroment.epayco.rejectedPage);
        script.setAttribute("data-epayco-pending", Enviroment.epayco.pendingPage);
        script.setAttribute("data-epayco-response", Enviroment.epayco.responsePage);
        script.setAttribute("data-epayco-confirmation", Enviroment.epayco.confirmationPage);
        // Datos del cliente
        script.setAttribute("data-epayco-name-billing", `${infoCustomer.name} ${infoCustomer.lastname} `);
        script.setAttribute("data-epayco-address-billing", infoCustomer.address);
        script.setAttribute("data-epayco-type-doc-billing", "C.C");
        script.setAttribute("data-epayco-mobilephone-billing", infoCustomer.phone);
        script.setAttribute("data-epayco-number-doc-billing", infoCustomer.dni_id);
        //Datos de dirección
        script.setAttribute("data-epayco-extra1", strInformation);
        //Datos del customer ecommerce
        script.setAttribute("data-epayco-extra2", curtomerInfo);
        //Datos de los productos
        script.setAttribute("data-epayco-extra3", products);

        let contenedorForm = document.getElementById("epaycoForm");
        contenedorForm.innerHTML = '';
        contenedorForm.appendChild(script);
        return () => {
            contenedorForm.removeChild(script);
        };
    }

    return (
        <Grid>

            <Grid container style={{ marginBlockEnd: '3rem' }} spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}> Datos de Envío </Typography>
                </Grid>
                <Grid item xs={12} md={11}>
                    <Card style={{ paddingTop: '1em' }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={11} >
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <InputLabel><Typography variant="body1" color="secondary" component="p" >Nombre</Typography></InputLabel>
                                                <TextField
                                                    autoComplete="off"
                                                    name="name"
                                                    variant="outlined"
                                                    fullWidth
                                                    required
                                                    id="name"
                                                    placeholder='Nombre'
                                                    disabled={flat}
                                                    inputProps={{ className: classes.inputtext, readOnly: flat }}
                                                    autoFocus
                                                    value={name}
                                                    onChange={changeName}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                <InputLabel><Typography variant="body1" color="secondary" component="p" >Apellido</Typography></InputLabel>
                                                <TextField
                                                    autoComplete="off"
                                                    name="lastname"
                                                    variant="outlined"
                                                    fullWidth
                                                    required
                                                    id="lastname"
                                                    placeholder='Apellido'
                                                    disabled={flat}
                                                    inputProps={{ className: classes.inputtext, readOnly: flat }}
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
                                                <InputLabel><Typography variant="body1" color="secondary" component="p" >Cédula</Typography></InputLabel>
                                                <TextField
                                                    autoComplete="off"
                                                    name="dni_id"
                                                    variant="outlined"
                                                    fullWidth
                                                    required
                                                    id="dni_id"
                                                    placeholder='Numero de Documento'
                                                    disabled={flat}
                                                    inputProps={{ className: classes.inputtext, readOnly: flat }}
                                                    autoFocus
                                                    value={dni_id}
                                                    onChange={changeDni}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <InputLabel><Typography variant="body1" color="secondary" component="p" >Teléfono</Typography></InputLabel>
                                                <TextField
                                                    autoComplete="off"
                                                    name="phone"
                                                    variant="outlined"
                                                    fullWidth
                                                    required
                                                    id="phone"
                                                    placeholder='Celular'
                                                    disabled={flat}
                                                    inputProps={{ className: classes.inputtext, readOnly: flat }}
                                                    autoFocus
                                                    value={phone}
                                                    onChange={changePhone}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} md={11} >
                                        <InputLabel><Typography variant="body1" color="secondary" component="p" >Dirección</Typography></InputLabel>
                                        <TextField
                                            autoComplete="off"
                                            name="address"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            id="address"
                                            placeholder='Dirección'
                                            disabled={flat}
                                            inputProps={{ className: classes.inputtext, readOnly: flat }}
                                            autoFocus
                                            value={address}
                                            onChange={changeAddress}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={11} >
                                        <InputLabel><Typography variant="body1" color="secondary" component="p" >Adicional</Typography></InputLabel>
                                        <TextField
                                            autoComplete="off"
                                            name="adicional"
                                            variant="outlined"
                                            fullWidth
                                            id="adicional"
                                            placeholder='Información Adicional'
                                            disabled={flat}
                                            inputProps={{ className: classes.inputtext, readOnly: flat }}
                                            autoFocus
                                            value={adicional}
                                            onChange={changeAdicional}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={11} >
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <InputLabel><Typography variant="body1" color="secondary" component="p" >País</Typography></InputLabel>
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
                                                <InputLabel><Typography variant="body1" color="secondary" component="p" >Ciudad</Typography></InputLabel>
                                                <TextField
                                                    autoComplete="off"
                                                    name="city"
                                                    variant="outlined"
                                                    fullWidth
                                                    required
                                                    id="city"
                                                    placeholder='Ciudad'
                                                    disabled={flat}
                                                    inputProps={{ className: classes.inputtext, readOnly: flat }}
                                                    autoFocus
                                                    value={city}
                                                    onChange={changeCity}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    {/* {flat ? (
                                        <Grid item xs={12}>
                                            <Button
                                                variant="contained"
                                                color='primary'
                                                type="button"
                                                className={classes.submit}
                                                onClick={change}
                                                style={{ float: 'right', padding: '10' }}>Cambiar Información</Button>
                                        </Grid>) : (
                                            <Grid item xs={12}>
                                                <Button
                                                    type="button"
                                                    variant="contained"
                                                    color='primary'
                                                    onClick={saveChange}
                                                    className={classes.submit}
                                                    style={{ float: 'right', padding: '10' }}>Guardar Cambios</Button>
                                            </Grid>
                                        )} */}
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </Grid>
    );
}

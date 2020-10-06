import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import Header from '../components/shared/header';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import { BrowserRouter as Router, Switch, Route, NavLink, useHistory } from "react-router-dom";

const items = [
    { img: 'img/kit.jpg', name: 'Kit', price: '10000', quantiy: 1 },
    { img: 'img/kit.jpg', name: 'Medio Ovalado', price: '10000', quantiy: 1 },
    { img: 'img/kit.jpg', name: 'Pequeño Ovalado', price: '10000', quantiy: 1 },
]

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1em',
        marginBottom: '3em'
    },
    product_header: {
        color: '#4F4F4F',
        textAlign: 'center'
    },
    item_cart: {
        color: '#7F7F7F',
        textAlign: 'center',
        fontSize: '0.8em'
    },
    subtotal: {
        color: '#7F7F7F',
        textAlign: 'left',
        fontSize: '0.9em',
        fontWeight: '500',
    },
    item_field_container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '0.3px #DCDCDC solid',
        paddingBottom: '0.5em',
    },
    price: {
        color: '#785900',
        fontWeight: '500',
        fontSize: '1.6em',
    }
}));


export default function CheckOut() {
    const classes = useStyles();
    const [listitems, setlistitems] = useState(items);
    const history = useHistory();

    const validateLogin = () => {
        if (localStorage.getItem("h_tiov") !== null) {
            history.push("/sending");
        } else {
            history.push({
                pathname: "/Ingresar",
                state: "checkout"
            });
        }
    }

    useEffect(() => {
        let confirmed = localStorage.getItem("confirmed");
        console.log(`confirmed: ${confirmed}`);
        if (confirmed == 0 || confirmed == null) {
            console.log("No se ha confirmado");
            history.push("/error-confirmation");
        } else {
            console.log("Se confirmó");
        }
    }, []);

    return (
        <Box>
            <Header />
            <Box style={{ marginTop: '8em' }}>
                <center>
                    <Typography variant="h6" style={{ color: '#4F4F4F' }}>CARRITO DE COMPRA</Typography>
                </center>
                <Container style={{ marginBottom: '7em' }}>
                    <Grid container style={{ marginTop: '2em' }} >
                        <Grid item md={1}></Grid>
                        <Grid item xs={3} md={3} style={{ background: '#E1E1E1', padding: '0.7em' }}>
                            <Typography className={classes.product_header} > Imagen </Typography>
                        </Grid>
                        <Grid item xs={3} md={3} style={{ background: '#E1E1E1', padding: '0.7em' }}>
                            <Typography className={classes.product_header} > Producto </Typography>
                        </Grid>
                        <Grid item xs={3} md={2} style={{ background: '#E1E1E1', padding: '0.7em' }}>
                            <Typography className={classes.product_header}> Precio </Typography>
                        </Grid>
                        <Grid item xs={3} md={2} style={{ background: '#E1E1E1', padding: '0.7em' }}>
                            <Typography className={classes.product_header}> Cantidad </Typography>
                        </Grid>
                    </Grid>
                    {listitems.map((image, index) => (
                        <Grid container style={{ padding: '0.7em' }} >
                            <Grid item md={1}></Grid>
                            <Grid item xs={3} md={3} className={classes.item_field_container}>
                                <img src={image.img} style={{ width: '40%', marginLeft: '30%', marginRight: '30%' }}></img>
                            </Grid>
                            <Grid item xs={3} md={3} className={classes.item_field_container}>
                                <Typography variant="span" className={classes.item_cart}> {image.name}  </Typography>
                            </Grid>
                            <Grid item xs={3} md={2} className={classes.item_field_container}>
                                <Typography className={classes.item_cart}> {image.price} </Typography>
                            </Grid>
                            <Grid item xs={3} md={2} className={classes.item_field_container}>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <IconButton aria-label="delete">
                                            <Add />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <IconButton aria-label="delete">
                                            <Remove />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography className={classes.item_cart}> {image.quantiy} </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                    <Grid container style={{ padding: '0.7em', marginTop: '2em', }} >
                        <Grid item xs={12} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <Typography className={classes.subtotal}> Subtotal:  <span className={classes.price}> $ 90.000 COP</span> </Typography>
                        </Grid>
                    </Grid>
                    <Grid container style={{ padding: '0.7em' }} >
                        <Grid item xs={12} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <Typography className={classes.item_cart}> Acepto los términos y condiciones y autorizo el tratamiento de datos personales. </Typography>
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item xs={12} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            {/* <NavLink to="/sending" style={{ textDecoration: 'none' }}> */}
                            <Button variant="contained" onClick={validateLogin}>Finalizar Pedido</Button>
                            {/* </NavLink> */}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box >
    );
}
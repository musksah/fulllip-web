import React, { useState, useEffect, useContext } from 'react';
import Container from '@material-ui/core/Container';
import { Box, Hidden } from '@material-ui/core';
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
import { CartContext } from '../contexts/cartContext';
import NumberFormat from 'react-number-format';
import Checkbox from '@material-ui/core/Checkbox';

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
        fontSize: '0.7em'
    },
    subtotal: {
        color: '#7F7F7F',
        textAlign: 'left',
        fontSize: '0.9em',
        fontWeight: '500',
    },
    donation: {
        color: '#7F7F7F',
        textAlign: 'left',
        fontSize: '0.9em',
        fontWeight: '500',
    },
    info_donation: {
        color: '#7F7F7F',
        textAlign: 'left',
        fontSize: '0.7em',
        fontWeight: '500',
    },
    donation_checked: {
        display: 'inline',
        marginRight: '2.1em',
        fontSize: '0.9em',
    },
    donation_unchecked: {
        color: '#7F7F7F',
        display: 'inline',
        marginRight: '2.1em',
        textDecoration: 'line-through',
        fontSize: '0.9em',
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
    },
    price_donation: {
        color: '#2B2B2B',
        fontWeight: '500',
        fontSize: '1.6em',
    },
    cart_responsive: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '3em',
    }
}));


export default function CheckOut() {
    const classes = useStyles();
    const [listitems, setlistitems] = useState(items);
    const [classDonation, setClassDonation] = useState(classes.donation_checked);
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        if (event.target.checked) {
            localStorage.setItem("donation", 1);
            addExtra();
            setClassDonation(classes.donation_checked);
        } else {
            localStorage.setItem("donation", 0);
            addExtra();
            setClassDonation(classes.donation_unchecked);
        }
    };

    const history = useHistory();
    const { cartItems, total, increase, decrease, removeProduct, addExtra } = useContext(CartContext);


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
        checkConfirmationEmail();
    }, []);

    const checkConfirmationEmail = () => {
        let confirmed = localStorage.getItem("confirmed");
        let tokenStorage = localStorage.getItem("h_tiov");
        console.log(`confirmed: ${confirmed}`);
        if (tokenStorage == null) {
            history.push("/Ingresar");
        } else if (confirmed == 0 || confirmed == null) {
            console.log("No se ha confirmado");
            history.push("/error-confirmation");
        } else {
            localStorage.setItem("donation", 1);
            addExtra();
            console.log("Se confirmó");
        }
    }

    const decreaseProduct = (product) => {
        if (product.quantity > 1) {
            decrease(product);
        } else {
            removeProduct(product);
        }
    }

    return (
        <Box>
            <Header />
            <Box style={{ marginTop: '8em' }}>
                <center>
                    <Typography variant="h6" style={{ color: '#4F4F4F' }}>CARRITO DE COMPRA</Typography>
                </center>
                {parseInt(cartItems.length) == 0 &&
                    <Box>
                        <Container style={{ marginBottom: '20em', marginTop: '2em' }}>
                            <center>
                                <Typography variant="body2">
                                    El carrito de compras está vació. <NavLink to="/" >
                                        <span>Haz click para buscar tu producto fullips.</span>
                                    </NavLink>
                                </Typography>
                            </center>
                        </Container>
                    </Box>
                }
                {parseInt(cartItems.length) > 0 &&
                    <Container style={{ marginBottom: '7em' }}>
                        <Hidden only={['xs', 'sm']}>
                            <Grid container style={{ marginTop: '2em' }} >
                                <Grid item sm={1}></Grid>
                                <Grid item sm={2} md={3} style={{ background: '#E1E1E1', padding: '0.7em' }}>
                                    <Typography className={classes.product_header} > Imagen </Typography>
                                </Grid>
                                <Grid item sm={2} style={{ background: '#E1E1E1', padding: '0.7em' }}>
                                    <Typography className={classes.product_header} > Producto </Typography>
                                </Grid>
                                <Grid item sm={2} style={{ background: '#E1E1E1', padding: '0.7em' }}>
                                    <Typography className={classes.product_header}> Precio </Typography>
                                </Grid>
                                <Grid item sm={2} style={{ background: '#E1E1E1', padding: '0.7em' }}>
                                    <Typography className={classes.product_header}> Cantidad </Typography>
                                </Grid>
                                <Grid item sm={2} md={1} style={{ background: '#E1E1E1', padding: '0.7em' }}>
                                    <Typography className={classes.product_header}> Acción </Typography>
                                </Grid>
                            </Grid>
                            {cartItems.map((cart, index) => (
                                <Grid container style={{ paddingTop: '0.7em', paddingBottom: '0.7em' }} >
                                    <Grid item sm={1}></Grid>
                                    <Grid item sm={2} md={3} className={classes.item_field_container}>
                                        <img src={cart.img} style={{ width: '40%', marginLeft: '30%', marginRight: '30%' }}></img>
                                    </Grid>
                                    <Grid item sm={2} className={classes.item_field_container}>
                                        <Typography variant="span" className={classes.item_cart}> {cart.name}  </Typography>
                                    </Grid>
                                    <Grid item sm={2} className={classes.item_field_container}>
                                        {cart.price &&
                                            <Typography className={classes.item_cart}><NumberFormat value={cart.price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} /> </Typography>
                                        }
                                    </Grid>
                                    <Grid item sm={2} className={classes.item_field_container}>
                                        <Grid item sm={4}>
                                            <Typography className={classes.item_cart}> {cart.quantity} </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={2} md={1} className={classes.item_field_container}>
                                        <Grid item sm={4} md={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <IconButton aria-label="add" onClick={() => increase(cart)} >
                                                <Add />
                                            </IconButton>
                                        </Grid>
                                        <Grid item sm={4} md={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <IconButton aria-label="delete" onClick={() => decreaseProduct(cart)}>
                                                <Remove />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            ))}
                        </Hidden>
                        <Hidden only={['md', 'lg', 'xl']}>
                            <Box className={classes.cart_responsive}>
                                <Grid item xs={10} >
                                    {cartItems.map((cart, index) => (
                                        <Grid container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <img src={cart.img} style={{ width: '40%' }}></img>
                                            </Grid>
                                            <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Typography variant="span" className={classes.item_cart}> {cart.name}  </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                {cart.price &&
                                                    <Typography className={classes.item_cart}><NumberFormat value={cart.price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} /> </Typography>
                                                }
                                            </Grid>
                                            <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Typography className={classes.item_cart}> {cart.quantity} </Typography>
                                                <IconButton aria-label="add" onClick={() => increase(cart)} >
                                                    <Add />
                                                </IconButton>
                                                <IconButton aria-label="delete" onClick={() => decreaseProduct(cart)}>
                                                    <Remove />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Hidden>
                        <Grid container style={{ padding: '0.7em', marginTop: '2em' }} >
                            <Grid item xs={12} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                <Typography className={classes.info_donation}> ¿Deseas hacer una donación para ayudar a la educación de los niños? </Typography>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', marginBottom: '1em' }}>
                                <NavLink to="/razon-social" className={classes.navlink}>
                                    <Typography className={classes.info_donation}>
                                        Ver mas información
                                    </Typography>
                                </NavLink>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: '7.2em' }}>
                                <Typography className={classes.donation}> Donación:   </Typography>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                <span className={classes.price}> <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    size="small"
                                    color="secondary"
                                    inputProps={{ 'aria-label': 'checkbox with small size' }}
                                /><NumberFormat value={800} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div className={classDonation}>{value} COP</div>} /> </span>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                <Typography className={classes.subtotal}> Total:  <span className={classes.price}> <NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value} COP</div>} /> </span> </Typography>
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
                }
            </Box>
        </Box >
    );
}
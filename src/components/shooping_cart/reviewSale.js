import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { CartContext } from '../../contexts/cartContext';
import NumberFormat from 'react-number-format';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '3em',
        width: '100%',
        paddingBottom: '4em',
    },
    span_bold: {
        fontWeight: 'bold'
    },
    detail_review: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    img_products: {
        [theme.breakpoints.only('xs')]: {
            height: '85px',
        },
        [theme.breakpoints.only('sm')]: {
            height: '92px',
        },
        [theme.breakpoints.only('md')]: {
            height: '80px',
        },
        [theme.breakpoints.only('lg')]: {
            height: '86px',
        },
        [theme.breakpoints.up('xl')]: {
            height: '90px',
        },
    },
}));

export default function ReviewSale() {
    const classes = useStyles();
    const { cartItems, total, increase, decrease, removeProduct } = useContext(CartContext);

    React.useEffect(() => {

    });

    return (
        <Container>
            {cartItems.map((cart, index) => (
                <Grid container key={cart.id} style={{ marginBottom: '1.5em', marginTop: '1.5em', paddingLeft: '1.5em', paddingRight: '1.5em' }}>

                    <Grid item xs={3} style={{ border: '1px solid #D9D9D9', background: 'white', borderRadius: '0.2em' }}>

                        {/* <img src={cart.img} style={{ width: '100%', height: 'auto' }} /> */}
                        <Card variant="outlined" style={{ width: '100%' }}>
                            {/* <Badge badgeContent={cart.quantity} color="error"> */}
                                <CardMedia
                                    className={classes.img_products}
                                    image={cart.img}
                                    title="Producto del carrito"
                                />
                            {/* </Badge> */}
                        </Card>

                    </Grid>
                    <Grid item xs={6} className={classes.detail_review}>
                        <Box>
                            <Typography variant="body2" component="p" style={{ fontWeight: 'bold' }}>
                                {cart.name}
                            </Typography>
                            <Typography variant="body2" component="p" >
                                {cart.subtitle}
                            </Typography>
                            <Typography variant="body2" component="p" style={{ color:'#454545', fontWeight:'bold'}}>
                                Cantidad: <span style={{ fontWeight:'normal'}}>{cart.quantity}</span>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} className={classes.detail_review}>
                        <Typography variant="body2" component="p" style={{ fontWeight: 'bold' }}>
                            <NumberFormat value={cart.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /> COP
                        </Typography>
                    </Grid>
                </Grid>
            ))}
            <hr style={{ background: '#D9D9D9' }} />
            <Grid container style={{ marginTop: '1.5em', marginBottom: '1.5em', paddingLeft: '1.5em', paddingRight: '1.5em' }}>
                <Grid item xs={6}>
                    <Typography variant="body2" component="p">
                        Subtotal
                    </Typography>
                    <Typography variant="body2" component="p" style={{ marginTop: '0.5em' }}>
                        Envíos
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" component="p" style={{ fontWeight: 'bold', textAlign: 'right' }}>
                        <NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} /> COP
                    </Typography>
                    <Typography variant="body2" component="p" style={{ marginTop: '0.5em', textAlign: 'right' }}>
                        Gratis
                    </Typography>
                </Grid>
            </Grid>
            <hr style={{ background: '#D9D9D9' }} />
            <Grid container style={{ marginTop: '1.5em', marginBottom: '1.5em', paddingLeft: '1.5em', paddingRight: '1.5em' }}>
                <Grid item xs={6}>
                    <Typography variant="h6" style={{ color: '#2B2B2B' }}>
                        Total
                    </Typography>
                </Grid>
                <Grid item xs={6} >
                    <Typography variant="body2" component="p" style={{ fontWeight: 'bold', textAlign: 'right' }}>
                        <NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} /> COP
                    </Typography>
                </Grid>
            </Grid>
        </Container >
    );
}
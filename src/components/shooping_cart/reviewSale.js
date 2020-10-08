import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { CartContext } from '../../contexts/cartContext';

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
        justifyContent: 'center'
    }
}));

const items = [
    { url: 'img/index/products/1.1kit_segunda.jpg', title: 'Fullip Ovalado', subtitle: 'Solo', price: '$ 67,000 COP' },
    { url: 'img/index/products/1.1kit_segunda.jpg', title: 'Fullip Redondo', subtitle: 'Solo', price: '$ 67,000 COP' },
    { url: 'img/index/products/1.1kit_segunda.jpg', title: 'Fullip Redondo', subtitle: 'Solo', price: '$ 67,000 COP' },
];

export default function ReviewSale() {
    const classes = useStyles();
    const [email, setEmail] = useState({});
    const [listItemsReview, setListItemsReview] = useState(items);
    const { cartItems, total, increase, decrease, removeProduct } = useContext(CartContext);

    React.useEffect(() => {

    });

    return (
        <Container>
            {cartItems.map((cart, index) => (
                <Grid container style={{ marginBottom: '1.5em', marginTop: '1.5em' }}>

                    <Grid item xs={3} style={{ border: '1px solid #D9D9D9', background: 'white', borderRadius: '0.2em' }}>
                        <img src={cart.url} style={{ width: '90%', paddingLeft: '5%', paddingRight: '5%' }} />
                    </Grid>
                    <Grid item xs={5} className={classes.detail_review}>
                        <Box>
                            <Typography variant="body2" component="p" style={{ fontWeight: 'bold' }}>
                                {cart.title}
                            </Typography>
                            <Typography variant="body2" component="p" >
                                {cart.quantity}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4} className={classes.detail_review}>
                        <Typography variant="body2" component="p" style={{ fontWeight: 'bold' }}>
                            {cart.price}
                        </Typography>
                    </Grid>
                </Grid>
            ))}
            <hr style={{ background: '#D9D9D9' }} />
            <Grid container style={{ marginTop: '1.5em', marginBottom: '1.5em' }}>
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
                        $ {total}
                    </Typography>
                    <Typography variant="body2" component="p" style={{ marginTop: '0.5em', textAlign: 'right' }}>
                        Gratis
                    </Typography>
                </Grid>
            </Grid>
            <hr style={{ background: '#D9D9D9' }} />
            <Grid container style={{ marginTop: '1.5em' }}>
                <Grid item xs={6}>
                    <Typography variant="h6" style={{ color: '#2B2B2B' }}>
                        Total
                    </Typography>
                </Grid>
                <Grid item xs={6} >
                    <Typography variant="body2" component="p" style={{ fontWeight: 'bold', textAlign: 'right' }}>
                        $ 560.000
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
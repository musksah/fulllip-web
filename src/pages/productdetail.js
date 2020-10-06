import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import Header from '../components/shared/header';
import { useParams, useHistory } from "react-router-dom";
import Enviroment from '../enviroment';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { CartContext } from '../contexts/cartContext';

const URL = `${Enviroment.urlApi}/item`;


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
    root: {
        color: '#676767'
    },
    img_product: {
        width: '80%',
        marginLeft: '15%',
        marginRight: '5%',
        boxSizing: 'border-box',
        // border: 'solid 0.02em #C9C9C9',
    },
}));

function ItemDetail() {
    const classes = useStyles();
    const [values, setValues] = useState(1);
    const [product, setProduct] = useState({});
    const [image, setImage] = useState("");
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const history = useHistory();
    const { addProduct, itemCount } = useContext(CartContext);

    let { id } = useParams();

    useEffect(() => {
        getProductInfo();
    }, []);

    const getProductInfo = () => {
        axios.get(`${URL}/${id}`).then(
            res => {
                console.log(res.data);
                setProduct(res.data);
                setImage(res.data.image_item.url);
            },
            err => {
                console.log(err);
            }
        )
    }

    const handleChange = (event) => {
        setValues(event.target.value);
    };

    const saveProduct = () => {
        if (parseInt(values) <= 0) {
            openMessage("la cantidad debe ser mayor a 0");
        } else {
            const products = { id: product.id_item, img: image, name: product.name, price: product.price, quantity: parseInt(values) }
            addProduct(products);
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
        <Box>
            <Header itemCount={itemCount} />
            <Container className={classes.root}>
                <Box style={{ paddingTop: '10rem', paddingBottom: '7rem' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <img className={classes.img_product} width="100%" src={image} />
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container>
                                <Grid item xs={12} style={{ marginTop: '0.5em' }}>
                                    <h4>{product.name}</h4>
                                </Grid>
                                <Grid item xs={12} style={{ marginTop: '2em', color: '#FF5C5C' }}>
                                    <h5>${product.price}</h5>
                                </Grid>
                                <Grid item xs={12} style={{ marginTop: '2em' }}>
                                    <p>{product.description}</p>
                                </Grid>
                                <Grid item xs={12} style={{ marginTop: '0.5em', fontSize: '0.7em' }}>
                                    <p>Disponibles en inventario: {product.quantity}</p>
                                </Grid>
                                <Grid item xs={12} style={{ marginTop: '1em' }}>
                                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                                        <OutlinedInput
                                            id="outlined-adornment-weight"
                                            value={values}
                                            onChange={handleChange}
                                            aria-describedby="outlined-weight-helper-text"
                                            autoComplete="off"
                                            required
                                            inputProps={{
                                                'aria-label': 'weight',
                                            }}
                                        />
                                        <FormHelperText id="outlined-weight-helper-text">cantidad</FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} style={{ marginTop: '1em' }}>
                                    <Button variant="contained" style={{ padding: '1em' }} onClick={saveProduct}>Añadir al Carrito</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error">
                        {message}
                    </Alert>
                </Snackbar>
            </Container>
        </Box>
    );
}

export default ItemDetail;
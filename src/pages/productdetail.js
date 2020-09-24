import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fade, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import Header from '../components/shared/header';
import { useParams } from "react-router-dom";
import Enviroment from '../enviroment';

const URL = `${Enviroment.urlApi}/item`;


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
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const [product, setProduct] = useState({});

    let { id } = useParams();

    useEffect(() => {
        getProductInfo();
    }, []);

    const getProductInfo = () => {
        axios.get(`${URL}/${id}`).then(
            res => {
                console.log(res);
                setProduct(res.data);
            },
            err => {
                console.log(err);
            }
        )
        console.log("Trayendo la información del producto");
        console.log(id);
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <Box>
            <Header />
            <Container className={classes.root}>
                <Box style={{ paddingTop: '10rem', paddingBottom: '7rem' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <img className={classes.img_product} width="100%" src="/img/kit.jpg" />
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
                                            value={values.weight}
                                            onChange={handleChange('weight')}
                                            aria-describedby="outlined-weight-helper-text"
                                            inputProps={{
                                                'aria-label': 'weight',
                                            }}
                                        />
                                        <FormHelperText id="outlined-weight-helper-text">cantidad</FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} style={{ marginTop: '1em' }}>
                                    <Button variant="contained" style={{ padding: '1em' }}>Añadir al Carrito</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default ItemDetail;
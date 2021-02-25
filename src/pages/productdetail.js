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
import NumberFormat from 'react-number-format';
import Swal from "sweetalert2";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import { Alert, AlertTitle } from '@material-ui/lab';

const URL = `${Enviroment.urlApi}/item`;


function Alert2(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
    root: {
        color: '#676767'
    },
    container: {
        marginRight: '1em',
        marginLeft: '1em'
    },
    img_product: {
        [theme.breakpoints.only('xs')]: {
            width: '100%',
        },
        [theme.breakpoints.only('sm')]: {
            width: '84%',
        },
        [theme.breakpoints.only('md')]: {
            width: '92%',
        },
        [theme.breakpoints.only('lg')]: {
            width: '78%',
        },
        [theme.breakpoints.only('xl')]: {
            width: '78%',
        },
    },
    img_products: {
        opacity: '0.5',
        "&:hover": {
            opacity: "1"
        },
        [theme.breakpoints.only('xs')]: {
            height: '85px',
        },
        [theme.breakpoints.only('sm')]: {
            height: '124px',
        },
        [theme.breakpoints.only('md')]: {
            height: '100px',
        },
        [theme.breakpoints.only('lg')]: {
            height: '90px',
        },
        [theme.breakpoints.up('xl')]: {
            height: '90px',
        },
    },
    grid1: {
        [theme.breakpoints.only('xs')]: {
            paddingLeft: '3em',
            paddingRight: '3em',
            marginBottom: '3em'
        },
        [theme.breakpoints.only('sm')]: {
            paddingLeft: '6em',
            paddingRight: '6em',
            marginBottom: '3em'
        },
        [theme.breakpoints.only('md')]: {
            paddingLeft: '5em',
            paddingRight: '3em',
        },
        [theme.breakpoints.only('lg')]: {
            paddingLeft: '8em',
            paddingRight: '6em',
        },
        [theme.breakpoints.up('xl')]: {
            paddingLeft: '12em',
            paddingRight: '8em',
        },
    },
    grid2: {
        [theme.breakpoints.only('xs')]: {
            paddingLeft: '3em',
            paddingRight: '3em',
        },
        [theme.breakpoints.only('sm')]: {
            paddingLeft: '6em',
            paddingRight: '6em',
        },
        [theme.breakpoints.only('md')]: {
            paddingRight: '5em',
        },
        [theme.breakpoints.only('lg')]: {
            paddingRight: '8em',
        },
        [theme.breakpoints.up('xl')]: {
            paddingRight: '12em'
        },
    },
    info_product: {
        [theme.breakpoints.only('xs')]: {
            // marginRight: '1em',
            marginLeft: '0.4em'
        },
        [theme.breakpoints.only('sm')]: {
            marginLeft: '0.5em',
        },
        [theme.breakpoints.only('md')]: {
            marginLeft: '1em',
        },
    },
    carrousel_product: {
        [theme.breakpoints.only('xs')]: {
            marginTop: '0.5em',
        },
        [theme.breakpoints.only('sm')]: {
            width: '86%',
            marginTop: '0.5em',
            marginRight: '7%',
            marginLeft: '7%'
        },
        [theme.breakpoints.only('md')]: {
            width: '92%',
            marginTop: '0.5em',
            marginRight: '4%',
            marginLeft: '4%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '80%',
            marginTop: '0.5em',
            marginRight: '10%',
            marginLeft: '10%'
        },
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1000,
        color: '#fff',
    },
}));

function ItemDetail() {
    const classes = useStyles();
    const [values, setValues] = useState(1);
    const [product, setProduct] = useState({});
    const [image, setImage] = useState({});
    const [images, setImages] = useState([]);
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(true);
    const [message, setMessage] = useState("");
    const history = useHistory();
    const { addProduct, itemCount } = useContext(CartContext);
    const [openProgress, setOpenProgress] = useState(false);

    let { id } = useParams();

    useEffect(() => {
        getProductInfo();
    }, []);

    const getProductInfo = () => {
        setOpenProgress(true);
        axios.get(`${URL}/${id}`).then(
            res => {
                setOpenProgress(false);
                if (parseInt(res.data[0].stock) <= 0) {
                    setVisible(true);
                    setVisible2(false);
                }
                setProduct(res.data[0]);
                setImages(res.data);
                setImage({ url: res.data[0].image_item.url, priority: res.data[0].image_item.priority_field });
            }
        )
    }

    const handleChange = (event) => {
        var reg = new RegExp("^[0-9]+$");
        if (reg.test(event.target.value) || event.target.value === "") {
            setValues(event.target.value.trim());
        }
    };

    const saveProduct = () => {
        if (parseInt(values) <= 0 || isNaN(parseInt(values))) {
            openMessage("la cantidad debe ser mayor a 0");
        } else if (parseInt(product.stock) <= 0 || parseInt(product.stock) < parseInt(values)) {
            Swal.fire({
                title: 'Cantidad no disponible',
                icon: 'error',
                text: 'Solo nos queda ' + parseInt(product.stock) + ' productos en el inventario.',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#FF0D00',
                allowOutsideClick: false
            })
        } else {
            let price_temp = parseInt(product.is_discounted) === 1 ? product.discounted_price : product.price;
            Swal.fire({
                title: 'Producto Agregado',
                icon: 'success',
                text: 'Su producto fue agregado satisfactoriamente al carrito.',
                cancelButtonText: 'Seguir Comprando',
                confirmButtonText: 'Ir al Carrito',
                confirmButtonColor: '#FF0D00',
                cancelButtonColor: '#FF6961',
                showCancelButton: true,
                allowOutsideClick: false
            }).then((result) => {
                if (result.isConfirmed) {
                    history.push("/checkout");
                } else {
                    history.push("/");
                }
            });
            const products = { id: product.id_item, img: image.url, name: product.name, subtitle: product.subtitle, price: price_temp, quantity: parseInt(values) }
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


    function changeImage(img) {
        // let images = document.getElementsByClassName(e.target.className);
        // e.target.style.opacity = '1';
        // for (let i = 0; i < images.length; i++) {
        //     if (images[i].attributes.id.value !== e.target.attributes.id.value) {
        //         images[i].style.opacity = '0.5';
        //     }
        // }
        setImage({ url: img.image_item.url, priority: img.image_item.priority_field });
    }

    const hoverImage = (e) => {
        if (parseInt(image.priority) !== parseInt(e.target.attributes.priority.value)) {
            e.target.style.opacity = '1';
        }
    }

    const leaveImage = (e) => {
        if (parseInt(image.priority) !== parseInt(e.target.attributes.priority.value)) {
            e.target.style.opacity = '0.5';
        }
    }

    return (
        <Box>
            <Header itemCount={itemCount} />
            <Container style={{}}>
                <Backdrop className={classes.backdrop} open={openProgress}>
                    <CircularProgress color="inherit" variant="indeterminate" disableShrink style={{ width: 80, height: 80 }} />
                </Backdrop>
                <Box className={classes.root} style={{ paddingTop: '9rem', paddingBottom: '7rem' }}>
                    {images.length > 0 &&
                        < Grid container>
                            <Grid item xs={12} sm={12} md={6}>
                                <Grid container style={{ marginBottom: '2em' }}>
                                    <Grid item xs={12}>
                                        <center>
                                            <img className={classes.img_product} src={image.url} />
                                        </center>
                                    </Grid>
                                    <Grid item xs={12} className={classes.carrousel_product}>
                                        <Grid container spacing={1} >
                                            {images.map((img, index) => (
                                                <Grid item xs={3} key={img.image_item.priority_field} style={{ cursor: 'pointer', paddingRight: '0.5em' }}>
                                                    {img.image_item.priority_field === 1 ? (
                                                        <Card variant="outlined"
                                                            onClick={() => changeImage(img)}
                                                            style={{ opacity: '1' }}
                                                        >
                                                            <CardMedia
                                                                className={classes.img_products}
                                                                image={img.image_item.url}
                                                                title={img.image_item.name}
                                                            />
                                                        </Card>
                                                    ) : (
                                                            <Card variant="outlined"
                                                                onClick={() => changeImage(img)}
                                                            >
                                                                <CardMedia
                                                                    className={classes.img_products}
                                                                    image={img.image_item.url}
                                                                    title={img.image_item.name}
                                                                />
                                                            </Card>
                                                        )
                                                    }
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Grid container className={classes.info_product}>
                                    <Grid item xs={12}>
                                        <h3>{product.name}</h3>
                                    </Grid>
                                    <Grid item xs={12} style={{ marginTop: '2em', color: '#FF5C5C', fontSize: '1.2em' }}>
                                        {product.price &&
                                            parseInt(product.is_discounted) === 1 ?
                                            <h4><NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <label style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', opacity: '0.5' }}>{value}</label>} /> <NumberFormat value={product.discounted_price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <label>{value}</label>} /></h4>
                                            :
                                            <h4><NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <label>{value}</label>} /></h4>
                                        }
                                    </Grid>
                                    <Grid item xs={12} style={{ marginTop: '2em' }}>
                                        <p>{product.description}</p>
                                    </Grid>
                                    {/* <Grid item xs={12} style={{ marginTop: '0.5em', fontSize: '0.7em' }} hidden={visible}>
                                        <p>Disponibles en inventario: {product.stock}</p>
                                    </Grid> */}
                                    <Grid item xs={12} style={{ marginTop: '1em' }} hidden={visible}>
                                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                                            <OutlinedInput
                                                id="outlined-adornment-weight"
                                                value={values}
                                                onChange={handleChange}
                                                aria-describedby="outlined-weight-helper-text"
                                                autoComplete="off"
                                                required
                                                inputProps={{
                                                    'aria-label': 'weight'
                                                }}
                                            />
                                            <FormHelperText id="outlined-weight-helper-text">cantidad</FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} style={{ marginTop: '1em' }} hidden={visible}>
                                        <Button variant="contained" style={{ padding: '1em' }} onClick={saveProduct}>Añadir al Carrito</Button>
                                    </Grid>
                                    <Grid item xs={12} style={{ marginTop: '1em' }} hidden={visible2}>
                                        <Grid item xs={10}>
                                            <Alert severity="warning">
                                                <AlertTitle>Producto Agotado</AlertTitle>
                                            </Alert>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    }
                </Box>
                <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={handleClose}>
                    <Alert2 onClose={handleClose} severity="error">
                        {message}
                    </Alert2>
                </Snackbar>
            </Container>
        </Box >
    );
}

export default ItemDetail;
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
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
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const URL = `${Enviroment.urlApi}/item`;


function Alert(props) {
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
            width: '70%',
        },
        [theme.breakpoints.only('sm')]: {
            width: '70%',
        },
        [theme.breakpoints.only('md')]: {
            width: '70%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '70%',
        },
        [theme.breakpoints.up('xl')]: {
            width: '70%',
        },
    },
    img_products: {
        // border: 'solid 0.03em #C9C9C9',
        opacity: '0.5',
        "&:hover": {
            opacity: "1"
        },
        [theme.breakpoints.only('xs')]: {
            height: '85px',
        },
        [theme.breakpoints.only('sm')]: {
            height: '100px',
        },
        [theme.breakpoints.only('md')]: {
            height: '85px',
        },
        [theme.breakpoints.only('lg')]: {
            height: '85px',
        },
        [theme.breakpoints.up('xl')]: {
            height: '85px',
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

    }
}));

function ItemDetail() {
    const classes = useStyles();
    const [values, setValues] = useState(1);
    const [product, setProduct] = useState({});
    const [image, setImage] = useState({});
    const [images, setImages] = useState([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const history = useHistory();
    const { addProduct, itemCount } = useContext(CartContext);

    let { id } = useParams();

    useEffect(() => {
        getProductInfo();
    }, []);

    const getProductInfo = () => {
        // console.log("Get product info");
        axios.get(`${URL}/${id}`).then(
            res => {
                setProduct(res.data[0]);
                setImages(res.data);
                setImage({ url: res.data[0].image_item.url, priority: res.data[0].image_item.priority_field });
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
            Swal.fire({
                title: 'Producto Agregado',
                icon: 'success',
                text: 'Su producto fue agregado satisfactoriamente al carrito.',
                cancelButtonText: 'Seguir Comprando',
                confirmButtonText: 'Ir al Carrito',
                showCancelButton: true,
                allowOutsideClick: false
            }).then((result) => {
                if (result.isConfirmed) {
                    history.push("/checkout");
                } else {
                    history.push("/");
                }
            });
            const products = { id: product.id_item, img: image.url, name: product.name, subtitle: product.subtitle, price: product.price, quantity: parseInt(values) }
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
        console.log("CLick imagen");
        console.log(img);
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
                                    <Grid item xs={12} style={{ width: '70%',marginTop:'0.5em', marginRight: '15%', marginLeft: '15%' }}>
                                        <Grid container spacing={1} >
                                            {images.map((img, index) => (
                                                <Grid item xs={3} key={img.image_item.priority_field} style={{ cursor: 'pointer', paddingRight: '0.5em' }}>
                                                    {img.image_item.priority_field === 1 ? (
                                                        <Card variant="outlined"
                                                            // data={img.image_item.url}
                                                            // priority={img.image_item.priority_field}
                                                            onClick={() => changeImage(img)}
                                                            style={{ opacity: '1' }}
                                                        // onMouseOver={hoverImage}
                                                        // onMouseOut={leaveImage}
                                                        >
                                                            <CardMedia
                                                                className={classes.img_products}
                                                                image={img.image_item.url}
                                                                title={img.image_item.name}
                                                            />
                                                            {/* <CardContent> */}
                                                            {/* <img className={classes.img_products} id={img.image_item.name} src={img.image_item.url} data={img.image_item.url} priority={img.image_item.priority_field} onClick={changeImage} style={{ opacity: '1' }} onMouseOver={hoverImage} onMouseOut={leaveImage} /> */}
                                                            {/* </CardContent> */}
                                                        </Card>
                                                    ) : (
                                                            <Card variant="outlined"
                                                                // data={img.image_item.url}
                                                                // priority={img.image_item.priority_field}
                                                                onClick={() => changeImage(img)}
                                                            // style={{ opacity: '0.5' }}
                                                            // onMouseOver={hoverImage}
                                                            // onMouseOut={leaveImage}
                                                            >
                                                                <CardMedia
                                                                    className={classes.img_products}
                                                                    image={img.image_item.url}
                                                                    title={img.image_item.name}
                                                                />
                                                                {/* <CardContent> */}
                                                                {/* <img className={classes.img_products} id={img.image_item.name} src={img.image_item.url} data={img.image_item.url} priority={img.image_item.priority_field} onClick={changeImage} style={{ opacity: '1' }} onMouseOver={hoverImage} onMouseOut={leaveImage} /> */}
                                                                {/* </CardContent> */}
                                                            </Card>
                                                            // <Card variant="outlined">
                                                            //     <CardContent>
                                                            //         <img className={classes.img_products} id={img.image_item.name} src={img.image_item.url} data={img.image_item.url} priority={img.image_item.priority_field} onClick={changeImage} style={{ opacity: '0.5' }} onMouseOver={hoverImage} onMouseOut={leaveImage} />
                                                            //     </CardContent>
                                                            // </Card>
                                                        )
                                                    }
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <h3>{product.name}</h3>
                                    </Grid>
                                    <Grid item xs={12} style={{ marginTop: '2em', color: '#FF5C5C' }}>
                                        {product.price &&
                                            <h5><NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} /></h5>
                                        }
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
                    }
                </Box>
            </Container>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {message}
                </Alert>
            </Snackbar>
        </Box >
    );
}

export default ItemDetail;
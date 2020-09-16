import React, { useEffect, useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';

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
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <Container className={classes.root}>
            <Box style={{ paddingTop: '10rem', paddingBottom: '7rem' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <img className={classes.img_product} width="100%" src="/img/kit.jpg" />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container>
                            <Grid item xs={12} style={{ marginTop: '0.5em' }}>
                                <h4>Kit</h4>
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: '2em', color: '#FF5C5C' }}>
                                <h5>$150.000</h5>
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: '2em' }}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nulla modi, odit explicabo hic doloremque commodi ab molestiae. Iure voluptatem labore et aliquid soluta inventore expedita quam vel a earum!</p>
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
                                <Button variant="contained" style={{ padding:'1em' }} >Añadir al Carrito</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default ItemDetail;
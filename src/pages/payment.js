import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import Header from '../components/shared/header';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Information from '../components/shooping_cart/information'
import ReviewSale from '../components/shooping_cart/reviewSale';
import { NavLink } from "react-router-dom";


const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

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
    },
    media: {
        height: '80px'
    }
}));

// const cardPayment = (

// );


export default function Payment() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('panel1');
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Box>
            {/* <Header /> */}
            <Box style={{ marginTop: '1.8em' }}>
                <Container style={{ marginBottom: '7em' }}>
                    <Grid container>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                            <Container>
                                <NavLink to="/sending" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained"><ArrowBack style={{ marginRight: '0.3em' }} /> Regresar</Button>
                                </NavLink>
                            </Container>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                    <Grid container style={{ marginTop: '1.8em', padding: '0.7em' }} >
                        <Grid item md={1}></Grid>
                        <Grid item xs={12} md={5}>
                            <Information />
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant="h6" style={{ fontWeight: 'bold' }}> Pago </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2">Nuestros medios de pago son seguros y confiables</Typography>
                                </Grid>
                                <Grid item xs={11}>
                                    <Card style={{ marginTop: '2em' }}>
                                        <CardContent>
                                            {/* <hr style={{marginBottom:'1.7em'}} /> */}
                                            <FormControl component="fieldset">
                                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                                    <FormControlLabel value="Epayco" control={<Radio />} label="Epayco" />
                                                    <FormControlLabel value="PayU" control={<Radio />} label="PayU" />
                                                </RadioGroup>
                                            </FormControl>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Typography >  </Typography>
                                </Grid>
                                <Grid item xs={1}></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5} style={{ background: '#FFF2F2' }}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <ReviewSale></ReviewSale>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={1}></Grid>
                    </Grid>
                </Container>
            </Box>
        </Box >
    );
}
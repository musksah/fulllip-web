import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Header from '../components/shared/header';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Container from '@material-ui/core/Container';
import { FaFacebookSquare } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Enviroment from '../enviroment';
import Hidden from '@material-ui/core/Hidden';
import Swal from "sweetalert2";

const URL = Enviroment.urlApi + '/email';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    img_social: {
        width: '20%',
        marginLeft: '40%',
        marginRight: '40%',
    },
    collage: {
        [theme.breakpoints.down('xs')]: {
            position: 'absolute',
            top: '15%',
            left: 0,
            right: 0,
            bottom: 0
        },
        [theme.breakpoints.only('sm')]: {
            position: 'absolute',
            top: '10%',
            left: 0,
            right: 0,
            bottom: 0
        },
        [theme.breakpoints.only('md')]: {
            position: 'absolute',
            top: 0,
            left: '20%',
            right: 0,
            bottom: 0
        },
        [theme.breakpoints.only('lg')]: {
            position: 'absolute',
            top: 0,
            left: '15%',
            right: 0,
            bottom: 0
        },
        [theme.breakpoints.only('xl')]: {
            position: 'absolute',
            top: 0,
            left: '20%',
            right: 0,
            bottom: 0
        },
    },
    container_card_form: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '11em',
            marginBottom: '4em'
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '10em',
            marginBottom: '4em'
        },
        [theme.breakpoints.up('xl')]: {
            marginTop: '10em',
            marginBottom: '4em'
        },
    },
    title_social_card: {
        [theme.breakpoints.only('xs')]: {
            position: 'relative',
            top: '-4em'
        },
        [theme.breakpoints.only('sm')]: {
            position: 'relative',
            top: '-4em'
        },
        [theme.breakpoints.only('md')]: {
            position: 'relative',
            top: '-3.5em'
        },
        [theme.breakpoints.up('lg')]: {
            position: 'relative',
            top: '-2.5em',
        },
    },
    link_social_net: {
        [theme.breakpoints.down('lg')]: {
            textDecoration: 'none',
            color: 'inherit',
        },
        [theme.breakpoints.up('lg')]: {
            textDecoration: 'none',
            color: 'inherit',
            fontSize: '0.7em'
        },
    },
    paper_form: {
        [theme.breakpoints.up('lg')]: {
            marginTop: '10em',
        },
        [theme.breakpoints.up('xl')]: {
            marginTop: '10em',
        },
    },
    container_social_cards: {
        [theme.breakpoints.only('xs')]: {
            marginTop: '3em'
        },
        [theme.breakpoints.only('sm')]: {
            marginTop: '15em',
            marginBottom: '1em'
        },
        [theme.breakpoints.only('md')]: {
            marginTop: '13em',
            marginBottom: '1em'
        },
        [theme.breakpoints.only('lg')]: {
            marginTop: '22em',
            marginBottom: '2em'
        },
        [theme.breakpoints.up('xl')]: {
            marginTop: '20em'
        },
    }
}));

function ModalContact() {

    const classes = useStyles();
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [open, setOpen] = React.useState(false);
    const [openProgress, setOpenProgress] = useState(false);
    const bull = <span className={classes.bullet}>•</span>;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const changeName = (e) => {
        const { value } = e.target;
        setName(value);
    }

    const changeLastname = (e) => {
        const { value } = e.target;
        setLastname(value);
    }

    const changeSubject = (e) => {
        const { value } = e.target;
        setSubject(value);
    }

    const changeEmail = (e) => {
        const { value } = e.target;
        setEmail(value);
    }

    const changeMessage = (e) => {
        const { value } = e.target;
        setMessage(value);
    }

    const sendMessage = (e) => {
        e.preventDefault();
        setOpenProgress(true);
        axios.post(URL + "/send-mail-contact", { email, subject, name, lastname, message }).then(res => {
            setOpenProgress(false);
            Swal.fire({
                title: 'Mensaje enviado',
                icon: 'success',
                text: `${res.data.message}`,
                confirmButtonText: 'Ok',
                confirmButtonColor: '#FF0D00',
                allowOutsideClick: false
            });
            document.getElementById("form-contact").reset();
            setName("");
            setLastname("");
            setSubject("");
            setEmail("");
            setMessage("");
        });
    }

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box>
            <Header />
            <Container className={classes.container_card_form}>
                <Grid container style={{ zIndex: '10', position: 'relative' }} >
                    <Grid item md={3} lg={3} xl={3} style={{ marginLeft: '1em', marginRight: '1em' }}></Grid>
                    <Grid item md={6} lg={6} xl={6} style={{ marginLeft: '1em', marginRight: '1em' }} className={classes.paper_form}>
                        <Grid container>
                            <Grid item>
                                <Paper elevation={7} >
                                    <Container style={{ paddingTop: '1em' }}>
                                        <Grid item md={12} lg={12} xl={12} style={{ marginTop: '0.7em', marginBottom: '1.5em', marginRight: '1em', marginLeft: '1em', textAlign: 'center' }}>
                                            <a onClick={handleClickOpen} style={{ cursor: 'pointer', paddingTop: '2em' }}><Typography variant="h5" style={{ fontSize: '0.9em' }}>CONTÁCTANOS</Typography></a>
                                        </Grid>
                                        <form noValidate autoComplete="off" onSubmit={sendMessage} id="form-contact">
                                            <Grid item md={12} lg={12} xl={12} style={{ marginRight: '1em', marginLeft: '1em' }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6} lg={6}>
                                                        <TextField
                                                            autoFocus
                                                            margin="dense"
                                                            id="name"
                                                            label="Nombres"
                                                            type="text"
                                                            variant="outlined"
                                                            autoComplete="off"
                                                            fullWidth
                                                            onChange={changeName}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6} lg={6}>
                                                        <TextField
                                                            margin="dense"
                                                            id="lastname"
                                                            label="Apellidos"
                                                            type="text"
                                                            variant="outlined"
                                                            autoComplete="off"
                                                            fullWidth
                                                            onChange={changeLastname}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6} lg={6}>
                                                        <TextField
                                                            margin="dense"
                                                            id="subject"
                                                            label="Asunto"
                                                            type="text"
                                                            variant="outlined"
                                                            autoComplete="off"
                                                            fullWidth
                                                            onChange={changeSubject}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6} lg={6}>
                                                        <TextField
                                                            margin="dense"
                                                            id="email"
                                                            label="Correo"
                                                            type="email"
                                                            variant="outlined"
                                                            autoComplete="off"
                                                            fullWidth
                                                            onChange={changeEmail}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} lg={12}>
                                                        <TextField
                                                            id="outlined-textarea"
                                                            label="Mensaje"
                                                            placeholder="Placeholder"
                                                            multiline
                                                            variant="outlined"
                                                            rows={3}
                                                            fullWidth
                                                            autoComplete="off"
                                                            onChange={changeMessage}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item md={12} xl={12} lg={12} style={{ marginTop: '1.5em', marginBottom: '1.5em' }}>
                                                <center>
                                                    <Button type="submit" variant="contained" color="primary" style={{ marginBottom: '2em' }}>Enviar</Button>
                                                </center>
                                            </Grid>
                                        </form>
                                    </Container>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={3} lg={3} xl={3} style={{ marginLeft: '1em', marginRight: '1em' }}></Grid>
                </Grid>
                {/* Se muestra en XS  */}
                <Hidden only={['sm', 'md', 'lg', 'xl']}>
                    <img src="img/contact/collage_400x400.png" alt="" className={classes.collage} />
                </Hidden>
                {/* Se muestra en sm y md */}
                <Hidden only={['xs', 'lg', 'xl']}>
                    <img src="img/contact/collage_800x800.png" alt="" className={classes.collage} />
                </Hidden>
                {/* Se muestra en lg Y xl */}
                <Hidden only={['xs', 'sm', 'md']}>
                    <img src="img/contact/collage_1000x1000.png" alt="" className={classes.collage} />
                </Hidden>
                <Grid container className={classes.container_social_cards}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop: '2em', marginBottom: '3.5em', textAlign: 'center' }}>
                        <center>
                            <Typography variant="h5">
                                MANTENTE AL DÍA EN NUESTRAS REDES SOCIALES
                            </Typography>
                        </center>
                    </Grid>
                </Grid>
                <Grid container spacing={5} style={{ marginBottom: '2em' }}>
                    <Grid item xs={12} md={4} lg={4} xl={4}>
                        <center>
                            <img src="img/contact/Gmail_200px.png" alt="" style={{ width: '90%', left: '10%', right: '10%' }} />
                            <Typography variant="h6" className={classes.title_social_card}>
                                <span className={classes.link_social_net}>
                                    fullipscolombia@gmail.com
                                    </span>
                            </Typography>
                        </center>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} xl={4}>
                        <center>
                            <a target="_blank" href="https://www.facebook.com/880665175331108/posts/3553199911410941/?extid=0&d=n">
                                <img src="img/contact/facebook_200PX.png" alt="" style={{ width: '90%', left: '10%', right: '10%' }} />
                            </a>
                            <Typography variant="h6" className={classes.title_social_card}>
                                <a target="_blank" href="https://www.facebook.com/880665175331108/posts/3553199911410941/?extid=0&d=n" className={classes.link_social_net}>
                                    Fullips Oficial Colombia
                                </a>
                            </Typography>
                        </center>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} xl={4}>
                        <center>
                            <a target="_blank" href="https://www.instagram.com/p/CF7sPsuDALH/?igshid=1aw8zwg3nggt0" className={classes.link_social_net}>
                                <img src="img/contact/instagram_200px.png" alt="" style={{ width: '90%', left: '10%', right: '10%' }} />
                            </a>
                            <Typography variant="h6" className={classes.title_social_card}>
                                <a target="_blank" href="https://www.instagram.com/p/CF7sPsuDALH/?igshid=1aw8zwg3nggt0" className={classes.link_social_net}>
                                    @fullipscolombia
                                    </a>
                            </Typography>
                        </center>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ModalContact;

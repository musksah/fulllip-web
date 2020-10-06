import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Header from '../components/shared/header';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import Enviroment from '../enviroment';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import axios from 'axios';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Interweave from 'interweave';
import ReactPlayer from "react-player";
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';


const URL = `${Enviroment.urlApi}/advice`;
const URL2 = `${Enviroment.urlApi}/video`;

const useStyles = makeStyles((theme) => ({
    centered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2em',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }, title: {
        color: '#8A0000',
        // fontStyle:
    }
}));

export default function Question() {
    const classes = useStyles();
    const [openProgress, setOpenProgress] = useState(false);
    const [use, setUse] = useState([]);
    const [video, setVideo] = useState([]);


    useEffect(() => {
        setOpenProgress(true);
        findUse();
        findVideo();
    }, []);

    const findUse = () => {
        axios.get(URL).then(res => {
            setUse(res.data);
            setOpenProgress(false);
        });
    }

    const findVideo = () => {
        axios.get(URL2).then(res => {
            console.log(res);
            setVideo(res.data);
            setOpenProgress(false);
        });
    }

    return (
        <Box>
            <Header />
            <Container style={{ marginTop: '9rem', marginBottom: '9rem' }}>
                <Grid container>
                    <Grid item xs={1}></Grid>

                    <Grid item xs={10}>
                        <Backdrop className={classes.backdrop} open={openProgress}>
                            <CircularProgress color="inherit" variant="indeterminate" disableShrink style={{ width: 80, height: 80 }} />
                        </Backdrop>
                        {use.map(u => (
                            <Grid>
                                <Grid className={classes.centered} item xs={12}>
                                    <Typography variant="h6" color="primary">{u.name}</Typography>
                                </Grid>
                                <Grid style={{ marginBottom: '4rem' }} className={classes.centered} item xs={12}>
                                    <Grid item xs={10} sm={10}>
                                        <Interweave
                                            content={u.description}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                        {/* <Box>
                    <Grid className={classes.centered} item xs={12}>
                        <Typography variant="h4" color="primary" style={{ textDecoration: "underline" }}>Tutoriales</Typography>
                    </Grid>
                    <Grid style={{ marginTop: '3rem' }} container justify="center" spacing={3}>
                        {video.map(v => (
                            <Grid item xs={10} sm={8} md={3} lg={3}>
                                <Card elevation={5}>
                                    <CardContent>
                                        <ReactPlayer
                                            url={v.url}
                                            width='100%'
                                            height='200px'
                                        />
                                        <Typography gutterBottom variant="h6" color="secondary" style={{ marginTop: '1rem' }}>
                                            {v.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box> */}


                    </Grid>

                    <Grid item xs={1}></Grid>
                </Grid>
            </Container>
        </Box >
    );
}
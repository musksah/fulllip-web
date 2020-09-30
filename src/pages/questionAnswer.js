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
import ReactPlayer from "react-player";
import Interweave from 'interweave';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';


const URL = `${Enviroment.urlApi}/qa`;
const URL2 = `${Enviroment.urlApi}/video`;

const useStyles = makeStyles((theme) => ({
    centered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1em',
        marginBottom: '3em'
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
    const [openProgress, setOpenProgress] = useState(true);
    const [question, setQuestion] = useState([]);
    const [expanded, setExpanded] = React.useState(false);
    const [video, setVideo] = useState([]);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        findQuestion();
        findVideo();
    }, []);

    const findQuestion = () => {
        axios.get(URL).then(res => {
            setQuestion(res.data);
        });
    }

    const findVideo = () => {
        axios.get(URL2).then(res => {
            setVideo(res.data);
            setOpenProgress(false);
        });
    }

    return (
        <Box>
            <Header />
            <Box style={{ marginTop: '9rem' }}>
                <Backdrop className={classes.backdrop} open={openProgress}>
                    <CircularProgress color="inherit" variant="indeterminate" disableShrink style={{ width: 80, height: 80 }} />
                </Backdrop>
                <Grid className={classes.centered} item xs={12}>
                    <Typography variant="h4" color="primary" style={{ textDecoration: "underline" }}>Preguntas Frecuentes</Typography>
                </Grid>
                <Grid style={{ marginTop: '3rem', marginBottom: '6rem' }} className={classes.centered} item xs={12}>
                    <Grid item xs={10}>
                        {question.map(q => (
                            <Accordion key={q.id_qa} expanded={expanded === `panel${q.id_qa}`} onChange={handleChange(`panel${q.id_qa}`)} elevation={5}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <Typography variant="h6" className={classes.heading}><Interweave
                                        content={q.name}
                                        color="secondary"
                                    /></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {q.id_qa == 1 &&
                                            <Grid style={{ marginTop: '1rem', marginBottom: '1rem' }} container justify="center" spacing={3}>
                                                {video.map(v => (
                                                    <Grid item xs={10} sm={8} md={3} lg={3}>
                                                        <ReactPlayer
                                                            url={v.url}
                                                            width='100%'
                                                            height='200px'
                                                        />
                                                        <Typography gutterBottom variant="h6" color="secondary" style={{ marginTop: '1rem' }}>
                                                            {v.title}
                                                        </Typography>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        }
                                        <Interweave
                                            content={q.description}
                                            color="secondary"
                                        />
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

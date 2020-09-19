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


const URL = `${Enviroment.urlApi}/advice`;

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
    const [openProgress, setOpenProgress] = useState(true);
    const [use, setUse] = useState([]);


    useEffect(() => {
        findUse();
    }, []);

    const findUse = () => {
        axios.get(URL).then(res => {
            setUse(res.data);
            setOpenProgress(false);
        });
    }

    return (
        <Box>
            <Header />
            <Box style={{ marginTop: '9rem', marginBottom: '9rem' }}>
                <Backdrop className={classes.backdrop} open={openProgress}>
                    <CircularProgress color="inherit" variant="indeterminate" disableShrink style={{ width: 80, height: 80 }} />
                </Backdrop>
                {use.map(u => (
                    <Grid>
                        <Grid className={classes.centered} item xs={12}>
                            <Typography variant="h4">{u.name}</Typography>
                        </Grid>
                        <Grid style={{ marginBottom: '4rem' }} className={classes.centered} item xs={12}>
                            <Grid item xs={10}>
                                <Interweave
                                    content={u.description}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Box>
        </Box>
    );
}
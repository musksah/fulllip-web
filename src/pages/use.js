import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Header from '../components/shared/header';
import Grid from '@material-ui/core/Grid';
import Enviroment from '../enviroment';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Interweave from 'interweave';
import Container from '@material-ui/core/Container';


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


    useEffect(() => {
        setOpenProgress(true);
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
            <Container style={{ marginTop: '9rem', marginBottom: '9rem' }}>
                <Grid container>
                    <Grid item xs={1}></Grid>

                    <Grid item xs={10}>
                        <Backdrop className={classes.backdrop} open={openProgress}>
                            <CircularProgress color="inherit" variant="indeterminate" disableShrink style={{ width: 80, height: 80 }} />
                        </Backdrop>
                        {use.map(u => (
                            <Grid key={u.id_advice}>
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
                    </Grid>

                    <Grid item xs={1}></Grid>
                </Grid>
            </Container>
        </Box >
    );
}
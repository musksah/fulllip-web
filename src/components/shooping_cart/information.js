import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import { Container, Typography, Button, Grid, Card, CardContent, CardHeader } from '@material-ui/core';
import { parseJSON } from 'date-fns';

const useStyles = makeStyles((theme) => ({
    subtitle: {
        fontSize: 20
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        padding: '15px 15px',
    },
}));

export default function Information() {
    const classes = useStyles();
    const [information, setInformation] = useState([]);
    const [question, setQuestion] = useState([]);

    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem("h_tinformation")));
        setInformation(JSON.parse(localStorage.getItem("h_tinformation")));
    }, []);
    return (
        <Grid>

            <Grid container style={{ marginBlockEnd: '3rem' }} spacing={2}>
                <Grid item xs={1}></Grid>
                <Grid item xs={11} md={11}>
                    <Card>
                        <CardHeader
                            title="Información de Envío"
                        />
                        <CardContent>
                            <Grid container spacing={3} style={{ textAlign: 'center' }}>
                                <Grid item xs={4} sm={3} md={4} lg={2}>
                                    Nombre:
                                </Grid>
                                <Grid item xs={8} sm={9} md={8} lg={9}>
                                    {information.name}
                                </Grid>
                                <Grid item xs={4} sm={3} md={4} lg={2}>
                                    Apellido:
                                </Grid>
                                <Grid item xs={8} sm={9} md={8} lg={9}>
                                    {information.lastname}
                                </Grid>
                                <Grid item xs={4} sm={3} md={5} lg={3} xl={2}>
                                    Dirección:
                                </Grid>
                                <Grid item xs={8} sm={9} md={7} lg={9} xl={9}>
                                    {information.address}
                                </Grid>
                                <Grid item xs={4} sm={3} md={5} lg={3} xl={2}>
                                    País:
                                </Grid>
                                <Grid item xs={8} sm={9} md={7} lg={9} xl={9}>
                                    {information.country}
                                </Grid>
                                <Grid item xs={4} sm={3} md={5} lg={3} xl={2}>
                                    Ciudad:
                                </Grid>
                                <Grid item xs={8} sm={9} md={7} lg={9} xl={9}>
                                    {information.city}
                                </Grid>
                                <Grid item xs={4} sm={3} md={5} lg={3} xl={2}>
                                    Teléfono:
                                </Grid>
                                <Grid item xs={8} sm={9} md={7} lg={9} xl={9}>
                                    {information.phone}
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        color='primary'
                                        className={classes.submit}
                                        style={{ float: 'right', padding: '10' }}>Cambiar Información</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container style={{ marginBlockEnd: '3rem' }} spacing={2}>
                <Grid item xs={1}></Grid>
                <Grid item xs={11}>
                    <InputLabel ><Typography variant="body1" color="secondary" component="p" className={classes.subtitle}>Envío</Typography></InputLabel>
                </Grid>
            </Grid>
        </Grid>
    );
}

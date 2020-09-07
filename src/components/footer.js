import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    footer: {
        paddingTop: '2em',
        paddingBottom: '2em',
        background: '#B82929',
        color: '#FFFFFF',
        marginTop: '3em',
    },
    footer_p: {
        fontSize: '0.77em',
        textAlign: 'left'
    }
}));

export default function PrimaryFooter() {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Container style={{ marginLeft: '2em', marginRight: '2em' }}>
                <Grid container>
                    <Grid item xs={6}>
                        <p className={classes.footer_p}>PREGUNTAS FRECUENTES</p>
                    </Grid>
                    <Grid item xs={6}>
                        <p className={classes.footer_p}>CONTACTO</p>
                    </Grid>
                    <Grid item xs={6}>
                        <p className={classes.footer_p}>CONSEJOS</p>
                    </Grid>
                    <Grid item xs={6}>
                        <p className={classes.footer_p}>USO</p>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '1.5em' }}>
                        <p style={{ textAlign: 'left', fontSize: '0.77em' }}>Copyright © 2020. All Rights Reserved</p>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
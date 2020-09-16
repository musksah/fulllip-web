import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    footer: {
        paddingTop: '2em',
        background: '#8A0000',
        color: '#FFFFFF',
        height: '100%',
    },
    item_footer: {
        listStyle: 'none',
    }
}));

export default function PrimaryFooter() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <BottomNavigation
            value={value}
            className={classes.footer}
        >
            <Grid container >
                <Grid item xs={6}>
                    <h5 style={{ marginLeft: '1em' }}>PREGUNTAS FRECUENTES</h5>
                </Grid>
                <Grid item xs={3}>
                    <ul>
                        <h5>FULLIP</h5>
                        <li className={classes.item_footer}>Contacto</li>
                        <li className={classes.item_footer}>Nosotros</li>
                        <li className={classes.item_footer}>Uso</li>
                    </ul>
                </Grid>
                <Grid item xs={3}>
                    <ul>
                        <h5>REDES SOCIALES</h5>
                        <li className={classes.item_footer}>Facebook</li>
                        <li className={classes.item_footer}>Twitter</li>
                    </ul>
                </Grid>
                <Grid item xs={12} style={{ marginTop: '1.5em' }}>
                    <p style={{ textAlign: 'left', fontSize: '0.77em', marginLeft: '2em' }}>Copyright © 2020. All Rights Reserved</p>
                </Grid>
            </Grid>
        </BottomNavigation>
    );
}
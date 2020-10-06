import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { BrowserRouter as Router, Switch, Route, NavLink, useHistory } from "react-router-dom";

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
    },
    navlink: {
        color: 'white',
        textDecoration: 'none'
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
                        <h5>FULLIPS</h5>
                        <NavLink to="/contact" className={classes.navlink}>
                            <li className={classes.item_footer}>Contacto</li>
                        </NavLink>
                        <NavLink to="/razon-social" className={classes.navlink}>
                            <li className={classes.item_footer}>Razón Social</li>
                        </NavLink>
                        <NavLink to="/Use" className={classes.navlink}>
                            <li className={classes.item_footer}>Uso</li>
                        </NavLink>
                    </ul>
                </Grid>
                <Grid item xs={3}>
                    <ul>
                        <h5>REDES SOCIALES</h5>
                        <a  target="_blank" href="https://www.facebook.com/880665175331108/posts/3553199911410941/?extid=0&d=n" className={classes.navlink}>
                            <li className={classes.item_footer}>Facebook</li>
                        </a>
                        <a  target="_blank" href="https://www.instagram.com/p/CF7sPsuDALH/?igshid=1aw8zwg3nggt0" className={classes.navlink}>
                            <li className={classes.item_footer}>Instagram</li>
                        </a>
                        {/* </NavLink> */}
                    </ul>
                </Grid>
                <Grid item xs={12} style={{ marginTop: '1.5em' }}>
                    <p style={{ textAlign: 'left', fontSize: '0.77em', marginLeft: '2em' }}>Copyright © 2020. All Rights Reserved</p>
                </Grid>
            </Grid>
        </BottomNavigation>
    );
}
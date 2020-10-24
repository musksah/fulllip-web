import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { BrowserRouter as Router, Switch, Route, NavLink, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    footer: {
        paddingTop: '2em',
        background: '#FF0D00',
        color: '#FFFFFF',
        height: '100%',
    },
    item_footer: {
        [theme.breakpoints.down('xs')]: {
            listStyle: 'none',
            fontSize:'0.8em'
        },
        [theme.breakpoints.up('sm')]: {
            listStyle: 'none',
        },
    },
    copyright:{
        [theme.breakpoints.only('xs')]: {
            fontSize:'0.8em'
        },
        [theme.breakpoints.only('sm')]: {
            fontSize:'0.8em'
        },
        [theme.breakpoints.up('md')]: {
        },
    },
    navlink: {
        [theme.breakpoints.only('xs')]: {
            color: 'white',
            textDecoration: 'none',
            fontSize: '0.9em'
        },
        [theme.breakpoints.only('sm')]: {
            color: 'white',
            textDecoration: 'none',
            fontSize: '1em'
        },
        [theme.breakpoints.up('md')]: {
            color: 'white',
            textDecoration: 'none'
        },
    },
    icons_footer: {
        [theme.breakpoints.only('xs')]: {
            width: '32px',
            height: '32px',
        },
        [theme.breakpoints.only('sm')]: {
            width: '50px',
            height: '50px',
        },
        [theme.breakpoints.up('md')]: {
            width: '64px',
            height: '64px',
        },
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
            <Container>
                <Grid container >
                    <Hidden only={['xs']}>
                        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                            <center>
                                <img src="img/contact/LOGO_FULLIPS_BLANCO_200x200.png" />
                            </center>
                        </Grid>
                    </Hidden>
                    <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                        <ul>
                            <NavLink to="/" className={classes.navlink}>
                                <li className={classes.item_footer}>INICIO</li>
                            </NavLink>
                            <NavLink to="/Question" className={classes.navlink}>
                                <li className={classes.item_footer} style={{ marginTop: '0.5em' }}>PREGUNTAS FRECUENTES</li>
                            </NavLink>
                            <NavLink to="/Use" className={classes.navlink}>
                                <li className={classes.item_footer} style={{ marginTop: '0.5em' }}>USO</li>
                            </NavLink>
                            <NavLink to="/razon-social" className={classes.navlink}>
                                <li className={classes.item_footer} style={{ marginTop: '0.5em' }}>RAZÓN SOCIAL</li>
                            </NavLink>
                            <NavLink to="/contact" className={classes.navlink}>
                                <li className={classes.item_footer} style={{ marginTop: '0.5em' }}>CONTACTO</li>
                            </NavLink>
                        </ul>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                        <Grid container style={{ marginTop: '1em' }}>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={3}>
                                <a target="_blank" href="https://www.facebook.com/880665175331108/posts/3553199911410941/?extid=0&d=n" className={classes.navlink}>
                                    <img src="img/contact/FACEBOOK_64X64.png" className={classes.icons_footer} />
                                </a>
                            </Grid>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={3}>
                                <a target="_blank" href="https://www.instagram.com/p/CF7sPsuDALH/?igshid=1aw8zwg3nggt0" className={classes.navlink}>
                                    <img src="img/contact/INSTAGRAM_64X64.png" className={classes.icons_footer}/>
                                </a>
                            </Grid>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={12} style={{ marginTop: '2.5em' }}>
                                <center>
                                    <Typography variant="h6" className={classes.copyright}>Copyright © 2020. All Rights Reserved</Typography>
                                </center>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </BottomNavigation>
    );
}
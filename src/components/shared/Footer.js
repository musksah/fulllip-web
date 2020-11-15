import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { BrowserRouter as Router, Switch, Route, NavLink, useHistory } from "react-router-dom";
import 'typeface-rubik';
import "./Footer.css";

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
      [theme.breakpoints.only('md')]: {
          fontSize:'0.9em'
      },
      [theme.breakpoints.up('lg')]: {
          fontSize:'1em'
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
          width: '38px',
          height: '38px',
      },
      [theme.breakpoints.only('md')]: {
          width: '38px',
          height: '38px',
      },
      [theme.breakpoints.up('lg')]: {
          width: '38px',
          height: '38px',
      },
  }
}));

function Footern() {
  const classes = useStyles();
  return (
    <div className="main-footer">
      <Container>
        <Grid container style={{ marginBottom: '1em' }} >
          <Hidden only={['xs']}>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <center>
                <img src="img/footer/logo_no_spaces.png" style={{ marginTop: '0.6em' }} />
              </center>
            </Grid>
          </Hidden>
          <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
            <ul style={{ position: 'relative', top: '-0.5em' }}>
              <NavLink to="/" className={classes.navlink}>
                <li className={classes.item_footer}>INICIO</li>
              </NavLink>
              <NavLink to="/Question" className={classes.navlink}>
                <li className={classes.item_footer} style={{ marginTop: '0.6em', fontFamily: 'Rubik' }}>PREGUNTAS FRECUENTES</li>
              </NavLink>
              <NavLink to="/Use" className={classes.navlink}>
                <li className={classes.item_footer} style={{ marginTop: '0.6em', fontFamily: 'Rubik' }}>USO</li>
              </NavLink>
              <NavLink to="/razon-social" className={classes.navlink}>
                <li className={classes.item_footer} style={{ marginTop: '0.6em', fontFamily: 'Rubik' }}>RAZÓN SOCIAL</li>
              </NavLink>
              <NavLink to="/contact" className={classes.navlink}>
                <li className={classes.item_footer} style={{ marginTop: '0.6em', fontFamily: 'Rubik' }}>CONTACTO</li>
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
                  <img src="img/contact/INSTAGRAM_64X64.png" className={classes.icons_footer} />
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
    </div>
  );
}

export default Footern;
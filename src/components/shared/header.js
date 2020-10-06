import React, { useEffect, useState, useContext } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { RiUserLine } from "react-icons/ri";
import MailIcon from '@material-ui/icons/MailOutline';
import NotificationsIcon from '@material-ui/icons/NotificationsActiveOutlined';
import MoreIcon from '@material-ui/icons/MoreVert';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import { AiOutlineShopping } from "react-icons/ai";
import { BrowserRouter as Router, Switch, Route, NavLink, useHistory } from "react-router-dom";
import axios from 'axios';
import 'typeface-rubik';
import Enviroment from '../../enviroment';
import { CartContext } from '../../contexts/cartContext';

const URL = `${Enviroment.urlApi}/user`;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.10),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.20),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  brandHeader: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
  },
  linkHeader: {
    fontFamily: 'Rubik, verdana',
    fontWeight: '400',
    fontSize: '0.85em',
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [visibleMenu, setVisibleMenu] = useState("hidden");
  const [visibleIn, setVisibleIn] = useState("visible");
  const [profile, setProfile] = useState("visible");
  const history = useHistory();
  const { itemCount } = useContext(CartContext);


  useEffect(() => {
    validateToken();
  }, []);

  const validateToken = () => {
    if (localStorage.getItem("h_tiov") !== null) {
      const AuthStr = 'bearer ' + localStorage.getItem("h_tiov");
      setVisibleMenu("visible");
      setVisibleIn("hidden");
      setProfile(localStorage.getItem("name"));
      axios.get(URL, { headers: { "Authorization": AuthStr, "Content-Type": "application/json" } })
        .then(response => {
          if (response.status !== 200) {
            localStorage.clear();
            history.push("/");
            setVisibleMenu("hidden");
            setVisibleIn("visible");
          }
        });
    }
  }

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const logOut = () => {
    axios.post(URL + "/logout", { session: localStorage.getItem("sessionid") }).then(res => {
      handleMenuClose();
      localStorage.clear();
      history.push("/");
      setVisibleMenu("hidden");
      setVisibleIn("visible");
    });
  };


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <NavLink to="/Perfil" style={{ textDecoration: 'none' }}>
        <MenuItem onClick={handleMenuClose}> {profile}</MenuItem>
      </NavLink>
      <MenuItem onClick={logOut}> Cerrar Sesión</MenuItem>
    </Menu >
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <NavLink to="/register" style={{ textDecoration: 'none' }}>
          <p>Registrarse</p>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <RiUserLine />
        </IconButton>
        <NavLink to="/register" style={{ textDecoration: 'none' }}>
          <p>Login</p>
        </NavLink>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow} xs={12}>
      <ElevationScroll {...props}>
        <AppBar position="fixed" color="transparent" style={{ paddingBottom: '17.5px', paddingTop: '17.5px', background: '#FFFFFF' }}>
          <Toolbar>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <img
                src={`/img/FULLIPS_COLOMBIA_JPG.jpg`}
                alt={`logo`}
                width="100"
                style={{ marginLeft: '1em' }}
              />
            </NavLink>
            <NavLink to="/Question" style={{ textDecoration: 'none' }}>
              <Typography variant="h6" className={[classes.title, classes.linkHeader].join(' ')} color="secondary" style={{ marginLeft: '10em' }}>
                PREGUNTAS FRECUENTES
              </Typography>
            </NavLink>
            <NavLink to="/Use" style={{ textDecoration: 'none' }}>
              <Typography variant="h6" className={[classes.title, classes.linkHeader].join(' ')} color="secondary" style={{ marginLeft: '3em' }}>
                USO
          </Typography>
            </NavLink>
            <Typography variant="h6" className={[classes.title, classes.linkHeader].join(' ')} color="secondary" style={{ marginLeft: '3em' }}>
              NOSOTROS
          </Typography>
            <NavLink to="/contact" style={{ textDecoration: 'none' }}>
              <Typography variant="h6" className={[classes.title, classes.linkHeader].join(' ')} color="secondary" style={{ marginLeft: '3em' }}>
                CONTACTO
              </Typography>
            </NavLink>
            <div className={classes.grow} />
            <NavLink to={{
              pathname: "/Ingresar",
              state: "menu"
            }} style={{ textDecoration: 'none', visibility: visibleIn }}>
              <Typography variant="h6" className={[classes.title, classes.linkHeader].join(' ')} color="secondary" style={{ marginRight: '6em' }}>
                INGRESAR/REGISTRARSE
          </Typography>
            </NavLink>
            <div className={classes.sectionDesktop}>
              <NavLink to="/checkout">
                <IconButton aria-label="show 4 new mails" color="inherit" color="secondary">
                  <Badge badgeContent={itemCount} color="error">
                    <AiOutlineShopping />
                  </Badge>
                </IconButton>
              </NavLink>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                style={{ color: '#545454', visibility: visibleMenu }}
              >
                <RiUserLine />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {renderMobileMenu}
      {renderMenu}
    </div >
  );
}
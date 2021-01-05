import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Box, Dialog, DialogTitle, DialogContent, InputLabel, Typography, IconButton } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import SessionToken from '../util/sessions';
import Header from '../components/shared/header';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import Enviroment from '../enviroment';
import Swal from "sweetalert2";
import CloseIcon from '@material-ui/icons/Close';
import SimpleAlert from '@material-ui/lab/Alert';

const URL = `${Enviroment.urlApi}/user`;
const URL_SETTINGS = `${Enviroment.urlApi}/settings`;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  inputtext: {
    padding: 14
  },
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1000,
    color: '#fff',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  container: {
    [theme.breakpoints.only('xs')]: {
      marginTop: '8rem',
      marginBottom: '16rem'
    },
    [theme.breakpoints.only('sm')]: {
      marginTop: '8rem',
      marginBottom: '16rem'
    },
    [theme.breakpoints.only('md')]: {
      marginTop: '8rem',
      marginBottom: '16rem'
    },
    [theme.breakpoints.only('lg')]: {
      marginTop: '8rem',
      marginBottom: '15rem'
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '12rem',
      marginBottom: '16.5rem'
    },
  }
}));

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      <Box p={3}>
        {children}
      </Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function SignIn(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [passwordRe, setPasswordRe] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [open2, setOpen2] = useState(false);
  const [message2, setMessage2] = useState("");
  const history = useHistory();
  const [value, setValue] = useState(0);
  const [openProgress, setOpenProgress] = useState(false);
  const [emailM, setEmailM] = useState("");
  const [visible, setVisible] = useState(false);
  const [isAuthConfirm, setIsAuthConfirm] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (localStorage.getItem("h_tiov") !== null) {
      history.push("/");
    }
    checkConfirmationEmail();
  }, []);

  const checkConfirmationEmail = () => {
    setOpenProgress(true);
    axios.get(`${URL_SETTINGS}`).then(res => {
      setOpenProgress(false);
      let activated = res.data.activated;
      if (activated == 1) {
        setIsAuthConfirm(true);
      } else {
        setIsAuthConfirm(false);
      }
    }, error => {
      console.log("Errosito " + error);
    });
  }

  const changeName = (e) => {
    const { value } = e.target;
    setName(value);
  }

  const changeLastname = (e) => {
    const { value } = e.target;
    setLastname(value);
  }

  const changePasswordRe = (e) => {
    const { value } = e.target;
    setPasswordRe(value);
  }

  const changeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  }

  const changePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  }

  const changeEmailM = (e) => {
    const { value } = e.target;
    setEmailM(value);
  }

  const sendEmail = (e) => {
    setOpenProgress(true);
    e.preventDefault();
    axios.post(URL + "/user", { email: emailM }).then(res => {
      setOpenProgress(false);
      setEmailM("");
      if (res.status === 200) {
        setVisible(false);
        openMessage2(res.data.message);
      }
      else {
        openMessage(res.data.message);
      }
    })
  }

  const openModal = () => {
    setVisible(true);
  }

  const CloseModal = () => {
    setVisible(false);
  }

  const findUser = (e) => {
    setOpenProgress(true);
    e.preventDefault();
    axios.post(URL, { email, password }).then(res => {
      setOpenProgress(false);
      if (res.status === 200) {
        if (res.data.rol === 1) {
          let manageToken = new SessionToken();
          manageToken.setToken(res.data.token)
          localStorage.setItem("h_tiov", res.data.token);
          localStorage.setItem("name", res.data.name.split(" ")[0]);
          localStorage.setItem("sessionid", res.data.session);
          localStorage.setItem("confirmed", res.data.confirmed);
          localStorage.setItem("customer_id", res.data.idCustomer);
          openMessage("Se ha enviado un mensaje de confirmación a tu correo electrónico.");
          validate();
        } else {
          openMessage("Credenciales Inválidas");
        }
      }
      else {
        openMessage(res.data.message);
      }
    })
  }

  const createUser = (e) => {
    e.preventDefault();
    if (password === passwordRe) {
      setOpenProgress(true);
      axios.post(URL + "/register", { email, password, name, lastname }).then(res => {
        setOpenProgress(false);
        if (res.status === 200) {
          Swal.fire({
            title: 'Confirma tu correo electrónico',
            icon: 'success',
            text: 'Hemos enviado un mensaje a tu correo para que confirmes tu cuenta.',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#FF0D00',
            allowOutsideClick: false
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.setItem("h_tiov", res.data.token);
              localStorage.setItem("name", res.data.name.split(" ")[0]);
              localStorage.setItem("sessionid", res.data.session);
              localStorage.setItem("confirmed", 0);
              localStorage.setItem("customer_id", res.data.id_customer);
              validate();
            }
          });

        }
        else {
          openMessage(res.data.message);
        }
      });
    } else {
      openMessage("Contraseñas Distintas");
    }

  }

  const openMessage = (message) => {
    setMessage(message);
    handleClick();
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const validate = () => {
    if (props.location.state === "checkout") {
      history.push("/sending");
    } else {
      history.push("/");
    }
  }

  const openMessage2 = (message) => {
    setMessage2(message);
    handleClick2();
  }

  const handleClick2 = () => {
    setOpen2(true);
  };

  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen2(false);
  };

  return (
    <Box>
      <Header />
      <Container component="main" maxWidth="sm" className={classes.container}>
        <Backdrop className={classes.backdrop} open={openProgress} >
          <CircularProgress color="inherit" variant="indeterminate" disableShrink style={{ width: 80, height: 80 }} />
        </Backdrop>
        {isAuthConfirm ?
          <SimpleAlert severity="info" size="small" style={{ marginBottom: '1em' }} onClose={() => { setIsAuthConfirm(false); }}>No olvides registrarte para hacer tu compra!</SimpleAlert>
          : ''}
        <Paper square elevation={5}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon label tabs example"
          >
            <Tab label="INGRESAR" />
            <Tab label="REGISTRARSE" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <form className={classes.form} onSubmit={findUser}>
              <TextField
                inputProps={{ className: classes.inputtext }}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="off"
                onChange={changeEmail}
              />
              <TextField
                inputProps={{ className: classes.inputtext }}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="off"
                onChange={changePassword}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Ingresar
          </Button>
              <Grid container>
                <Grid item xs>
                  <Link onClick={openModal} color="secondary" variant="body2" style={{ cursor: 'pointer' }}>
                    Olvidó su contraseña?
              </Link>
                </Grid>
              </Grid>
            </form>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <form className={classes.form} onSubmit={createUser}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={{ className: classes.inputtext }}
                    autoComplete="off"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="Nombre"
                    onChange={changeName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={{ className: classes.inputtext }}
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Apellido"
                    name="lastName"
                    autoComplete="off"
                    onChange={changeLastname}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    inputProps={{ className: classes.inputtext }}
                    variant="outlined"
                    required
                    fullWidth
                    id="email2"
                    type="email"
                    label="Correo Electrónico"
                    name="email2"
                    autoComplete="off"
                    onChange={changeEmail}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    inputProps={{ className: classes.inputtext }}
                    variant="outlined"
                    required
                    fullWidth
                    name="password2"
                    label="Contraseña"
                    type="password"
                    id="password2"
                    autoComplete="off"
                    onChange={changePassword}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    inputProps={{ className: classes.inputtext }}
                    variant="outlined"
                    required
                    fullWidth
                    name="password3"
                    label="Confirmar Contraseña"
                    type="password"
                    id="password3"
                    autoComplete="off"
                    onChange={changePasswordRe}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Registrarse
          </Button>
            </form>
          </TabPanel>
        </Paper>
        <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {message}
          </Alert>
        </Snackbar>
        <Snackbar open={open2} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={handleClose2}>
          <Alert onClose={handleClose2} severity="success">
            {message2}
          </Alert>
        </Snackbar>
      </Container >
      <Dialog aria-labelledby="customized-dialog-title" open={visible}>
        <DialogTitle id="customized-dialog-title">
          Olvidaste tu contraseña
          <IconButton aria-label="close" className={classes.closeButton} onClick={CloseModal}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Grid item xs={12} >
            <form onSubmit={sendEmail}>
              <Grid container spacing={2} >
                <Grid item xs={12} >
                  <InputLabel>
                    <Typography variant="body1" color="secondary" component="p">
                      Te enviaremos un email con un enlace para que puedas restablecer tu contraseña.
                    </Typography>
                  </InputLabel>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="emailM"
                    value={emailM}
                    type="email"
                    label="Correo Electrónico"
                    name="emailM"
                    autoComplete="off"
                    onChange={changeEmailM}
                    inputProps={{ className: classes.inputtext }}
                  />
                </Grid>
                <Grid item xs={12} >
                  <Button
                    type='submit'
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Enviar un email
                                        </Button>
                </Grid>
              </Grid>

            </form>
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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


const url = "http://localhost:3006/api/user";


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
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
  centered: { display: 'flex', justifyContent: 'center', alignItems: 'center', }
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

export default function SignIn() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [passwordRe, setPasswordRe] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const history = useHistory();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      history.push("/");
    }
  }, []);

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
    console.log(value);
    setPasswordRe(value);
  }

  const changeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  }

  const changePassword = (e) => {
    const { value } = e.target;
    console.log(value);
    setPassword(value);
  }

  const findUser = (e) => {
    e.preventDefault();
    axios.post(url, { email, password }).then(res => {
      if (res.status === 200) {
        if (res.data.rol === 1) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.name.split(" ")[0]);
          localStorage.setItem("sessionid", res.data.session);
          const event = new Event("click");
          document.dispatchEvent(event);
          history.push("/");
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
      axios.post(url + "/register", { email, password, name, lastname }).then(res => {
        if (res.status == 200) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.name.split(" ")[0]);
          localStorage.setItem("sessionid", res.data.session);
          // const event = new Event("click");
          // document.dispatchEvent(event);
          history.push("/");
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

  return (
    <Container component="main" maxWidth="sm" style={{ marginTop: '9rem', marginBottom: '9rem' }}>
      <Paper square elevation={5}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab label="INGRESAR" />
          <Tab label="REGISTRARSE" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <form className={classes.form} onSubmit={findUser}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="off"
              autoFocus
              onChange={changeEmail}
            />
            <TextField
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
              color="secondary"
              className={classes.submit}
            >
              Ingresar
          </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
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
                  autoComplete="off"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                  onChange={changeName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
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
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Correo Electrónico"
                  name="email"
                  autoComplete="off"
                  onChange={changeEmail}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="off"
                  onChange={changePassword}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password2"
                  label="Confirmar Contraseña"
                  type="password"
                  id="password2"
                  autoComplete="off"
                  onChange={changePasswordRe}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Registrarse
          </Button>
          </form>
        </TabPanel>
      </Paper>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {message}
        </Alert>
      </Snackbar>
    </Container >
  );
}
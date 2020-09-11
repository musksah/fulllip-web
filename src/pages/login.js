import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


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
}));

export default function SignIn() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const history = useHistory();

  React.useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      history.push("/");
    }
  });

  const changeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  }

  const changePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  }

  const findUser = (e) => {
    e.preventDefault();
    axios.post(url, { email, password }).then(res => {
      if (res.status == 200) {
        if (res.data.rol == 1) {
          localStorage.setItem("token", res.data.token);
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
    <Container component="main" maxWidth="xs" style={{ marginTop: '10rem', marginBottom: '8rem' }}>
      <Card>
        <CardContent>
          <CssBaseline />
          <div className={classes.paper}>
            <img
              src={`/img/logofulllips.png`}
              alt={`logo`}
              width="200"
              style={{ marginLeft: '1em', marginBottom: '2em' }}
            />
            <Typography component="h1" variant="h5">
              Iniciar Sesión
        </Typography>
            <form className={classes.form} onSubmit={findUser}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
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
                autoComplete="current-password"
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
                <Grid item>
                  <NavLink to="/register">
                    {"Registrarse"}
                  </NavLink>
                </Grid>
              </Grid>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error">
                {message}
              </Alert>
            </Snackbar>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Header from '../components/shared/header';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Container from '@material-ui/core/Container';
import { FaFacebookSquare } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    img_social: {
        width: '20%',
        marginLeft: '40%',
        marginRight: '40%',
    }
}));

function ModalContact() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box>
            <Header />
            <Container style={{ marginTop: '9em', marginBottom: '4em' }}>
                <Grid container>
                    <Grid item md={1} lg={1} xl={1}></Grid>
                    <Grid item md={5} lg={5} xl={5}>
                        Rejilla Instagram
                    </Grid>
                    <Grid item md={5} lg={5} xl={5}>
                        <Grid container>
                            <Grid item md={12} lg={12} xl={12}>
                                <Grid container>
                                    <Grid item md={2} lg={2} xl={2}>
                                    </Grid>
                                    <Grid item md={4} lg={4} xl={4}>
                                        <img src="img/icons/icon_facebook.png" className={classes.img_social} />
                                    </Grid>
                                    <Grid item md={4} lg={4} xl={4}>
                                        <img src="img/icons/icon_instagram.png" className={classes.img_social} />
                                    </Grid>
                                    <Grid item md={2} lg={2} xl={2}>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={12} lg={12} xl={12} style={{ marginTop: '3em' }}>
                                <a onClick={handleClickOpen} style={{ cursor: 'pointer' }}>CONTACTO</a>
                            </Grid>
                            <Grid item md={12} lg={12} xl={12}>
                                <form noValidate autoComplete="off">
                                    <Grid container spacing={2}>
                                        <Grid item xs={6} lg={6}>
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="name"
                                                label="Nombres"
                                                type="text"
                                                variant="outlined"
                                                autoComplete="off"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={6} lg={6}>
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="lastname"
                                                label="Apellidos"
                                                type="text"
                                                variant="outlined"
                                                autoComplete="off"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={6} lg={6}>
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="name"
                                                label="Asunto"
                                                type="text"
                                                variant="outlined"
                                                autoComplete="off"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={6} lg={6}>
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="name"
                                                label="Correo"
                                                type="email"
                                                variant="outlined"
                                                autoComplete="off"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} lg={12}>
                                            <TextField
                                                id="outlined-textarea"
                                                label="Mensaje"
                                                placeholder="Placeholder"
                                                multiline
                                                variant="outlined"
                                                rows={4}
                                                fullWidth
                                                autoComplete="off"
                                            />
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={1} lg={1} xl={1}></Grid>
                </Grid>
            </Container>
            {/* <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">¿Necesitas ayuda?</DialogTitle>
                <DialogContent>
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancelar
          </Button>
                    <Button onClick={handleClose} color="secondary">
                        Enviar
          </Button>
                </DialogActions>
            </Dialog> */}
        </Box>
    );
}

export default ModalContact;

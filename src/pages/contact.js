import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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
}));

function ModalContact() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <a onClick={handleClickOpen} style={{ cursor: 'pointer' }}>CONTACTO</a>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">¿Necesitas ayuda?</DialogTitle>
                <DialogContent>
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancelar
          </Button>
                    <Button onClick={handleClose} color="secondary">
                        Enviar
          </Button>
                </DialogActions>
            </Dialog>
        </div>
        // <>
        //     <a onClick={handleShow} style={{ cursor: 'pointer' }}>
        //         CONTACTO
        //     </a>

        //     <Modal show={show} onHide={handleClose}>
        //         <Modal.Header closeButton>
        //             <Modal.Title>Modal heading</Modal.Title>
        //         </Modal.Header>
        //         <Modal.Body>
        //             <form className={classes.root} noValidate autoComplete="off">

        //                 <TextField id="standard-basic" label="Standard" />
        //                 <TextField id="filled-basic" label="Filled" variant="filled" />
        //                 <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        //             </form>
        //         </Modal.Body>
        //         <Modal.Footer>
        //             <Button variant="secondary" onClick={handleClose}>
        //                 Close
        //     </Button>
        //             <Button variant="primary" onClick={handleClose}>
        //                 Save Changes
        //     </Button>
        //         </Modal.Footer>
        //     </Modal>
        // </>
    );
}

export default ModalContact;

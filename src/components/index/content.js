import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '3em',
        width: '100%',
        paddingBottom: '4em',
    }
}));

export default function ContentIndex() {
    const classes = useStyles();
    const [email, setEmail] = useState({});

    React.useEffect(() => {

    });

    return (
        <div className={classes.root}>
            <Box>
                <Box style={{ marginBottom: '3em', color: '#AE5353' }}>
                    <center>
                        <Typography variant="h6">DISTRIBUIDORES AUTORIZADOS</Typography>
                    </center>
                </Box>
                <Grid container style={{ marginBottom: '2em' }}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5}>
                        <center>
                            <img style={{ width: '60%' }} src="img/distribuidor autorizado.jpg"></img>
                        </center>
                    </Grid>
                    <Grid item xs={5}>
                        <h3 style={{ textAlign: 'center', color: '#AE5353' }}>Productos Garantizados</h3>
                        {/* <hr style={{ background: '#A20000', height: '0.2em', width: '40%' }} /> */}
                        <Typography variant="body2" component="p">
                            Nuestros fullips son comprados directamente de la página oficial de fullips de Estados Unidos, somos distribuidores autorizados en Colombia para la distribución y comercialización, puedes verificarlo con nuestro número de insignia  LA00569.
                        </Typography>
                        {/* <p style={{ marginTop: '1em', textAlign: 'justify', justifyContent: 'center', fontSize: '1em', color: '#4B4B4B' }}>nuestros fullips son comprados directamente de la página oficial de fullips de Estados Unidos, somos distribuidores autorizados en Colombia para la distribución y comercialización, puedes verificarlo con nuestro número de insignia  LA00569</p> */}
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                <Box style={{ marginBottom: '3em', color: '#AE5353' }}>
                    <center>
                        <Typography variant="h6">¿POR QUÉ USAR FULLIPS?</Typography>
                    </center>
                </Box>
                <Grid container style={{ marginBottom: '2em' }}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5}>
                        <h3 style={{ textAlign: 'center', color: '#AE5353' }}>Descripción</h3>
                        {/* <hr style={{ background: '#A20000', height: '0.2em', width: '40%' }} /> */}
                        <Typography variant="body2" component="p">
                            Con el tiempo nuestras facciones cambian, incluyendo la disminución del grosor de los labios. A partir de los 30 años comienzan a perder un milímetro de volumen por cada cinco años.Conforme envejece el cuerpo se produce menos colágeno haciendo que los labios tengan menos grosor.todos queremos envejecer con Gracia y pensamos como primera opción cirugías e inyecciones ¿Es esta la mejor opción? creemos en resaltar la belleza natural y buscamos alternativas no invasivas y accesibles para lograrlo. Por eso tenemos el accesorio ideal para aumentar el grosor  de los labios.
                        </Typography>
                        {/* <p style={{ marginTop: '1em', textAlign: 'justify', justifyContent: 'center', fontSize: '1em', color: '#4B4B4B' }}>Con el tiempo nuestras facciones cambian, incluyendo la disminución del grosor de los labios. A partir de los 30 años comienzan a perder un milímetro de volumen por cada cinco años.Conforme envejece el cuerpo se produce menos colágeno haciendo que los labios tengan menos grosor.todos queremos envejecer con Gracia y pensamos como primera opción cirugías e inyecciones ¿Es esta la mejor opción? creemos en resaltar la belleza natural y buscamos alternativas no invasivas y accesibles para lograrlo. Por eso tenemos el accesorio ideal para aumentar el grosor  de los labios.</p> */}
                    </Grid>
                    <Grid item xs={6}>
                        <center>
                            <img style={{ width: '50%' }} src="img/distribuidor autorizado.jpg"></img>
                        </center>
                    </Grid>
                    {/* <Grid item xs={1}></Grid> */}
                </Grid>
            </Box>
        </div>
    );
}
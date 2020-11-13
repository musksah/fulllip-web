import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '1.5em',
        width: '100%',
        paddingBottom: '4em',
    },
    span_bold: {
        fontWeight: 'bold'
    },
    paragraph: {
        textAlign: 'justify'
    },
}));

export default function ContentIndex() {
    const classes = useStyles();
    const [email, setEmail] = useState({});

    React.useEffect(() => {

    });

    return (
        <div className={classes.root}>
            <Box>
                <Grid container style={{ marginBottom: '2em' }}>
                    <Grid item xs={12} style={{ marginBottom: '3em' }}>
                        <center><img src="img/index/content/HOLA_LINDA_200PX.png" style={{ width: '160px', marginLeft: '30%', marginRight: '30%', marginTop: '3em' }} /></center>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        {/* <hr style={{ background: '#A20000', height: '0.2em', width: '40%' }} /> */}
                        <Typography variant="body1" component="p" className={classes.paragraph}>
                            Con el tiempo nuestras facciones cambian, incluyendo la disminución del grosor de los labios. <span className={classes.span_bold}>A partir de los 30 años comienzan a perder un milímetro de volumen por cada cinco años.</span>Conforme envejece el cuerpo se produce menos colágeno haciendo que los labios tengan menos grosor.todos queremos envejecer con Gracia y pensamos como primera opción cirugías e inyecciones,¿Es esta la mejor opción? creemos en resaltar la belleza natural y buscamos alternativas no invasivas y accesibles para lograrlo. Por eso tenemos el accesorio ideal para aumentar el grosor  de los labios.
                        </Typography>
                        {/* <p style={{ marginTop: '1em', textAlign: 'justify', justifyContent: 'center', fontSize: '1em', color: '#4B4B4B' }}>nuestros fullips son comprados directamente de la página oficial de fullips de Estados Unidos, somos distribuidores autorizados en Colombia para la distribución y comercialización, puedes verificarlo con nuestro número de insignia  LA00569</p> */}
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                <Grid container style={{ marginBottom: '2em' }}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Grid container>
                            <Grid item xs={12} lg={4}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <center><img src="img/index/content/ICONO1.png" style={{ width: '50%', marginLeft: '25%', marginRight: '25%' }} /></center>
                                    </Grid>
                                    <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <Typography variant="body1" component="p" className={classes.paragraph}>
                                                            volumen
                                                </Typography>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Typography variant="body1" component="p" className={classes.paragraph}>
                                                            instantáneo
                                                </Typography>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <center><img src="img/index/content/ICONO2.png" style={{ width: '50%', marginLeft: '25%', marginRight: '25%' }} /></center>
                                    </Grid>
                                    <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <Typography variant="body1" component="p" className={classes.paragraph}>
                                                            sin cirugpias
                                                </Typography>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Typography variant="body1" component="p" className={classes.paragraph}>
                                                            ni inyecciones
                                                </Typography>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <center><img src="img/index/content/ICONO3.png" style={{ width: '50%', marginLeft: '25%', marginRight: '25%' }} /></center>
                                    </Grid>
                                    <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <Typography variant="body1" component="p" className={classes.paragraph}>
                                                            Super
                                                </Typography>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Typography variant="body1" component="p" className={classes.paragraph}>
                                                            Accesibles
                                                </Typography>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                <Grid container style={{ marginBottom: '2em' }}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        {/* <hr style={{ background: '#A20000', height: '0.2em', width: '40%' }} /> */}
                        <Typography variant="body1" component="p" className={classes.paragraph}>
                            Fullips es un accesorio versátil y de uso personal, hoy miles de mujeres lo incluyen en su ritual de belleza, 👄 es Ideal para todas aquellas personas que les gusta lucir unos labios con mayor volumen y mas sexys y buscan siempre una forma de reinventarse.  <br /><br />
                        </Typography>
                        <Typography variant="body1" component="p" className={classes.paragraph}>
                            Recomendamos exfoliar los labios previamente con un cepillo, y poner un hidratante antes y después de la succión, deja que los labios se relajen en el potenciador. Deberás sentir un suave tirón. La cantidad de tiempo para dejar fullips variará para cada persona, pero <span className={classes.span_bold}> se recomienda comenzar en incrementos de 15-30 segundos.</span> Para más información dirigite a la sección de preguntas y respuestas frecuentes donde explicamos mejor los tamaños y la secuencia de uso.<br /><br />
                        </Typography>
                        <Typography variant="body1" component="p" className={classes.paragraph}>
                            Fullips potencia tu belleza de manera auténtica y natural,<span className={classes.span_bold}> Su efecto dura entre 2-4 horas, </span> después de este tiempo puedes repetir el proceso si así lo deseas, para exaltar tus labios en Photoshoots, eventos, o simplemente cuando quieres sacar el mejor provecho de tus labios.<br /><br />
                        </Typography>
                        <Typography variant="body1" component="p" className={classes.paragraph}>
                            Este producto <span className={classes.span_bold}> es hecho en Estados Unidos y cuenta con la patente N ° 8858472,</span> su uso es seguro y práctico si hace correctamente, por favor tener en cuenta las recomendaciones antes de usarlo.<br /><br />
                        </Typography>
                        <Typography variant="body1" component="p" className={classes.paragraph}>
                            Gracias por llegar hasta aquí
                        </Typography>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                <Grid container style={{ marginTop: '3em', marginBottom: '2em' }}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        {/* Se muestra en xs */}
                        <Hidden only={['sm', 'md', 'lg', 'xl']}>
                            <img src="img/index/content/FIRMA_FULLIPS_BANNER_MOBILE.png" style={{ width: '100%' }} />
                        </Hidden>
                        {/* Se muestra en sm */}
                        <Hidden only={['xs', 'lg', 'xl']}>
                            <img src="img/index/content/FIRMA_FULLIPS_BANNER_IPAD.png" style={{ width: '100%' }} />
                        </Hidden>
                        {/* Se muestra en md, lg, xl */}
                        <Hidden only={['xs', 'sm', 'md']}>
                            <img src="img/index/content/FIRMA_FULLIPS_BANNER_COMPUTADOR.png" style={{ width: '100%' }} />
                        </Hidden>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </Box>
        </div >
    );
}
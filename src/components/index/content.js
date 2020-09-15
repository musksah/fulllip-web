import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '3em',
        width: '100%',
        paddingBottom: '4em',
        // marginLeft: '10em',
        // marginRight: '10em',
        background: '#FFEAEA',
        marginBottom:'2em'
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
                <Grid container>
                    <Grid item sm={4}>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <h3 style={{ textAlign: 'center', color: '#AE5353' }}>¿Por qué Fullips?</h3>
                        <hr style={{ background: '#A20000', height: '0.2em', width: '40%' }} />
                    </Grid>
                    <Grid item sm={4}>
                    </Grid>

                    {/* <Grid item sm={3} lg={3}>
                    </Grid> */}
                    <Grid item sm={12} lg={12}>
                        <p style={{ marginTop: '1em', textAlign: 'center', justifyContent: 'center', marginLeft: '12em', marginRight: '12em', fontSize: '1.3em', color: '#4B4B4B' }}>Con el tiempo nuestras facciones cambian, incluyendo la disminución del grosor de los labios. A partir de los 30 años comienzan a perder un milímetro de volumen por cada cinco años.Conforme envejece el cuerpo se produce menos colágeno haciendo que los labios tengan menos grosor.todos queremos envejecer con Gracia y pensamos como primera opción cirugías e inyecciones ¿Es esta la mejor opción? creemos en resaltar la belleza natural y buscamos alternativas no invasivas y accesibles para lograrlo. Por eso tenemos el accesorio ideal para aumentar el grosor  de los labios.</p>
                    </Grid>
                    {/* <Grid item sm={3} lg={3}>
                    </Grid> */}
                </Grid>
            </Box>
        </div>
    );
}
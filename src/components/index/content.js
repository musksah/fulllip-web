import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '3em',
        width: '100%',
        paddingBottom: '4em',
        // marginLeft: '10em',
        // marginRight: '10em',
        background: '#FFEAEA'
    }
}));

export default function ContentIndex() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h3 style={{ textAlign: 'center', color: '#353535' }}>A TENER EN CUENTA</h3>
            <p style={{ textAlign: 'center', marginLeft: '12em', marginRight: '12em', fontSize: '0.9em', color: '#4B4B4B' }}>Con el tiempo nuestras facciones cambian, incluyendo la disminución del grosor de los labios. A partir de los 30 años comienzan a perder un milímetro de volumen por cada cinco años.Conforme envejece el cuerpo se produce menos colágeno haciendo que los labios tengan menos grosor.todos queremos envejecer con Gracia y pensamos como primera opción cirugías e inyecciones,¿Es esta la mejor opción? creemos en resaltar la belleza natural y buscamos alternativas no invasivas y accesibles para lograrlo. Por eso tenemos el accesorio ideal para aumentar el grosor  de los labios.</p>
        </div>
    );
}
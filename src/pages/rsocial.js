import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Header from '../components/shared/header';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import Enviroment from '../enviroment';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import axios from 'axios';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Interweave from 'interweave';
import ReactPlayer from "react-player";
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';


const URL = `${Enviroment.urlApi}/advice`;
const URL2 = `${Enviroment.urlApi}/video`;

const useStyles = makeStyles((theme) => ({
    centered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2em',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }, title: {
        color: '#8A0000',
    }
}));

export default function RSosial() {
    const classes = useStyles();
    const [openProgress, setOpenProgress] = useState(false);
    const [use, setUse] = useState([]);
    const [video, setVideo] = useState([]);

    return (
        <Box>
            <Header />
            <Container style={{ marginTop: '9rem', marginBottom: '9rem' }}>
                <Grid container>
                    <Grid className={classes.centered} item xs={12}>
                        <Typography variant="h6" color="primary" style={{ fontSize: '0.9em', marginBottom: '2em' }}>RAZON SOCIAL</Typography>
                    </Grid>
                    <Grid item xs={1}></Grid>

                    <Grid item xs={10}>
                        <Typography varian="body2">La educación es el legado que dejamos en el presente, para construir el futuro de los niños, niñas y adolescentes del mundo. Somos una conexión entre los hogares colombianos dispuestos a ayudar y los niños que necesitan un auxilio en su educación, tener una educación de calidad va más allá del acceso a ella, influye todo lo que rodea la experiencia de ir a clase.</Typography><br />
                        <Typography varian="body2">Muchas familias no tienen la capacidad adquisitiva para comprar los útiles escolares, ropa y uniformes, para que los que niños reciban una educación completa, recibimos donaciones de ropa para niños entre 10 y 18 años, útiles escolares (cuadernos,reglas,marcadores….), juguetes, implementos de deporte (balones,raquetas,conos) o cualquier aporte monetario. Las donaciones serán destinadas para los niños y adolescentes del Colegio Manuel Humberto Cárdenas Vélez en el Municipio de Fusagasugá.</Typography><br />
                        <Typography varian="body2"><strong> Las pequeñas acciones si hacen la diferencia,</strong> si estás cambiando de armario, la ropa ya no le queda a tus hijos, o simplemente la dejaste de usar estaremos felices de darle una segunda oportunidad, igualmente con los juguetes, implementos deportivos y útiles escolares que estén en buen estado. Pueden enviarse a la dirección Calle 26 # 8 - 30 Norte, casa A 14 Conjunto Aranjuez, Fusagasugá Cundinamarca. a nombre de Fullips Colombia, y para la donaciones al siguiente número de cuenta 91213123322 ahorros, Bancolombia. </Typography>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </Container>
        </Box >
    );
}
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import Enviroment from '../enviroment';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const URL = `${Enviroment.urlApi}/img-carrousell`;

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
}));

export default function Carrousel() {
    const classes = useStyles();
    const [listImages, setListImages] = useState([]);
    const [openProgress, setOpenProgress] = React.useState(true);

    useEffect(() => {
        getImages();
    }, []);

    const getImages = () => {
        axios.get(URL).then(
            res => {
                console.log(res);
                setListImages(res.data);
                setOpenProgress(false);
            },
            err => {
                setOpenProgress(false);
                console.log(err);
            }
        )
    }

    return (
        <Box>
            <Backdrop className={classes.backdrop} open={openProgress}>
                <CircularProgress color="inherit" variant="indeterminate" disableShrink style={{ width: 80, height: 80 }} />
            </Backdrop>
            <Carousel style={{ height: '500px', overflow: 'hidden' }}>
                {listImages.map(img => (
                    <Carousel.Item key={img.id_image_carrousel}>
                        <img
                            className="d-block w-100"
                            src={img.url}
                            alt={img.name}
                        />
                        <Carousel.Caption>
                            <h3>{img.title}</h3>
                            <p>{img.subtitle}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Box>
    );
}

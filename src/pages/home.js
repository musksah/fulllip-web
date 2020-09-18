import React from 'react';
import CarrouselBs from '../components/carrousel-bs';
import Carrousel from '../components/carrousel';
import NestedGrid from '../components/gridcardaction';
import Container from '@material-ui/core/Container';
import Content from '../components/index/content';
import Box from '@material-ui/core/Box';
import Header from '../components/shared/header';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#FFEAEA',
    },
    container_card:{
        background:'#FFFFFF',
        marginBottom:'3em'
    }
}));

function Home() {
    const classes = useStyles();
    return (
        <Box>
            <Header />
            <Box>
                <Carrousel />
                <Container maxWidth="lg" className={classes.container_card}>
                    <NestedGrid />
                </Container>
                <Container maxWidth="lg" className={classes.root}>
                    <Content />
                </Container>
            </Box>
        </Box>
    );
}

export default Home;
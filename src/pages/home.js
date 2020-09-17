import React from 'react';
import Carrousel from '../components/carrousel';
import CarrouselBs from '../components/carrousel-bs';
import NestedGrid from '../components/gridcardaction';
import Container from '@material-ui/core/Container';
import Content from '../components/index/content';
import Box from '@material-ui/core/Box';
import Header from '../components/shared/header';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#FFEAEA',
    }
}));

function Home() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Header />
            <Box style={{ marginTop: '6rem' }}>
                <CarrouselBs />
                <Container maxWidth="lg">
                    <NestedGrid />
                    <Content />
                </Container>
            </Box>
        </Box>
    );
}

export default Home;
import React from 'react';
import Carrousel from '../components/carrousel';
import CarrouselBs from '../components/carrousel-bs';
import NestedGrid from '../components/gridcardaction';
import Container from '@material-ui/core/Container';
import Content from '../components/index/content';
import Box from '@material-ui/core/Box';
import Header from '../components/shared/header';

function Home() {
    return (
        <Box>
        <Header />
        <Box style={{ marginTop: '6rem' }}>
            <CarrouselBs/>
            <Container maxWidth="lg">
                <NestedGrid />
                <Content />
            </Container>
        </Box>
        </Box>
    );
}

export default Home;
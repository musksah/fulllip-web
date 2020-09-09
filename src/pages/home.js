import React from 'react';
import Carrousel from '../components/carrousel';
import NestedGrid from '../components/gridcardaction';
import Container from '@material-ui/core/Container';
import Content from '../components/index/content';
import Box from '@material-ui/core/Box';

function Home() {
    return (
        <Box>
            <Carrousel />
            <Container maxWidth="lg" style={{ marginTop: '6rem' }}>
                <NestedGrid />
                <Content />
            </Container>
        </Box>
    );
}

export default Home;
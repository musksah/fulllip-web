import React from 'react';
import Carrousel from '../components/carrousel';
import NestedGrid from '../components/gridcardaction';
import Container from '@material-ui/core/Container';
import Content from '../components/index/content';
import Box from '@material-ui/core/Box';
import Header from '../components/shared/header';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        // [theme.breakpoints.down('lg')]: {
        //     background: '#FFF2F2',
        // },
        // [theme.breakpoints.up('xl')]: {
        //     background: '#FFFFFF',
        // },
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
                <Container maxWidth="xl" className={classes.container_card}>
                    <NestedGrid />
                </Container>
                <Container maxWidth="xl" className={classes.root}>
                    <Content />
                </Container>
            </Box>
        </Box>
    );
}

export default Home;
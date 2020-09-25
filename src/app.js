import React from 'react';
import Login from './pages/login';
import Home from './pages/home';
import Profile from './pages/profile';
import Header from './components/shared/header';
import Footer from './components/shared/footer';
import Product from './pages/productdetail';
import Question from './pages/questionAnswer';
import Checkout from './pages/checkout';
import Payment from './pages/payment';
import Use from './pages/use';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Box from '@material-ui/core/Box';
import ScrollToTop from './util/scrolltop';
import 'typeface-rubik';
import 'typeface-roboto';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#FF0D00",
        },
        secondary: {
            main: "#2B2B2B",
        }
    },
    typography: {
        h1: {
            fontFamily: 'Rubik',
            fontWeight: '500',
            color: '#FF0D00'
        },
        h2: {
            fontFamily: 'Rubik',
            fontWeight: '500',
            color: '#FF0D00'
        },
        h3: {
            fontFamily: 'Rubik',
            color: '#FF0D00'
        },
        h4: {
            fontFamily: 'Rubik',
            fontWeight: '500',
            color: '#FF0D00'
        },
        h5: {
            fontFamily: 'Rubik',
            fontWeight: '500',
            color: '#FF0D00'
        },
        h6: {
            fontFamily: 'Rubik',
            fontWeight: '500',
            color: '#FF0D00'
        },
        body1: {
            color: '#2B2B2B',
            fontFamily: 'Roboto'

        },
        body2: {
            color: '#2B2B2B',
            fontFamily: 'Roboto'
        }
    }
});

theme.typography.h6 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '2rem',
    },
};

function App() {
    return (
        <Box>
            <ThemeProvider theme={theme}>
                <Router>
                    <ScrollToTop />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/Ingresar" exact component={Login} />
                        <Route path="/Perfil" exact component={Profile} />
                        <Route path="/profile" exact component={Profile} />
                        <Route path="/product/:id" exact component={Product} />
                        <Route path="/Question" exact component={Question} />
                        <Route path="/Use" exact component={Use} />
                        <Route path="/checkout" exact component={Checkout} />
                        <Route path="/payment" exact component={Payment} />
                    </Switch>
                </Router>
                <Footer />
            </ThemeProvider>
        </Box>
    );
}

export default App;
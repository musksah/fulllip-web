import React from 'react';
import Login from './pages/login';
import Home from './pages/home';
import Profile from './pages/profile';
import Header from './components/shared/header';
import Footer from './components/shared/footer';
import Product from './pages/productdetail';
import Question from './pages/questionAnswer';
import Use from './pages/use';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Box from '@material-ui/core/Box';

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
        // h1: {
        //     fontFamily: 'Anderson'
        // },
        //     h2: {
        //         fontFamily: 'Rubik'
        //     },
        //     h3: {
        //         fontFamily: 'Rubik'
        //     },
        // h4: {
        //     fontFamily: 'Rubik'
        // },
        //     h5: {
        //         fontFamily: 'Rubik'
        //     },
        //     h6: {
        //         fontFamily: 'Rubik'
        //     }

    }
});

function App() {
    return (
        <Box>
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/Ingresar" exact component={Login} />
                        <Route path="/Perfil" exact component={Profile} />
                        <Route path="/profile" exact component={Profile} />
                        <Route path="/product/:id" exact component={Product} />
                        <Route path="/Question" exact component={Question} />
                        <Route path="/Use" exact component={Use} />
                    </Switch>
                </Router>
                <Footer />
            </ThemeProvider>
        </Box>
    );
}

export default App;
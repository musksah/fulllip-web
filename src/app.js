import React from 'react';
import Login from './pages/login';
import Home from './pages/home';
import Profile from './pages/profile';
import Header from './components/shared/header';
import Footer from './components/shared/footer';
import Product from './pages/productdetail';
import Question from './pages/questionAnswer';
import Use from './pages/use';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Box from '@material-ui/core/Box';

function App() {
    return (
        <Box>
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
        </Box>
    );
}

export default App;
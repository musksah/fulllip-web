import React from 'react';
import Login from './pages/login';
import Home from './pages/home';
import Perfil from './pages/perfil';
import Header from './components/shared/header';
import Footer from './components/shared/footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Box from '@material-ui/core/Box';
import ModalContact from './pages/contact';

function App() {
    return (
        <Box>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Ingresar" exact component={Login} />
                    <Route path="/Perfil" exact component={Perfil} />
                </Switch>
            </Router>
            <Footer />
        </Box>
    );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/shared/header';
import * as serviceWorker from './serviceWorker';
import Footer from './components/shared/footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}>
            <Register />
          </Route>
        </Switch>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

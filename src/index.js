import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PrimarySearchAppBar from './components/header';
import Carrousel from './components/carrousel';
import NestedGrid from './components/gridcardaction'
import * as serviceWorker from './serviceWorker';
import Container from '@material-ui/core/Container';
import Footer from './components/footer'


ReactDOM.render(
  <React.StrictMode>
    <PrimarySearchAppBar />
    <Container maxWidth="lg" style={{ marginTop: '6rem' }}>
      <Carrousel />
      <NestedGrid />
    </Container>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

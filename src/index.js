import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppMui from './AppMui';
import PrimarySearchAppBar from './components/header';
import TextMobileStepper from './components/carrousel';
import * as serviceWorker from './serviceWorker';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

ReactDOM.render(
  <React.StrictMode>
    <PrimarySearchAppBar />
    <Container maxWidth="lg" style={{marginTop:'1rem'}}>
      <TextMobileStepper />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

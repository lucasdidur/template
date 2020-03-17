import React from 'react';
import {ThemeProvider} from '@material-ui/core';
import {Router} from 'react-router-dom';
import Routes from './Routes';
import theme from './theme';
import {createBrowserHistory} from "history";
import './assets/scss/index.scss';

const browserHistory = createBrowserHistory();

export default function App() {
  return (
      <ThemeProvider theme={theme}>
          <Router history={browserHistory}>
              <Routes />
          </Router>
      </ThemeProvider>
  );
}

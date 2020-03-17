import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {ThemeProvider} from '@material-ui/core';
import {Router} from 'react-router-dom';
import Routes from './Routes';
import theme from './theme';
import {createBrowserHistory} from "history";

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

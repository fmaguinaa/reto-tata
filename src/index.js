import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import rootStore from './stores/root-store';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './app/App';
import theme from './theme';

import './assets/stylesheets/main.scss';

ReactDOM.render(
    <Provider store={rootStore}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <App />
          </ThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root'),
);

import React, { Component } from 'react'
import {BrowserRouter, Switch} from 'react-router-dom'

import { createBrowserHistory } from 'history'
import Root from '../root/Root'
import {SnackbarProvider} from "notistack";

const { createHistory } = createBrowserHistory

export const history = createHistory

export default class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <SnackbarProvider maxSnack={3}>
                    <Root history={history} />
                </SnackbarProvider>
            </BrowserRouter>
        )
    }
}

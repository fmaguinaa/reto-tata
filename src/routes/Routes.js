import React, { Component } from 'react'
import * as paths from './paths'
import { Route, Switch } from 'react-router-dom'

import { LandingPage, RegisterPage } from './loader'

import { NotFound404 } from '../components/utils'

export default class Routes extends Component {
    render() {
        const {history, getNotistack } = this.props;
        return (
            <Switch>
                <Route exact path={paths.landing} render={() => <LandingPage history={history} getNotistack={getNotistack} />} />
                <Route exact path={paths.register} render={() => <RegisterPage history={history} getNotistack={getNotistack}/>} />
                <Route render={() => <NotFound404 />} />
            </Switch>
        )
    }
}
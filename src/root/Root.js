import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { SnackbarProvider, withSnackbar } from "notistack";
import Routes from '../routes/Routes'
import * as paths from '../routes/paths'
import Layout from '../pages/layout/Layout'
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const mapStateToProps = (state, props) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
    };
}

class Root extends Component {
    getNotistack = (message, variant = "default", duration = 6000) => {
        let select = "default";
        switch (variant) {
            case "error":
                select = variant;
                break;
            case "success":
                select = variant;
                break;
            case "warning":
                select = variant;
                break;
            case "info":
                select = variant;
                break;
            default:
                select = variant;
                break;
        }
        this.props.enqueueSnackbar(message, {
            variant: select,
            autoHideDuration: duration,
            action: (
                <IconButton>
                    <CloseIcon size="small" className="text-white" color="inherit" />
                </IconButton>
            ),
        });
    }

    render () {
        const { history } = this.props
        return (
            <>
                <Switch>
                        <Layout>
                            <Routes history={history} getNotistack={this.getNotistack}/>
                        </Layout>
                </Switch>
            </>
        )
    }
}

export default withRouter(withSnackbar(connect(mapStateToProps, mapDispatchToProps)(Root)))
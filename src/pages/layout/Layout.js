import React, { Component } from 'react'
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {withSnackbar} from "notistack";
// import {Link, withRouter} from 'react-router-dom'

// import * as paths from '../routes/paths'

class Layout extends Component {
    render () {
        return (
            <div className='layout'>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;

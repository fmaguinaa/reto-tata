import React, { Component } from 'react'
import {Container, TextField, Grid, Typography, InputAdornment, Button} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from "@material-ui/core/Tooltip";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Bounce, Fade, Zoom} from "react-reveal";
import SendIcon from "@material-ui/icons/Send";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import {landing} from "../../routes/paths";

import Step0 from './components/steps/Step0';
import Step1 from './components/steps/Step1';
import FinalStep from './components/steps/FinalStep';
import {bindActionCreators} from "redux";
import {getUser} from "../../actions/api/api";
import {connect} from "react-redux";
import Redirect from "react-router-dom";
import * as Moment from 'moment';

const moment = extendMoment(Moment);

const mapStateToProps = (state, props) => {
    return {
        api: state.apiReducer,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    const actions = {
    };
    return actions;
};


class Register extends Component{

    state = {
        step: 0,
        client:{
            documentType: '',
            documentTypeId: '',
            documentNumber: '',
            firstName: '',
            lastName1: '',
            lastName2: '',
            birthday: '',
            mobilePhone: '',
            gender: '',
        },
        options:{
            insure: '',
            planId: '',
            checkDataProtected: false,
            checkCommercialOffer: false,
        }
    }

    componentDidMount() {
        if(this.props.api.getUserApi) {
            const {data} = this.props.api.getUserApi;
            if(data){
                this.setState({
                    client:{
                        documentType: 'DNI',
                        documentTypeId: '1',
                        documentNumber: data.id ? data.id.value : '' ,
                        firstName: data.name ? data.name.first : '',
                        lastName1: data.name ? data.name.last : '',
                        lastName2: '',
                        birthday: data.dob ? moment(data.dob.date).format('MM/dd/yyyy') : '',
                        mobilePhone: data.cell ? data.cell: '',
                        gender: data.gender ? data.gender === "male" ? 1 : 0 : -1,
                    },
                    options:{
                        insure: '',
                        planId: '',
                        checkDataProtected: false,
                        checkCommercialOffer: false,
                    }
                })
            } else {
                this.props.getNotistack(`Error en la Consulta`, "error");
            }
        }
    }

    handleChangeTextField = (name) => e => {
        let {value} = e.target
        this.setState({
            client:{
                ...this.state.client,
                [name] : value
            }
        })
    }

    handleChangeSelect = (name) => e => {
        const { value } = e.target;
        const { innerText } = e.currentTarget;
        const nameId = `${name}Id`;
        this.setState({
            client:{
                ...this.state.client,
                [nameId] : value,
                [name] : innerText
            }
        })
    }

    handleChangeCheckbox = (name) => e => {
        const { checked } = e.target;
        this.setState({
            options:{
                ...this.state.options,
                [name] : checked
            }
        })
    }

    handleChangeRadioButton = (object,name) => (e, value) => {
    this.setState({
          [object]:{
              ...this.state[object],
              [name] : value
          }
      })
}

    handleSubmit = e => {
        e.preventDefault();
    }

    handleNext = () => {
        this.setState({step: this.state.step+1});
    }


    getFormStep = (step) => {
        switch(this.state.step){
            case 0:
                return (
                    <div>
                        <Step0
                            client={this.state.client}
                            options={this.state.options}
                            handleChangeTextField={this.handleChangeTextField}
                            handleChangeSelect={this.handleChangeSelect}
                            handleChangeCheckbox={this.handleChangeCheckbox}
                            handleChangeRadioButton={this.handleChangeRadioButton}
                            handleNext={this.handleNext}
                        />
                    </div>
                )
            case 1:
                return <div><Step1/></div>
            case 2:
                return <div><FinalStep/></div>
        }
    }

    render(){
        let {client, options} = this.state;
        return (
            <div className={'register'}>
                <Grid container className="mb-2 border border-light-gray rounded">
                    <Grid item md={4} className="bg-lightgray p-1">
                    </Grid>
                    <Grid item xs={12} md={8} className="bg-lightgray p-1">
                        {this.getFormStep(this.state.step)}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

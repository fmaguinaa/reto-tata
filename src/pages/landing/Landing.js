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

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import apiReducer from "../../reducers/api/api-reducer";

import { getUser } from "../../actions/api/api";

import {register} from "../../routes/paths";
import SecurityIcon from '@material-ui/icons/Security';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MoneyIcon from '@material-ui/icons/Money';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
const mapStateToProps = (state, props) => {
    return {
        api: state.apiReducer,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    const actions = {
        getUser: bindActionCreators(getUser, dispatch),
    };
    return actions;
};

class Landing extends Component{

    state = {
        client:{
            documentType: 'DNI',
            documentTypeId: '1',
            documentNumber: '',
            birthday: '',
            mobilePhone: '',
        },
        options:{
            checkDataProtected: false,
            checkCommercialOffer: false,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevProps.api !== this.props.api){
            if(prevProps.api.getUserApi !== this.props.api.getUserApi) {
                const {loading, response, success, error} = this.props.api.getUserApi;
                if (!loading && response && success) {
                    let {data} = this.props.api;
                    this.props.getNotistack(`Respuesta API: Consulta Correcta`, "success");
                    this.props.history.push(register);
                } else if (!loading && response && !success) {
                    this.props.getNotistack(`Respuesta API: ${error}`, "error");
                } else if (!loading && !response && !success) {
                    this.props.getNotistack(`Respuesta API: ${error}`, "error");
                }
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

    handleSubmit = e => {
        e.preventDefault();
        this.props.getUser();
    }

    render(){
        let {client, options} = this.state;
        return (
            <div className="landing">
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <div className={'base'}>
                            <div className="base-information">
                                <div className={'heading-primary heading-primary--main'}>
                                    Seguro de <br/><b>Salud</b>
                                </div>
                                <div className={'heading-primary heading-primary--sub'}>
                                    <SecurityIcon/> C&oacute;mpralo de manera f&aacute;cil y r&aacute;pida
                                </div>
                                <div className={'heading-primary heading-primary--sub'}>
                                    <PhoneIphoneIcon/> Cotiza y compra tu seguro 100&#37; digital
                                </div>
                                <div className={'heading-primary heading-primary--sub'}>
                                    <MoneyIcon/> Hasta S/. 12 millones de cobertura anual
                                </div>
                                <div className={'heading-primary heading-primary--sub'}>
                                    <LocalHospitalIcon/> M&aacute;s de 300 cl&iacute;nicas en todo el Per&uacute;
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={'form'}>

                        <div className={'heading-primary heading-primary--title'}>
                            Obt&eacute;n tu <span>seguro ahora</span>
                        </div>
                        <div className={'heading-primary heading-primary--title--sub'}>
                            Ingresa tus datos para comenzar
                        </div>
                        <form
                            method="post"
                            className="w-100"
                            onSubmit={this.handleSubmit}
                            autoComplete="off"
                        >
                            {/* Form - CreditCard */}
                            <Grid container>
                                <Grid item xs={4}>
                                    <FormControl
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth={true}
                                    >
                                        <InputLabel id="documentType">
                                            Tipo Documento
                                        </InputLabel>
                                        <Select
                                            label={'Tipo Documento'}
                                            labelId="documentType"
                                            value={client.documentTypeId}
                                            onChange={this.handleChangeSelect('documentType')}
                                        >
                                            <MenuItem value={"1"}>DNI</MenuItem>
                                            <MenuItem value={"2"}>CE</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                {/* Document Number */}
                                <Grid item xs={8}>
                                    <TextField
                                        fullWidth={true}
                                        required
                                        autoFocus
                                        label="Nro. de Documento"
                                        type="text"
                                        margin="normal"
                                        value={client.documentNumber}
                                        variant="outlined"
                                        name="documentNumber"
                                        onChange={this.handleChangeTextField('documentNumber')}
                                        //onKeyPress={this.handleKeyPressTextFieldOnlyText(
                                        //    "documentType"
                                        //)}
                                    />
                                </Grid>
                                {/* Birthday */}
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="birthday"
                                        label="Fecha Nacimiento"
                                        type="date"
                                        margin="normal"
                                        required
                                        format="MM/dd/yyyy"
                                        value={client.birthday}
                                        onChange={this.handleChangeTextField('birthday')}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                {/* Mobile Phone */}
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        required
                                        label="Celular"
                                        type="text"
                                        margin="normal"
                                        value={client.mobilePhone}
                                        variant="outlined"
                                        name="mobilePhone"
                                        onChange={this.handleChangeTextField('mobilePhone')}

                                        //onChange={this.handleChangeTextFieldClient}
                                        //onKeyPress={this.handleKeyPressTextFieldOnlyText(
                                        //    "documentType"
                                        //)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                required
                                                checked={options.checkDataProtected}
                                                name="checkDataProtected"
                                                onChange={this.handleChangeCheckbox('checkDataProtected')}
                                        />}
                                        label={(<span>Acepto la <a href="#">Política de Protección de Datos Personales y los Términos y Condiciones</a></span>)}
                                    />
                                </Grid>
                                <Grid item xs={12} style={{marginBottom: '5rem'}}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                required
                                                checked={options.checkCommercialOffer}
                                                name="checkDataProtected"
                                                onChange={this.handleChangeCheckbox('checkCommercialOffer')}
                                            />
                                        }
                                        label={(<span>Acepto la <a href="#">Política de Envío de Comunicaciones Comerciales</a></span>)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Tooltip
                                        TransitionComponent={Zoom}
                                        title="Continuar con la validación del cliente"
                                    >
                                        <div>
                                            <Bounce>
                                                <div className={'wrapper'}>
                                                    <Button
                                                        variant="contained"
                                                        type="submit"
                                                        color="primary"
                                                        size="small"
                                                        fullWidth={true}
                                                        className={"btn"}
                                                        disabled={this.props.api.getUserApi.loading}
                                                    >
                                                        Continuar
                                                        <SendIcon fontSize="small" className="ml-2" />
                                                    </Button>
                                                    {this.props.api.getUserApi.loading && (
                                                        <CircularProgress
                                                            size={24}
                                                            className={"btn--progress"}
                                                        />
                                                    )}
                                                </div>
                                            </Bounce>
                                        </div>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </form>
                        </div>

                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing);

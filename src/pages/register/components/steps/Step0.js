import React, { Component } from 'react'

import {Button, Grid, TextField, Typography} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import {Bounce, Zoom} from "react-reveal";
import SendIcon from "@material-ui/icons/Send";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

export default class Step0 extends Component{

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleNext();
    }

    render(){
        const {client, options} = this.props
        return(
            <div>
                <Typography variant="h4" component="h1" gutterBottom className={'heading-primary color-black'}>
                    Paso 1 de 7
                </Typography>
                <Typography variant="h4" component="h1" gutterBottom className={'heading-primary color-black'}>
                    Hola, Pepito
                </Typography>
                <Typography variant="h4" component="h1" gutterBottom className={'heading-primary color-black'}>
                    Valida que los datos sean correctos.
                </Typography>
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
                                    autoFocus
                                    label={'Tipo Documento'}
                                    labelId="documentType"
                                    value={client.documentTypeId}
                                    onChange={this.props.handleChangeSelect}
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
                                label="Nro. de Documento"
                                type="text"
                                margin="normal"
                                value={client.documentNumber}
                                variant="outlined"
                                name="documentNumber"
                                onChange={this.props.handleChangeTextField('documentNumber')}
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
                                onChange={this.props.handleChangeTextField('birthday')}
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
                                color="default"
                                value={client.mobilePhone}
                                variant="outlined"
                                name="mobilePhone"
                                onChange={this.props.handleChangeTextField('mobilePhone')}

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
                                        onChange={this.props.handleChangeCheckbox('checkDataProtected')}
                                    />}
                                label={'Acepto la Política de Protección de Datos Personales y los Términos y Condiciones'}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        required
                                        checked={options.checkComercialOffer}
                                        name="checkDataProtected"
                                        onChange={this.props.handleChangeCheckbox('checkComercialOffer')}
                                    />
                                }
                                label={'Acepto la Política de Envío de Comunicaciones Comerciales'}
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <FormControl
                            required
                            margin="normal"
                            fullWidth={true}
                            component="fieldset">
                            <FormLabel
                                component="legend">
                                ¿Desea habilitar la opción de consumos en el extranjero?
                            </FormLabel>
                            <RadioGroup
                                row
                                className="d-flex justify-content-between justify-content-md-start"
                                aria-label="gender"
                                name="gender"
                                onChange={this.props.handleChangeRadioButton("client","gender")}
                                value={client.gender}>
                                <FormControlLabel
                                    value={"1"}
                                    control={<Radio className="d-flex" />}
                                    label="Si" />

                                <FormControlLabel
                                    value={"0"}
                                    control={<Radio className="d-flex" />}
                                    label="No"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                        <Grid item xs={12}>
                            <FormControl
                                required
                                margin="normal"
                                fullWidth={true}
                                component="fieldset">
                                <FormLabel
                                    component="legend">
                                    ¿Desea habilitar la opción de consumos en el extranjero?
                                </FormLabel>
                                <RadioGroup
                                    row
                                    className="d-flex justify-content-between justify-content-md-start"
                                    aria-label="gender"
                                    name="gender"
                                    onChange={this.props.handleChangeRadioButton("options","insure")}
                                    value={options.insure}>
                                    <FormControlLabel
                                        value={"1"}
                                        control={<Radio className="d-flex" />}
                                        label="Si" />

                                    <FormControlLabel
                                        value={"0"}
                                        control={<Radio className="d-flex" />}
                                        label="No"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Tooltip
                                TransitionComponent={Zoom}
                                title="Continuar con el proceso de originación."
                            >
                                <div>
                                    <Bounce>
                                        <div>
                                            <Button
                                                variant="contained"
                                                type="submit"
                                                size="small"
                                                fullWidth={true}
                                            >
                                                Continuar
                                                <SendIcon fontSize="small" className="ml-2" />
                                            </Button>
                                            {true && (
                                                <CircularProgress
                                                    size={24}
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
        )
    }
}
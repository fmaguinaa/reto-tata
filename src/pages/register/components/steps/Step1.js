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

import Plan from "./Plan"
import Benefits from "./Benefits";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from "@material-ui/core/AccordionDetails";

const plans = [{title: 'Básico', price: 160}, {title: 'Básico', price: 160}, {title: 'Básico', price: 160}, {title: 'Básico', price: 160}];

export default class Step1 extends Component{

    state ={
        planSelected: -1
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleNext();
    }

    handlePlanSelected = planId => {
        console.log(planId)
        this.setState({planSelected: planId})
    }

    render(){
        const {client, options} = this.props;
        const {planSelected} = this.state;
        return(
            <div>
                <Typography variant="h4" component="h1" gutterBottom className={'heading-primary color-black'}>
                    Paso 2 de 7
                </Typography>
                <Typography variant="h4" component="h1" gutterBottom className={'heading-primary color-black'}>
                    Elije tu protecci&oacute;n
                </Typography>
                <Typography variant="h4" component="h1" gutterBottom className={'heading-primary color-black'}>
                    Selecciona tu plan de salud ideal.
                </Typography>
                <Grid container>
                {
                    plans.map((e,i)=>(
                        <Plan
                            id={i}
                            plan={e}
                            selected={planSelected === i}
                            handlePlanSelected={this.handlePlanSelected}
                        />))
                }
                </Grid>
                <Benefits/>
                <Typography variant="h4" component="h1" gutterBottom className={'heading-primary color-black'}>
                    Revisa nuestros
                </Typography>
                <Typography variant="h4" component="h1" gutterBottom className={'heading-primary color-black'}>
                    servicios y exclusiones
                </Typography>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Grid container>
                    <Grid item xs={12} md={6}>
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
                    <Grid item xs={12} md={6}>
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
            </div>
        )
    }
}
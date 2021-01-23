import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Grid} from "@material-ui/core";

export default function Plan(props){
    const  {plan, id, selected} = props;
    return (
        <Grid item xs={3}>
        <ButtonBase
            onClick={(e) => props.handlePlanSelected(id)}
        >
        <Card
            id={id}
            variant="outlined"
        >
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {plan.title}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        S/. {plan.price}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        mensual
                    </Typography>
                </CardContent>
        </Card>
        </ButtonBase>
        </Grid>
    )
}
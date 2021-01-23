import React from "react";
import {Button, Typography} from "@material-ui/core";

export default function FinalStep(){
    return(
        <div>
            <Typography variant="h4" component="h1" gutterBottom className={'heading-primary color-black'}>
                ¡Gracias por confiar en nosotros!
            </Typography>
            <Typography variant="h4" component="h1" gutterBottom className={'heading-primary color-black'}>
                Queremos conocer mejor la salud de los asegurados. Un asesor se pondra en contacto contigo en las siguientes 48 horas.
            </Typography>
            <Button>
                Ir a salud
            </Button>

        </div>
    )
}
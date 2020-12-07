import React from "react"

import Alert from "@material-ui/lab/Alert";
import { IconButton, Fade } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close";

import estilos from "./Alerta.module.css"

// export default function Alerta(props, ...rest) {
//     return (
//         <Fade in={props.open}>
//             <Alert className={props.className} {rest} action={
//                 <IconButton aria-label="close" color="inherit" size="small"
//                 // onClick={() => {
//                 //     setOpen(false);
//                 // }}
//                 >
//                     <CloseIcon fontSize="inherit" />
//                 </IconButton>
//             }>Close me!</Alert>
//         </Fade>
//     )
// }

const Alerta = ({ useState, className, ...alertaProps }) => {
    return (
        <Fade in={useState[0]}>
            <Alert className={className} {...alertaProps} action={
                <IconButton className={estilos.iconButton} aria-label="close" color="inherit" size="small" onClick={() => {
                    if (typeof useState[1] == "function") useState[1]()
                }}>
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            }>Close me!</Alert>
        </Fade>
    )
}

export default Alerta
import React from "react"
import { IconButton, Fade } from "@material-ui/core"
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import estilos from "./Alerta.module.css"

const Alerta = ({ children, animation = true, showIcon = true, visivel, setVisivel, tipo = "ok", timer = 400, className }) => {
    return (
        <Fade in={visivel} timeout={animation ? timer : 0}>
            <div style={tipos[tipo].styles} className={`${estilos.alertaBase} ${className}`}>
                <div className={estilos.alertaLeft} style={ !showIcon ? { marginLeft: "20px" } : {}}>
                    {
                        showIcon ? tipos[tipo].icon : ""
                    }
                    {children}
                </div>
                <div className={estilos.alertaRight}>
                    <IconButton size="small" onClick={() => {setVisivel(!visivel)}}>
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                </div>
            </div>
        </Fade>
    )
}

const tipos = {
    ok: {
        icon: <DoneIcon className={estilos.icon}/>,
        styles: {
            backgroundColor: "#d4edda",
            color: "#155724"
        },
    },
    error: {
        icon: <DoneIcon className={estilos.icon}/>,
        styles: {
            backgroundColor: "#f8d7da",
            color: "#721c24"
        }
    },
    warn: {
        icon: <DoneIcon className={estilos.icon}/>,
        styles: {
            backgroundColor: "#fff3cd",
            color: "#856404"
        }
    },
    info: {
        icon: <DoneIcon className={estilos.icon}/>,
        styles: {
            backgroundColor: "#cce5ff",
            color: "#004085",
        }
    },
};

export default Alerta
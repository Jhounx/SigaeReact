import React from "react"
import { IconButton, Fade } from "@material-ui/core"
import { AlertaContainer, DivIcon, DivText, DivClose } from "./Alerta.styles"
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";

// import estilos from "./Alerta.module.css"

export default function Alerta({ className, style, tipo = "info", showIcon = true, visivel, setVisivel, timer = 400, children }) {
    return (
        <Fade in={visivel} timeout={timer}>
            <AlertaContainer className={className} tipo={tipos[tipo]} style={style}>
                <DivIcon className="alerta_DivIcon" visible={showIcon}>
                    {
                        tipos[tipo].icon
                    }
                </DivIcon>
                <DivText className="alerta_DivText">
                    {children}
                </DivText>
                <DivClose className="alerta_DivClose">
                    <IconButton size="small" onClick={() => { setVisivel(!visivel) }}>
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                </DivClose>
            </AlertaContainer>
        </Fade>
    )
}

const tipos = {
    ok: {
        icon: <DoneIcon/>,
        background: "#d4edda",
        foreground: "#155724"
        ,
    },
    error: {
        icon: <DoneIcon/>,
        background: "#f8d7da",
        foreground: "#721c24"

    },
    warn: {
        icon: <DoneIcon/>,
        background: "#fff3cd",
        foreground: "#856404"

    },
    info: {
        icon: <DoneIcon/>,
        background: "#cce5ff",
        foreground: "#004085",

    },
};
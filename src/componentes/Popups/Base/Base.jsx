import React from "react"
import { Dialog, Button } from "@material-ui/core";
import LogoSigae from "../../../assets/imagens/sigae.svg"
import estilos from "./Base.module.css"
import styled from "styled-components"

const DialogBase = styled(Dialog)`
    .MuiDialog-container {
        .MuiPaper-root {
            width: ${props => props.largura};
            height: ${props => props.altura};
            padding: 0px 30px 10px 30px
        }
    }
`

export function Base({ open, largura, altura, children }) {
    return (
        <DialogBase open={open} largura={largura} altura={altura}>
            {children}
        </DialogBase>
    );
}

export function PopupHeader({ children }) {
    return (
        <div className={estilos.top}>{children}</div>
    )
}

export function PopupBody({ children }) {
    return (
        <div className={estilos.body}>{children}</div>
    )
}

export function PopupBottom({ children }) {
    return (
        <div className={estilos.bottom}>{children}</div>
    )
}

export function SigaeIcon() {
    return (
        <img src={LogoSigae} width="200" height="70" alt="Logo" />
    )
}

export function Titulo({ children, newClass = "", ...rest }) {
    return (
        <div className={`${estilos.titulo} ${newClass}`} {...rest}>{children}</div>
    )
}

export function BotaoOk({ children, ...rest }) {
    return (
        <Button className={`${estilos.botao} ${estilos.botaoOk}`} {...rest} variant="contained">{children}</Button>
    )
}

export function BotaoCancelar({ children, ...rest }) {
    return (
        <Button className={`${estilos.botao} ${estilos.botaoCancelar}`} {...rest} variant="contained">{children}</Button>
    )
}



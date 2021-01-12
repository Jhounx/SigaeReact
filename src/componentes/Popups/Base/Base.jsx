import React from "react"
import { Dialog, Button } from "@material-ui/core";
import LogoSigae from "../../../assets/imagens/sigae.svg"
import styled, { css } from "styled-components"

const DialogBase = styled(Dialog)`
    .MuiDialog-container {
        .MuiPaper-root {
            width: ${props => props.largura};
            height: ${props => props.altura};
            padding: 0px 20px 10px 20px;
            margin: 20px;
            margin-left: 15px;
            margin-right: 15px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            overflow-y: hidden !important;
            ${props => props.medialargura && css`
                @media (max-width: ${props => props.largura + 30}px) {
                    ${props.medialargura}
                }
            `}
            ${props => props.mediaaltura && css`
                @media (max-height: ${props => props.altura + 30}px) {
                    ${props.mediaaltura}
                }
            `}
        }
    }
`

export const Base = React.memo(({open, largura, altura, medialargura, mediaaltura, children}) => {
    return (
        <DialogBase open={open} largura={largura} altura={altura} medialargura={medialargura} mediaaltura={mediaaltura}>
            {children}
        </DialogBase>
    );
})

export const PopupHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PopupBody = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    flex: 1;
    overflow-x: ${props => !props.overflowX ? "hidden" : "auto"};
    overflow-y: ${props => props.overflowY == undefined ? "auto" : props.overflowY ? "auto" : "hidden"};
`

export const PopupBottom = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

export function SigaeIcon() {
    return (
        <img src={LogoSigae} width="200" height="70" alt="Logo" />
    )
}

export const Titulo = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: rgb(63 64 80);
`

export const DefaultButton = styled(Button)`
    color: rgb(255 255 255) !important;
    height: 36px !important;
    margin-left: 5px !important;
    margin-right: 5px !important;
    min-width: 120px !important;
    text-transform: none !important;
    font-size: 16px;
`

export const BotaoOk = styled(DefaultButton)`
    background-color: rgb(36, 155, 155) !important;
`

export const BotaoCancelar = styled(DefaultButton)`
    background-color: rgb(244, 67, 54) !important;
`

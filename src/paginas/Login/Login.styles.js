import React from "react"
import styled from "styled-components"
import InputLogin from "../../componentes/Genericos/InputLogin/InputLogin"
import AlertaGenerico from "../../componentes/Genericos/Alerta/Alerta"
import { RemoveRedEye, Error } from "@material-ui/icons"
import { Button } from "@material-ui/core"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden !important;
`

export const Centro = styled.div`
    position: absolute;
    width: 720px;
    height: 538px;
    background-color: #fafafa;
    -webkit-box-shadow: 6px 6px 5px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 6px 6px 5px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 6px 6px 5px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    @media(max-width: 720px) {
        width: 100%;
        height: 100%;
        border-radius: 0px;
    }
`

export const Titulo = styled.h1`
    white-space: nowrap;
    font-size: 20px;
    text-align: center;
    color: rgb(84, 113, 156);
    font-weight: 500 !important;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 1.1;
`

export const ContainerBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    flex-grow: 1;
    overflow: hidden;
    @media(max-width: 720px) {
        width: 85%;
        margin-top: 30px !important;
    }
`

export const ContainerBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
    background-color: rgba(219, 221, 224, 0.692);
`

export const BottomContent = styled.div`
    font-size: 15px;
    color: #3f4c6b;
    width: 100%;
    text-align: center;
    font-weight: 500;
`

export const BottomLink = styled.a`
    color: rgb(40, 167, 69);
    font-weight: 600;
    margin-left: 4px;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

export const Matricula = styled(InputLogin)`
    margin-top: 25px;
    @media(max-width: 720px) {
        margin-top: 18px
    }
`

export const Senha = styled(InputLogin)`
    margin-top: 12px;
    input {
        padding-right: 45px !important;
    }
`

export const ShowPassword = styled(RemoveRedEye)`
    position: absolute;
    right: 15;
    height: 100% !important;
    cursor: pointer;
    color: ${props => props.visivel ? "#827ffe" : "#909294"};
`

export const ErroIcone = styled(Error)`
    opacity: ${props => props.visivel ? "100%" : "0%"};
    position: absolute;
    left: 5;
    height: 100% !important;
    color: #e44a4a;
    width: 32px !important;
    transition: opacity 200ms !important;
`

export const Botao = styled(Button)`
    width: 100%;
    margin-top: 10px !important;
    text-transform: none !important;
    height: 38px !important;
`

export const LinkContainer = styled.div`
    width: 100%;
    height: 26px;
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    @media(max-width: 720px) {
        margin-top: 15px;
    }
    @media(max-width: 360px) {
        flex-direction: column;
    }
`

export const Coluna = styled.div`
    text-align: center;
`

export const LinkDiv = styled.div`
    position: relative;
    color: slategray;
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    -moz-user-select: none;
    -webkit-user-select: none;
    transition: color 0.7s;
    height: 24px;
    &:hover {
        color: rgb(73, 71, 219);
        cursor: pointer;
        padding-bottom: 2px;
    }
    &:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: rgb(100, 98, 240);
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }
    &:hover:after {
        position: absolute;
        width: 100%;
        left: 0;
    }
    a {
        color: unset !important;
        text-decoration: none !important;
    }
`

export const LinkDivRight = styled(LinkDiv)`
    float: right;
    @media(max-width: 360px) {
        float: none !important;
        margin-top: 15px !important;
    }
`

export const Alerta = styled(AlertaGenerico)`
    width: 100%;
    margin-top: 10px;
`

export const AlertaContent = styled.div`
    display: "flex";
    flex-direction: "column";
`

export const EsqueciSenha = styled.div`
    margin-top: 3px;
    color: #3f4c6b;
    font-weight: 600;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`
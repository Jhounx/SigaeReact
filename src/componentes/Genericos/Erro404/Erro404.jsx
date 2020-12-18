import React from "react"
import styled from "styled-components"
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom"

export default function Erro404({link, textoBotao}) {
    return (
        <div>
            <Titulo>404</Titulo>
            <Aviso>Essa página não existe</Aviso>
            <CustumLink to={link}>
                <CustumBotao variant="contained" color="primary">
                    {textoBotao}
                </CustumBotao>
            </CustumLink>
        </div>
    )
}

const Titulo = styled.h1`
    font-size: 120px;
    color: var(--foreground-roxo-escuro);
    text-decoration: underline;
    text-align: center;
`

const Aviso = styled.h2`
    color: var(--foreground-roxo-escuro);
`

const CustumLink = styled(Link)`
    text-decoration: none !important;
`

const CustumBotao = styled(Button)`
    width: 100%;
    margin-top: 20px !important;
    color: var(--foreground-cinza-escuro)
`

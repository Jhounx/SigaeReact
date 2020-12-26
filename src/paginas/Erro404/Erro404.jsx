import React from "react"
import styled from "styled-components"
import Erro404Comp from "../../componentes/Comuns/Erro404/Erro404"

export default function Erro404() {
    return (
        <Container>
            <Erro404Comp link="/" textoBotao="Voltar para o início"/>
        </Container>
    )
}

const Container = styled.div`
    background-color: #f0f1f3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
import React from "react"
import styled from "styled-components"

export default function ErroGeral({ erro }) {
    return (
        <Container>
            <ContainerTexto>
                <Titulo>Parada crítica na aplicação</Titulo>
                <ErroTexto>{erro}</ErroTexto>
                <Divisor />
                <Dica><b>*</b> Tente reiniciar a aplicação ou limpar o cache</Dica>
            </ContainerTexto>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f0f1f3;
    padding-bottom: 200px;
`

const ContainerTexto = styled.div`
    width: 500px;
    @media(max-width: 520px) {
        width: 90%;
    }
`

const Titulo = styled.h1`
    color: crimson;
    font-size: 40px;
    text-align: center;
`

const ErroTexto = styled.h2`
    margin-top: 20px;
    word-break: break-word;
`

const Divisor = styled.div`
    width: 100%;
    border: 1px solid #dfe0e2;
    margin-top: 25px;
`

const Dica = styled.div`
    width: 100%;
    margin-top: 10px;
    word-break: break-word;
    text-align: center;
    font-size: 22px;
`
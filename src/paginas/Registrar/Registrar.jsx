import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import { InterfaceUtils } from "../../assets/Utils"

import LoadingPagina from "../../componentes/Loadings/LoadingPagina/LoadingPagina"
import LoadingState from "../../componentes/Loadings/LoadingState/LoadingState"
import Footer from "../../componentes/Comuns/Footer/Footer"
import InputCodigo from "../../componentes/Genericos/InputCodigo/InputCodigo"
import Sigae from "../../assets/imagens/sigae.svg"
import { 
    MainContainer, 
    Container, 
    Header, 
    Titulo, 
    TextoDigiteCodigo 
} from "./Registrar.styles"

export default function Registrar() {
    const [loading, setShowLoading] = useState(false)
    const [pagina, setPagina] = useState(0)
    
    const[codigo, setCodigo] = useState("")
    const codigoOnChange = (e) => {
        setCodigo(e)
    };


    useEffect(() => {
        InterfaceUtils.setMobileHeight()
    }, [])
    return (
        <>
            <LoadingPagina timer={500} />
            <LoadingState isVisible={loading} />
            <MainContainer>
                <Header>
                    <Link to="/login">
                        <img src={Sigae} />
                    </Link>
                    <Titulo>Registrar usuário</Titulo>
                </Header>
                <Container visivel={pagina == 0}>
                    <TextoDigiteCodigo>Digite o código de inscrição</TextoDigiteCodigo>
                    <InputCodigo onChange={codigoOnChange}/>
                </Container>
                <Container visivel={pagina == 1}>
                    123
                </Container>
                <Container visivel={pagina == 2}>
                    123
                </Container>
                <Footer>
                    12
                </Footer>
            </MainContainer>
        </>
    )
}
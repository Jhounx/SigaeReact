import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { InterfaceUtils } from "../../assets/Utils"

import LoadingPagina from "../../componentes/Loadings/LoadingPagina/LoadingPagina"
import FadeDiv from "../../componentes/Utils/FadeDiv/FadeDiv"
import Footer from "../../componentes/Comuns/Footer/Footer"
import Toast from "../../assets/Toast"
import { Sigae } from "../../componentes/Utils/SVG/SVG"
import { RegistroAPI } from "../../assets/API"
import * as css from "./Registrar.styles"

export default function Registrar() {
    const [pagina1, setPagina1] = useState(true)
    const [pagina2, setPagina2] = useState(false)

    const [enviandoCodigo, setEnviandoCodigo] = useState(false)

    useEffect(() => {
        InterfaceUtils.setMobileHeight()
        InterfaceUtils.setMobileFixed()
    }, [])

    const codigoOnChange = (codigo) => {
        if (codigo.length == 8) {
            enviarCodigo(codigo)
            //document.getElementById("botaoEnviarCodigo").click()
        }
    };

    const enviarCodigo = (codigo) => {
        if (!enviandoCodigo) {
            setEnviandoCodigo(true)
            RegistroAPI.dadosEssenciais(codigo, (resposta) => {
                setEnviandoCodigo(false)
                if(resposta.erro == undefined) {
                    setPagina1(false)
                    setTimeout(() => {
                        setPagina2(true)
                    }, 500)
                } else {
                    Toast.error(resposta.erro)
                }
            })
        }
    }

    return (
        <>
            <LoadingPagina timer={500} />
            <css.MainContainer id="main">
                <css.Header>
                    <Link to="/login">
                        <Sigae width={280} height={100} />
                    </Link>
                    <css.Titulo>Registrar usuário</css.Titulo>
                </css.Header>
                <css.FadePagina visible={pagina1}>
                    <css.TextoDigiteCodigo>Digite o código de inscrição</css.TextoDigiteCodigo>
                    <css.DigiteCodigoContainer>
                        <css.InputCodigo onChange={codigoOnChange} />
                    </css.DigiteCodigoContainer>
                    <css.FadeSpinnerContainer >
                        <FadeDiv visible={enviandoCodigo} time={500}>
                            <css.SpinnerCodigo width={100} height={100} />
                        </FadeDiv>
                    </css.FadeSpinnerContainer>

                </css.FadePagina>
                <css.FadePagina visible={pagina2}>
                    
                </css.FadePagina>
                <Footer />
            </css.MainContainer>
        </>
    )
}
import React, { useState, useEffect } from "react";
import * as style from "./Pagina1.styles"
import * as css from "../Registrar.styles"
import FadeDiv from "../../../componentes/Utils/FadeDiv/FadeDiv"
import { RegistroAPI } from "../../../assets/API"
import Toast from "../../../assets/Toast"
import {useRegister} from "../context"


function Pagina1() {
    const RegisterContext = useRegister()
    const [spinnerVisible, setSpinnerVisible] = useState(false)
    const [enviandoCodigo, setEnviandoCodigo] = useState(false)

    const codigoOnChange = (codigo) => {
        if (codigo.length == 8) {
            enviarCodigo(codigo)
        }
    };

    const enviarCodigo = (codigo) => {
        if (!enviandoCodigo) {
            setEnviandoCodigo(true)
            setSpinnerVisible(true)
            RegistroAPI.dadosEssenciais(codigo, (resposta) => {
                setEnviandoCodigo(false)
                setSpinnerVisible(false)
                if (resposta.erro == undefined) {
                    RegisterContext.setDadosEssenciais(resposta)
                    RegisterContext.setPage(2)
                } else {
                    Toast.error(resposta.erro)
                }
            })
        }
    }


    return (
        <css.DigiteCodigoContainer>
            <style.TextoDigiteCodigo>Digite o código de inscrição</style.TextoDigiteCodigo>
            <css.DigiteCodigoContainer>
                <style.InputCodigo onChange={codigoOnChange} />
            </css.DigiteCodigoContainer>
            <style.FadeSpinnerContainer >
                <FadeDiv visible={spinnerVisible} time={500}>
                    <style.SpinnerCodigo width={60} height={60} />
                </FadeDiv>
            </style.FadeSpinnerContainer>
        </css.DigiteCodigoContainer>
    );
}

export default Pagina1;
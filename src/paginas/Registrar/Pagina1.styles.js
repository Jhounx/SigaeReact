import styled from "styled-components"
import InputCod from "../../componentes/Genericos/InputCodigo/InputCodigo"
import { Spinner } from "../../componentes/Utils/SVG/SVG"

export const TextoDigiteCodigo = styled.h2`
    margin-bottom: 30px;
    color: #3f4c6b;
`

export const InputCodigo = styled(InputCod)`
    @media (max-width: 600px) {
        input {
            width: 35px;
            height: 35px;
        }
    }
    @media (max-width: 320px) {
        input {
            width: 30px;
            height: 30px;
        }
    }
`

export const FadeSpinnerContainer = styled.div`
    width: 60px;
    height: 60px;
`

export const SpinnerCodigo = styled(Spinner)`
    transition: opacity 100ms;
    color: #404d6c !important;
    margin-top: 22px !important;
`;
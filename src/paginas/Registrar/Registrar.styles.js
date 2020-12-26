import styled from "styled-components"
import InputCod from "../../componentes/Genericos/InputCodigo/InputCodigo"
import FadeDiv from "../../componentes/Utils/FadeDiv/FadeDiv"
import { Spinner } from "../../componentes/Utils/SVG/SVG"
import { Button } from "@material-ui/core"

export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fafafa;
`

export const FadePagina = styled(FadeDiv)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    &[style*='display: block'] {
        display: flex !important;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 1;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 170px;
`

export const Titulo = styled.h1`
    color: #4e5f78;
    font-size: 22px;
    text-align: center;
    margin-top: 15px;
`

// Pagina 1

export const DigiteCodigoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

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
    width: 100px;
    height: 122px;
`

export const SpinnerCodigo = styled(Spinner)`
    transition: opacity 200ms;
    color: #404d6c !important;
    margin-top: 22px !important;
`;
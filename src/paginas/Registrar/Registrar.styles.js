import styled from "styled-components"
import FadeDiv from "../../componentes/Utils/FadeDiv/FadeDiv"

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

export const DigiteCodigoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
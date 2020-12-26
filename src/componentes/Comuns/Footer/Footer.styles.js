import styled from "styled-components"

export const FooterContainer = styled.div`
    width: 100% !important;
    height: 150px !important;
    min-height: 150px !important;
    background-color: #4a5058 !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const FooterLinha1 = styled.div`
    display: flex;
    justify-content: center;
    height: 50px;
    @media (max-width: 600px) {
        margin-bottom: 15px;
    }
`

export const SigaeTitulo = styled.div`
    font-size: 20px;
    color: #88a4e6;
    text-align: center;
    font-weight: 400 !important;
`

export const FooterLinha2 = styled.div`
    display: flex;
    justify-content: center;
`

export const Desenvolvido = styled.div`
    font-size: 17px;
    color: aliceblue;
    margin-right: 5px;
    font-weight: 400 !important;
`

export const DesenvolvidoLink = styled.a`
    color: #44dd68;
    transition: color 300ms;
    font-size: 17px;
    text-decoration: none;
    display: block;
    &:hover {
        color: #28a745;
        text-decoration: underline;
    }
`

export const DesenvolvidoLink1 = styled(DesenvolvidoLink)`
    @media (max-width: 600px) {
        display: none;
    }
`

export const DesenvolvidoLink2 = styled(DesenvolvidoLink)`
    @media (min-width: 600px) {
        display: none;
    }
`

export const Break = styled.br`
    display: block;
    @media (min-width: 600px) {
        display: none;
    }
`
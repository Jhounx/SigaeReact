import styled from "styled-components"

// Main

export default {
    
}

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--background);
`

export const Container = styled.div`
    display: ${props => props.visivel ? "flex" : "none"};
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
    color: var(--foreground-main);
    font-size: 22px;
    text-align: center;
    margin-top: 15px;
`

// Pagina 1

export const TextoDigiteCodigo = styled.h2`
    margin-bottom: 20px;
    color: var(--foreground-roxo-escuro);
`
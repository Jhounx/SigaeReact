import styled from "styled-components"

export const CustumInput = styled.input`
    color: var(--foreground-black);
    width: 100%;
    height: 50px;
    padding-top: 2px;
    padding-left: 38px;
    padding-right: 10px;
    font-family: "Helvetica Neue", "Helvetica", "Arial";
    font-size: 18px;
    background-color: white;
    border: 2px solid var(--${props => props.erro ? "foreground-vermelho-erro" : "foreground-roxo-fraco"});
    border-radius: 3.5px;
    transition: border-color 200ms, border 200ms;
    filter: none;
    &:focus {
        border-color: var(--foreground-roxo-brilhante) !important;
        outline: none;
    }
`

export const InputPlaceHolder = styled.div`
    position: absolute;
    height: 18px !important;
    align-items: center;
    top: -12;
    left: 10;
    padding: 0 3 3 3;
    transition: color 200ms, opacity 250ms;
    background: linear-gradient(0deg, white, var(--background));
    color: var(${props => props.color});
    opacity: ${props => props.visivel > 0 ? 100 : 0};
`
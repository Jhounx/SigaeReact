import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    width: 100%;
    &:focus-within {
        div {
            color: #827ffe;
        }
    }
    input {
        ${(props) => props.erro ? "border-color: crimson" : ""};
    }
    div {
        ${(props) => props.erro ? "color: crimson" : ""};
    }
`

export const Input = styled.input`
    color: #17161a;
    width: 100%;
    height: 50px;
    padding-top: 2px;
    padding-left: 38px;
    padding-right: 10px;
    font-family: "Helvetica Neue", "Helvetica", "Arial";
    font-size: 18px;
    background-color: white;
    border: 2px solid ${props => props.erro ? "#e44a4a" : "#9392b9"};
    border-radius: 3.5px;
    transition: border-color 200ms, border 200ms;
    filter: none;
    &:focus {
        border-color: #827ffe !important;
        outline: none;
    }
`

export const Placeholder = styled.div`
    position: absolute;
    height: 18px !important;
    align-items: center;
    top: -12;
    left: 10;
    padding: 0 3 3 3;
    transition: color 200ms, opacity 250ms;
    background: linear-gradient(0deg, white, #fafafa);
    color: #9392b9;
    opacity: ${props => props.visivel > 0 ? 100 : 0};
`
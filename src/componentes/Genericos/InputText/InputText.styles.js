import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    outline: none;
    margin-top: 10px;
    &:focus-within {
        div {
            color: #7079c9 !important;
        }
        input {
            border-color: #7079c9 !important;
        }
    }
    &:hover {
        input {
            border-color: #dae0e5;
        }
        /* div {
            ${(props) => props.erro ? "color: #85859f" : ""};
        } */
    }
    &[erro=true] {
        background-color: red !important;
    }
     & > input {
        ${(props) => props.erro ? "border-color: crimson" : ""};
    }
    & > div {
        ${(props) => props.erro ? "color: crimson" : ""};
    } 

`

export const Input = styled.input`
    width: 100%;
    height: ${(props) => props.height || "40"}px;
    flex: 1;
    background-color: #fafafa;
    border: 1px solid #9e9e9e;
    border-radius: 2px;
    outline: none;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.00938em;
    padding-left: 15px;
    transition: border-color 350ms;
    &::placeholder {
        color: #85859f !important;
        opacity: 1 !important;
    }
`

export const Placeholder = styled.div`
    opacity: ${(props) => props.visivel ? 1 : 0};
    background-color: ${(props) => props.backgroundColor || "#fafafa"};
    color: #85859f;
    transition: opacity 200ms, color 150ms;
    position: absolute;
    top: -12;
    left: 15;
`
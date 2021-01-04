import styled from "styled-components"
import Autocomplete from "@material-ui/lab/Autocomplete";

export const CustumAutocomplete = styled(Autocomplete)`
    background-color: #fafafa;
    border: 1px solid #9e9e9e;
    border-radius: 2px;
    height: 50px;
    transition: border-color 200ms;
    &:hover {
        border-color: #dae0e5;
    }
    &:focus-within {
        border-color: #7079c9 !important;
    }
    ${(props) => props.erro ? "border-color: crimson" : ""};
    div {
        height: 100%;
        div {
            height: 100%;
            padding-top: 0px !important;
            padding-bottom: 0px !important;
            input {
                height: 100% !important;
                padding-top: 0px !important;
                padding-bottom: 0px !important;
                &::placeholder {
                    color: #85859f !important;
                    opacity: 1 !important;
                }
            }
            fieldset {
                border-color: transparent !important;
            }
        }
    }
`

export const CustumMultipleAutocomplete = styled(Autocomplete)`
    display: flex;
    background-color: #fafafa;
    border: 1px solid #9e9e9e;
    border-radius: 2px;
    min-height: 50px;
    transition: border-color 350ms;
    &:hover {
        border-color: #dae0e5;
    }
    &:focus-within {
        border-color: #7079c9 !important;
    }
    ${(props) => props.erro ? "border-color: crimson" : ""};
    div {
        display: flex;
        padding-top: 0px !important;
        padding-bottom: 0px !important;
        div {
            flex: 1;
            input {
                padding-top: 0px !important;
                padding-bottom: 0px !important;
                &::placeholder {
                    color: #85859f !important;
                    opacity: 1 !important;
                }
            }
            fieldset {
                border-color: transparent !important;
            }
        }
    }
`
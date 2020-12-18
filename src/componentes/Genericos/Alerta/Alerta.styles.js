import styled from "styled-components"

export const AlertaContainer = styled.div`
    background-color: ${props => props.tipo.background};
    color: ${props => props.tipo.foreground};
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 40px;
    border-radius: 3px;
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex !important;
    overflow-y: auto;
`

export const DivIcon = styled.div`
    display: ${props => props.visible ? "flex" : "none"};
    align-items: center;
    margin-left: 6px;
`

export const DivText = styled.div`
    align-items: center;
    margin-left: 12px;
    margin-right: 7px;
    word-break: break-word;
    height: 100%;
`

export const DivClose = styled.div`
    margin-left: 7px; 
    margin-right: 15px;
`
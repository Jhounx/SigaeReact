import React from "react"
import styled from "styled-components"
import { ReactSVG } from "react-svg"
import SigaeSVG from "../../../assets/imagens/sigae.svg"
import SigaeAlternativoSVG from "../../../assets/imagens/sigae-alternativo.svg"
import SigaeLoadingSVG from "../../../assets/imagens/sigae-loading.svg"
import SpinnerSVG from "../../../assets/imagens/spinner.svg"

export function Sigae({ width = 280, height = 100 }) {
    return (
        <SVGRender width={width} height={height} src={SigaeSVG} />
    )
}

export function SigaeAlternativo({ width = 280, height = 100 }) {
    return (
        <SVGRender width={width} height={height} src={SigaeAlternativoSVG} />
    )
}

export function SigaeLoading({ width = 280, height = 250 }) {
    return (
        <SVGRender width={width} height={height} src={SigaeLoadingSVG} />
    )
}

export function Spinner({ width = 32, height = 32, color = "white", className }) {
    return (
        <SVGRender className={className} width={width} height={height} color={color} src={SpinnerSVG} />
    )
}

const SVGRender = styled(ReactSVG)`
    color: ${props => props.color || "unset"};
    div {
        width: ${props => props.width};
        height: ${props => props.height};
        svg {
            width: ${props => props.width};
            height: ${props => props.height};
        }
    }
`
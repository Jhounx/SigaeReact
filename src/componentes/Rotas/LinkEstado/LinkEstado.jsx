import React from "react"
import { Link } from "react-router-dom"
import { alterar } from "../../../assets/DadosGlobais"

export default function LinkEstado(props) {
    if (props.estadoLogin) alterar("estadoLogin", props.estadoLogin)
    return (
        <Link to={props.to}>{props.children}</Link>
    )
}
import React from "react"
import { Link } from "react-router-dom"
import { Alterar } from "../../../assets/DadosGlobais"

export default function LinkEstado(props) {
    if (props.estadoLogin) Alterar("estadoLogin", props.estadoLogin)
    return (
        <Link to={props.to}>{props.children}</Link>
    )
}
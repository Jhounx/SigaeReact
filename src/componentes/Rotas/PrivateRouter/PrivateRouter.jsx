import React, { useContext } from "react"
import LoadingPagina from "../../Loadings/LoadingPagina/LoadingPagina"
import StoreContext from "../../Rotas/Store/Context"
import {Dados} from "../../../assets/DadosGlobais"

export default function PrivateRoute({logado, naoLogado, visitante, component}) {
    const {estadoApp} = useContext(StoreContext)
    if(estadoApp == 0) return <LoadingPagina/>
    if(estadoApp == 1) return (
        <>
            {Dados.estadoLogin == "LOGADO" ? logado != undefined ? logado : component: ""}
            {Dados.estadoLogin == "NAO_LOGADO" ? naoLogado != undefined ? naoLogado : component: ""}
            {Dados.estadoLogin == "VISITANTE" ? visitante != undefined ? visitante : component: ""}
        </>
    )
    
}
import React, { useContext } from "react"
import Loading from "../../Loading/Loading"
import StoreContext from "../../Rotas/Store/Context"
import {Dados} from "../../../assets/DadosGlobais"

const PrivateRoute = (props) => {
    const {estadoAPI} = useContext(StoreContext)
    if(estadoAPI == 0) return <Loading/>
    if(estadoAPI == 1) return (
        <>
            {Dados.estadoLogin == "LOGADO" ? props.logado != undefined ? props.logado : props.component: ""}
            {Dados.estadoLogin == "NAO_LOGADO" ? props.naoLogado != undefined ? props.naoLogado : props.component: ""}
            {Dados.estadoLogin == "VISITANTE" ? props.visitante != undefined ? props.visitante : props.component: ""}
        </>
    )
    
}

export default PrivateRoute
import React, { useState, useEffect } from "react"
import Context from "./Context"
import ErroGeral from "../../Comuns/ErroGeral/ErroGeral"
import { LoginAPI } from "../../../assets/API"
import * as Global from "../../../assets/DadosGlobais"

export default function StoreProvider({ children }) {
    const [estadoApp, setEstadoApp] = useState(0)
    const [erro, setErro] = useState("NONE")

    useEffect(() => {
        Global.setCrashState(setEstadoApp, setErro)
        LoginAPI.init((retorno) => {
            Global.init(retorno)
            setEstadoApp(1)
        })
    }, [])
    
    return (
        <Context.Provider value={{ estadoApp, setEstadoApp}}>
            {estadoApp > -1 ? children : <ErroGeral erro={erro}/>}
        </Context.Provider>
    )
}
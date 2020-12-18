import React, { useState } from "react"
import Context from "./Context"
import { LoginAPI } from "../../../assets/API"
import { Definir } from "../../../assets/DadosGlobais"

export default function StoreProvider({ children }) {
    const [estadoAPI, setEstadoAPI] = useState(0)

    LoginAPI.init((retorno) => {
        Definir(retorno)
        setEstadoAPI(1)
    })

    console.log("teste")

    return (
        <Context.Provider value={{ estadoAPI, setEstadoAPI}}>
            {children}
        </Context.Provider>
    )
}
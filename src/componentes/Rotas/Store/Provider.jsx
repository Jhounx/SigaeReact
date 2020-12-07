import React, { useState } from "react"
import Context from "./Context"
import { LoginAPI } from "../../../assets/API"
import { Definir } from "../../../assets/DadosGlobais"

const StoreProvider = ({ children }) => {
    const [estadoAPI, setEstadoAPI] = useState(0)

    LoginAPI.init((retorno) => {
        Definir(retorno)
        setEstadoAPI(1)
    })

    return (
        <Context.Provider
            value={{
                estadoAPI,
                setEstadoAPI
            }}>
            {children}
        </Context.Provider>
    )
}

export default StoreProvider
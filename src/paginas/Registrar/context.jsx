import React, { createContext, useContext, useState, useEffect } from "react"

export const RegisterContext = createContext({})

export default ({children}) => {
    const [dadosEssenciais, setDadosEssenciais] = useState({})
    const [pagina1, setPagina1] = useState(true)
    const [pagina2, setPagina2] = useState(false)

    const setPage = (pagina) => {
        (pagina == 2) ? setPagina1(false) : setPagina2(false)
        setTimeout(() => {
            (pagina == 2) ? setPagina2(true) : setPagina1(true)
        }, 500);
    }

    return (
        <RegisterContext.Provider value={{pagina1, pagina2, dadosEssenciais, setDadosEssenciais, setPage }}>
            {children}
        </RegisterContext.Provider>
    )
}

export const useRegister = () => {
    const response = useContext(RegisterContext)
    return response
}




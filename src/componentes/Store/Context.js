import { createContext } from "react"

const StoreContext = createContext({
    estadoAPI: null,
    setEstadoAPI: () => {}
})

export default StoreContext
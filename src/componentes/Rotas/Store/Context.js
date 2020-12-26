import { createContext } from "react"

const StoreContext = createContext({
    estadoApp: null,
    setEstadoApp: () => {}
})

export default StoreContext
import { createContext } from "react"

const StoreContext = createContext({
    estadoApp: null,
    setEstadoApp: () => {},
    showLoading: null,
    setShowLoading: () => {}
})

export default StoreContext
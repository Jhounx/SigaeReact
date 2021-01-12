import React, { useEffect } from "react"
import Helmet from "react-helmet"
import { Link } from "react-router-dom"
import { InterfaceUtils } from "../../assets/Utils"
import Footer from "../../componentes/Comuns/Footer/Footer"
import { Sigae } from "../../componentes/Utils/SVG/SVG"
import * as css from "./Registrar.styles"
import RegisterProvider, {useRegister} from "./context"
import Pagina1 from "./Pagina1/"
import Pagina2 from "./Pagina2/"

export default function Registrar() {

    useEffect(() => {
        InterfaceUtils.setMobileHeight()
        InterfaceUtils.setMobileFixed()
    }, [])

    return (
        <RegisterProvider>
            <Registro />
        </RegisterProvider>
    )
}

const Registro = () => {
    const {pagina1, pagina2} = useRegister()

    return (
        <>
            <Helmet bodyAttributes={{ style: "overflow-x: hidden" }} />
            {/* <LoadingPagina timer={500} /> */}
            <css.MainContainer id="main">
                <css.Header>
                    <Link to="/login">
                        <Sigae width={280} height={100} />
                    </Link>
                    <css.Titulo>Registrar usuário</css.Titulo>
                </css.Header>
                <css.FadePagina visible={pagina1}>
                    <Pagina1 />
                </css.FadePagina>
                <css.FadePagina visible={pagina2}>
                    {pagina2 && (
                        <Pagina2 />
                    )}
                </css.FadePagina>
                <Footer />
            </css.MainContainer>
        </>
    )
}


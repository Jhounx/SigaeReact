import React from "react"
import estilos from "./Erro404.module.css"
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom"

export default function Erro404() {
    return (
        <div className={estilos.container}>
            <div>
                <h1 className={estilos.numero}>404</h1>
                <h2 className={estilos.aviso}>Essa página não existe</h2>
                <Link to="/" className={estilos.a}>
                    <Button className={estilos.botao} variant="contained" color="primary">
                        Ir para início
                    </Button>
                </Link>
            </div>
        </div>
    )
}

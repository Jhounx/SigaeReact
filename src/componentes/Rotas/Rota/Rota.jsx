import React, { useContext } from "react"
import styled from "styled-components"
import StoreContext from "../../Rotas/Store/Context"
import Erro404 from "../../../paginas/Erro404/Erro404"
import ErroGeral from "../../Comuns/ErroGeral/ErroGeral"
import {Dados} from "../../../assets/DadosGlobais"

export default function Rota({path, comps, auth}) {
    const {estadoApp} = useContext(StoreContext)
    if(estadoApp == 0) return ""
    if(estadoApp == 1) {
        const estado = Dados.estadoLogin
        var comp = auth ? comps[estado] : comps
        if(comp == undefined) {
            comp = path == "*" ? <Erro404/> : <ErroGeral erro="Componente de rota inválido"/>
        }
        return <Container>{comp}</Container>
    }
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex: 1 1;
`
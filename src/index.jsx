import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import StoreProvider from "./componentes/Rotas/Store/Provider"
import Rota from "./componentes/Rotas/Rota/Rota"
import Loading from "./componentes/Rotas/Loading/Loading"
import { ToastContainer } from "react-toastify";

import "./assets/css/global.css"
import "react-toastify/dist/ReactToastify.css";

import TelaMain from "./paginas/Main/Main"
import TelaLogin from "./paginas/Login/Login"
import TelaRegistrar from "./paginas/Registrar/Registrar"
import TelaDigitarCodigo from "./paginas/DigitarCodigo/DigitarCodigo"
import TelaAlterarSenha from "./paginas/AlterarSenha/AlterarSenha"
import Erro404 from "./paginas/Erro404/Erro404"

ReactDOM.render(
    <Router>
        <ToastContainer />
        <StoreProvider>
            
        </StoreProvider>
    </Router>, document.getElementById("root")
);
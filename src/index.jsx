import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import "./assets/global.css"

import StoreProvider from "./componentes/Rotas/Store/Provider"
import PrivateRoute from "./componentes/Rotas/PrivateRouter/PrivateRouter"

import TelaMain from "./paginas/Main/Main"
import TelaLogin from "./paginas/Login/Login"
import TelaRegistrar from "./paginas/Registrar/Registrar"
import TelaDigitarCodigo from "./paginas/DigitarCodigo/DigitarCodigo"
import TelaAlterarSenha from "./paginas/AlterarSenha/AlterarSenha"
import Erro404 from "./paginas/Erro404/Erro404"

import { ToastProvider } from "react-toast-notifications"

ReactDOM.render(
    <Router>
        <ToastProvider>
            <StoreProvider>
                <Switch>
                    <PrivateRoute path="/" logado={<TelaMain />} naoLogado={<Redirect to="/login" />} visitante={<TelaMain />} exact />
                    <PrivateRoute path="/login" logado={<Redirect to="/" />} component={<TelaLogin />} exact />
                    <Route path="/registrar" component={TelaRegistrar} exact />
                    <Route path="/codigo" component={TelaDigitarCodigo} exact />
                    <Route path="/alterarSenha" component={TelaAlterarSenha} exact />
                    <Route path="*" component={Erro404} exact />
                </Switch>
            </StoreProvider>
        </ToastProvider>
    </Router>,
    document.getElementById("root")
);
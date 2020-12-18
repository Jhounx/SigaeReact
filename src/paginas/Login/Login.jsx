import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"
import { RemoveRedEye, Error } from "@material-ui/icons"
import { InterfaceUtils } from "../../assets/Utils"
import { Sigae, Spinner } from "../../componentes/Comuns/SVG/SVG"
import { LoginAPI } from "../../assets/API"

import LoadingPagina from "../../componentes/Loadings/LoadingPagina/LoadingPagina"
import LinkEstado from "../../componentes/Rotas/LinkEstado/LinkEstado"
import InputLogin from "../../componentes/Genericos/InputLogin/InputLogin"
import Alerta from "../../componentes/Genericos/Alerta/Alerta"

import RecuperarSenha from "../../componentes/Popups/Paginas/RecuperarSenha/RecuperarSenha"
import estilos from "./Login.module.css"
import responsive from "./Login_Responsive.module.css"

export default function Login() {
    const [matricula, setMatricula] = useState("")
    const [senha, setSenha] = useState("")
    const [esperandoAPI, setEsperandoAPI] = useState(0)

    const [erroCampo1, setErroCampo1] = useState(false)
    const [erroCampo2, setErroCampo2] = useState(false)

    const [passwordShowed, showPassword] = useState(false)

    const [alertaAberto, setAlertaAberto] = useState(false)
    const [alertaTexto, setAlertaTexto] = useState("NONE")

    const [openPopup, setOpenPopup] = useState(false)

    const matriculaOnChange = (e) => {
        setMatricula(e.target.value)
        if (e.target.value.length == 11) document.getElementById("loginSenha")?.focus()
    };
    const senhaOnChange = (e) => {
        setSenha(e.target.value)
    };

    const matriculaKeyDown = (e) => {
        if (e.key == "Enter") document.getElementById("loginSenha")?.focus()
    };
    const senhaKeyDown = (e) => {
        if (e.key == "Enter") document.getElementById("botaoLogin")?.focus()
    };

    const logar = (e) => {
        var waiting = e.currentTarget.getAttribute("waiting")
        if (waiting == 0) {
            if (matricula.length == 0) setErroCampo1(true)
            if (senha.length == 0) setErroCampo2(true)
            if (matricula.length > 0 && senha.length > 0) {
                setEsperandoAPI(1)
                setAlertaAberto(false)
                LoginAPI.Logar(matricula, senha, (resposta) => {
                    setEsperandoAPI(0)
                    setAlertaTexto(resposta.resposta)
                    setAlertaAberto(true)
                })
            }
        }
    }

    useEffect(() => {
        InterfaceUtils.setMobileHeight()
    }, [])

    return (
        <>
            <Helmet htmlAttributes={{ class: estilos.htmlTop }} bodyAttributes={{ class: estilos.bodyTop }} />
            <LoadingPagina timer={500} />
            <div id="container" className={estilos.container}>
                <div id="centro" className={`${estilos.centro} ${responsive.centro}`}>
                    <div>
                        <div>
                            <Sigae />
                        </div>
                        <h1 className={estilos.titulo}>
                            Sistema de Gerenciamento de
                            <br />
                            Atendimento ao Estudante
                        </h1>
                    </div>
                    <div className={`${estilos.body} ${responsive.body}`}>
                        <InputLogin type="number" holder="Sua Matricula" value={matricula}
                            onChange={matriculaOnChange} onKeyDown={matriculaKeyDown}
                            erro={erroCampo1} setErro={setErroCampo1}
                            style={{ marginTop: "25px" }}>
                            <Error style={{ opacity: erroCampo1 ? 100 : 0 }} className={estilos.inputErro} />
                        </InputLogin>
                        <InputLogin type={passwordShowed ? "text" : "password"}
                            id="loginSenha" holder="Sua Senha"
                            value={senha} onChange={senhaOnChange} onKeyDown={senhaKeyDown}
                            erro={erroCampo2} setErro={setErroCampo2}
                            style={{ marginTop: "12px" }}>
                            <RemoveRedEye style={{
                                color: `var(--${passwordShowed ? "foreground-roxo-brilhante" : "foreground-cinza-escuro"})`
                            }}
                            className={estilos.alternarSenha} onClick={() => {
                                showPassword(!passwordShowed)
                            }} />
                            <Error style={{ opacity: erroCampo2 ? 100 : 0 }} className={estilos.inputErro} />
                        </InputLogin>
                        <Button className={estilos.botaoLogin} id="botaoLogin" variant="contained" color="primary"
                            waiting={esperandoAPI} onClick={logar}>
                            {
                                esperandoAPI == 1 ? (
                                    <Spinner />
                                ) : "Logar"
                            }
                        </Button>
                        <div className={`${estilos.linksContainer} ${responsive.linksContainer}`}>
                            <div className={estilos.linksColunas}>
                                <div className={estilos.linkDiv}>
                                    <Link to="/registrar">Registrar novo usuário</Link>
                                </div>
                            </div>
                            <div className={estilos.linksColunas}>
                                <div className={estilos.linkDiv} style={{ float: "right" }}>
                                    <LinkEstado to="/" estadoLogin="VISITANTE">Acessar sem login</LinkEstado>
                                </div>
                            </div>
                        </div>
                        <Alerta style={{ marginTop: "10px", width: "100%" }} tipo="error" visivel={alertaAberto} setVisivel={setAlertaAberto} showIcon={false}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div>{alertaTexto}</div>
                                <div className={estilos.esqueciSenha} onClick={() => {
                                    setOpenPopup(true)
                                }}>Esqueceu sua senha?</div>
                            </div>
                        </Alerta>
                    </div>
                    <div className={estilos.bottom}>
                        <div className={estilos.bottomTitle}>© 2020 SiGAÊ | Desenvolvimento:
                            <a className={estilos.bottomTitleLink} href="https://portal.ifba.edu.br"
                                target="_blank" rel="noreferrer">IFBA
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <RecuperarSenha open={openPopup} setOpen={setOpenPopup} />
        </>
    );
}
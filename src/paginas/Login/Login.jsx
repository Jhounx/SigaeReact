import React, { useState, useEffect, useRef } from "react"
import Helmet from "react-helmet"
import * as css from "./Login.styles"

import { Link } from "react-router-dom"
import { InterfaceUtils } from "../../assets/Utils"
import { Sigae, Spinner } from "../../componentes/Utils/SVG/SVG"
import { LoginAPI } from "../../assets/API"
import LoadingPagina from "../../componentes/Loadings/LoadingPagina/LoadingPagina"
import LinkEstado from "../../componentes/Rotas/LinkEstado/LinkEstado"
import RecuperarSenha from "../../componentes/Popups/Paginas/RecuperarSenha/RecuperarSenha"

export default function Login() {
    const [matricula, setMatricula] = useState("")
    const [senha, setSenha] = useState("")
    const [esperandoAPI, setEsperandoAPI] = useState(0)

    const [erroCampo1, setErroCampo1] = useState(false)
    const [erroCampo2, setErroCampo2] = useState(false)

    const [passwordShowed, showPassword] = useState(false)

    const [alertaAberto, setAlertaAberto] = useState(false)
    const [alertaTexto, setAlertaTexto] = useState("NONE")

    const inputPassword = useRef()
    const botaoLogin = useRef()

    const [openPopup, setOpenPopup] = useState(false)

    const matriculaOnChange = (e) => {
        setMatricula(e.target.value)
        if (e.target.value.length == 11) inputPassword.current.focus()
    };
    const senhaOnChange = (e) => {
        setSenha(e.target.value)
    };

    const matriculaKeyDown = (e) => {
        if (e.key == "Enter") inputPassword.current.focus()
    };
    const senhaKeyDown = (e) => {
        if (e.key == "Enter") botaoLogin.current.focus()
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
        InterfaceUtils.setMobileFixed()
    }, [])

    return (
        <>
            <Helmet bodyAttributes={{ class: "global_gradient" }} />
            <LoadingPagina timer={500} />
            <css.Container id="container">
                <css.Centro id="centro">
                    <div>
                        <Sigae/>
                        <css.Titulo>
                            Sistema de Gerenciamento de
                            <br />
                            Atendimento ao Estudante
                        </css.Titulo>
                    </div>
                    <css.ContainerBody>
                        <css.Matricula type="number" holder="Sua Matricula" value={matricula}
                            onChange={matriculaOnChange} onKeyDown={matriculaKeyDown}
                            erro={erroCampo1} setErro={setErroCampo1}>
                            <css.ErroIcone visivel={erroCampo1 ? 1 : 0}/>
                        </css.Matricula>
                        <css.Senha type={passwordShowed ? "text" : "password"}
                            id="senha" holder="Sua Senha" value={senha} onChange={senhaOnChange} onKeyDown={senhaKeyDown}
                            erro={erroCampo2} setErro={setErroCampo2} ref={inputPassword}>
                            <css.ShowPassword visivel={passwordShowed ? 1 : 0} onClick={() => {
                                showPassword(!passwordShowed)
                            }} />
                            <css.ErroIcone visivel={erroCampo2 ? 1 : 0}/>
                        </css.Senha>
                        <css.Botao id="botaoLogin" variant="contained" color="primary"
                            waiting={esperandoAPI} onClick={logar} ref={botaoLogin}>
                            {
                                esperandoAPI == 1 ? (
                                    <Spinner />
                                ) : "Logar"
                            }
                        </css.Botao>
                        <css.LinkContainer>
                            <css.Coluna>
                                <css.LinkDiv>
                                    <Link to="/registrar">Registrar novo usuário</Link>
                                </css.LinkDiv>
                            </css.Coluna>
                            <css.Coluna>
                                <css.LinkDivRight>
                                    <LinkEstado to="/" estadoLogin="VISITANTE">Acessar sem login</LinkEstado>
                                </css.LinkDivRight>
                            </css.Coluna>
                        </css.LinkContainer>

                        <css.Alerta tipo="error" visivel={alertaAberto} setVisivel={setAlertaAberto} showIcon={false}>
                            <css.AlertaContent>
                                <div>{alertaTexto}</div>
                                <css.EsqueciSenha onClick={() => {setOpenPopup(true)}}>Esqueceu sua senha?</css.EsqueciSenha>
                            </css.AlertaContent>
                        </css.Alerta>
                    </css.ContainerBody>
                    <css.ContainerBottom>
                        <css.BottomContent>© 2020 SiGAÊ | Desenvolvimento:
                            <css.BottomLink href="https://portal.ifba.edu.br" target="_blank" rel="noreferrer">
                                IFBA
                            </css.BottomLink>
                        </css.BottomContent>
                    </css.ContainerBottom>
                </css.Centro>
            </css.Container>
            <RecuperarSenha open={openPopup} setOpen={setOpenPopup} />
        </>
    );
}
import React, { useState } from "react"
import Helmet from "react-helmet"
import { Link } from "react-router-dom"
import { ReactSVG } from "react-svg"
import { Button } from "@material-ui/core"
import { RemoveRedEye, Error } from "@material-ui/icons"

import Loading from "../../componentes/Loading/Loading"
import LinkEstado from "../../componentes/Rotas/LinkEstado/LinkEstado"
import InputLogin from "../../componentes/Genericos/InputLogin/InputLogin"
import Alerta from "../../componentes/Genericos/Alerta/Alerta"

import LogoSigae from "../../assets/imagens/sigae.svg"
import SpinnerLoading from "../../assets/imagens/spinner.svg"
import estilos from "./Login.module.css"
import responsive from "./Login_Responsive.module.css"

export default function Login() {
    const [matricula, setMatricula] = useState("")
    const [senha, setSenha] = useState("")

    const [place1Visivel, setPlace1Visivel] = useState(false)
    const [place2Visivel, setPlace2Visivel] = useState(false)

    const [erroCampo1, setErroCampo1] = useState(false)
    const [erroCampo2, setErroCampo2] = useState(false)

    const [passwordShowed, showPassword] = useState(false)

    const [logando, setLogando] = useState(false)

    const [alertaAberto, setAlertaAberto] = useState(false)
    const [alertaTexto, setAlertaTexto] = useState("NONE")

    const matriculaOnChange = (e) => {
        setMatricula(e.target.value)
        setPlace1Visivel(e.target.value.length > 0)
        if (e.target.value.length == 11) document.getElementById("loginSenha")?.focus()
    };
    const senhaOnChange = (e) => {
        setSenha(e.target.value)
        setPlace2Visivel(e.target.value.length > 0)
    };

    const matriculaKeyDown = (e) => {
        if (e.key == "Enter") document.getElementById("loginSenha")?.focus()
    };
    const senhaKeyDown = (e) => {
        if (e.key == "Enter") document.getElementById("botaoLogin")?.focus()
    };

    const logar = () => {
        if(matricula.length == 0) setErroCampo1(true)
        if(senha.length == 0) setErroCampo2(true)
        if(matricula.length > 0 && senha.length > 0) {
            setLogando(true)
            setAlertaAberto(!alertaAberto)
        }
    }

    return (
        <>
            <Helmet bodyAttributes={{ class: estilos.fundo }} />
            <Loading timer={500} />
            <div className={estilos.container}>
                <div className={`${estilos.centro} ${responsive.centro}`}>
                    <div>
                        <div>
                            <img src={LogoSigae} alt="Logo" />
                        </div>
                        <h1 className={estilos.titulo}>
                            Sistema de Gerenciamento de
                            <br />
                            Atendimento ao Estudante
                        </h1>
                    </div>
                    <div className={`${estilos.body} ${responsive.body}`}>
                        <InputLogin type="number" holder={"Sua Matricula"} visible={place1Visivel} value={matricula}
                            onChange={matriculaOnChange} onKeyDown={matriculaKeyDown}
                            erro={erroCampo1} setErro={setErroCampo1}>
                            <Error style={{opacity: erroCampo1 ? 100 : 0}} className={estilos.inputErro}/>
                        </InputLogin>
                        <InputLogin type={passwordShowed ? "text" : "password"} newClass={estilos.loginSenha}
                            id="loginSenha" holder={"Sua Senha"}
                            visible={place2Visivel} value={senha} onChange={senhaOnChange} onKeyDown={senhaKeyDown}
                            erro={erroCampo2} setErro={setErroCampo2}>
                            <RemoveRedEye style={{
                                color: `var(--${passwordShowed ? "foreground-roxo-brilhante" : "foreground-cinza-escuro"})`
                            }}
                            className={estilos.alternarSenha} onClick={() => {
                                showPassword(!passwordShowed)
                            }} />
                            <Error style={{opacity: erroCampo2 ? 100 : 0}} className={estilos.inputErro}/>
                        </InputLogin>
                        <Button className={estilos.botaoLogin} id="botaoLogin" variant="contained" color="primary"
                            onClick={logar}>
                            {
                                logando ? (
                                    <ReactSVG className={estilos.spinner} src={SpinnerLoading} />
                                ) : "Logar"
                            }
                        </Button>
                        <div className={estilos.linksContainer}>
                            <div className={estilos.linksColunas}>
                                <div className={estilos.linkDiv}>
                                    <Link to="/registrar">Registrar novo usuário</Link>
                                </div>
                            </div>
                            <div className={estilos.linksColunas}>
                                <div className={estilos.linkDiv} style={{float: "right"}}>
                                    <LinkEstado to="/" estadoLogin="VISITANTE">Acessar sem login</LinkEstado>
                                </div>
                            </div>
                        </div>
                        <Alerta tipo="error" visivel={alertaAberto} setVisivel={setAlertaAberto} showIcon={false} className={estilos.alerta}>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <div>{alertaTexto}</div>
                                <div className={estilos.esqueciSenha}>Esqueceu sua senha?</div>
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
        </>
    );
}

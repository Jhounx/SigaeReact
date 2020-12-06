import React, { useState, useContext } from "react"
import Helmet from "react-helmet"
import { Link, Redirect } from "react-router-dom"
import { ReactSVG } from "react-svg"
import { Button } from "@material-ui/core"
import { RemoveRedEye } from "@material-ui/icons"

import Loading from "../../componentes/Loading/Loading"
import InputLogin from "../../componentes/InputLogin/InputLogin"
import LinkEstado from "../../componentes/LinkEstado/LinkEstado"

import LogoSigae from "../../assets/imagens/sigae.svg"
import SpinnerLoading from "../../assets/imagens/spinner.svg"
import estilos from "./Login.module.css"

import { Alterar } from "../../assets/DadosGlobais"

export default function Login() {

    Alterar("estadoLogin", "VISITANTE")

    const [matricula, setMatricula] = useState("")
    const [senha, setSenha] = useState("")

    const [place1Visivel, setPlace1Visivel] = useState(false)
    const [place2Visivel, setPlace2Visivel] = useState(false)

    const [passwordShowed, showPassword] = useState(false)

    const [logando, setLogando] = useState(false)

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

    return (
        <>
            <Helmet bodyAttributes={{ class: estilos.fundo }} />
            <Loading timer={500} />
            <div className={estilos.container}>
                <div className={estilos.centro}>
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
                    <div className={estilos.body}>
                        <InputLogin type="number" holder={"Sua Matricula"} visible={place1Visivel} value={matricula}
                            onChange={matriculaOnChange} onKeyDown={matriculaKeyDown} />
                        <InputLogin type={passwordShowed ? "text" : "password"} newClass={estilos.loginSenha}
                            id="loginSenha" holder={"Sua Senha"}
                            visible={place2Visivel} value={senha} onChange={senhaOnChange} onKeyDown={senhaKeyDown}>
                            <RemoveRedEye style={{
                                color: `var(--${passwordShowed ? "foreground-roxo-brilhante" : "foreground-cinza-escuro"})`
                            }}
                            className={estilos.alternarSenha} onClick={() => {
                                showPassword(!passwordShowed)
                            }} />
                        </InputLogin>
                        <Button className={estilos.botaoLogin} id="botaoLogin" variant="contained" color="primary"
                            onClick={() => {
                                setLogando(true)
                            }}>
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
                                {/* <div onClick={<Redirecionar to="/" estadoLogin="VISITANTE"/>}  style={{float: "right"}} className={estilos.linkDiv}>Acessar sem login</div> */}
                            </div>
                        </div>
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

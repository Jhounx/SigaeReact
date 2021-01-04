import React, { useState, useEffect, useRef } from "react"
import Helmet from "react-helmet"
import { Link } from "react-router-dom"
import { InterfaceUtils, DadosUtils, ArrayUtils } from "../../assets/Utils"

import LoadingPagina from "../../componentes/Loadings/LoadingPagina/LoadingPagina"
import FadeDiv from "../../componentes/Utils/FadeDiv/FadeDiv"
import Footer from "../../componentes/Comuns/Footer/Footer"
import Toast from "../../assets/Toast"
import { ComboBox, MultipleComboBox } from "../../componentes/Genericos/ComboBox/ComboBox"
import InputText from "../../componentes/Genericos/InputText/InputText"
import { Sigae } from "../../componentes/Utils/SVG/SVG"
import { RegistroAPI } from "../../assets/API"
import * as css from "./Registrar.styles"
import * as pag1 from "./Pagina1.styles"
import * as pag2 from "./Pagina2.styles"

export default function Registrar() {
    const [pagina1, setPagina1] = useState(true)
    const [pagina2, setPagina2] = useState(false)

    const [enviandoCodigo, setEnviandoCodigo] = useState(false)

    const [dadosEssenciais, setDadosEssenciais] = useState({})

    const inputNome = useRef()
    const inputTurmas = useRef()
    const inputDisci = useRef()
    const inputEmail = useRef()
    const inputSenha1 = useRef()
    const inputSenha2 = useRef()

    useEffect(() => {
        InterfaceUtils.setMobileHeight()
        InterfaceUtils.setMobileFixed()
    }, [])

    const codigoOnChange = (codigo) => {
        if (codigo.length == 8) {
            enviarCodigo(codigo)
        }
    };

    const enviarCodigo = (codigo) => {
        if (!enviandoCodigo) {
            setEnviandoCodigo(true)
            RegistroAPI.dadosEssenciais(codigo, (resposta) => {
                setEnviandoCodigo(false)
                if (resposta.erro == undefined) {
                    setPagina1(false)
                    setTimeout(() => {
                        setDadosEssenciais(resposta)
                        setPagina2(true)
                    }, 500)
                } else {
                    Toast.error(resposta.erro)
                }
            })
        }
    }

    const verificar = () => {
        var nome = inputNome.current?.getAttribute("value")
        var turma = dadosEssenciais.tipo[0] == "ALU" ? inputTurmas.current?.getAttribute("value") : "nulo"
        var disci = dadosEssenciais.tipo[0] == "DOC" ? inputDisci.current?.getAttribute("value") : "nulo"
        var email = inputEmail.current?.value
        var senha1 = inputSenha1.current?.value
        var senha2 = inputSenha2.current?.value
        console.log(ArrayUtils.checkIfSomeEmpty(nome, turma, disci, email, senha1, senha2))
        // ArrayUtils.checkIfSomeEmpty(nome, turma, disci, email, senha1, senha2)
        // if(ArrayUtils.checkIfSomeEmpty(nome, turma, disci, email, senha1, senha2)) {
        //     console.log("tudo")
        // } else {
        //     console.log(nome, turma, disci, email, senha1, senha2)
        // }
    }

    const Pagina1 = React.memo(() => {
        return (
            <css.DigiteCodigoContainer>
                <pag1.TextoDigiteCodigo>Digite o código de inscrição</pag1.TextoDigiteCodigo>
                <css.DigiteCodigoContainer>
                    <pag1.InputCodigo onChange={codigoOnChange} />
                </css.DigiteCodigoContainer>
                <pag1.FadeSpinnerContainer >
                    <FadeDiv visible={enviandoCodigo} time={500}>
                        <pag1.SpinnerCodigo width={60} height={60} />
                    </FadeDiv>
                </pag1.FadeSpinnerContainer>
            </css.DigiteCodigoContainer>
        )
    })

    const Pagina2 = React.memo(() => {
        return (
            <pag2.Formulario id="formulario">
                <pag2.Tabela>
                    <tbody>
                        <tr>
                            <pag2.Celula>
                                <pag2.CelularContainer>
                                    <pag2.FaceIcon />
                                    <pag2.CelulaPergunta>Nome: </pag2.CelulaPergunta>
                                </pag2.CelularContainer>
                            </pag2.Celula>
                            <pag2.CelulaResposta>{dadosEssenciais.nome}</pag2.CelulaResposta>
                        </tr>
                        <tr>
                            <pag2.Celula>
                                <pag2.CelularContainer>
                                    <pag2.SchoolIcon />
                                    <pag2.CelulaPergunta>Matrícula: </pag2.CelulaPergunta>
                                </pag2.CelularContainer>
                            </pag2.Celula>
                            <pag2.CelulaResposta>{dadosEssenciais.matricula}</pag2.CelulaResposta>
                        </tr>
                        <tr>
                            <pag2.Celula>
                                <pag2.CelularContainer>
                                    <pag2.LocationCityIcon />
                                    <pag2.CelulaPergunta>Campus: </pag2.CelulaPergunta>
                                </pag2.CelularContainer>
                            </pag2.Celula>
                            <pag2.CelulaResposta>{dadosEssenciais.campus}</pag2.CelulaResposta>
                        </tr>
                        <tr>
                            <pag2.Celula>
                                <pag2.CelularContainer>
                                    <pag2.SupervisedUserCircleIcon />
                                    <pag2.CelulaPergunta>Tipo: </pag2.CelulaPergunta>
                                </pag2.CelularContainer>
                            </pag2.Celula>
                            <pag2.CelulaResposta>{dadosEssenciais.tipo[1]}</pag2.CelulaResposta>
                        </tr>
                    </tbody>
                </pag2.Tabela>
                <pag2.FormInputs>
                    <pag2.Alerta>
                        <pag2.AlertaHeader>
                            <pag2.AccountBoxIcon tamanho={24} />
                            <div>Abreviação do nome</div>
                        </pag2.AlertaHeader>
                        <pag2.AlertaBody>
                            Essa configuração define a abreviação do seu nome.
                            Seu nome aparecerá com essa abreviação na maioria das vezes.
                        </pag2.AlertaBody>
                    </pag2.Alerta>
                    <pag2.Div>
                        <ComboBox placeholder={"Escolha uma opção"} values={
                            DadosUtils.getPossibilidadesNomes(dadosEssenciais.nome)
                        } 
                        onInputChange={(e, v) => {
                            inputNome.current.setAttribute("value", v)
                            verificar()
                        }} ref={inputNome}/>
                    </pag2.Div>
                    {dadosEssenciais.tipo[0] == "ALU" && (
                        <div>
                            <pag2.Alerta>
                                <pag2.AlertaHeader>
                                    <pag2.SchoolIcon tamanho={24} />
                                    <div>Sua Turma</div>
                                </pag2.AlertaHeader>
                                <pag2.AlertaBody>
                                    Essa configuração define a abreviação do seu nome.
                                    Seu nome aparecerá com essa abreviação na maioria das vezes.
                                </pag2.AlertaBody>
                            </pag2.Alerta>
                            <pag2.Div>
                                <ComboBox placeholder={"Escolha uma opção"} grupos={
                                    dadosEssenciais.cursos
                                } onInputChange={(e, v) => {
                                    inputTurmas.current.setAttribute("value", v)
                                    verificar()
                                }} ref={inputTurmas}/>
                            </pag2.Div>
                        </div>
                    )}
                    {dadosEssenciais.tipo[0] == "DOC" && (
                        <div>
                            <pag2.Alerta>
                                <pag2.AlertaHeader>
                                    <pag2.SchoolIcon tamanho={24} />
                                    <div>Sua Disciplinas ministradas</div>
                                </pag2.AlertaHeader>
                                <pag2.AlertaBody>
                                    Selecione as disciplinas que você ministra.
                                    Essa opção pode ser alterada posteriormente
                                </pag2.AlertaBody>
                            </pag2.Alerta>
                            <pag2.Div>
                                <MultipleComboBox placeholder={"Escolha uma opção"} limitTags={2} grupos={
                                    dadosEssenciais.disciplinas
                                } onInputChange={(e, v) => {
                                    inputDisci.current.setAttribute("value", v)
                                    verificar()
                                }} ref={inputDisci}/>
                            </pag2.Div>
                        </div>
                    )}
                    <pag2.Alerta>
                        <pag2.AlertaHeader>
                            <pag2.EmailIconIcon tamanho={24} />
                            <div>Seu E-mail</div>
                        </pag2.AlertaHeader>
                        <pag2.AlertaBody>
                            O SiGAÊ enviará e-mails para a conta, informando a situação dos atendimentos,
                            essa opção pode ser desativada posteriormente. <br />
                            O e-mail também servirá para recuperar a conta caso haja perda de senha
                        </pag2.AlertaBody>
                    </pag2.Alerta>
                    <pag2.Div>
                        <InputText placeholder="Digite seu E-mail" height={50} erro={false} ref={inputEmail} onChange={verificar}/>
                    </pag2.Div>
                    <pag2.Alerta>
                        <pag2.AlertaHeader>
                            <pag2.SenhaIconIcon tamanho={24} />
                            <div>Sua senha</div>
                        </pag2.AlertaHeader>
                        <pag2.AlertaBody>
                            Digite uma senha que contenha entre 6 e 30 caracteres
                        </pag2.AlertaBody>
                    </pag2.Alerta>
                    <pag2.SenhaDiv>
                        <InputText placeholder="Digite sua senha" height={50} erro={false} type="password" 
                            ref={inputSenha1} onChange={verificar}/>
                        <pag2.CampoSenha2 placeholder="Repita sua senha" height={50} erro={false} type="password" 
                            ref={inputSenha2} onChange={verificar}/>
                    </pag2.SenhaDiv>
                    <pag2.EnviarDiv>
                        <pag2.Botao variant="contained" color="primary" disabled={true} onClick={() => {
                            verificar()
                        }}>Enviar</pag2.Botao>
                    </pag2.EnviarDiv>
                </pag2.FormInputs>
            </pag2.Formulario>
        )
    })

    return (
        <>
            <Helmet bodyAttributes={{ style: "overflow-x: hidden" }} />
            <LoadingPagina timer={500} />
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
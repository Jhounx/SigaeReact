import React, { useRef, useState, useEffect } from "react";
import * as pag2 from "./Pagina2.styles"
import { ComboBox, MultipleComboBox } from "../../../componentes/Genericos/ComboBox/ComboBox"
import InputText from "../../../componentes/Genericos/InputText/InputText"
import {useRegister} from "../context"
import { DadosUtils, ArrayUtils, RegexUtils } from "../../../assets/Utils"


const Pagina2 = () => {
    const {dadosEssenciais, setPage} = useRegister()
    const [emailErro, setEmailErro] = useState(false)

    const inputNome = useRef()
    const inputTurmas = useRef()
    const inputDisci = useRef()
    const inputEmail = useRef()
    const inputSenha1 = useRef()
    const inputSenha2 = useRef()
    const submitButton = useRef()

    const verify = {
        email: ()=> {
            const email = inputEmail.current.value
            const emailValido = RegexUtils.regexEmail(email)
            if(!emailValido && !emailErro) {setEmailErro(true); return false;}
            if(emailValido && emailErro) {
                setEmailErro(false); 
                executeVerify("email"); 
                return true;
            }
        },
        empty: () => {
            const refs = [inputNome, inputEmail, inputSenha1, inputSenha2]
            if(dadosEssenciais.tipo[0] == "ALU") refs.push(inputTurmas)
            else if(dadosEssenciais.tipo[0] == "DOC") refs.push(inputDisci)
            return !ArrayUtils.checkIfSomeEmpty(...refs)
        },

    }

    const executeVerify = (menos) => {
        const batata = verify
        if (menos != undefined) delete batata[menos]
        let retorno = true
        for (let verifier of Object.values(verify)) {
            if(!verifier()) retorno = false
        }

        if(retorno) {
            submitButton.current.setAttribute("disabled", false)
        } else {
            submitButton.current.setAttribute("disabled", true)
        }
    }

    const verificar = () => {
        const nome = inputNome.current?.getAttribute("value")
        const turma = dadosEssenciais.tipo[0] == "ALU" ? inputTurmas.current?.getAttribute("value") : "nulo"
        const disci = dadosEssenciais.tipo[0] == "DOC" ? inputDisci.current?.getAttribute("value") : "nulo"
        const email = inputEmail.current?.value
        const senha1 = inputSenha1.current?.value
        const senha2 = inputSenha2.current?.value
        const tudo = ArrayUtils.checkIfSomeEmpty(nome, turma, disci, email, senha1, senha2);
        
        const valido = () => {
            return verify.email()
        }

        if(valido() && !tudo) {
            submitButton.current.setAttribute("disabled", false)
        }
    }

    useEffect(()=>{
        if(!dadosEssenciais) {
            setPage(1)
        }
    }, [])

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
                    }} ref={inputNome} />
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
                            }} ref={inputTurmas} />
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
                            }} ref={inputDisci} />
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
                    <InputText placeholder="Digite seu E-mail" erro={emailErro} height={50} ref={inputEmail} onChange={verify.email} />
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
                        ref={inputSenha1} onChange={verificar} />
                    <pag2.CampoSenha2 placeholder="Repita sua senha" height={50} erro={false} type="password"
                        ref={inputSenha2} onChange={verificar} />
                </pag2.SenhaDiv>
                <pag2.EnviarDiv>
                    <pag2.Botao variant="contained" ref={submitButton} color="primary" disabled={true} onClick={() => {
                       
                    }}>Enviar</pag2.Botao>
                </pag2.EnviarDiv>
            </pag2.FormInputs>
        </pag2.Formulario>
    );
}

export default Pagina2;
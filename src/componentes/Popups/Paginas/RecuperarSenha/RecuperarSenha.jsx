import { React, useState } from "react"
import { Base, PopupHeader, SigaeIcon, Titulo, PopupBody, PopupBottom, BotaoCancelar } from "../../Base/Base"
import { Button } from "@material-ui/core"
import { Spinner } from "../../../Comuns/SVG/SVG"
import { RegexUtils } from "../../../../assets/Utils"
import { EmailAPI } from "../../../../assets/API"

import InputLogin from "../../../Genericos/InputLogin/InputLogin"
import Alerta from "../../../Genericos/Alerta/Alerta"
import styled from "styled-components"

export default function RecuperarSenha({ open, setOpen }) {
    const [email, setEmail] = useState("")
    const [botaoAtivo, setBotaoAtivo] = useState(true)
    const [esperandoAPI, setEsperandoAPI] = useState(0)
    const [showAlerta, setShowAlerta] = useState(false)
    const [emailResposta, setEmailResposta] = useState("pedrocmota1@hotmail.com")
    const emailOnChange = (e) => {
        setEmail(e.target.value)
        setBotaoAtivo(!RegexUtils.regexEmail(e.target.value))
    };
    const enviarEmail = (e) => {
        var waiting = e.currentTarget.getAttribute("waiting")
        if (waiting == 0) {
            setEsperandoAPI(1)
        }
    }
    return (
        <Base open={open} largura={420} altura={380} medialargura={{ "height": "400px" }}>
            <PopupHeader>
                <SigaeIcon />
                <Titulo>Recuperar senha</Titulo>
            </PopupHeader>
            <PopupBody overflowY={false}>
                <CustumInputLogin type="email" holder={"Digite seu email"}
                    value={email} onChange={emailOnChange} disabled={esperandoAPI} />
                <CustumButton disabled={botaoAtivo} waiting={esperandoAPI} variant="contained" color="primary"
                    onClick={enviarEmail}>
                    {
                        esperandoAPI ? (
                            <Spinner width={26} height={26} />
                        ) : "Logar"
                    }
                </CustumButton>
                <CustumAlerta tipo="info" visivel={showAlerta} setVisivel={setShowAlerta} showIcon={false}>
                    Se <EmailText>{emailResposta}</EmailText> corresponder a um e-mail registrado,
                    enviaremos um e-mail com um link para o registro de uma nova senha
                </CustumAlerta>
            </PopupBody>
            <PopupBottom>
                <BotaoCancelar onClick={() => { setOpen(false) }}>Sair</BotaoCancelar>
            </PopupBottom>
        </Base>
    );
}

const CustumInputLogin = styled(InputLogin)`
    input {
        padding-left: 15px;
        font-size: 16px;
    }
    .inputLoginHolder {
        background: linear-gradient(0deg, white, white);
    }
`

const CustumButton = styled(Button)`
    width: 100%;
    height: 36px !important;
    margin-top: 6px !important;
`

const CustumAlerta = styled(Alerta)`
    margin-top: 10px !important;
    flex: 1;
`

const EmailText = styled.b`
    word-break: break-all
`
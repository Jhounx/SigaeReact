import { React, useState } from "react"
import { Base, PopupHeader, SigaeIcon, Titulo, PopupBody, PopupBottom, BotaoCancelar } from "../../Base/Base"
import { Button } from "@material-ui/core"
import InputLogin from "../../../Genericos/InputLogin/InputLogin"
import Alerta from "../../../Genericos/Alerta/Alerta"
import { RegexUtils } from "../../../../assets/Utils"
import styled from "styled-components"

export default function RecuperarSenha({ open, setOpen }) {
    const [email, setEmail] = useState("")
    const [botaoAtivo, setBotaoAtivo] = useState(true)
    const [showAlerta, setShowAlerta] = useState(false)
    const [emailResposta, setEmailResposta] = useState("null")
    const emailOnChange = (e) => {
        setEmail(e.target.value)
        setBotaoAtivo(!RegexUtils.regexEmail(e.target.value))
    };
    return (
        <Base open={open} largura={420} altura={360}>
            <PopupHeader>
                <SigaeIcon />
                <Titulo>Recuperar senha</Titulo>
            </PopupHeader>
            <PopupBody>
                <CustumInputLogin type="email" holder={"Digite seu email"} value={email} onChange={emailOnChange} />
                <CustumButton disabled={botaoAtivo} variant="contained" color="primary"
                    onClick={() => { setShowAlerta(true) }}>
                    Enviar
                </CustumButton>
                <Alerta style={{marginTop: "10px"}} tipo="info" visivel={showAlerta} setVisivel={setShowAlerta} showIcon={false}>
                    Se <b style={{wordBreak: "break-all"}}>{emailResposta}</b> corresponder a um e-mail registrado, 
                    enviaremos um e-mail com um link para o registro de uma nova senha
                </Alerta>
            </PopupBody>
            <PopupBottom>
                <BotaoCancelar onClick={() => { setOpen(false) }}>Sair</BotaoCancelar>
            </PopupBottom>
        </Base>
    );
}

const CustumInputLogin = styled(InputLogin)`
    input {
        padding-left: 10px;
    }
    .inputLoginHolder {
        background: linear-gradient(0deg, white, white);
    }
`

const CustumButton = styled(Button)`
    width: 100%;
    margin-top: 6px !important;
`
import {React, useState} from "react"
import { Base, PopupHeader, SigaeIcon, Titulo, PopupBody, PopupBottom, BotaoCancelar } from "../../Base/Base"
import InputLogin from "../../../Genericos/InputLogin/InputLogin"
import styled from "styled-components"

const InputLoginCustum = styled(InputLogin)`
    .inputPlaceholder-container {
        color: white;
    }
`

export default function RecuperarSenha({open, setOpen}) {
    const [email, setEmail] = useState("")
    const emailOnChange = (e) => {
        setEmail(e.target.value)
        //if (e.target.value.length == 11) document.getElementById("loginSenha")?.focus()
    };
    return (
        <Base open={open} largura={420} altura={320}>
            <PopupHeader>
                <SigaeIcon/>
                <Titulo>Recuperar senha</Titulo>
            </PopupHeader>
            <PopupBody>
                <InputLoginCustum holder={"Digite seu email"} value={email}
                    onChange={emailOnChange}/>
            </PopupBody>
            <PopupBottom>
                <BotaoCancelar onClick={() => {setOpen(false)}}>Sair</BotaoCancelar>
            </PopupBottom>
        </Base>
    );
}

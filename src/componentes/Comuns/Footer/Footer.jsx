import React from "react"
import {FooterContainer, FooterLinha1, SigaeTitulo, FooterLinha2, Desenvolvido, 
    DesenvolvidoLink1, 
    DesenvolvidoLink2, Break} from "./Footer.styles"

export default function Footer() {
    return (
        <FooterContainer>
            <FooterLinha1>
                <SigaeTitulo>Sistema de Gerenciamento de<Break/> Atendimento ao Estudante</SigaeTitulo>
            </FooterLinha1>
            <FooterLinha2>
                <Desenvolvido>© 2020 SiGAÊ | Desenvolvimento:</Desenvolvido>
                <DesenvolvidoLink1 href="http://portal.ifba.edu.br">Instituto Federal da Bahia</DesenvolvidoLink1>
                <DesenvolvidoLink2 href="http://portal.ifba.edu.br">IFBA</DesenvolvidoLink2>
            </FooterLinha2>
        </FooterContainer>
    )
}

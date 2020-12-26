import React from "react"
import * as css from "./Footer.styles"

export default function Footer() {
    return (
        <css.FooterContainer>
            <css.FooterLinha1>
                <css.SigaeTitulo>Sistema de Gerenciamento de<css.Break/> Atendimento ao Estudante</css.SigaeTitulo>
            </css.FooterLinha1>
            <css.FooterLinha2>
                <css.Desenvolvido>© 2020 SiGAÊ | Desenvolvimento:</css.Desenvolvido>
                <css.DesenvolvidoLink1 href="http://portal.ifba.edu.br">Instituto Federal da Bahia</css.DesenvolvidoLink1>
                <css.DesenvolvidoLink2 href="http://portal.ifba.edu.br">IFBA</css.DesenvolvidoLink2>
            </css.FooterLinha2>
        </css.FooterContainer>
    )
}

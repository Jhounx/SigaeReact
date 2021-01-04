import styled from "styled-components"
import Input from "../../componentes/Genericos/InputText/InputText"
import Button from "@material-ui/core/Button";
import { Face, School, LocationCity, SupervisedUserCircle, AccountBox, Email, VpnKey } from "@material-ui/icons/";

export const Formulario = styled.form`
    width: 600px;
    flex: 1;
`

export const FormInputs = styled.div`
    margin-top: 5px;
`

export const Tabela = styled.table`
    width: 100%;
`

export const Celula = styled.td`
    font-size: 22px;
    padding: 15px 5px;
    text-align: left;
    vertical-align: middle;
`

export const CelularContainer = styled.div`
    display: inline-flex;
`

export const CelulaPergunta = styled.div`
    margin-left: 6px;
`

export const CelulaResposta = styled(Celula)`
    font-weight: bold;
`

export const Alerta = styled.div`
    background-color: rgb(78, 95, 120);
    color: rgb(241, 242, 243);
    padding: .75rem 1.25rem;
    border-radius: 4px;
`

export const AlertaHeader = styled.div`
    display: inline-flex;
    div {
        display: flex;
        align-items: center;
        margin-left: 6px;
    }
`

export const AlertaBody = styled.div`
    margin-top: 10px;
`

export const Div = styled.div`
    margin-top: 18px;
    margin-bottom: 18px;
`

export const SenhaDiv = styled.div`
    margin-top: 25px;
`

export const CampoSenha2 = styled(Input)`
    margin-top: 30px;
`

export const EnviarDiv = styled.div`
    width: 100%;
    margin-top: 50px;
    margin-bottom: 15px;
`

export const Botao = styled(Button)`
    width: 100%;
`


// Icons

export const FaceIcon = styled(Face)`
    width: ${(props) => props.tamanho || "30"}px !important;
    height: ${(props) => props.tamanho || "30"}px !important;
`

export const SchoolIcon = styled(School)`
    width: ${(props) => props.tamanho || "30"}px !important;
    height: ${(props) => props.tamanho || "30"}px !important;
`

export const LocationCityIcon = styled(LocationCity)`
    width: ${(props) => props.tamanho || "30"}px !important;
    height: ${(props) => props.tamanho || "30"}px !important;
`

export const SupervisedUserCircleIcon = styled(SupervisedUserCircle)`
    width: ${(props) => props.tamanho || "30"}px !important;
    height: ${(props) => props.tamanho || "30"}px !important;
`

export const AccountBoxIcon = styled(AccountBox)`
    width: ${(props) => props.tamanho || "30"}px !important;
    height: ${(props) => props.tamanho || "30"}px !important;
`

export const EmailIconIcon = styled(Email)`
    width: ${(props) => props.tamanho || "30"}px !important;
    height: ${(props) => props.tamanho || "30"}px !important;
`

export const SenhaIconIcon = styled(VpnKey)`
    width: ${(props) => props.tamanho || "30"}px !important;
    height: ${(props) => props.tamanho || "30"}px !important;
`
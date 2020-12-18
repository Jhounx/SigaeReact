import {Dados} from "./DadosGlobais"

export class Request {

    static enviar() {
        
    }
}

export class LoginAPI {

    /**
     * 
     * @param {Function} callback 
     */
    static init(callback) {
        if(Object.keys(Dados).length > 0) return
        setTimeout(() => {
            callback(
                {estadoLogin: "NAO_LOGADO"}
            )
        }, 1000);
    }

    static Logar(matricula, senha, callback) {
        setTimeout(() => {
            callback(
                {resposta: "A matrícula inserida não pertence a uma conta"}
            )
        }, 1000);
    }
}

export class EmailAPI {

    static enviarEmailRecu(email, callback) {
        setTimeout(() => {
            callback(
                {retorno: "OK"}
            )
        }, 1000);
    }
}
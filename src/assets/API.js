import {Dados} from "./DadosGlobais"

export class Request {

    static enviar() {

    }
}

export class LoginAPI {

    static init(callback) {
        if(Object.keys(Dados).length > 0) return
        setTimeout(() => {
            callback(
                {estadoLogin: "NAO_LOGADO"}
            )
        }, 1000);
    }
}
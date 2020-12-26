// import {Dados} from "./DadosGlobais"

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

export class RegistroAPI {

    static dadosEssenciais(codigo, callback) {
        if(codigo == "00000000") {
            setTimeout(() => {
                callback(
                    {
                        nome: "Pedro Henrique Cerqueira Mota",
                        matricula: "20190058123",
                        tipo: "DISCENTE",
                        campus: "Salvador",
                        cursos: {
                            "Automação Industrial": [
                                "5811",
                                "5812",
                                "5813",
                                "5821",
                                "5822",
                                "5831",
                                "5832",
                                "5841",
                                "5842"
                            ],
                            "Eletrônica": [
                                "9811",
                                "9812",
                                "9813",
                                "9821",
                                "9822",
                                "9831",
                                "9832",
                                "9841"
                            ],
                            "Eletrotécnica": [
                                "2811",
                                "2812",
                                "2813",
                                "2821",
                                "2822",
                                "2831",
                                "2832",
                                "2841"
                            ],
                            "Geologia": [
                                "10811",
                                "10821",
                                "10831",
                                "10841"
                            ],
                            "Química": [
                                "8811",
                                "8812",
                                "8813",
                                "8814",
                                "8821",
                                "8822",
                                "8823",
                                "8831",
                                "8832",
                                "8833",
                                "8841",
                                "8842"
                            ],
                            "Refrigeração": [
                                "11811",
                                "11812",
                                "11813",
                                "11821",
                                "11822",
                                "11831",
                                "11832",
                                "11841"
                            ],
                            "Mecânica": [
                                "6811",
                                "6812",
                                "6813",
                                "6821",
                                "6822",
                                "6831",
                                "6832",
                                "6841"
                            ],
                            "Edificações": [
                                "1811",
                                "1812",
                                "1813",
                                "1821",
                                "1822",
                                "1831",
                                "1832",
                                "1841"
                            ]
                        }
                    }
                )
            }, 1000);
        }
        if(codigo == "11111111") {

        }
        if(codigo == "22222222") {
            setTimeout(() => {
                callback({
                    erro: "Código inválido"
                })
            }, 1000)
        }
        if(codigo == "33333333") {
            setTimeout(() => {
                callback({
                    erro: "Código já utilizado"
                })
            }, 1000)
        }
    }
}

export class EmailAPI {

    static enviarEmailRecu(email, callback) {
        setTimeout(() => {
            callback(
                {status: "OK"}
            )
        }, 1000);
    }
}
var Dados = {}
/**
 * 
 * @param {JSON} obj 
 */
function Definir(json) {
    Dados = json
}

function Alterar(key, value) {
    Dados[key] = value
}

export {Dados, Definir, Alterar}
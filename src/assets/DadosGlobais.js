var Dados = {}
var updateEstadoApp
var updateCrashErro

function init(json) {
    Dados = json
}

function alterar(key, value) {
    Dados[key] = value
}

function setCrashState(stateFun, stringFun) {
    updateEstadoApp = stateFun
    updateCrashErro = stringFun
}

export {
    Dados,
    updateEstadoApp,
    updateCrashErro,
    init,
    alterar,
    setCrashState
}
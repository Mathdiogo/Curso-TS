"use strict";
// 9 - Tipo Never
// Tipo never é parecido com o VOID, pois nao "retorna nada"
// porem ele pode ser utilizado quando a função nao retorna nada
// Exemplo: Retorno de Erros
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage("algum erro")

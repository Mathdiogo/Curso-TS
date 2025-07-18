"use strict";
// 7 - Argumentos/parametros Default
// Aqui, estamos colocando o valor de n = 10 como default
function somaDefault(m, n = 10) {
    return m + n;
}
// porem, se eu quiser realizar a soma com qualquer outro valor é só eu passar por parametro
console.log(somaDefault(20)); // Aqui passando apenas 1 argumento a soma vai ser 30, pois 20 + 10 default = 30
// caso eu nao queria mais usar o valor default, posso apenas passar outro parametro no lugar
console.log(somaDefault(12, 12));

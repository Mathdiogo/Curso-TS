"use strict";
// 6 - Argumentos/parametros Opicionais
function modernGreeting(name, greet) {
    // Sempre que formos utilizar um arg nao opicional devemos fazer o narrowing para verificar o tipo e tomar diferente ações ou chamadas dependendo dos argumentos
    if (greet) {
        return `olá ${greet} ${name}, tudo bem?`;
    }
    return `olá ${name}, tudo bem?`;
}
console.log(modernGreeting("matheus")); // Aqui se eu n colocar na função greeting o "?", essa chamada com apena 1 argumento de 2 n funcionaria, o ? o faz um arg opicional
console.log(modernGreeting("Matheus", "Dr."));

"use strict";
// 2 - Callback como argumento
function greeting(name) {
    return `olá ${name}`;
}
// A função 'preGreeting' espera dois parâmetros:
// 1. Uma função que receba uma string como argumento e retorne uma string (como a função 'greeting').
// 2. Uma string que será passada como argumento para essa função.
// Essa abordagem demonstra o uso de callback functions em TypeScript.
// Essa função espera uma outra função como parametro, essa função esperada precisa retornar uma string, exatamente como faz a greeting
// Alem, de uma função ela espera uma outra string
function preGreeting(f, userName) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Matheus");
preGreeting(greeting, "Rayssa");

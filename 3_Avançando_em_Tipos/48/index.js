"use strict";
// 18 - Symbol
// Variaveis uniocas e imutáveis, mesmo que tenham o mesmo nome e conteudo
let symbolA = Symbol("A");
let symbolB = Symbol("A");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB); // false, porque cada Symbol é único

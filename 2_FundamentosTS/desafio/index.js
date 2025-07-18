"use strict";
// 1. Crie uma variável que recebe um número;
let Number1 = 123;
// 2. Converta este número para string em uma nova variável;
// 3. Esta variável de conversão deve estar tipada por inferência;
let numberAsString = Number1.toString();
// ou let numberAsString = String(myNumber);
// 4. Imprima este número em uma string maior, utilizando o recurso de
//    template strings ou concatenação;
// Usando template strings (recomendado para legibilidade)
console.log(`O número convertido para string é: ${numberAsString}`);
console.log("O número convertido para texto é: " + numberAsString);
// Usando concatenação
// console.log("O número convertido para string é: " + numberAsString);

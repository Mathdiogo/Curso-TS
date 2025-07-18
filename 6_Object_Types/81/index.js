"use strict";
// 8 - Tuplas
const myNumbersArray = [1, 2, 3, 4, 5];
//const myNumbersArray2: fiveNumbers = [10, 20, 30, 40, 50]; // Isso é válido, pois estamos definindo 5 números, que é o esperado pela tupla.
//const mixedArray: fiveNumbers = [1, "dois", true];// Isso é inválido, pois estamos tentando colocar tipos diferentes em uma tupla que espera apenas números.
console.log(myNumbersArray);
const anotherUser = ['Matheus', 25];
console.log(anotherUser[0]); // Matheus
console.log(anotherUser[1]); // 25  
anotherUser[0] = 'Diogo'; // Podemos alterar o valor do nome, pois é uma tupla mutável.
anotherUser[1] = 26; // Podemos alterar o valor da idade, pois é uma tupla mutável.
//anotherUser[1] = 'texto'// Isso é inválido, pois estamos tentando colocar um tipo diferente em uma tupla que espera um número nesse elemento. const anotherUser: nameAndAge = ['Matheus', 25];

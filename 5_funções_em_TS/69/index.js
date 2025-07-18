"use strict";
// 10 - Rest Operator
// Rest operator sao os ... que significam que eu nao sei quantos valores eu vou receber, no caso da soma de numeros, quero somar todos
// mas nao sei a quantidade de numeros que eu vou receber, ele vai formar uma lista (array) dos numeros que vamos receber
function someAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(someAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 131, 453, 453, 467, 345, 243));
console.log(someAll(5, 5));

// 8 - Tuplas

// Tuplas são uma forma de definir arrays com tipos específicos para cada posição.
// Elas são úteis quando queremos garantir que um array terá um número fixo de elementos, cada um com um tipo específico.



// Tupla é como se fosse um array, porem definimos a quantidade e o tipo de cada elemento.

type fiveNumbers = [number, number, number, number, number];

const myNumbersArray: fiveNumbers = [1, 2, 3, 4, 5];

//const myNumbersArray2: fiveNumbers = [10, 20, 30, 40, 50]; // Isso é válido, pois estamos definindo 5 números, que é o esperado pela tupla.

//const mixedArray: fiveNumbers = [1, "dois", true];// Isso é inválido, pois estamos tentando colocar tipos diferentes em uma tupla que espera apenas números.

console.log(myNumbersArray);

type nameAndAge = [string, number];

const anotherUser: nameAndAge = ['Matheus', 25];

console.log(anotherUser[0]); // Matheus
console.log(anotherUser[1]); // 25  

anotherUser[0] = 'Diogo'; // Podemos alterar o valor do nome, pois é uma tupla mutável.
anotherUser[1] = 26; // Podemos alterar o valor da idade, pois é uma tupla mutável.
//anotherUser[1] = 'texto'// Isso é inválido, pois estamos tentando colocar um tipo diferente em uma tupla que espera um número nesse elemento. const anotherUser: nameAndAge = ['Matheus', 25];
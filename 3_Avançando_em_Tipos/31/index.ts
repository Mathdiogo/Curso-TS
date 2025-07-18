// 1 - Arrays

let listNumbers: number[] = [1, 2, 3, 4, 5];

console.log("Lista de números:", listNumbers);

listNumbers.push(6);

console.log("Numero adicionado:", 6);

console.log("Lista de números:", listNumbers);

console.log("Acessando o terceiro elemento: " + listNumbers[2]); // Acessando o terceiro elemento (índice 2)


const listNames: string[] = ["Matheus", "João", "Rayssa", "Ana"];

console.log("Lista de nomes:", listNames);

// 2 - Outra sinataxe para declarar arrays
const listNames2: Array<string> = ["Matheus", "João", "Rayssa", "Ana"];
const listNumbers2: Array<number> = [100, 200, 300, 400, 500];
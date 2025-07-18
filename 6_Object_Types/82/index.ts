// 9 - Tuplas com Readonly

// Readonly Tuples são tuplas que não podem ser modificadas após a sua criação.
// Elas são úteis quando queremos garantir que os dados não serão alterados acidentalmente.

// aqui seria exatamente o funcionamento da tupla em python, onde definimos o tipo de cada elemento e não podemos alterar os valores depois de definidos.


function showNumbers (numbers: readonly [number, number, number]) {
    //numbers[0] = 10; // Isso causaria um erro, pois estamos tentando modificar um elemento de uma tupla readonly
    // numbers.push(4); // Isso também causaria um erro, pois não podemos adicionar
    console.log(numbers[0]); // Acessando o primeiro elemento
    console.log(numbers[1]); // Acessando o segundo elemento
    console.log(numbers[2]); // Acessando o terceiro elemento
}

showNumbers([1, 2, 3]); // Chamando a função com uma tupla de números

// agora vamos evidenciar que não podemos alterar os valores da tupla
//showNumbers([1, 2, 3][0] = 10); // // Isso causaria um erro, pois estamos tentando modificar um elemento de uma tupla readonly

"use strict";
// 4 - Type Parameters
// Type Parameters são uma maneira de criar funções ou classes que podem trabalhar com diferentes tipos de dados.
// Eles permitem que você defina um tipo de dado genérico que pode ser substituído por qualquer outro tipo quando a função ou classe é usada.
// Type parameters é um recurso de Generics utilizado para dizer que algum parametro de uma função é a chave de um objeto. 
//Que pode ser utilizado para acessar o valor de uma propriedade de um objeto.
// Dessa maneira conseguimos criar uma ligação entre o tipo do objeto e o tipo da chave, garantindo que a chave seja válida para o objeto.
function getSomeKey(obj, key) {
    // Aqui, T é um tipo genérico que representa o objeto
    // K é um tipo genérico que deve ser uma chave de T
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`; // Retorna o valor da propriedade especificada pela chave
}
const server = {
    hd: '2TB',
    ram: '32GB',
};
console.log(getSomeKey(server, 'hd')); // A chave hd está presente no objeto e tem o valor de 2TB
console.log(getSomeKey(server, 'ram')); // A chave ram está presente no objeto e tem o valor de 32GB

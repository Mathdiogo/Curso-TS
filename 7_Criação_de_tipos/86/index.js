"use strict";
// 1 - Relembrando Generics em TypeScript
// Generics são uma maneira de criar componentes reutilizáveis que podem trabalhar com diferentes tipos de dados.
// Eles permitem que você defina um tipo de dado genérico que pode ser substituído por qualquer outro tipo quando o componente é usado.
// Nesse caso, vamos criar uma função que aceita um parâmetro de tipo genérico T e retorna uma string formatada com esse dado.
// Isso é útil quando queremos que a função funcione com diferentes tipos de dados, como números, strings, arrays ou objetos, sem precisar definir um tipo específico para cada caso.
function showData(data) {
    return `O dado é: ${data}`;
}
console.log(showData(5));
console.log(showData("Olá, TypeScript!"));
console.log(showData(["teste", "de", "generics"]));
console.log(showData({ nome: "João", idade: 30 }));

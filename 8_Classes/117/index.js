"use strict";
// 19 - relação entre classes
// Classes são estruturas que permitem criar objetos com propriedades e métodos.
// Elas podem ser usadas para modelar entidades do mundo real, encapsulando dados e comportamentos relacionados.
// Classes podem herdar de outras classes, permitindo reutilização de código e especialização de comportamentos.
//Podemos criar um objeto com base em outra classe, ou seja, podemos criar uma classe que herda de outra classe,
// e assim podemos reutilizar o código da classe pai na classe filha.
// as classes precisam ser exatamente iguais, ou seja, se a classe pai tiver um método, a classe filha também precisa ter esse método, mesmo que não faça nada.
class Dog {
}
class Cat {
}
const doguinho = new Cat(); // Isso é possível, pois as classes Dog e Cat têm a mesma estrutura (propriedade name).
console.log(doguinho); // Saída: Cat { name: undefined }   

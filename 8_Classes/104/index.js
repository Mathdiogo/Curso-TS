"use strict";
// 7 -  Get em Classes
// getters sao uma forma de retornar propriedades de uma classe/objeto de forma controlada.
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get FullName() {
        return `${this.name} ${this.surname}`;
    }
}
const matheusPerson = new Person('Matheus', 'Diogo');
// Exemplo de uso do getter FullName
console.log(matheusPerson.FullName); // Matheus Diogo

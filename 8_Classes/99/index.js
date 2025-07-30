"use strict";
// 2 - Constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser('João', 25);
console.log(joao);
//const pedro = new NewUser(12,12); // Erro: Argument of type 'number' is not assignable to parameter of type 'string'.

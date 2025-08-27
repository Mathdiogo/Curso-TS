"use strict";
// 6 importando tipos
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new Person("João", 30);
console.log(joao.name); // João
console.log(joao.age); // 30
console.log(joao); // Person { name: 'João', age: 30 }

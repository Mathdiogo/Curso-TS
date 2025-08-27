// 6 importando tipos

import { Human } from "./myType";

class Person implements Human {
    name;
    age;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const joao = new Person("João", 30);

console.log(joao.name); // João
console.log(joao.age); // 30
console.log(joao); // Person { name: 'João', age: 30 }
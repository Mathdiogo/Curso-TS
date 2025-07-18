// 5 - Herança de Interfaces / Extends Types 


// A herança de interfaces é uma forma de criar uma nova interface que herda as propriedades de outra interface.
// É uma forma de reutilizar código, ou seja, não precisamos criar uma nova interface do zero, podemos apenas herdar as propriedades de outra interface.


interface Human{
    name: string;
    age: number;
}

interface SuperHuman extends Human {
    superPower: string[];
}

const matheus: SuperHuman = {
    name: 'Matheus',
    age: 24,
    superPower: ['Invisibility', 'Super strength']
};


console.log(matheus)

console.log(matheus.name)
console.log(matheus.age)
console.log(matheus.superPower[0])
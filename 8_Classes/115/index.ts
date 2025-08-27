// 17 - class expression

// class expression
// é uma expressão que define uma classe
// é uma maneira de criar classes de forma mais dinâmica, permitindo que você defina classes em tempo de execução.

// A diferença entre class expression e class declaration
// class declaration é uma declaração de classe nomeada
// class expression pode ser anônima ou nomeada
// class expression é útil quando você precisa criar uma classe de forma dinâmica, por exemplo, quando você precisa passar uma classe como argumento para uma função ou quando você precisa criar uma classe dentro de outra classe.
//Recurso para criar uma classe anonima


const MyClass1 = class<T> {
    name: T;
    constructor(name: T) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}

const pessoa = new MyClass1<string>("Matheus");
pessoa.greet(); // Hello, Matheus!

console.log(pessoa)
console.log(pessoa.name); // Matheus

// 18 - Abstract Classes

// Classes abstratas são aquelas que não podem ser instanciadas diretamente.
// Elas servem como base para outras classes, que devem implementar os métodos abstratos definidos nelas.

// todos os metodos dela devem ser implementados nas classes que herdam dela, caso contrário, a classe que herda dela também será uma classe abstrata.

// nao podemos instanciar objetos de uma classe abstrata, mas podemos instanciar objetos de classes que herdam dela, desde que implementem todos os métodos abstratos.

abstract class AbstractClass {
    abstract showName(): void;
}

class AbstractExample extends AbstractClass {

    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }
    showName(): void {
        console.log(`O Nome é: ${this.name}`);
    }
}

const newAbstractObject = new AbstractExample("Matheus Diogo");

newAbstractObject.showName(); // O Nome é: Matheus Diogo
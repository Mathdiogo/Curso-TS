// 5 - Métodos nas classes


//Métodos são funções que pertencem a uma classe. Eles podem ser usados para realizar ações ou cálculos relacionados à instância da classe.
//Podemos definir métodos dentro de uma classe e chamá-los através de instâncias dessa classe


class Anao {
    name:string
    age:number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Olá estranho! Meu nome é ${this.name} e tenho ${this.age} anos. Qual é o seu nome?`);
    }
}

const jymmy = new Anao('Jimmy', 100);

console.log(jymmy.name);

console.log(jymmy.age);

jymmy.greeting(); // Chamando o método greeting da instância jymmy
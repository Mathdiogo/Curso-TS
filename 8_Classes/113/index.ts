// 15 - Generics classes

// Generics permitem que você crie classes, interfaces e funções que podem trabalhar com diferentes tipos de dados sem perder a segurança de tipo.
// Isso é útil quando você deseja criar estruturas de dados ou algoritmos que podem ser reutilizados com diferentes tipos.


class item<T, U> {
    first: T;
    second: U;

    constructor(first: T, second: U) {
        this.first = first;
        this.second = second;
    }

    get showFirst(): string {
        return `o first é: ${this.first}`;
    }
    get showSecond(): string {
        return `o second é : ${this.second}`;
    }
}


const newItemm = new item("caixa", "Surpresa");

console.log(newItemm)

console.log(newItemm.showFirst); // o first é: caixa
console.log(newItemm.showSecond); // o second é : Surpresa

//podemos verifica o tipo de cada propriedade
console.log(typeof newItemm.first); // string
console.log(typeof newItemm.second); // string

const second  = new item<number, string>(1, "um");
console.log(second);
console.log(second.showFirst); // o first é: 1
console.log(second.showSecond); // o second é : um  
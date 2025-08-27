// 5 - Acessor decorator

// Semelhante ao decorator de método;

// porem, ele é utilizado apenas em acessores (getters e setters)

// Podemos alterar a execução antes de um  getters ou setters

class Monster {
    name?
    age?

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    @enumerable(true)
    get showName() {
        return `Nome do Monstro: ${this.name}`;
    }

    @enumerable(true)
    get showAge() {
        return `Idade do Monstro: ${this.age}`;
    }
}

const charmander = new Monster("Charmander", 10);

console.log(charmander.showName);
console.log(charmander.showAge);
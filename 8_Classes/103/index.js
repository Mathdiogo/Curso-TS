"use strict";
// 6 - this em classes
// O this em classes se refere à instância atual da classe, permitindo acessar propriedades e métodos daquela instância.
// Ele é usado para referenciar os campos e métodos da própria classe, garantindo que as operações sejam realizadas no contexto correto.
class Truck {
    constructor(name, model, hp) {
        this.name = name;
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`O nome do caminhão é ${this.name}, o modelo é ${this.model} e a potência é de ${this.hp} cavalos.`);
    }
}
const truck1 = new Truck('Volvo', 'FH16', 750);
const truck2 = new Truck('Scania', 'R620', 620);
truck1.showDetails();
truck2.showDetails();

"use strict";
// 3 - Campos Read Only nas classes
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fuscaCar = new Car('Fusca');
console.log(fuscaCar);
console.log(fuscaCar.name);
console.log(fuscaCar.wheels);
fuscaCar.name = 'Fusca Turbo'; // Isso é permitido, pois name não é readonly
//fuscaCar.wheels = 5; // Isso vai gerar um erro, pois wheels é readonly

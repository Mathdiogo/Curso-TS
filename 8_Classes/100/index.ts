// 3 - Campos Read Only nas classes


class Car {
    name: string;
    readonly wheels: number = 4;

    constructor(name:string){
        this.name = name;
    }
}

const fuscaCar: Car = new Car('Fusca');

console.log(fuscaCar);
console.log(fuscaCar.name);
console.log(fuscaCar.wheels);

fuscaCar.name = 'Fusca Turbo'; // Isso é permitido, pois name não é readonly

//fuscaCar.wheels = 5; // Isso vai gerar um erro, pois wheels é readonly
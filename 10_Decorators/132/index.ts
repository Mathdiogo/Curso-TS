// 4- Decorators de métodos

// Com esse decorator podemos modificar a execução de métodos

// precisamos inserir o decorator antes da declaração do método

// ele é executado antes do método ser chamado

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    }
}

class Machine1 {
    name

    constructor (name: string) {
        this.name = name
    }

    @enumerable(false)
    showName() {
        console.log(`Máquina: ${this.name}`);
    }
}

const trator  = new Machine1("Trator");

trator.showName(); // Máquina: Trator
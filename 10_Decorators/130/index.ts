
// 2 - Multiplos decorators

// O primeiro a ser executado é o que está mais ao topo do código,

// Desta maneira é possivel criar operações mais complexas

function a() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executou A");
    }
}

function b() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executou B");
    }
}

class MultipleDecorators {
    @a()
    @b()
    testing() {
        console.log("Terminando a execução do método");
    }
}

const multiple = new MultipleDecorators();

multiple.testing();
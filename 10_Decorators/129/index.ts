
// 1 -exemplo decorator

function myDecorator() {
    console.log('Iniciando decorator!');

    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('Executando decorator');
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}

class MyClass {
    @myDecorator()
    testing() {
        console.log('Testando... Terminando execução do método');
    }
}

const myObject = new MyClass();

myObject.testing();
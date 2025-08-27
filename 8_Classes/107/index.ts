// 10 - Override de Métodos

// Podemos sobrescrever métodos de uma classe pai em uma classe filha.
//Basta criar o método com o mesmo nome na classe filha.
// Isso é útil quando queremos modificar o comportamento de um método específico na classe filha.

class Base {
    someMethod() {
        console.log("Método da classe Base");
    }
}

class Nova extends Base {
    someMethod() {
        console.log("Testando método sobrescrito na classe Nova");

    }
}

const myObject1 = new Nova();
myObject1.someMethod(); // Testando método sobrescrito na classe Nova


const myObject2 = new Base();
myObject2.someMethod(); // Método da classe Base
// 6 - Property decorator

// É utilizado nas propriedades de uma classe

// Ou seja,  na hora da definição da mesma podemos ativar uma função

// Isso nos ajuda a modificar ou validar algum valor

// A ideia é modificar com o decorator para termos o id ao inves de 1, com o decorator @formatNumber o id passa de 1 para 00001

function formatNumber() {
    return function (target: object, propertyKey: string) {

        let value: string

        const getter =  function() {
            return value;
        }
        const setter = function(newVal: string) {
            value = newVal.padStart(5, "0");
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}

class ID {
    @formatNumber()
    id

    constructor(id: string) {
        this.id = id;
    }
}

const newItem = new ID("123");

console.log(newItem);
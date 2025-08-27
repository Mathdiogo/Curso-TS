// 9 - Exemplo real: Property Decorator

// Com o property decorator conseguimos verificar uma propriedade de um objeto

// Vamos criar uma validação de numero máximo de caracteres com decorators para o usuário

function Max(limit:number) {
    return function(target: Object, propertyKey: string) {
        let value:string

        const getter = function() {
            return value
        }

        const setter = function(newValue:string) {
            if(newValue.length > limit) {
                throw new Error(`O valor não pode ter mais de ${limit} caracteres`)
            }
            value = newValue
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })
    }
}

class Admin {
    @Max(10)
    username

    constructor(username:string) {
        this.username = username;
    }
}

let pedro = new Admin("pedro");

let matheusss = new Admin("matheus Diogo");

let SemNocao = new Admin("Sem Nocao pra coloca um nome pequeno");

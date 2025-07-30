"use strict";
// 4 - Herança de classes e Super 
//Para gerar uma gerança vamos utilizar a palavra-chave extends, que vai herdar as propriedades e métodos de uma classe pai (superclasse) para uma classe filha (subclasse).
//A classe pai é a classe que vai ser herdada, e a classe filha é a classe que vai herdar as propriedades e métodos da classe pai.
// isso vai acontecer pela função super(), que vai chamar o construtor da classe pai e passar os parâmetros necessários para a classe filha.
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const tractorMachine = new Machine('Trator');
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name); // Chama o construtor da classe pai (Machine)
        this.guns = guns;
    }
}
console.log(tractorMachine);
console.log(tractorMachine.name);
console.log(KillerMachine);

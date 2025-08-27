"use strict";
// 12 - Visibilidade de Métodos e propriedades (PROTECTED)
// protected: // Membros marcados como protected só podem ser acessados dentro da classe e por classes que herdam dela por meio de um método.
// Sempre vou precisar de um metodo na classe que herda para acessar o atributo ou método protegido da classe pai, pois não posso acessá-lo diretamente na classe filha.
class E {
    constructor() {
        this.x = 10; // Atributo protegido
    }
    protectedMethod() {
        console.log("Método protegido chamado");
    }
}
class F extends E {
    showX() {
        console.log(this.x);
    }
    showProtectedMethod() {
        this.protectedMethod(); // Acessando o método protegido da classe E
    }
}
const fInstance = new F();
fInstance.showX(); // Acessando o atributo protegido da classe E através do método showX da classe F
//fInstance.protectedMethod(); // Acessando o método protegido da classe E através da classe F sem sucesso, pois é protegido, precisamos de um método para acessá-lo na classe F    
fInstance.showProtectedMethod(); // Acessando o método protegido da classe E através do método showProtectedMethod da classe F

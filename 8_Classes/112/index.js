"use strict";
// 14 - Static methods
// Métodos estáticos são métodos que pertencem à classe em si, e não a uma instância específica da classe.
// Eles são chamados diretamente na classe, sem a necessidade de criar uma instância da classe.
// acesso e utilização de métodos estáticos não dependem de uma instância da classe (objeto) para serem chamados.
class staticMethods {
    static staticMethod() {
        console.log("Método estático chamado");
    }
}
staticMethods.prop = "teste static"; // Propriedade estática
// nao preciso criar uma instância da classe para acessar o método estático
staticMethods.staticMethod(); // Método estático chamado
console.log(staticMethods.prop); // teste static

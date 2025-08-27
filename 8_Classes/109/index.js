"use strict";
// 11 - Visibilidade de Métodos e propriedades (PUBLIC)
// public: // O modificador de acesso padrão. Qualquer membro marcado como public pode ser acessado de qualquer lugar, tanto dentro quanto fora da classe.
class C {
    constructor() {
        this.x = 10; // Atributo público
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x); // Acessando o atributo público da classe C
const dInstance = new D();
console.log(dInstance.x); // Acessando o atributo público da classe D, que herda de C

"use strict";
// 1 - Campos em classes
// Campos em classes são propriedades que pertencem a uma instância de uma classe.
// Eles são definidos dentro da classe e podem ser acessados por meio de instâncias dessa classe
// ou por meio da própria classe, dependendo de como são definidos (públicos, privados, protegidos).
class Usuario {
}
const usuarioMatheus = new Usuario();
console.log(usuarioMatheus);
usuarioMatheus.name = 'Matheus';
usuarioMatheus.age = 30;
//usuarioMatheus.job = 'Programador'; // Adicionando um campo extra dinamicamente
console.log(usuarioMatheus);

// 8 - Conditionals Expression types

// Conditionals Expression types são uma maneira de criar tipos que dependem de condições.
// Eles permitem que você defina tipos que variam com base em outras condições, como tipos primitivos ou outros tipos complexos.

// Permite a criação de um novo tipo baseado em uma condição if else, onde o tipo resultante depende do tipo de uma variável ou expressão.


interface A {

}

interface B extends A {

}

interface teste {
    showName(): string;
}

type myType = B extends A ? number : string;
// A lógica por trás dessa expressão condicional é que estamos verificando se B é um subtipo de A.
// Se B for um subtipo de A, então myType será do tipo number.
// Caso contrário, myType será do tipo string.

const someVar: myType = 5; // Aqui someVar é do tipo number (tipo b), pois B é um subtipo de A e myType é definido como number.


type myType2 = teste extends {showNumber():number} ? string : number; // Aqui estamos verificando se teste possui um método showNumber que retorna um número.
// Se sim, myType2 será do tipo string; caso contrário, será do tipo number.
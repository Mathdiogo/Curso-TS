// 6 - Typeof Type Operator

// O operador `typeof` é usado para obter o tipo de uma variável ou expressão.
// Ele pode ser usado para criar tipos baseados em variáveis existentes, permitindo que você reutilize tipos já definidos em seu código.

const userName: string = 'Matheus Diogo';

const userName2: typeof userName = "Rayssa"; // O tipo de userName2 será string

const number1: number = 0;
const x1: typeof number1 = 10;

const y1: typeof x1 = 15; // O tipo de y será number

// O operador typeof permite que você crie variáveis com o mesmo tipo de outras variáveis existentes.

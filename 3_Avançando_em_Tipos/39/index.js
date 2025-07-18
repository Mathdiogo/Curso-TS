"use strict";
// 9 - Tratando/ validadando parametros opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return "Meu nome é " + firstName + " " + lastName;
    }
    return `Olá ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Matheus", "Diogo"));
console.log(advancedGreeting("Rayssa"));

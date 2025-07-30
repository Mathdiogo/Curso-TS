"use strict";
// 3 - Propriedades Readonly
const fuscaaa = {
    name: 'Fusca',
    brand: 'Volkswagen',
    model: 'Fusca',
    wheels: 4
};
console.log(fuscaaa);
//fuscaaa.wheels = 5 // Isso vai gerar um erro, pois a propriedade wheels é readonly

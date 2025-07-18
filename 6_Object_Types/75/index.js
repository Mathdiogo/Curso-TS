"use strict";
// 3 - Propriedades Readonly
const fusca = {
    brand: 'Volkswagen',
    model: 'Fusca',
    wheels: 4
};
console.log(fusca);
//fusca.wheels = 5 // Isso vai gerar um erro, pois a propriedade wheels é readonly

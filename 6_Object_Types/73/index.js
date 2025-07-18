"use strict";
// 1 - Interface como parâmetro
function showProductDetail(product) {
    if (product.isAvailable) {
        console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price} reais`);
    }
    else {
        console.log(`O produto ${product.name} não está disponível`);
    }
}
const shirt = {
    name: "camisa",
    price: 159.99,
    isAvailable: true
};
const pcGamer = {
    name: "Computador Gamer Aquário",
    price: 7400,
    isAvailable: true
};
const celphone = {
    name: "iphone 13",
    price: 2400,
    isAvailable: false
};
showProductDetail(shirt);
showProductDetail(pcGamer);
showProductDetail(celphone);

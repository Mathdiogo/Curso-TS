"use strict";
// 16 - parameters properties
// parameter properties
// é uma forma de declarar e inicializar propriedades de classe diretamente no construtor
// isso elimina a necessidade de declarar as propriedades separadamente e atribuí-las no construtor
class ParameterProperties {
    constructor(name, // propriedade pública
    qty, // propriedade privada
    price // propriedade privada
    ) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Quantidade: ${this.qty}`;
    }
    get showPrice() {
        return `Preço: ${this.price}`;
    }
}
const newTshirt = new ParameterProperties('T-Shirt', 10, 29.99);
console.log(newTshirt); // Exibe a instância da classe com as propriedades definidas
console.log(newTshirt.name); // Acessa a propriedade pública 'name'
// console.log(newTshirt.qty); // Erro: qty é privado e não pode ser acessado fora da classe
// console.log(newTshirt.price); // Erro: price é privado e não pode ser acessado fora da classe
console.log(newTshirt.showQty); // Acessa o getter para qty
console.log(newTshirt.showPrice); // Acessa o getter para price

// 2 - Criando tipos de dados Constraints em generics

function showProductName<T extends {name: string}>(obj: T) {
    // Aqui, T é um tipo genérico que deve ter uma propriedade 'name' do tipo string
    return `O nome do produto é: ${obj.name}`;
}


const product = { name: "Notebook", price: 2000 };
const productWithoutName = { price: 2000 };

console.log(showProductName(product)); // O nome do produto é: Notebook
// console.log(showProductName(productWithoutName)); // Isso causaria um erro, pois o objeto não possui a propriedade 'name'
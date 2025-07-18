// 3 - Propriedades Readonly


// A propriedade Readonly podem ser alteradas apenas no momento da criação do objeto, ou seja, não podem ser alteradas depois de criadas.

// É uma forma de criar um valor constante dentro de um objeto, ou seja, não pode ser alterado depois de criado.

//Podemos adicionar as interface Readonly em uma propriedade de um objeto, para que ela não possa ser alterada depois de criada.



interface Car {
    brand: string
    model: string
    readonly wheels: number
}

const fusca: Car = {
    brand: 'Volkswagen',
    model: 'Fusca',
    wheels: 4
}

console.log(fusca)

//fusca.wheels = 5 // Isso vai gerar um erro, pois a propriedade wheels é readonly
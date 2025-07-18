// 1 - Interface como parâmetro


//aqui podemos criar uma interface e passar ela como parametro direto ao inves de por exemplo:

// function showProductDetail(name: string, price: number, isAvailable: boolean){
//     if(product.isAvailable){
//         console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price} reais`)
//     }else{
//         console.log(`O produto ${product.name} não está disponível`)
//     }
// }

// Imagina que eu vou usaR ESSE OBJETO EM VARIAS FUNÇÕES, MUITO MAIS FACIL DE EU SÓ PASSAR O OBJETO COMO INTERFACE 
// //E SE PRECISAR MUDAR ALGO NO OBJETO, EU MUDO APENAS NA INTERFACE

interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetail(product: Product){
    if(product.isAvailable){
        console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price} reais`)
    }else{
        console.log(`O produto ${product.name} não está disponível`)
    }
}

const shirt: Product = {
    name: "camisa",
    price: 159.99,
    isAvailable: true
}

const pcGamer: Product ={
    name: "Computador Gamer Aquário",
    price: 7400,
    isAvailable: true
}

const celphone: Product ={
    name: "iphone 13",
    price: 2400,
    isAvailable: false
}

showProductDetail(shirt)
showProductDetail(pcGamer)
showProductDetail(celphone)
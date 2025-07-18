// 11 - Restructing


function showProductDetails({name, price}: {name: string, price: number}): string{
    return `O Nome do meu produto é "${name}" e o seu preço é "R$${price}" reais`
}


const volante = {name: "Volante G29", price: 1500}

console.log(showProductDetails(volante))
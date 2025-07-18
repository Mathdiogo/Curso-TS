// 9 - Tratando/ validadando parametros opcionais

function advancedGreeting(firstName: string , lastName?: string){
    if(lastName !== undefined){
        return "Meu nome é " + firstName + " " + lastName
    } 

    return `Olá ${firstName}, tudo bem?`
    
}

console.log(advancedGreeting("Matheus", "Diogo"));
console.log(advancedGreeting("Rayssa"));
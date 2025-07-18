// 5 - Retorno de função

function somaNums(a: number, b: number): number{
    const soma = a + b
    return soma;
}

console.log("O resultado da soma é: " + somaNums(10, 20)); // 30


function greeting2(name: string): string{
    return `Olá, ${name}!`;
}

console.log(greeting2("Matheus")); // Olá, Matheus!
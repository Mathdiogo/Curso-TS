// 5 - Keyof Type Operator

// O operador `keyof` é usado para obter as chaves de um tipo como um tipo de união.
// Ele é útil quando queremos criar tipos que dependem das chaves de outro tipo.
// Aceita dados do tipo objeto e retorna as chaves desse objeto como um tipo de união.

type Character = {
    name: string;
    age: number;
    hasDriverLicense: boolean;
}

type CC = keyof Character; // C será do tipo "name" | "age" | "hasDriverLicense"

function showCharInfo(obj: Character, key: CC) {
    // Aqui, 'key' é do tipo 'C', que é uma união das chaves de 'Character'
    switch (key) {
        case "name":
            return `O nome do personagem é: ${obj[key]}.`;
        case "age":
            return `A idade do personagem é: ${obj[key]} anos.`;
        case "hasDriverLicense":
            // Usamos um operador ternário para uma frase mais descritiva
            return obj[key] ? "O personagem TEM carteira de motorista." : "O personagem NÃO TEM carteira de motorista.";
    }
}

const character1: Character = {
    name: "Matheus",
    age: 24,
    hasDriverLicense: true
};

const character2: Character = {
    name: "Rayssa",
    age: 22,
    hasDriverLicense: false
};

console.log(showCharInfo(character1, "name")); // O nome do personagem é: Matheus.
console.log(showCharInfo(character1, "age")); // A idade do personagem é: 24 anos.
console.log(showCharInfo(character1, "hasDriverLicense")); // O personagem TEM carteira de motorista.

console.log(showCharInfo(character2, "name")); // O nome do personagem é: Rayssa.
console.log(showCharInfo(character2, "age")); // A idade do personagem é: 22 anos.
console.log(showCharInfo(character2, "hasDriverLicense")); // O personagem NÃO TEM carteira de motorista.


// Quero que voce explique o que o código faz, e como ele funciona, e quais são os tipos de dados que ele usa.
// O código define um tipo `Character` com três propriedades: `name`, `age` e `hasDriverLicense`.
// Em seguida, usa o operador `keyof` para criar um tipo `C` que representa todas as chaves do tipo `Character`.
// A função `showCharName` recebe um objeto do tipo `Character` e uma chave do tipo `C`, que é uma das chaves de `Character`.
// Dentro da função, o valor da propriedade correspondente à chave fornecida é retornado como uma string formatada.
// Isso permite que a função acesse dinamicamente as propriedades do objeto `Character` usando suas chaves.
// O operador `keyof` garante que a chave fornecida seja uma das chaves válidas do tipo `Character`, evitando erros de digitação ou uso de chaves inexistentes.
// No exemplo, a função é chamada com o objeto `character` e a chave `"name"`, retornando o nome do personagem.
// Se tentarmos passar uma chave que não existe no tipo `Character`, como `"height", TypeScript irá gerar um erro de compilação, garantindo que apenas chaves válidas sejam usadas.
// Isso ajuda a evitar erros comuns de digitação e garante que o código seja mais seguro e fácil de manter.






// O TypeScript garante que 'name' só pode ser uma das chaves de 'Character', evitando erros de digitação ou uso de chaves inexistentes.
// console.log(showCharName(character, "height")); // Isso causaria um erro, pois "height" não é uma chave de 'Character'
// console.log(showCharName(character, "age")); // O nome do personagem é: 24
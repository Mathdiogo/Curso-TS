// 11 - Aprendendo mais sobre Union types

function showUserRole(role: boolean | string) {
    if (typeof role === "boolean") {
       return "Usuário não aprovado";  
    }
    return `Usuário aprovado com a função: ${role}`;
}


console.log(showUserRole(false)); // Usuário não aprovado
console.log(showUserRole("Admin")); // Usuário aprovado com a função: Admin
"use strict";
// 2 - Interface como parâmetro OPICIONAL
function showUserDetails(user) {
    if (user.role) {
        console.log(`O nome do usuário é ${user.name}, seu email é ${user.email} e seu cargo especial é ${user.role}`);
    }
    else {
        console.log(`o email do usuário ${user.name} é ${user.email}`);
    }
}
const u1 = { name: "Matheus DIogo", email: "matheusponte2010@hotmail.com", role: "admin" };
const u2 = { name: "João da silva", email: "jãobobo@email.com" };
showUserDetails(u1);
showUserDetails(u2);

"use strict";
// 3 -  Instanceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const Jhon = new User("John");
const Matheus = new SuperUser("Matheus");
console.log(Jhon);
console.log(Matheus);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, você é um super usuário, deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}, você é um usuário comum, você não pode ver os dados do sistema.`);
    }
}
userGreeting(Jhon);
userGreeting(Matheus);

// 3 -  Instanceof

class User1 {
    name

    constructor(name: string) {
        this.name = name;
    }
}

class SuperUser extends User1 {

    constructor(name: string) {
        super(name);
    }
}

const Jhon = new User1("John");
const Matheuss = new SuperUser("Matheus");

console.log(Jhon);
console.log(Matheuss);


function userGreeting(user: Object){
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, você é um super usuário, deseja ver os dados do sistema?`);
    } else if (user instanceof User1) {
        console.log(`Olá ${user.name}, você é um usuário comum, você não pode ver os dados do sistema.`);
    }
}

userGreeting(Jhon); 
userGreeting(Matheuss); 
// 4 - Operator In

class dog{
    name: string;
    breed: string; // raça

    constructor(name: string, breed?: string) {
        this.name = name;
        if (breed){
            
            this.breed = breed;
        }
        else {
            this.breed = "Sem raça definida";
        }
    }
}

const Mecky = new dog("Mecky", "Shih Tzu");
const Rex = new dog("Rex", "Pitbull");
const Bob = new dog("Bob");

function showDogInfo(dog: dog){
    if ("breed" in dog && dog.breed !== "Sem raça definida") {
        console.log(`O cachorro ${dog.name} é da raça ${dog.breed}`);
    } else {
        console.log(`O cachorro ${dog.name} não tem raça definida`);
    }   
}

showDogInfo(Mecky); // O cachorro Mecky é da raça Shih Tzu
showDogInfo(Rex); // O cachorro Rex é da raça Pitbull
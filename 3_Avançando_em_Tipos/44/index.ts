// 14 - Alias vs Interface

interface Person{
    name:string;
}
interface Person{
    age:number;
}

// iterface Person{
//     name: string;
//     age: number;
// }

const somePerson: Person = {name: "Matheus ", age: 24};

console.log(somePerson); // { name: 'Matheus ', age: 24 }


// Type Alias Não pode ser reaberto nem modificado nem extendido/adicionado
type personType = {
    name: string;
    age: number;
}


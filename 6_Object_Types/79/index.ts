// 6 - intersection types


// Intersection types são uma forma de combinar várias interfaces em uma única interface.
// É uma forma de criar um tipo que possui todas as propriedades de várias interfaces.



interface Character {
    name: string;
    age: number;
}

interface Gun {
    type: string;
    caliber: number;
}

type HumanWithGun = Character & Gun;


const arnald: HumanWithGun = {
    name: 'Arnold',
    age: 50,
    type: 'Shotgun',
    caliber: 12
};

console.log(arnald);
console.log(arnald.name);
console.log(arnald.age);    
console.log(arnald.type);
console.log(arnald.caliber);
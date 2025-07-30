// 7 - Indexed Access Types

// Indexed Access Types são usados para acessar tipos dentro de objetos ou arrays.
// Eles permitem que você obtenha o tipo de uma propriedade específica de um objeto ou o tipo de um elemento específico de um array.
// Por exemplo, se você tiver um objeto com várias propriedades, pode usar Indexed Access Types para obter o tipo de uma propriedade específica.


// Muito parecido com o keyof, mas ao invés de podermos usar qualquer chave do tipo, ele retorna o tipo da propriedade especificada, voce restringe o acesso.

type Truckk = {
    km: number;
    kg: number;
    description: string;
}

type TruckKm = Truckk['km']; // O tipo de TruckKm será number

const newTruck: Truckk = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão novo para pouca carga'
}

function showTruckKm(km: TruckKm) {
    console.log(`O caminhão/carro tem ${km} km rodados.`);
}

showTruckKm(newTruck.km); // O caminhão/carro tem 10000 km rodados.


const newCar = {
    km: 90000,
    kg:1000,
    description: 'Carro usado para viagens longas'
}

showTruckKm(newCar.km); // O caminhão/carro tem 90000 km rodados.
"use strict";
// 7 - Indexed Access Types
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão novo para pouca carga'
};
function showTruckKm(km) {
    console.log(`O caminhão/carro tem ${km} km rodados.`);
}
showTruckKm(newTruck.km); // O caminhão/carro tem 10000 km rodados.
const newCar = {
    km: 90000,
    kg: 1000,
    description: 'Carro usado para viagens longas'
};
showTruckKm(newCar.km); // O caminhão/carro tem 90000 km rodados.

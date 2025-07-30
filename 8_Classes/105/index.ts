// 8 - Set em Classes


// Getters leem as propriedades de uma classe/objeto de forma controlada.
// Setters modificam as propriedades de uma classe/objeto de forma controlada.

class Coords {
    x!: number;
    y!: number; // o ! indica que a propriedade é obrigatória mas poderá ser definida posteriormente

    setfillX(x: number) {
        if (x === 0 ){
            return console.log('X não pode ser 0');
        }

        this.x = x;
        console.log(`X definido com sucesso: ${this.x}`);
    }

    setfillY(y: number) {
        if (y === 0 ){
            return console.log('Y não pode ser 0');
        }

        this.y = y;
        console.log(`Y definido com sucesso: ${this.y}`);
    }

    get coordinates() {
        return `X: ${this.x}, Y: ${this.y}`;
    }
}

const myCoords = new Coords();

myCoords.setfillX(10); // Definindo X
myCoords.setfillY(20); // Definindo Y

console.log(myCoords.coordinates); // X: 10, Y: 20
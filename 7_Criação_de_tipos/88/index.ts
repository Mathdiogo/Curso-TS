// 3 - Interfaces com Generics

// Interfaces com Generics são uma maneira de definir contratos para objetos que podem trabalhar com diferentes tipos de dados.
// Elas permitem que você crie uma interface que pode ser usada com diferentes tipos, garantindo que os objetos que implementam essa interface atendam a certos requisitos.

interface MyObject<T, U, C> {
    name: string;
    wheels: T;
    engine: U;
    color?: C; // Propriedade opcional
}

type Carro = MyObject<number, number, string>;
type Caneta = MyObject<boolean, boolean, string>;

const Mycarro: Carro = {
    name: "Fusca",
    wheels: 4,
    engine: 1.0,
    color: "white"
};

const Mycaneta: Caneta = {
    name: "Caneta Azul",
    wheels: false,
    engine: false,
    color: "blue"
};


console.log(Mycarro);
console.log(Mycaneta);
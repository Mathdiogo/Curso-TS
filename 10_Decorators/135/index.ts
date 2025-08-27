// 7 - Exemplo real: Class Decorator


// Com class decorator podemos influenciar o construtor

// Neste exemplo vamos criar uma função para inserir a data de criação dos objetos

function createdDate(created: Function) {
    created.prototype.createdAt = new Date();
}

@createdDate
class Book {
    id
    createdAt?: Date;

    constructor(id:number) {
        this.id = id;
        //this.createdAt = new Date(); Poderia fazer assim e replicar para as outras classe, mas usando o decorator eu consigo aplicar isso de forma mais simples
    }
}

@createdDate
class Pen {
    id;
    createdAt?: Date;

    constructor(id:number) {
        this.id = id;
    }   
}

const newBook = new Book(1);
const newPen = new Pen(2);

console.log(newBook);
console.log(newPen);

// Dentro do Prototype teremos o createdAt
console.log((newBook as any).createdAt);
console.log((newPen as any).createdAt);
//9 - Herança de Interfaces em Classes

// Podemos herdar de interfaces tambem com a instrução implements.
// A ideia é bem parecida com extends em classes, mas aqui estamos falando de interfaces.

// porem esse metodo é que vou aprender agora é bom para criar metodos comuns entre classes que implementam a mesma interface.



interface showTitle {
    showTitle(): string;
}

class blogPost implements showTitle {
    title

    constructor(title: string) {
        this.title = title;
    }

    showTitle(): string {
        return `O título do post é: ${this.title}`; // precisa implementar o metodo da interface retornando uma string
    }
}


const myPost = new blogPost("Meu primeiro post");

console.log(myPost.showTitle()); // O título do post é: Meu primeiro post



class testingInterface implements showTitle {
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    showTitle(): string {
        return `O título do teste é: ${this.title}`; // precisa implementar o metodo da interface retornando uma string
    }
}
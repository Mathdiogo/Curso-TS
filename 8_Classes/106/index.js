"use strict";
//9 - Herança de Interfaces em Classes
class blogPost {
    constructor(title) {
        this.title = title;
    }
    showTitle() {
        return `O título do post é: ${this.title}`; // precisa implementar o metodo da interface retornando uma string
    }
}
const myPost = new blogPost("Meu primeiro post");
console.log(myPost.showTitle()); // O título do post é: Meu primeiro post
class testingInterface {
    constructor(title) {
        this.title = title;
    }
    showTitle() {
        return `O título do teste é: ${this.title}`; // precisa implementar o metodo da interface retornando uma string
    }
}

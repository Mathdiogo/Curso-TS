"use strict";
// 3 - Decorators de Classes
// O decorator de classe é executado quando a classe é definida
// O decorator de class esta ligado ao construtor da classe
// Ou seja, sempre que este for executado, temos a execução do decorator
// Isso nos permite acrescentar algo na criação de classes
class User {
    constructor(name) {
        this.name = name;
    }
}

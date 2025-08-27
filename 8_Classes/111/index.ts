// 13 - Visibilidade de Métodos e propriedades (PRIVATE)

// private: // Membros marcados como private só podem ser acessados dentro da própria classe, não podendo ser acessados por classes que herdam dela.

class privateClass {
    private name = "Private Class"; // Atributo privado

    showName() {
        return this.name; // Método privado
    }

    private privateMethod() {
        console.log("Método privado chamado");
    }

    showPrivateMethod() {
        this.privateMethod(); // Método para acessar o método privado
    }
}

const privateObj = new privateClass();

//console.log(privateObj.name); // Erro: 'name' é privado e não pode ser acessado fora da classe

console.log(privateObj.showName()); // "Private Class"

//onsole.log(privateObj.privateMethod()); // Erro: 'privateMethod' é privado e não pode ser acessado fora da classe

console.log(privateObj.showPrivateMethod()); // Chamando o método que acessa o método privado
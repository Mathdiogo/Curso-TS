"use strict";
// 7 - Readonly Arrays
// Readonly arrays são arrays que não podem ser modificados após a sua criação.
// Eles são úteis quando queremos garantir que os dados não serão alterados acidentalmente.
// A modificação de itens pode ser feita através de métodos que não alteram o array original, como map, filter e reduce.
//mas nao podemos aumentar ou remover itens do array.
let myArray = ['maça', 'banana', 'laranja'];
// myArray[3] = 'abacaxi'; // Erro: Cannot assign to '3' because it is a read-only property.
// myArray.push('uva'); // Erro: Property 'push' does not exist on type 'readonly string[]'.
console.log(myArray);
myArray.forEach((item) => {
    console.log('fruta: ' + item);
});
myArray.map((item) => {
    return `fruta: ${item}`;
});
console.log(myArray);

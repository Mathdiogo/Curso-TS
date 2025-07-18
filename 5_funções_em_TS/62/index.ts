// 3 - Generic functions

// Percorre o array que recebe como parametro e retorna sempre o primeiro elemento
// Ela espera receber um array, ou seja, se receber outra coisa a n ser array vai dar erro

// Ao mesmo tempo que ela recebe apenas arrays como parametro, o conteudo dos arrays estao livres para serem quisquer um
function firstElement<T>(arr: T[]): T{
    return arr[0]
}



console.log(firstElement([1, 2, 3]))
console.log(firstElement(["a", "b", "c"]))
console.log(firstElement([true, "a", 3]))



function mergeObjects<U, T>(obj1: U, obj2: T){
    return{
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: "Matheus"}, {age: 30, job: "Pleno Developer"})


console.log(newObject)
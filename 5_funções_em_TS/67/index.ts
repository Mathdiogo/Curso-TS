// 8 - Tipo Unknown

// É parecido com o any, aceita qualquer tipo de dado,
// Porem a diferença é que ele NÃO DEIXA ALGO SER EXECUTADO SEM UMA VALIDAÇÃO DE TIPO

// Como se fosse uma trava de segurança

// function soSomething(x: unknown){
//     console.log(x[0])
// }

// esse exemplo acima, como nao verifiquei o tipo, nao posso tratar o dado como eu quiser antes de verificar


function soSomething(x: unknown){

    if(Array.isArray(x)){
        console.log(x[0])
    }else if(typeof x === "number"){
        console.log("X é um numero")
    }
    
}
// 5 - Especificando tipos de argumentos


function mergeArrays<T>(array1: T[], array2: T[]){
    return array1.concat(array2)
}

// Assim não funciona, pois o primeiro argumento ja é definido com "Tipo T", então nessa caso Tipo T é Array de number, o segundo tbm tem que ser tipo T (o mesmo)
//console.log(mergeArrays([1,2,3], ["teste", "testando", "nao funciona assim"]))

//Assim funciona normalmente pois os 2 argumentos sao do tipo T
console.log(mergeArrays([1,2,3], [4,5,6]))

// Dessa forma eu vou conseguir usar a mesma função que teoricamente aceitaria apenas "Tipo T (tipo do primeiro argumento)"
// É uma forma de "burlar", onde eu consigo passar na chamada da função os tipos que eu vou permitir receber nos paramtros
// Boa técnica para usar funções prontas que atendem a necessidade porem tem tipos restritos


console.log(mergeArrays< number | string>([1,2,3], [" indiozinhos", " pelo", " rio a baixo"]))
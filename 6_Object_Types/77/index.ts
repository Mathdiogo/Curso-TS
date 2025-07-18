// 4 - index Signature


// A index Signature é uma forma de definir que um objeto pode ter propriedades dinâmicas, ou seja, propriedades que não sabemos o nome de antemão.
// É uma forma de definir que um objeto pode ter propriedades que não estão definidas na interface

//porem ja sabemos o tipo de dado que vai ser passado para essas propriedades
// isso restringe os tipós que não devem ser passados para essas propriedades

interface CoordObject {
    [key: string]: number
}

let coords: CoordObject = {
    x: 10,
}

coords.y = 20
coords.z = 30
//coords.w = "teste" // Isso vai gerar um erro, pois a propriedade w não é do tipo number
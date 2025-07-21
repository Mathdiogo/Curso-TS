// 9 - Template Literals types

// Template Literals types são uma maneira de criar tipos que dependem de strings literais.
// Eles permitem que você defina tipos que variam com base em strings, como concatenação
// É uma forma de customizar tipo de maneira infinita. Pois o texto que formamos pode depender de variáveis ou outros tipos.


type  testA = "text"

type customType = `O tipo é: ${testA}`;

const testing: customType = "O tipo é: text"; // Aqui estamos definindo uma variável do tipo customType, que deve ser exatamente "O tipo é: text".
//const testing2: customType = "O tipo é: text2"; // Isso causará um erro, pois o valor não corresponde ao tipo customType.   


type a1 = "testando"
type a2 = "union"

type a3 = `${a1} | ${a2}`
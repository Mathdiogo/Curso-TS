"use strict";
// 1 - Type Guard
function soma(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b) + " string");
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b + " number");
    }
    else {
        console.log("Não foi possível realizar a soma, verifique os tipos de dados");
    }
}
soma(15, 10); // 85
soma(10, "20"); // 30
soma("10", "20"); // 30 

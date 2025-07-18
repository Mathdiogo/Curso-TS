// 2 - Checando se o valor existe

function operations(arr: number[], operations?: string | undefined){
    if (operations){
        if (operations === "sum") {
            const sum =  arr.reduce((i, total) => i + total, 0);
            console.log(sum);
        } else if (operations === "multiply") {
            const multiply =  arr.reduce((i, total) => i * total, 1);
            console.log(multiply);
        } else {
            return "Operação inválida";
        }
    } else {
        console.log("Por favor, defina uma operação!");
    }
}

operations([1, 2, 3, 4, 5], "sum"); // 15
operations([1, 2, 3, 4, 5], "multiply"); // 120
operations([1, 2, 3, 4, 5]); // Por favor, defina uma operação
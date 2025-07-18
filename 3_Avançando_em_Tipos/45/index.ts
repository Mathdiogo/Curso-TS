// 15 - Literal Types


let test = "Testando"

test = "testando de novo"

console.log(test)

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é: ${direction}`);
}

// showDirection("Top"); 

showDirection("left"); // A direção é: left
showDirection("right"); // A direção é: right
// 12 - Type Alias

type Id = number | string;

function showId(id: Id) {
    console.log(`O ID é: ${id}`);
}

showId(1); // O ID é: 1
showId("200"); // O ID é: 200     
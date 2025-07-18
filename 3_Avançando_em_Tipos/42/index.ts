// 12 - Type Alias

type ID = number | string;

function showId(id: ID) {
    console.log(`O ID é: ${id}`);
}

showId(1); // O ID é: 1
showId("200"); // O ID é: 200     
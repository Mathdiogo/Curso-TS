"use strict";
// index.ts
// 2. Variável global para armazenar todas as avaliações.
// O tipo é um objeto onde as chaves são strings (nomes de usuário) e os valores são ReviewData.
// Poderíamos usar 'Map<string, ReviewData>' também, mas o objeto literal é comum.
const allUserReviews = {};
/**
 * Processa uma nova avaliação e a armazena.
 * @param reviewValue O valor da avaliação (true/false para 'não avaliou' ou número de 1 a 5).
 * @param userName O nome do usuário que está avaliando.
 * @returns O objeto ReviewData recém-criado.
 */
function processReview(reviewValue, userName) {
    let message;
    // Narrowing: Verificando o tipo da `reviewValue`
    if (typeof reviewValue === 'number') {
        // Garantir que a nota está entre 1 e 5, se for um número
        if (reviewValue >= 1 && reviewValue <= 5) {
            switch (reviewValue) {
                case 1:
                    message = "Achamos que você pode nos ajudar a melhorar. 😔 1 estrela";
                    break;
                case 2:
                    message = "Obrigado por sua avaliação. Queremos ser melhores! 2 estrelas";
                    break;
                case 3:
                    message = "Agradecemos sua nota. Continuaremos trabalhando para melhorar. 3 estrelas";
                    break;
                case 4:
                    message = "Ficamos felizes que tenha gostado! 😊 4 estrelas";
                    break;
                case 5:
                    message = "Incrível! Muito obrigado pela sua avaliação de 5 estrelas! ⭐";
                    break;
                default:
                    // Este default não deve ser alcançado devido à verificação if,
                    // mas é bom ter para completude de tipos.
                    message = "A nota deve ser entre 1 e 5. Por favor, tente novamente.";
                    break;
            }
        }
        else {
            message = "Nota inválida: O valor numérico deve ser entre 1 e 5.";
        }
    }
    else if (typeof reviewValue === 'boolean') {
        if (reviewValue === false) {
            message = "Que pena que você não quis deixar uma avaliação. Tudo bem! 😊";
        }
        else {
            // Caso reviewValue seja true, o que não esperamos para 'não avaliou'.
            message = "Avaliação booleana inesperada (true).";
        }
    }
    else {
        // Caso o tipo seja algo diferente de number ou boolean (TypeScript ajuda a evitar isso).
        message = "Tipo de avaliação desconhecido.";
    }
    const newReview = {
        userName: userName, // Atribuir o nome do usuário ao campo userName
        value: reviewValue,
        timestamp: new Date().toISOString(), // Formato mais legível
        message: message,
    };
    // Armazenar a avaliação usando o nome do usuário como chave
    allUserReviews[userName] = newReview;
    return newReview;
}
/**
 * Retorna todas as avaliações armazenadas.
 * @returns Um objeto contendo todas as avaliações, indexadas pelo nome de usuário.
 */
function getStoredReviews() {
    return allUserReviews;
}

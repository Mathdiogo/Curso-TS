// 8 - Exemplo real: Method Decorator

function checkIfUserPosted() {

    return function(
        target: Object,
        key: string | symbol,
        descriptor: PropertyDescriptor
    ) {
       const childFunction = descriptor.value; // Pega a função original

       console.log(childFunction);
       descriptor.value = function(...args: any[]) { // Modifica a função original
        if(args[1] === true) { // Se o segundo argumento (alreadyPosted) for true, significa que já postou
            console.log("Usuário já postou, não pode postar novamente");
            return null;
        } else {
            return childFunction.apply(this, args); // Executa a função original
        }
    }

    return descriptor;
  };
}


class Post {
    alreadyPosted = false;

    post(content: string, alreadyPosted: boolean) {
        alreadyPosted = true; // Se acessou o método, significa que já foi postado
        console.log(`Post do usuário: ${content} - Já postou? ${alreadyPosted}`);
    }
}

const newPost = new Post();

newPost.post("Meu primeiro post", newPost.alreadyPosted);

newPost.post("Meu Segundo post", newPost.alreadyPosted); // A ideia é que o usuário não consiga postar novamente, ai que entra o decorator
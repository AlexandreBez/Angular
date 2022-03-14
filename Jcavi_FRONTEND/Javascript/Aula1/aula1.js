let email = "teste@teste.com"
let senha = 123123;
let logado = false;

// Verifica se usuario está logado.Caso sim cai no primeiro, caso não continua 
// para verificação de email e senha e muda o status de logado para true e imprime status, caso variavel logado
// seja null então cai em erro mais amigavel 
if(logado == true) {
    console.log("Usuario já logado.....");
}else if(logado == false){

    if (senha == 123123 && email == "teste@teste.com") {
        console.log("Usuario logado com sucesso")
    }else{
        console.log("Usuario e/ou senha errada.")
    }

    logado = true;

    console.log("Status: ", logado);

}else{
    console.log("Ocorreu um erro inesperado.....por favor tente novamente mais tarde");
}

// Array
const nomes = ["Gabriel", "Ana", "Juliana"]
console.log(nomes[1]);

// loops
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

const scores = [50, 25, 0, 30];

for (let i = 0; i < scores.length; i++) {
    
    if (scores[i] == null) {
        console.log("Score vazio....por favor entre com os valores e tente novamente")
    }else{
        console.log(scores[i]);
    }

}


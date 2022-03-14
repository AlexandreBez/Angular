function greet() {
    console.log("Olá usuario....")
}

greet();

function greet2(msg) {
    console.log(msg);
}

greet2("Olá galerina do whatsapp....");

function verificaIdade(nome, idade){

    if (idade < 0) {

        console.log("Por favor insira uma idade válida.....")

    }else{

        if(idade < 18){
            console.log(nome, " é menor de idade!");
        } else if(idade >= 18) {
            console.log(nome, " é maior de idade!");
        }else{
            console.log("Erro inesperado.... por favor tente novamente mais tarde!");
        }

    }

}

verificaIdade(-25);

function calculoDeArea(raio) {
    let area = 3.14 * (raio ** 2);
    return area;
}

console.log(calculoDeArea(10));
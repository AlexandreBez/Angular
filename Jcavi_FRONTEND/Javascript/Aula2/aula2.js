let pessoas = ["Gabriel", "Andre", "Marcela", "Luana"];

pessoas.push("Gabriela");

console.log(pessoas);

pessoas.pop();

console.log(pessoas);

pessoas.splice(2, 1);

console.log(pessoas);

function addMaiorCem(listaNumeros){

    let maiorCem = [];

    for (let index = 0; index < listaNumeros.length; index++) {

        let numero = listaNumeros[index];

        if (numero >= 100) {
            maiorCem.push(numero);
        }
    }

    for (let index = 0; index < maiorCem.length; index++) {

        let numero = maiorCem[index];

        if (numero == 300) {
            maiorCem.splice(index, 1);
        }
    }

    console.log(maiorCem);

}

let lista = [100, 56, 809, 300, 420, 554, 800, 35, 90, 135, 300];

addMaiorCem(lista);

let nome = "Gabriel Andrade";

console.log(nome.length);
console.log(nome.split(" "));
console.log(nome.replace("Andrade", "Farias"));
let pessoas = [
    1.67,
    1.85,
    1.70,
    1.60,
    1.75,
    1.55,
    1.69,
    1.89,
    1.56,
    1.66,
    1.75,
    1.63,
    1.76,
    1.57,
    1.81
];

let maiorAltura = 0;
let menorAltura = 5;
let alturaEspecifica = 0;
let soma = 0;

for (let i = 0; i < pessoas.length; i++) {
    
    let pessoa = pessoas[i];
    
    soma += pessoas[i]; 
    
    if (pessoa > maiorAltura) {
        maiorAltura = pessoa;
    }
    
    if (pessoa < menorAltura) {
        menorAltura = pessoa;
    }

    if (pessoa == 1.81) {
        alturaEspecifica++;
    }

}

let media = soma / 15;

console.log(`A maior altura: ${maiorAltura}`);
console.log(`A menor altura: ${menorAltura}`);
console.log(`A media das alturas: ${media}`);
console.log(`A quantidade de pessoas com 1.81 de altura: ${alturaEspecifica}`);


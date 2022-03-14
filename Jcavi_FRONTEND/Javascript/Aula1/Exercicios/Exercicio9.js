let listaNumeros = [121, 16, 7, 172, 11, 59, -33, 146, 66, 157];
let somaPares = 0;
let somaImpares = 0;

for (let index = 0; index < listaNumeros.length; index++) {
    
    if ((listaNumeros[index] % 2) == 0) {
        somaPares += listaNumeros[index];
    }
    
    if ((listaNumeros[index] % 2) != 0) {
        somaImpares += listaNumeros[index];
    }
}

console.log("A soma dos valores impares: " + somaImpares);
console.log("A soma dos valores pares: " + somaPares);


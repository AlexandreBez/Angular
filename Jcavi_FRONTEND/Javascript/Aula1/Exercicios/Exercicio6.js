let pessoas = [
    [1, "João", 1.67],
    [2, "Marcela", 1.85],
    [3, "Andre", 1.70],
    [4, "Luana", 1.60],
    [5, "Maya", 1.75],
    [6, "Sofia", 1.55],
    [7, "Andy", 1.69],
    [8, "Richard", 1.89],
    [9, "Ana", 1.56],
    [10, "Vitor", 1.66],
    [11, "Cauã", 1.75],
    [12, "Rachel", 1.63],
    [13, "Naomi", 1.76],
    [14, "Victor", 1.57],
    [15, "Lara", 1.90]
];

let linha = 0;
let coluna = 0;

let auxiliarMenorAltura = 0;
let auxiliarMaiorAltura = 0;

for (linha; linha <= pessoas.length; linha++) {

    for (coluna; coluna <= 1; coluna++) {

        if (pessoas[linha][1] <= 1.60) {
            auxiliarMenorAltura = pessoas[linha][1];
            console.log("Menor altura: " + auxiliarMenorAltura);
        }

        if (pessoas[linha][1] >= 1.80) {
            auxiliarMaiorAltura = pessoas[linha][1];
            console.log("Maior altura: " + auxiliarMaiorAltura);
        }

    }


}



/*
    Checks the values and validates if they are not null, less then 0 or greater then 100.
    If yes, it will return false, otherwise, it will return true.
*/
function verificaValores(nome, nota1, nota2, nota3){

    if (nome == null && nota1 == null && nota2 == null && nota3 == null) {
        console.log("Por favor, preencha com valores validos....");
        return false;
    } else if (nome == null) {
        console.log("Nome não pode ser vazio....");
        return false;
    }else if (nota1 == null || nota2 == null || nota3 == null) {
        console.log("Notas não podem ser vazias....")
        return false;
    }else if (nota1 < 0 || nota2 < 0 || nota3 < 0) {
        console.log("Notas não podem ser menor do que 0....");
        return false;
    }else if (nota1 > 100 || nota2 > 100 || nota3 > 100) {
        console.log("Notas não podem ser maior do que 100....");
    }else{
        return true;
    }
}

/*
    Validates if verificaValores() returns true 
    and performs the fail or pass validation by taking the average and printing on the screen.
*/
function mediaNotas(nome, nota1, nota2, nota3){

    if (verificaValores(nome, nota1, nota2, nota3) == true) {
        
        media = (nota1 + nota2 + nota3) / 3;

        if (media >= 8) {
            console.log("Parabéns " + nome + " você passou com a nota final de " + media + ".");
        }else{
            console.log("Desculpe "+ nome + " você reprovou com a nota final de "+ media + ".");
        }

    }
}

// test1
mediaNotas();

// test2
mediaNotas(null, 5, 5, 5);

// test3
mediaNotas("João", null, null, null);

// test4
mediaNotas("João", -45, 5, 5);

// test3
mediaNotas("João", 120, 5, 5);

// ---------------------------

// test1
mediaNotas("João", 8, 8, 8);

// test2
mediaNotas("João", 5, 5, 5);
/*
    The function will receive 3 variables and check if they are negative or null valuables.
    If yes, then will send a friendly error message.
    If not, then will print the average value between 3 numbers;
*/
function media(val1, val2, val3) {
    
    if (val1 < 0 || val2 < 0 || val3 < 0) {
        console.log("Por favor entre com numeros válidos");
    }else if(val1 == null || val2 == null || val3 == null){
        console.log("Media precisa de valores e não pode ser nulo....Por favor insira numeros validos e tente novamente.");
    }else{
        valMedio = (val1 + val2 + val3) / 3;
        console.log("Valor médio: ", valMedio);
    }

}

// teste 1
media();

// teste 2
media(-5, 5, 5);
media(5, -5, 5);
media(5, 5, -5);
media(-5, -5, -5);

//teste 3
media(5, 5, 5);
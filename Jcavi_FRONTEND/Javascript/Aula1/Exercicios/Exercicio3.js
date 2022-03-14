// addition function
function soma(a, b){
    return a + b;
}

// multiplication function 
function multiplica(a, b){
    return a * b;
}

/*
    If numbers are null or not integer then return a error message.
    If numbers are the same, then call soma() end print the value
    else call multlica() to c variable and print.
*/
function verificaSeEIgual(a, b) {
    
    if (a == null || b == null) {
        console.log("Valor não pode ser vazio....");
    }else if(Number.isInteger(a) == false && Number.isInteger(b) == false){
        console.log("Numero(s) devem ser inteiros")
    }else{

        if (a == b) {
            console.log("Os valores são iguais....");
            console.log("A soma é: ", soma(a,b));
        }

        if (a != b) {
            c = multiplica(a, b);
            console.log("Os valores são diferentes....");
            console.log("A variavel c é: ", c);          
        }

    }

}

// test1
verificaSeEIgual();

// test2
verificaSeEIgual(0.56, 0.78);

// ---------------------------

// test1
verificaSeEIgual(5, 5);

// test2
verificaSeEIgual(5, 4);
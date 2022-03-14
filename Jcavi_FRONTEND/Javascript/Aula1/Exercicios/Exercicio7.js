/*
    Validates if values ​​are null or not filled to return true, otherwise returns false.
*/
function verificaValores(nome, idade, opiniao) {

    if (nome == null && idade == null && opiniao ==null) {
        console.log("Por favor insira os valores...");
        return false;   
    }else if(nome == null){
        console.log("Por favor insira o seu nome...");
        return false;
    }else if(idade == null){
        console.log("Por favor insira a sua idade...");
        return false;
    }else if(idade <= 0 || idade >= 100){
        console.log("Por favor insira uma idade válida...");
        return false;
    }else if(opiniao == null){
        console.log("Campo opinião não pode estar vazio...");
        return false;
    }else{

        if(opiniao == "otimo" || opiniao == "bom" || opiniao == "regular"){
            return true;
        }else{
            console.log("Por favor insira uma das opções de opinião(otimo, bom ou regular)...");
            return false;
        }
    }
    
}

// If verificaValores() return true print the values.
function imprimeOpiniao(nome, idade, opiniao) {
    
    if (verificaValores(nome, idade, opiniao) == true) {
        console.log("Nome: " + nome);
        console.log("Idade: " + idade);
        console.log("Opinião: " + opiniao);
    }
}

// test1
imprimeOpiniao();

// test2
imprimeOpiniao(null, 25, "otimo");

// test3
imprimeOpiniao("Maria", null, "otimo");

// test4
imprimeOpiniao("Maria", 25, null);

// test5
imprimeOpiniao("Maria", -25, "otimo");

// test6
imprimeOpiniao("Maria", 250, "otimo");

// test7
imprimeOpiniao("Maria", 25, "ruim");

// --------------------------

// test1
imprimeOpiniao("Maria", 25, "otimo");

// test2
imprimeOpiniao("Joao", 30, "bom");

// test1
imprimeOpiniao("Marcos", 18, "regular");